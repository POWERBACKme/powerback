import React from 'react';
import Nav from 'react-bootstrap/esm/Nav';
import { dollarsAndCents } from '@Utils';
import { Props } from '@Types';
import './style.css';

const TabFlow = ({ tabKey, donation }: Props) => (
  <Nav variant='pills' className='flex-row tab-flow'>
    <Nav.Item>
      <Nav.Link eventKey='pol-donation'>
        {'1. Celebration (' +
          (donation && dollarsAndCents(donation)) +
          ')'}
      </Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey='payment'>2. Payment</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link disabled={tabKey !== 'tips'} eventKey='tips'>
        3. Confirm
      </Nav.Link>
    </Nav.Item>
  </Nav>
);

export default React.memo(TabFlow);
