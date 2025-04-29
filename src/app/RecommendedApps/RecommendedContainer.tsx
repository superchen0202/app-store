import { FC, ReactNode } from 'react';
import useHorizontalScroll from '@/hooks/useHorizontalScroll';

const RecommendedContainer: FC<{ children: ReactNode; promptText?: ReactNode }> = ({ children, promptText }) => {
  const { scrollRef } = useHorizontalScroll();
  return (
    <>
      <div className="mb-10 flex h-[340px] flex-col px-5">
        <h1 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">推介</h1>
        {promptText}
        <div
          ref={scrollRef}
          className="scrollbar-hidden -mx-2 flex flex-row space-x-4 overflow-x-auto overflow-y-hidden scroll-smooth py-2"
        >
          {children}
        </div>
      </div>
      <hr className="mx-5 border-gray-300" />
    </>
  );
};
export default RecommendedContainer;
