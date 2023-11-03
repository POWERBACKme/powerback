import React from 'react';
import { AlertProps } from '@Components/alerts/props';
import StyledAlert from '../../StyledAlert';
import { nextEnd } from '@Utils';
import './style.css';

const AlertCompliant = ({ show, setShow, timeout = 7000 }: AlertProps) => {
  return (
    <StyledAlert
      show={show}
      time={timeout}
      type={'update'}
      setShow={setShow}
      dismissible={true}
      icon={'person-check'}
      iconClass={'text-success'}
      alertClass={'updated-ok-alert'}
      heading={<>&nbsp;Thanks for your input!</>}
      message={
        'Your profile information is compliant with FEC regulations. Your donation limit per candidate is now $3,300 in this campaign cycle ending ' +
        nextEnd() +
        '.'
      }
    />
  );
};
export default React.memo(AlertCompliant);
