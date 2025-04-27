import { FC } from 'react';
import { SimplifiedAppEntryType } from '../Item';

const RecommendedApp: FC<SimplifiedAppEntryType> = (props) => {
  const { name, imageSizes, category } = props;
  const [base, medium, large] = imageSizes;

  return (
    // title={summary.label}
    <div className="flex w-40 flex-shrink-0 flex-col items-center p-2">
      {/* Logo */}
      <div className="w-full">
        <picture>
          <source media="(min-width: 1920px)" srcSet={large} />
          <source media="(min-width: 1280px)" srcSet={medium} />
          <img src={base} alt={name} className="h-full w-full rounded-2xl object-cover" />
        </picture>
      </div>

      {/* down */}
      {/* 麻將明星3缺1, 遊戲 */}
      <div className="mt-3 flex w-full flex-col">
        <span className="font-bold break-words">{name}</span>
        <span className="text-gray-500">{category}</span>
      </div>
    </div>
  );
};

export default RecommendedApp;
