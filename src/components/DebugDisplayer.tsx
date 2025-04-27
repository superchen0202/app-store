import { FC } from 'react';

const DebugDisplayer: FC<{ value: Object }> = (props) => <pre>{JSON.stringify(props.value, null, 2)}</pre>;

export default DebugDisplayer;
