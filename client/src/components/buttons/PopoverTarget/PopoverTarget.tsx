import React, {
  ReactNode,
  MouseEvent,
  KeyboardEvent,
  MouseEventHandler,
  KeyboardEventHandler,
} from 'react';

type Props = {
  handleOverlay: MouseEventHandler<HTMLSpanElement> &
    KeyboardEventHandler<HTMLSpanElement>;
  children: ReactNode;
};

const PopoverTarget = ({ handleOverlay, ...props }: Props) => (
  <span
    tabIndex={0}
    className={'forgot-pass-link natural-link'}
    onClick={(e: MouseEvent) =>
      handleOverlay(e as MouseEvent<HTMLSpanElement>)
    }
    onKeyDown={(e: KeyboardEvent) =>
      handleOverlay(e as KeyboardEvent<HTMLSpanElement>)
    }>
    {props.children}
  </span>
);

export default React.memo(PopoverTarget);
