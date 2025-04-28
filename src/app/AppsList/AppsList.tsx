import SkeletonOfAppsList from './SkeletonOfAppsList';
import Error from '@/components/Error';
import AppItem from './AppItem';
import FallBack from '@/components/FallBack';
import useFetchApps from '@/hooks/useFetchApps';
import { useAppSelector } from '@/redux/hooks';
import { searchAndFilter } from '@/utils/utils';
import PromptMatchedMessage from '@/components/PromptMatchedMessage';

const AppsList = () => {
  const { isLoading, data, error } = useFetchApps('all');
  const { keyword } = useAppSelector((state) => state.searchReducer);
  const filteredApps = searchAndFilter(data ?? [], keyword); // useMemo(() => searchAndFilter(data ?? [], keyword), [data, keyword]);

  if (isLoading) return <SkeletonOfAppsList skeletonNumbers={10} />;
  if (error) return <Error />;
  if (data)
    return (
      <div className="px-5">
        <div className="mt-2">
          <PromptMatchedMessage matchedAppsNumber={filteredApps.length} />
        </div>
        <div className="flex flex-col divide-y divide-gray-300">
          {filteredApps.map((app, index) => (
            <div key={app.id} className="hover-effect flex">
              <div className="my-auto mr-2 w-8 text-center">{index + 1}</div>
              <AppItem key={app.id} {...app} />
            </div>
          ))}
        </div>
      </div>
    );

  return <FallBack />;
};

export default AppsList;
