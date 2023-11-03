import React from 'react';
import './style.css';

const Constituency = ({
  cls,
  state,
  district,
  headingSize,
}: {
  cls: string;
  state: string;
  district: string;
  headingSize: number;
}) => (
  <span className={cls + ' h' + headingSize}>
    {(district !== 'At-Large' ? 'District ' : '') +
      district +
      ' of ' +
      state}
  </span>
);

export default React.memo(Constituency);
