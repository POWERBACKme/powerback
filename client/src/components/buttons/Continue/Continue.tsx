import React, { MouseEventHandler } from 'react';
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
  ariaPressed?: boolean;
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
  ariaPressed,
  handleClick,
}: Props) => (
  <Button
    type={type}
    tabIndex={0}
    variant={variant}
    disabled={disabled}
    className={classProp}
    hidden={hidden ?? false}
    aria-pressed={ariaPressed}
    size={size ? size : isMobile ? 'sm' : 'lg'}
    onClick={
      handleClick as unknown as MouseEventHandler<HTMLButtonElement>
    }>
    {label}
  </Button>
);

export default React.memo(ContinueBtn);
