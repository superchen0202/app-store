import { FC, useState } from 'react';
import { SimplifiedAppEntryType } from '../Item';

const AppItem: FC<SimplifiedAppEntryType> = (props) => {
  const { name, imageSizes, price, category } = props;
  const [base, medium, large] = imageSizes;
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    // title={summary}
    <div className="flex w-full py-3">
      {/* Logo */}
      <div className="flex flex-shrink-0 items-center">
        <div className="relative items-start">
          {!isLoaded && <div className="absolute inset-0 h-20 w-20 animate-pulse rounded-full bg-gray-300" />}
          <picture>
            <source media="(min-width: 1920px)" srcSet={large.src} />
            <source media="(min-width: 1280px)" srcSet={medium.src} />
            <img
              loading="lazy"
              src={base.src}
              width={base.height}
              height={base.height}
              alt={name}
              className={`h-20 w-20 rounded-full object-cover transition-opacity ${
                isLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              onLoad={() => setIsLoaded(true)}
            />
          </picture>
        </div>
      </div>

      {/* Right */}
      {/* ChatGPT, 生產力工具  */}
      <div className="flex flex-shrink-0 flex-col justify-between p-3">
        <span className="text-xl font-bold">{name}</span>
        <span>{category}</span>
        {/* TWD 99 */}
        <div className="flex justify-start">
          <span className="mr-3">{price.currency}</span>
          <span>{price.amount}</span>
        </div>
      </div>
    </div>
  );
};

export default AppItem;
