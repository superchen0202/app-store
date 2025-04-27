import { FC } from 'react';
import { SimplifiedAppEntryType } from '../Item';
import DebugDisplayer from '@/components/DebugDisplayer';

const AppItem: FC<SimplifiedAppEntryType> = (props) => {
  const { name, imageSizes, price, category } = props;
  const [base, medium, large] = imageSizes;

  return (
    // title={summary}
    <div className="flex w-full py-3">
      {/* Logo */}
      <div className="flex items-center">
        <picture>
          <source media="(min-width: 1920px)" srcSet={large} />
          <source media="(min-width: 1280px)" srcSet={medium} />
          <img src={base} alt={name} className="rounded-full" />
        </picture>
      </div>

      {/* Right */}
      {/* ChatGPT, 生產力工具  */}
      <div className="flex flex-col justify-between p-3">
        <span className="text-xl font-bold">{name}</span>
        <span>{category}</span>
        {/* TWD 99 */}
        <div className="flex justify-start">
          <span className="mr-3">{price.currency}</span>
          <span>{price.amount}</span>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default AppItem;
