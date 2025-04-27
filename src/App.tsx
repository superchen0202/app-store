import SearchBar from './app/SearchBar/SearchBar';
import RecommendedList from './app/RecommendedApps/RecommendedList';
import AppsList from './app/AppsList/AppsList';
import { Counter } from './components/Counter';

// https://itunes.apple.com/tw/lookup?id=[app_id]

const App = () => (
  <>
    <Counter />
    <SearchBar />
    <RecommendedList />
    <AppsList />
  </>
);

export default App;
