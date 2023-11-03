import React from 'react';
import { Constituency } from '@Components/displays';
import { Props } from '@Types';
import './style.css';

const Subheading = ({ state, district }: Props) => (
  <Constituency
    district={district as string}
    state={state as string}
    cls={'district'}
    headingSize={6}
  />
);

export default React.memo(Subheading);
