import React from 'react';
import { handleMessage } from './fn/handleMessage';
import StyledAlert from '../StyledAlert';
import { AlertProps } from '../props';
import { Props } from '@Types';
import './style.css';

const AlertDonated = ({ userData, donation }: Props & AlertProps) => (
  <StyledAlert
    message={handleMessage(userData, donation)}
    alertClass={'donation-ok-alert'}
    type={'success' as any}
    iconClass={'success'}
    dismissible={false}
    variant={'success'}
    show={true as any}
    setShow={() => {}}
    icon={'check-lg'}
  />
);

export default React.memo(AlertDonated);
