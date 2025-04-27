import { FC } from 'react';
import { AppEntryType } from '../Item';

const RecommendedApp: FC<AppEntryType> = (props) => {
  const {
    ['im:name']: name,
    ['im:image']: imagesSize,
    category,
    // summary, ['im:contentType']: contentType, ['im:price']: price,
    // rights, title, link, id, ['im:artist']: artist, ['im:releaseDate']: releaseDate,
  } = props;

  const [base, medium, large] = imagesSize;

  return (
    // title={summary.label}
    <div className="flex w-40 flex-shrink-0 flex-col items-center p-2">
      {/* Logo */}
      <div className="w-full">
        <picture>
          <source media="(min-width: 1920px)" srcSet={large.label} />
          <source media="(min-width: 1280px)" srcSet={medium.label} />
          <img src={base.label} alt={name.label} className="h-full w-full rounded-2xl object-cover" />
        </picture>
      </div>

      {/* down */}
      {/* 麻將明星3缺1, 遊戲 */}
      <div className="mt-3 flex w-full flex-col">
        <span className="font-bold break-words">{name.label}</span>
        <span className="text-gray-500">{category.attributes.label}</span>
      </div>
    </div>
  );
};

export default RecommendedApp;
