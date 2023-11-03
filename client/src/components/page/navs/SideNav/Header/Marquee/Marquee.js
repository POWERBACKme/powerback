import React from 'react';
import { congressOrdinal, daysUntilElectionDay } from './fn';
import './style.css';

const Marquee = () => (
  <div id='side-nav-marquee'>
    <p>{congressOrdinal + ' Congressional Session'}</p>
    <p>
      <span className='day-counter'>{daysUntilElectionDay}</span> Days To
      Election Day
    </p>
  </div>
);

export default React.memo(Marquee);
