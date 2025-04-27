import Loading from '../../components/Loading';
import Error from '../../components/Error';
import RecommendedApp from './RecommendedApp';
import FallBack from '../../components/FallBack';
import useFetchApps from '../../hooks/useFetchApps';

const RecommendedList = () => {
  const { isLoading, data, error } = useFetchApps('recommended');

  if (isLoading) return <Loading />;
  if (error) return <Error />;
  if (data)
    return (
      <>
        <div className="mb-10 flex flex-col px-5">
          <h1 className="mb-4 text-2xl font-bold">推介</h1>
          <div className="scrollbar-hidden mx-1 flex flex-row overflow-x-auto overflow-y-hidden scroll-smooth">
            {data.map((app) => (
              <div className="hover-effect">
                <RecommendedApp key={app.id.attributes['im:id']} {...app} />
              </div>
            ))}
          </div>
        </div>
        <hr />
      </>
    );

  return <FallBack />;
};

export default RecommendedList;
