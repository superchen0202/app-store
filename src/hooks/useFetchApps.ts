import { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import { FetchingStage, AppsFeedType } from '../app/Item';
import { simplifyAppEntry } from '@/utils/utils';
import { safeGetCache, safeSetCache } from '@/utils/utils';

const initStage: FetchingStage = {
  isLoading: undefined,
  data: undefined,
  error: undefined,
};

const useFetchApps = (param: 'all' | 'recommended') => {
  const url =
    param === 'all'
      ? 'https://itunes.apple.com/tw/rss/topfreeapplications/limit=100/json'
      : 'https://itunes.apple.com/tw/rss/topgrossingapplications/limit=10/json';

  const localStorageKey = `apps-${param}`;

  const [appStage, setAppStage] = useState<FetchingStage>(initStage);

  const fetchData = useCallback(
    async (url: string, controller: AbortController) => {
      setAppStage({ ...initStage, isLoading: true });

      try {
        const cached = safeGetCache(localStorageKey);

        if (cached) {
          setAppStage({ isLoading: false, data: cached, error: undefined });
          return;
        }

        // cache過期或沒cache，發出Request
        const resp = await axios.get(url, { signal: controller.signal });
        const simplifiedApps = (resp.data as AppsFeedType).feed.entry.map((rawApp) => simplifyAppEntry(rawApp));

        safeSetCache(localStorageKey, simplifiedApps);
        setAppStage({
          isLoading: false,
          data: simplifiedApps,
          error: undefined,
        });
      } catch (error) {
        setAppStage({
          isLoading: false,
          data: undefined,
          error: error as Error,
        });
      }
    },
    [localStorageKey],
  );

  useEffect(() => {
    const controller = new AbortController();
    fetchData(url, controller);

    return () => {
      controller.abort();
      setAppStage(initStage);
    };
  }, [fetchData, url]);

  return {
    isLoading: appStage?.isLoading,
    data: appStage?.data,
    error: appStage?.error,
  };
};

export default useFetchApps;
