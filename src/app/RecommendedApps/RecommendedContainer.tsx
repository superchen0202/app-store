import { FC, ReactNode } from 'react';

const RecommendedContainer: FC<{ children: ReactNode }> = ({ children }) => (
  <>
    <div className="mb-10 flex flex-col px-5">
      <h1 className="mb-4 text-2xl font-bold">推介</h1>
      <div className="scrollbar-hidden mx-1 flex flex-row overflow-x-auto overflow-y-hidden scroll-smooth">
        {children}
      </div>
    </div>
    <hr />
  </>
);

export default RecommendedContainer;
