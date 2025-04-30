import SearchBar from './app/SearchBar/SearchBar';
import { Suspense, lazy } from 'react';
const RecommendedList = lazy(() => import('./app/RecommendedApps/RecommendedList'));
const AppsList = lazy(() => import('./app/AppsList/AppsList'));

// https://itunes.apple.com/tw/lookup?id=[app_id]
const App = () => (
  <>
    <div className="fixed top-0 left-0 z-10 w-full">
      <div className="mx-auto max-w-[1280px] px-8">
        <SearchBar />
      </div>
    </div>

    <div className="mx-auto max-w-[1280px] px-8 pt-[64px]">
      <Suspense fallback={<div>載入推薦中...</div>}>
        <RecommendedList />
      </Suspense>
      <Suspense fallback={<div>載入 App 清單中...</div>}>
        <AppsList />
      </Suspense>
    </div>
  </>
);

export default App;
