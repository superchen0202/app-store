import { useEffect, useState } from 'react';
import axios from 'axios';
import { AppEntryType, FetchingStage, AppsFeedType } from '../app/Item';

type AppStageType = FetchingStage<AppEntryType[]>;

const initStage: AppStageType = {
  isLoading: undefined,
  data: undefined,
  error: undefined,
};

const useFetchApps = (param: 'all' | 'recommended') => {
  const url =
    param === 'all'
      ? 'https://itunes.apple.com/tw/rss/topfreeapplications/limit=100/json'
      : 'https://itunes.apple.com/tw/rss/topgrossingapplications/limit=10/json';

  const [appStage, setAppStage] = useState<AppStageType>(initStage);

  useEffect(() => {
    setAppStage((prev) => ({
      ...prev,
      isLoading: true,
    }));

    //TODO AbortController
    axios
      .get(url)
      .then((resp) => {
        setAppStage((prev) => ({
          ...prev,
          isLoading: false,
          data: (resp.data as AppsFeedType).feed.entry,
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
