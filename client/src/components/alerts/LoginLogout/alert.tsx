import React, { useMemo } from 'react';
import StyledAlert from '../StyledAlert';
import { ShowAlert } from '@Interfaces';
import { AlertProps } from '../props';
import './style.css';

type Props = {
  loggedIn: boolean;
  timeout: number;
};

const AlertLoginLogout = ({
  show,
  setShow,
  timeout,
  loggedIn,
}: AlertProps & Props) => {
  const cls = 'loginlogout-ok-alert ';
  const alertProps = useMemo(() => {
    return {
      variant: loggedIn ? 'success' : 'info',
      alertClass: cls + (loggedIn ? 'in' : 'out'),
      iconClass: loggedIn ? 'success' : 'secondary',
      icon: 'person-' + (loggedIn ? 'check' : 'dash'),
      message: (
        <>
          &nbsp;&nbsp;&nbsp;
          {loggedIn ? 'Login successful.' : 'Logged out.'}
        </>
      ),
      type: (loggedIn ? 'login' : 'logout') as keyof ShowAlert,
    };
  }, [loggedIn]);

  return (
    <StyledAlert
      show={show}
      time={80000}
      {...alertProps}
      setShow={setShow}
      dismissible={true}
    />
  );
};

export default React.memo(AlertLoginLogout);
