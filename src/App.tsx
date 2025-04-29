import SearchBar from './app/SearchBar/SearchBar';
import RecommendedList from './app/RecommendedApps/RecommendedList';
import AppsList from './app/AppsList/AppsList';

// https://itunes.apple.com/tw/lookup?id=[app_id]
const App = () => (
  <>
    <div className="fixed top-0 left-0 z-10 w-full">
      <div className="mx-auto max-w-[1280px] px-8">
        {/* SearchBar 的內容 */}
        <SearchBar />
      </div>
    </div>

    <div className="mx-auto max-w-[1280px] px-8 pt-[64px]">
      <RecommendedList />
      <AppsList />
    </div>
  </>
);

export default App;
