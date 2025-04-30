import { FC } from 'react';
import { SkeletonNumberPropsType } from '../../types/types';

const SkeletonOfAppsList: FC<SkeletonNumberPropsType> = (props) => (
  <>
    {Array.from({ length: props.skeletonNumbers }).map((_, index) => (
      <div key={index} className="flex w-full animate-pulse py-3">
        {/* Logo */}
        <div className="mr-2 flex w-8 items-center justify-center text-center">
          <div className="h-5 w-5" />
        </div>
        <div className="flex flex-shrink-0 items-center">
          <div className="h-20 w-20 rounded-full bg-gray-300" />
        </div>

        {/* Right */}
        {/* ChatGPT, 生產力工具 */}
        <div className="flex flex-grow flex-col justify-between p-3">
          {/* Title */}
          <div className="mb-2 h-5 w-40 rounded bg-gray-300" />

          {/* Category */}
          <div className="mb-4 h-4 w-24 rounded bg-gray-300" />

          {/* Price */}
          <div className="flex">
            <div className="mr-3 h-4 w-10 rounded bg-gray-300" />
            <div className="h-4 w-8 rounded bg-gray-300" />
          </div>
        </div>
      </div>
    ))}
  </>
);

export default SkeletonOfAppsList;
