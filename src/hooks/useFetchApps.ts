import { useEffect, useState } from 'react';
import axios from 'axios';
import { FetchingStage, AppsFeedType } from '../app/Item';
import { simplifyAppEntry } from '@/utils/simplifyAppEntry';

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

  const [appStage, setAppStage] = useState<FetchingStage>(initStage);

  useEffect(() => {
    setAppStage((prev) => ({
      ...prev,
      isLoading: true,
    }));

    //TODO AbortController
    axios
      .get(url)
      .then((resp) => {
        const simplifiedApps = (resp.data as AppsFeedType).feed.entry.map((rawApp) => simplifyAppEntry(rawApp));
        setAppStage((prev) => ({
          ...prev,
          isLoading: false,
          data: simplifiedApps,
        }));
      })
      .catch((error: Error) => {
        setAppStage((prev) => ({
          ...prev,
          isLoading: false,
          error: error,
        }));
      });

    return () => {
      setAppStage(initStage);
    };
  }, [url]);

  return {
    isLoading: appStage?.isLoading,
    data: appStage?.data,
    error: appStage?.error,
  };
};

export default useFetchApps;
