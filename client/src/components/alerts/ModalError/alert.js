import React from 'react';
import StyledAlert from '../StyledAlert';
import './style.css';

const AlertUserEntryError = ({ msg, icon, hidden }) => (
  <StyledAlert
    icon={icon}
    type={'err'}
    message={msg}
    setShow={() => {}}
    variant={'danger'}
    show={{ err: !hidden }}
    alertClass={'error-alert'}
  />
);

export default React.memo(AlertUserEntryError);
