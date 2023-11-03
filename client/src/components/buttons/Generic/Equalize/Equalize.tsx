import React, {
  KeyboardEvent,
  MouseEventHandler,
  KeyboardEventHandler,
} from 'react';
import { ReactComponent as Svg } from '@Images/icon/distribute-vertical.svg';
import { handleKeyDown } from '@Utils';

const SIZE = 24;

type Props = {
  reset: MouseEventHandler<HTMLButtonElement> &
    KeyboardEventHandler<HTMLButtonElement>;
};

const Equalize = ({ reset }: Props) => (
  <Svg
    tabIndex={0}
    width={SIZE}
    height={SIZE}
    onClick={reset}
    className={'sliders--btn reset'}
    aria-label={'Equalize donation across all contingencies'}
    onKeyDown={(e: KeyboardEvent) => handleKeyDown(e, reset,)}
  />
);

export default React.memo(Equalize);
