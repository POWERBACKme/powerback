import React, { FormEventHandler, ChangeEvent } from 'react';
import { PasswordField, UsernameField } from '../inputs';
import { SubmitBtn } from '@Components/buttons';
import Form from 'react-bootstrap/esm/Form';
import './style.css';

type Props = {
  value: string;
  uValue: string;
  pValue: string;
  uLabel: string;
  pLabel: string;
  uFeedback: string;
  pFeedback: string;
  hideFeedback: boolean;
  uAutoComplete: string;
  pAutoComplete: string;
  userFormValidated: boolean;
  handleChange: (e: ChangeEvent) => void;
  handleSubmit: FormEventHandler<HTMLFormElement>;
};
// simple username/password form with these two input elements ONLY
const UserPassForm = ({
  value,
  uValue,
  pValue,
  uLabel,
  pLabel,
  uFeedback,
  pFeedback,
  handleChange,
  handleSubmit,
  hideFeedback,
  uAutoComplete,
  pAutoComplete,
  userFormValidated,
}: Props) => (
  <Form
    noValidate
    onSubmit={handleSubmit}
    validated={userFormValidated}
    className={'userpass-form input--translucent'}>
    <UsernameField
      value={uValue}
      label={uLabel}
      placeholder={''}
      feedback={uFeedback}
      onChange={handleChange}
      hideFeedback={hideFeedback}
      autoComplete={uAutoComplete}
    />
    <PasswordField
      value={pValue}
      label={pLabel}
      feedback={pFeedback}
      onChange={handleChange}
      autoComplete={pAutoComplete}
    />
    <SubmitBtn
      value={value}
      size={undefined}
      btnId={undefined}
      hidden={undefined}
      variant={undefined}
      classProp={undefined}
    />
  </Form>
);

export default React.memo(UserPassForm);
