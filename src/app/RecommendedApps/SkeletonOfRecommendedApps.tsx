import { FC } from 'react';
import { SkeletonNumberPropsType } from '../../types/types';

const SkeletonOfRecommendedApps: FC<SkeletonNumberPropsType> = (props) => (
  <>
    {Array.from({ length: props.skeletonNumbers }).map((_, index) => (
      <div key={index} className="flex w-40 flex-shrink-0 animate-pulse flex-col items-center p-2">
        {/* Logo */}
        <div className="w-full">
          {/* 用固定高度的灰色塊模擬圖片 */}
          <div className="h-32 w-full rounded-2xl bg-gray-300" />
        </div>

        {/* down */}
        {/* 麻將明星3缺1, 遊戲 */}
        <div className="mt-3 flex w-full flex-col space-y-2">
          {/* 模擬 App 名稱 */}
          <div className="h-5 w-3/4 rounded bg-gray-300" />
          {/* 模擬 Category */}
          <div className="h-4 w-1/2 rounded bg-gray-300" />
        </div>
      </div>
    ))}
  </>
);

export default SkeletonOfRecommendedApps;
