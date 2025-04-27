import SkeletonOfAppsList from './SkeletonOfAppsList';
import Error from '@/components/Error';
import AppItem from './AppItem';
import FallBack from '@/components/FallBack';
import useFetchApps from '@/hooks/useFetchApps';

const AppsList = () => {
  const { isLoading, data, error } = useFetchApps('all');

  if (isLoading) return <SkeletonOfAppsList skeletonNumbers={10} />;
  if (error) return <Error />;
  if (data)
    return (
      <>
        {data.map((app, index) => (
          // TODO
          // ([99].includes(index) || index < 10) &&
          <div className="hover-effect flex">
            <div className="my-auto mr-2 w-8 text-center">{index + 1}</div>
            <AppItem key={app.id.attributes['im:id']} {...app} />
          </div>
        ))}
      </>
    );

  return <FallBack />;
};

export default AppsList;
