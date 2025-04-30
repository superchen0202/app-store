import { FC } from 'react';
import DebugDisplayer from './DebugDisplayer';

const Error: FC<{ error: Error }> = ({ error }) => (
  <>
    Error X_X
    <DebugDisplayer value={error} />
  </>
);

export default Error;
