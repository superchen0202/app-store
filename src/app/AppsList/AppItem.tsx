import { FC } from 'react';
import { AppEntryType } from '../Item';

const AppItem: FC<AppEntryType> = (props) => {
  const {
    ['im:name']: name,
    ['im:image']: imagesSize,
    ['im:price']: price,
    category,
    // summary, ['im:contentType']: contentType, rights, title, link, id, ['im:artist']: artist, ['im:releaseDate']: releaseDate,
  } = props;

  const [base, medium, large] = imagesSize;

  return (
    // title={summary.label}
    <div className="flex w-full py-3">
      {/* Logo */}
      <div className="flex items-center">
        <picture>
          <source media="(min-width: 1920px)" srcSet={large.label} />
          <source media="(min-width: 1280px)" srcSet={medium.label} />
          <img src={base.label} alt={name.label} className="rounded-full" />
        </picture>
      </div>

      {/* Right */}
      {/* ChatGPT, 生產力工具  */}
      <div className="flex flex-col justify-between p-3">
        <span className="text-xl font-bold">{name.label}</span>
        <span>{category.attributes.label}</span>
        {/* TWD 99 */}
        <div className="flex justify-start">
          <span className="mr-3">{price.attributes.currency}</span>
          <span>{price.attributes.amount}</span>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default AppItem;
