import React, { KeyboardEventHandler, MouseEventHandler } from 'react';
import { ButtonVariant } from 'react-bootstrap/esm/types';
import Button from 'react-bootstrap/esm/Button';
import { UserEvent } from 'types';
import './style.css';

type Props = {
  handleClick: (e: UserEvent) => void;
  type?: 'button' | 'reset' | 'submit';
  classProp?: string | undefined;
  size?: 'sm' | 'lg' | undefined;
  variant?: ButtonVariant;
  disabled?: boolean;
  isMobile?: boolean;
  hidden?: boolean;
  label: string;
};

const ContinueBtn = ({
  size = 'lg',
  type = 'button',
  label,
  hidden,
  variant,
  isMobile,
  disabled,
  classProp = 'button--continue',
  handleClick,
}: Props) => (
  <Button
    type={type}
    tabIndex={0}
    variant={variant}
    disabled={disabled}
    className={classProp}
    hidden={hidden ?? false}
    size={size ? size : isMobile ? 'sm' : 'lg'}
    onClick={
      handleClick as unknown as MouseEventHandler<HTMLButtonElement>
    }
    onKeyDown={
      handleClick as unknown as KeyboardEventHandler<HTMLButtonElement>
    }>
    {label}
  </Button>
);

export default React.memo(ContinueBtn);
