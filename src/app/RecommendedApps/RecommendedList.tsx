import SkeletonOfRecommendedApps from './SkeletonOfRecommendedApps';
import Error from '@/components/Error';
import RecommendedContainer from './RecommendedContainer';
import RecommendedApp from './RecommendedApp';
import FallBack from '@/components/FallBack';
import useFetchApps from '@/hooks/useFetchApps';
import { useAppSelector } from '@/redux/hooks';
import { searchAndFilter } from '@/utils/utils';
import PromptMatchedMessage from '@/components/PromptMatchedMessage';

const RecommendedList = () => {
  const { isLoading, data, error } = useFetchApps('recommended');
  const { keyword } = useAppSelector((state) => state.searchReducer);
  const filteredRecommendedApps = searchAndFilter(data ?? [], keyword); // useMemo(() => searchAndFilter(data ?? [], keyword), [data, keyword]);

  if (isLoading)
    return (
      <RecommendedContainer>
        <SkeletonOfRecommendedApps skeletonNumbers={10} />
      </RecommendedContainer>
    );

  if (error) return <Error />;

  if (data)
    return (
      <>
        <RecommendedContainer promptText={<PromptMatchedMessage matchedAppsNumber={filteredRecommendedApps.length} />}>
          <>
            {filteredRecommendedApps.map((app) => (
              <RecommendedApp key={app.id} {...app} />
            ))}
            <hr />
          </>
        </RecommendedContainer>
      </>
    );

  return <FallBack />;
};

export default RecommendedList;
