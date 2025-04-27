import SkeletonOfRecommendedApps from './SkeletonOfRecommendedApps';
import Error from '@/components/Error';
import RecommendedContainer from './RecommendedContainer';
import RecommendedApp from './RecommendedApp';
import FallBack from '@/components/FallBack';
import useFetchApps from '@/hooks/useFetchApps';

const RecommendedList = () => {
  const { isLoading, data, error } = useFetchApps('recommended');

  if (isLoading)
    return (
      <RecommendedContainer>
        <SkeletonOfRecommendedApps skeletonNumbers={10} />
      </RecommendedContainer>
    );
  if (error) return <Error />;
  if (data)
    return (
      <RecommendedContainer>
        <>
          {data.map((app) => (
            <div className="hover-effect">
              <RecommendedApp key={app.id} {...app} />
            </div>
          ))}
          <hr />
        </>
      </RecommendedContainer>
    );

  return <FallBack />;
};

export default RecommendedList;
