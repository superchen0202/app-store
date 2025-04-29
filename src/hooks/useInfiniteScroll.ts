import { useState, useEffect, useCallback } from 'react';

const DEBUG_MODE = true;
const DEBUG_DELAY_MS = 0;

const useInfiniteScroll = (filteredAppsLength: number, pagesGroupNumber: number) => {
  const [visibleCount, setVisibleCount] = useState(pagesGroupNumber);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [isEndReached, setIsEndReached] = useState(false);

  const loadMoreItems = useCallback(() => {
    if (visibleCount >= filteredAppsLength) return;
    setIsLoadingMore(true);

    const addItems = () => {
      setVisibleCount((prev) => {
        const newCount = Math.min(prev + pagesGroupNumber, filteredAppsLength);
        if (newCount >= filteredAppsLength) setIsEndReached(true);
        return newCount;
      });
      setIsLoadingMore(false);
    };

    if (DEBUG_MODE) setTimeout(addItems, DEBUG_DELAY_MS);
    else addItems();
  }, [visibleCount, filteredAppsLength, pagesGroupNumber]);

  const scrollHandler = useCallback(() => {
    const scrollPosition = window.innerHeight + window.scrollY;
    const threshold = document.body.offsetHeight - window.innerHeight * 0.5;
    if (isLoadingMore) return;
    if (scrollPosition < threshold) return;
    loadMoreItems();
  }, [isLoadingMore, loadMoreItems]);

  useEffect(() => {
    window.addEventListener('scroll', scrollHandler);
    scrollHandler();
    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  }, [scrollHandler]);

  return {
    visibleCount,
    isLoadingMore,
    isEndReached,
  };
};

export default useInfiniteScroll;
