import React, {
  useMemo,
  Dispatch,
  useState,
  ChangeEvent,
  useCallback,
  SetStateAction,
  FormEventHandler,
  useEffect,
} from 'react';
import { UsernameField, PasswordField } from '@Components/forms';
import FormCheckLabel from 'react-bootstrap/esm/FormCheckLabel';
import Placeholder from 'react-bootstrap/esm/Placeholder';
import { ButtonErrorSwapper } from '@Components/displays';
import { ShowModal, UserEntryError } from '@Interfaces';
import FormGroup from 'react-bootstrap/esm/FormGroup';
import { handleOverlay, handleFeedback } from './fn';
import { PopoverTarget } from '@Components/buttons';
import { ALERT_TIMEOUT, FEEDBACK } from '../tuples';
import { ToggleSwitch } from '@Components/forms';
import Button from 'react-bootstrap/esm/Button';
import { createBrowserHistory } from 'history';
import Stack from 'react-bootstrap/esm/Stack';
import Form from 'react-bootstrap/esm/Form';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import { handleKeyDown } from '@Utils';
import { Props } from '@Types';
import './style.css';

const LoginForm = ({
  handleUserFormChange,
  isPendingValidation,
  handleLastFormPath,
  userFormValidated,
  setOverlayTarget,
  handleUserEntry,
  setShowOverlay,
  userEntryError,
  userEntryForm,
  swapFormPath,
  checkedTerms,
  setShowModal,
  swapToButton,
  showOverlay,
  isDesktop,
  loggingIn,
  formPath,
  pValue,
  uValue,
  BTNS,
  ...props
}: Props) => {
  const handleSwap = useCallback(() => {
    const swapper = setTimeout(
      () => (swapToButton as () => void)(),
      ALERT_TIMEOUT.btnErrSwapper
    );
    return () => clearTimeout(swapper);
  }, [swapToButton]);

  const [prevShowError, setPrevShowError] = useState(
    (userEntryError as UserEntryError).showError
  );
  if (prevShowError !== (userEntryError as UserEntryError).showError) {
    setPrevShowError((userEntryError as UserEntryError).showError);
    if ((userEntryError as UserEntryError).showError) handleSwap();
  }

  const handleSubmitBtnFace = useCallback(() => {
    if (loggingIn && !(userEntryError as UserEntryError).showError) {
      return (
        <Placeholder
          as={Button}
          animation={'wave'}
          className={'continue-btn-placeholder'}>
          <i className={'bi bi-hourglass-split fs-5'} />
        </Placeholder>
      );
    } else
      return (
        <ButtonErrorSwapper
          value={
            (formPath as unknown as string).length
              ? (formPath as unknown as string)
              : ('Sign In' as unknown as string)
          }
          {...(userEntryError as UserEntryError)}
        />
      );
  }, [userEntryError, loggingIn, formPath]);

  const forceShowTerms = useCallback(() => {
    if (checkedTerms) {
      return;
    } else
      (setShowModal as Dispatch<SetStateAction<ShowModal>>)((s) => ({
        ...s,
        terms: true,
      }));
  }, [checkedTerms, setShowModal]);

  let history = createBrowserHistory();

  const swapMobileBtnHistory = useCallback(() => {
    history.replace('/', {
      mobileBtn: formPath === 'Sign Up' ? 'Sign In' : 'Sign Up',
    });
  }, [history, formPath]);

  const handleSwapForm = useCallback(() => {
    swapMobileBtnHistory();
    (swapFormPath as () => void)();
  }, [swapFormPath, swapMobileBtnHistory]);

  useEffect(
    () => (handleLastFormPath as () => void)(),
    [history, handleLastFormPath]
  );

  const toggleSelectionClass = useMemo(() => {
    return ['', 'login-toggle-selection'];
  }, []);

  const isSignupForm = formPath === 'Sign Up';

  return (
    <>
      <Col lg={7}>
        <Form
          noValidate
          id={'login-form'}
          className={'text-center'}
          validated={userFormValidated}
          onSubmit={
            handleUserEntry as unknown as FormEventHandler<HTMLFormElement>
          }>
          <Form.Label visuallyHidden={true}>
            {isSignupForm
              ? 'CREATE POWERBACK ACCOUNT'
              : 'SIGN INTO POWERBACK ACCOUNT'}
          </Form.Label>
          <Row className={'cta-form-row text-center'}>
            <Col lg={12} className='input-fields'>
              <Row>
                <Col xs={12} lg={6} className='input--translucent'>
                  <UsernameField
                    value={!userEntryForm ? '' : userEntryForm.username}
                    autoComplete={'username'}
                    feedback={handleFeedback(
                      isPendingValidation,
                      { ...FEEDBACK.u },
                      showOverlay,
                      isSignupForm
                    )}
                    onChange={
                      handleUserFormChange as (
                        e: ChangeEvent<Element>
                      ) => void
                    }
                    hideFeedback={userFormValidated}
                    label={isSignupForm ? 'email address' : 'username'}
                  />
                </Col>
                <Col xs={12} lg={6} className='input--translucent'>
                  <PasswordField
                    label={isSignupForm ? 'new password' : 'password'}
                    isGenerating={isSignupForm && !userFormValidated}
                    autoComplete={'current-password'}
                    onChange={
                      handleUserFormChange as (
                        e: ChangeEvent<Element>
                      ) => void
                    }
                    feedback={handleFeedback(
                      isPendingValidation,
                      { ...FEEDBACK.p },
                      showOverlay,
                      isSignupForm
                    )}
                    value={!userEntryForm ? '' : userEntryForm.password}
                  />
                </Col>
              </Row>
            </Col>
            <Col lg={12} className='cta-form-btn'>
              {/* Submit Button */}
              {handleSubmitBtnFace()}
            </Col>
            <Col className='toc flex-row'>
              {isSignupForm ? (
                <FormGroup controlId={'accept-terms'}>
                  <Row className='justify-content-center'>
                    <Col xs={1} lg={'auto'}>
                      <Form.Check
                        onChange={forceShowTerms}
                        required={isSignupForm}
                        checked={checkedTerms}
                        id={'accept-terms'}
                        type={'checkbox'}
                      />
                    </Col>
                    <Col xs={'auto'} lg={'auto'}>
                      <FormCheckLabel htmlFor='accept-terms'>
                        <Stack direction='vertical' gap={3}>
                          <div>
                            <i className='bi bi-hourlgass-split float' />I
                            have read and agree to the{' '}
                            <span
                              onClick={forceShowTerms as (e: any) => void}
                              onKeyDown={(e) =>
                                handleKeyDown(e, forceShowTerms, e)
                              }
                              className='terms-link natural-link'>
                              <u tabIndex={0}>terms of use</u>
                            </span>
                            .
                          </div>

                          {!isDesktop && (
                            <u
                              className={'natural-link inconsolata scoot'}
                              onKeyDown={(e) =>
                                handleKeyDown(e, handleSwapForm)
                              }
                              onClick={handleSwapForm}>
                              I Have an Account and wish to Sign In!
                            </u>
                          )}
                        </Stack>
                      </FormCheckLabel>
                    </Col>
                  </Row>
                </FormGroup>
              ) : (
                <Stack
                  direction='vertical'
                  gap={3}
                  className='mt-1 signin-links'>
                  <PopoverTarget
                    handleOverlay={(e) =>
                      handleOverlay(e, setOverlayTarget, setShowOverlay)
                    }>
                    Forgot Password?
                  </PopoverTarget>
                  {!isDesktop && (
                    <u
                      onKeyDown={(e) => handleKeyDown(e, handleSwapForm)}
                      className={'natural-link inconsolata'}
                      onClick={handleSwapForm}>
                      New Account? Sign Up
                    </u>
                  )}
                </Stack>
              )}
            </Col>
          </Row>
        </Form>
      </Col>
      {isDesktop && (
        <Col xs={2} lg={1}>
          <ToggleSwitch
            labels={(BTNS as string[]).slice().reverse()}
            toggleSelectionClass={toggleSelectionClass}
            formPath={formPath as string}
            swapPaths={handleSwapForm}
            {...props}
          />
        </Col>
      )}
    </>
  );
};

export default React.memo(LoginForm);
