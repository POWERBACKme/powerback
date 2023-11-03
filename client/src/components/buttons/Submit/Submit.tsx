import React from 'react';
import Button from 'react-bootstrap/esm/Button';
import './style.css';

type Props = {
  classProp: string | undefined;
  size: 'sm' | 'lg' | undefined;
  hidden: boolean | undefined;
  variant: string | undefined;
  btnId: string | undefined;
  value: string;
};

const SubmitBtn = ({
  hidden = false,
  size = 'lg',
  classProp,
  variant,
  btnId,
  value,
}: Props) => (
  <Button
    id={btnId}
    size={size}
    hidden={hidden}
    type={'submit'}
    variant={variant}
    className={classProp && classProp.length ? classProp : 'submit-btn'}>
    <>{value}</>
  </Button>
);

export default React.memo(SubmitBtn);
