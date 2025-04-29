import { useEffect, useRef } from 'react';

const useHorizontalScroll = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let ticking = false;

    const wheelHandler = (event: WheelEvent) => {
      if (event.deltaY === 0) return; // 只攔截垂直滾動
      event.preventDefault(); // 阻止預設上下捲動

      if (!ticking) {
        window.requestAnimationFrame(() => {
          container.scrollLeft += event.deltaY * 5;
          ticking = false;
        });
        ticking = true;
      }

      container.scrollLeft += event.deltaY; // 將垂直滾動改成橫向滾動
    };

    container.addEventListener('wheel', wheelHandler, { passive: false });

    return () => {
      container.removeEventListener('wheel', wheelHandler);
    };
  }, []);

  return {
    scrollRef,
  };
};

export default useHorizontalScroll;
