import { FC, ReactNode } from 'react';

const RecommendedContainer: FC<{ children: ReactNode; promptText?: ReactNode }> = ({ children, promptText }) => (
  <>
    <div className="mb-10 flex h-[340px] flex-col px-5">
      <h1 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">推介</h1>
      {promptText}

      <div className="scrollbar-hidden -mx-2 flex flex-row space-x-4 overflow-x-auto overflow-y-hidden scroll-smooth">
        {children}
      </div>
    </div>
    <hr className="mx-5 border-gray-300" />
  </>
);

export default RecommendedContainer;
