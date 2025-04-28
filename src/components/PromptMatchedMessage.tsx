import { FC } from 'react';
import { useAppSelector } from '@/redux/hooks';

const PromptMatchedMessage: FC<{ matchedAppsNumber: number }> = (props) => {
  const { keyword } = useAppSelector((state) => state.searchReducer);

  if (keyword.length === 0) return <div className="min-h-[24px] text-sm font-medium text-gray-500"></div>;

  return (
    <div className="min-h-[24px] text-sm font-medium text-gray-500">
      {props.matchedAppsNumber === 0
        ? 'No matched apps!'
        : props.matchedAppsNumber > 1
          ? `${props.matchedAppsNumber} apps matched!`
          : `${props.matchedAppsNumber} app matched!`}
    </div>
  );
};

export default PromptMatchedMessage;
