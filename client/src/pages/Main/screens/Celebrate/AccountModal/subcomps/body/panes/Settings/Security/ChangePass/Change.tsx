import React, {
  ChangeEvent,
  useCallback,
  FormEvent,
  useState,
  useMemo,
} from 'react';
import { passChange, passFormChange } from '@Utils';
import { PasswordField } from '@Components/forms';
import Spinner from 'react-bootstrap/esm/Spinner';
import { SubmitBtn } from '@Components/buttons';
import Stack from 'react-bootstrap/esm/Stack';
import Form from 'react-bootstrap/esm/Form';
import { UserData } from '@Interfaces';
import { ChangeProps } from './types';
import { useSpinner } from '@Hooks';
import { Props } from '@Types';
import './style.css';

const ChangePassword = ({
  setSecureUserPassFeedback,
  closeSecurityCurtain,
  switchToErrorScreen,
  setPasswordChanged,
  setPassFormObject,
  passwordChanged,
  passFormObject,
  isShortMobile,
  cnpValue,
  npValue,
  user,
}: Props & ChangeProps) => {
  const [passFormValidated, setPassFormValidated] = useState(false); // validation of change pw
  const [
    changingPassword,
    {
      start: startChangingPasswordSpinner,
      stop: stopChangingPasswordSpinner,
    },
  ] = useSpinner(); // input state of change pw form

  const handleChange = useCallback(
      (e: ChangeEvent) =>
        passFormChange(
          e,
          setPassFormObject,
          setPassFormValidated,
          setSecureUserPassFeedback
        ),
      [setSecureUserPassFeedback, setPassFormValidated, setPassFormObject]
    ),
    handleSubmit = useCallback(
      (e: FormEvent<HTMLFormElement>) =>
        passChange(
          e,
          user as UserData,
          passFormObject,
          setPassFormObject,
          setPasswordChanged,
          switchToErrorScreen,
          closeSecurityCurtain
        ),
      [
        closeSecurityCurtain,
        switchToErrorScreen,
        setPasswordChanged,
        setPassFormObject,
        passFormObject,
        user,
      ]
    ),
    doSubmit = useCallback(
      (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        e.stopPropagation();
        startChangingPasswordSpinner();
        handleSubmit(e);
      },
      [handleSubmit, startChangingPasswordSpinner]
    );

  const [prevPasswordChanged, setPrevPasswordChanged] =
    useState(passwordChanged);
  if (prevPasswordChanged !== passwordChanged) {
    setPrevPasswordChanged(passwordChanged);
    if (passwordChanged) {
      stopChangingPasswordSpinner();
    }
  }

  // logical conditions:
  const inputsAreNotAllFilled = useMemo(() => {
      return npValue === '' || cnpValue === '';
    }, [npValue, cnpValue]),
    inputsAreTheSame = useMemo(() => {
      return npValue !== cnpValue;
    }, [npValue, cnpValue]),
    inputNotNull = useMemo(() => {
      return npValue && cnpValue;
    }, [npValue, cnpValue]),
    // ...result:
    hideButton = useMemo(() => {
      return (inputNotNull && inputsAreTheSame) || inputsAreNotAllFilled;
    }, [inputNotNull, inputsAreTheSame, inputsAreNotAllFilled]);

  return passwordChanged ? (
    <div className='password-changed text-uppercase mt-5'>
      password changed
    </div>
  ) : (
    <Form
      noValidate
      onSubmit={doSubmit}
      validated={passFormValidated}
      className={'change-password'}>
      <Stack
        className={'mt-lg-3 mt-1 mb-lg-3'}
        direction={'vertical'}
        gap={2}>
        <PasswordField
          value={npValue}
          isGenerating={true}
          autoComplete={'off'}
          label={'new password'}
          onChange={handleChange}
          controlId={'new-password'}
          controlName={'newPassword'}
        />
        <PasswordField
          controlId={'confirm-new-password'}
          controlName={'confirmNewPassword'}
          label={'confirm new password'}
          pattern={`^${npValue}$`}
          onChange={handleChange}
          autoComplete={'off'}
          value={cnpValue}
        />
      </Stack>
      {changingPassword ? (
        <Spinner
          role={'status'}
          animation={'border'}
          className={'change-password'}>
          <span className={'visually-hidden'}>Changing Password...</span>
        </Spinner>
      ) : (
        <SubmitBtn
          size={isShortMobile ? 'sm' : 'lg'}
          btnId={'change-password-btn'}
          value={'Set New Password'}
          hidden={hideButton}
          classProp={''}
          variant={''}
        />
      )}
    </Form>
  );
};

export default React.memo(ChangePassword);
