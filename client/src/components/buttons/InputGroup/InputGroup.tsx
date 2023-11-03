import React, { MouseEvent, KeyboardEvent } from 'react';
import InputGroup from 'react-bootstrap/esm/InputGroup';
import { handleKeyDown } from '@Utils';
import './style.css';

type Props = {
  arg?: any;
  cls: string;
  ico: string;
  tab?: number;
  title: string;
  cb?: () => void;
  handleKeyDown?: MouseEvent<HTMLSpanElement, MouseEvent> &
    KeyboardEvent<KeyboardEvent>;
};

const InputGroupBtn = ({ arg, cls, ico, title, tab = 0, cb }: Props) => (
  <InputGroup.Text
    title={title}
    className={cls}
    tabIndex={tab ? -1 : tab}
    onClick={(e: MouseEvent) => handleKeyDown(e, cb, arg)}
    onKeyDown={(e: KeyboardEvent) => handleKeyDown(e, cb, arg)}>
    <i className={`bi bi-${ico}`} />
  </InputGroup.Text>
);

export default React.memo(InputGroupBtn);
