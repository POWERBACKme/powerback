import React, { MouseEventHandler } from 'react';
import Button from 'react-bootstrap/esm/Button';
import './style.css';

type Props = {
  handleClick: MouseEventHandler;
};

const AgreeBtn = ({ handleClick }: Props) => (
  <Button
    className={'agree-btn mb-lg-1'}
    variant={'outline-info'}
    onClick={handleClick}
    type={'button'}
    size={'lg'}>
    Agree
  </Button>
);

export default React.memo(AgreeBtn);
