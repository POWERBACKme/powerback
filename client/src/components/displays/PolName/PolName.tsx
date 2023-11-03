import React from 'react';
import './style.css';

type Props = {
  cls: string;
  name?: string;
  headingSize: number;
};

const PolName = ({ cls, name, headingSize }: Props) => (
  <span className={cls + ' h' + headingSize}>{name}</span>
);

export default React.memo(PolName);
