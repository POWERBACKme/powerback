import React, {
  Dispatch,
  useState,
  ChangeEvent,
  SetStateAction,
} from 'react';
import { ShowAlert, ShowOverlay } from '@Interfaces';
import { UsernameField } from '@Components/forms';
import { SubmitBtn } from '@Components/buttons';
import Form from 'react-bootstrap/esm/Form';
import { change, submit } from './handlers';
import API from '@API';
import './style.css';

type Props = {
  email: string;
  validated: boolean;
  setEmail: Dispatch<SetStateAction<string>>;
  setAlert: Dispatch<SetStateAction<ShowAlert>>;
  setValidated: Dispatch<SetStateAction<boolean>>;
  setShowOverlay: Dispatch<SetStateAction<ShowOverlay>>;
};

const ForgotPasswordForm = ({
  setShowOverlay,
  setValidated,
  validated,
  setAlert,
  setEmail,
  email,
}: Props) => {
  const [feedback, setFeedback] = useState<string>('');
  return (
    <Form
      noValidate
      onSubmit={(e) => {
        submit(
          e,
          email,
          setAlert,
          setFeedback,
          setValidated,
          setShowOverlay,
          API.forgotPassword
        );
      }}
      validated={validated}
      id={'forgot-pass-form'}
      className={'special-invalid'}>
      <div id={'forgot-password-input'}>
        <UsernameField
          placeholder={''}
          label={undefined}
          value={undefined}
          feedback={feedback}
          hideFeedback={undefined}
          autoComplete={'username'}
          onChange={(e: ChangeEvent) => change(e, setValidated, setEmail)}
        />
      </div>
      <SubmitBtn
        size={'sm'}
        hidden={undefined}
        value={'Send Link'}
        variant={undefined}
        classProp={undefined}
        btnId={'forgot-password--submit-btn'}
      />
    </Form>
  );
};

export default React.memo(ForgotPasswordForm);
