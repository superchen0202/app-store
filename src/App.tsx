import SearchBar from './app/SearchBar/SearchBar';
import RecommendedList from './app/RecommendedApps/RecommendedList';
import AppsList from './app/AppsList/AppsList';

// https://itunes.apple.com/tw/lookup?id=[app_id]

const App = () => (
  <>
    <SearchBar />
    <RecommendedList />
    <AppsList />
  </>
);

export default App;
