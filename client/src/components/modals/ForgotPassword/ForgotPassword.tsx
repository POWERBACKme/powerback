import React, {
  Dispatch,
  useState,
  useCallback,
  SetStateAction,
} from 'react';
import CloseButton from 'react-bootstrap/esm/CloseButton';
import { ShowOverlay, ShowAlert } from '@Interfaces';
import Overlay from 'react-bootstrap/esm/Overlay';
import Popover from 'react-bootstrap/esm/Popover';
import Stack from 'react-bootstrap/esm/Stack';
import ForgotPasswordForm from './form';
import './style.css';

type Props = {
  setShowAlert: Dispatch<SetStateAction<ShowAlert>>;
  setEmail: Dispatch<SetStateAction<string>>;
  setShow: Dispatch<SetStateAction<ShowOverlay>>;
  target: HTMLSpanElement | null;
  email: string;
  show: boolean;
};

const ForgotPasswordOverlay = ({
  setShowAlert,
  setEmail,
  setShow,
  target,
  email,
  show,
}: Props) => {
  const [validated, setValidated] = useState(false),
    handleClose = useCallback(
      () => setShow((s: ShowOverlay) => ({ ...s, resetPass: false })),
      [setShow]
    ),
    handleExit = useCallback(() => setValidated(false), []);

  return (
    <Overlay
      show={show}
      target={target}
      placement={'top'}
      onExiting={handleExit}>
      <Popover id='forgot-pass-pop'>
        <Popover.Header>
          <Stack direction='horizontal'>
            Request to change password
            <CloseButton
              onClick={handleClose}
              aria-label={'hide forgot password prompt'}
            />
          </Stack>
        </Popover.Header>
        <Popover.Body>
          <div className='form-prompt'>
            Enter your account's Profile email.
            <br />
            (This may be same as your username)
          </div>
          <ForgotPasswordForm
            email={email}
            setEmail={setEmail}
            validated={validated}
            setAlert={setShowAlert}
            setShowOverlay={setShow}
            setValidated={setValidated}
          />
        </Popover.Body>
      </Popover>
    </Overlay>
  );
};

export default React.memo(ForgotPasswordOverlay);
