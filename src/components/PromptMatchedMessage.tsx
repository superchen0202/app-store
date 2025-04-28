import { FC } from 'react';
import { useAppSelector } from '@/redux/hooks';

const PromptMatchedMessage: FC<{ matchedAppsNumber: number }> = (props) => {
  const { keyword } = useAppSelector((state) => state.searchReducer);
  if (keyword.length === 0) return;
  return props.matchedAppsNumber !== 0 ? <p>{props.matchedAppsNumber} apps matched</p> : <p>No Matched Apps</p>;
};

export default PromptMatchedMessage;
