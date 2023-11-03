import React from 'react';
import { Constituency } from '@Components/displays';
import './style.css';

const Subtitle = ({ donee }) => {
  if (!donee) return <></>;
  if (!donee) return <></>;
  return Object.keys(donee).length ? (
    <Constituency
      headingSize={'4'}
      {...donee.roles[0]}
      cls={'vertical-timeline-element-subtitle'}
    />
  ) : (
    <></>
  );
};
export default React.memo(Subtitle);
