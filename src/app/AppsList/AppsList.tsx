import SkeletonOfAppsList from './SkeletonOfAppsList';
import Error from '@/components/Error';
import AppItem from './AppItem';
import FallBack from '@/components/FallBack';
import LoadingSpinner from '@/components/LoadingSpinner';
import useFetchApps from '@/hooks/useFetchApps';
import { useAppSelector } from '@/redux/hooks';
import { searchAndFilter } from '@/utils/utils';
import PromptMatchedMessage from '@/components/PromptMatchedMessage';
import { useMemo } from 'react';
import useInfiniteScroll from '@/hooks/useInfiniteScroll';

const pagesGroupNumber = 10;

const AppsList = () => {
  const { isLoading, data, error } = useFetchApps('all');

  const { keyword } = useAppSelector((state) => state.searchReducer);
  const filteredApps = useMemo(() => searchAndFilter(data ?? [], keyword), [data, keyword]);
  const { visibleCount, isLoadingMore, isEndReached } = useInfiniteScroll(filteredApps.length, pagesGroupNumber);

  if (isLoading) return <SkeletonOfAppsList skeletonNumbers={pagesGroupNumber} />;
  if (error) return <Error />;
  if (data)
    return (
      <div className="px-5">
        <div className="mt-2 mb-4">
          <PromptMatchedMessage matchedAppsNumber={filteredApps.length} />
        </div>

        <div className="flex flex-col divide-y divide-gray-300">
          {filteredApps.slice(0, visibleCount).map((app, index) => (
            <div key={app.id} className="hover-effect flex">
              <div className="my-auto mr-2 w-8 text-center">{index + 1}</div>
              <AppItem {...app} />
            </div>
          ))}

          {isLoadingMore && <LoadingSpinner />}
          {isEndReached && <div className="py-4 text-center text-sm text-gray-400">已載入全部內容</div>}
        </div>
      </div>
    );

  return <FallBack />;
};

export default AppsList;
