import React, {
  SetStateAction,
  ChangeEvent,
  useCallback,
  useReducer,
  useEffect,
  Dispatch,
} from 'react';
import Container from 'react-bootstrap/esm/Container';
import { passReset, regexMatchURI } from '@Utils';
import { UserPassForm } from '@Components/forms';
import Card from 'react-bootstrap/esm/Card';
import { UserEntryForm } from '@Interfaces';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import { AxiosResponse } from 'axios';
import { APP } from '@CONSTANTS';
import { nanoid } from 'nanoid';
import { Props } from '@Types';
import API from '@API';
import './style.css';

type ResetProps = {
  setLinkIsExpired: Dispatch<SetStateAction<boolean>>;
  uFeedback: string;
  showErr: boolean;
};

const Reset = ({
  setSecureUserPassFeedback,
  setUserIsAssumedValid,
  setUserFormValidated,
  switchToErrorScreen,
  userFormValidated,
  setLinkIsExpired,
  userEntryForm,
  handleChange,
  uFeedback,
  showErr,
  ...props
}: Props & ResetProps) => {
  const [idempotentKey, setIdempotentKey] = useReducer(() => {
    return nanoid();
  }, '');

  useEffect(() => {
    // change to "Prev" pattern?
    const handlePasswordReset: Function = async () => {
      if (!idempotentKey) setIdempotentKey();
      else {
        const [hash] = regexMatchURI('reset')!;
        try {
          const { data: confirmation }: void | AxiosResponse<any> =
            await API.confirmResetPasswordHash(hash);
          setLinkIsExpired(confirmation.isLinkExpired);
          (setUserIsAssumedValid as Dispatch<SetStateAction<boolean>>)(
            confirmation.isHashConfirmed
          );
        } catch (err) {
          console.error(err);
        }
      }
    };
    handlePasswordReset();
  }, [idempotentKey, setLinkIsExpired, setUserIsAssumedValid]);

  const handleSubmit = useCallback(
    (e: any) =>
      passReset(
        e,
        userEntryForm as UserEntryForm,
        APP.URI_SUBTRAHEND,
        switchToErrorScreen as (err: Error) => void,
        setUserFormValidated as Dispatch<SetStateAction<boolean>>,
        setSecureUserPassFeedback as Dispatch<SetStateAction<string>>
      ),
    [
      setSecureUserPassFeedback,
      setUserFormValidated,
      switchToErrorScreen,
      userEntryForm,
    ]
  );

  return (
    <Container>
      <Row className='secureuserpass--row'>
        <Col lg={12} className='secureuserpass--col mt-lg-5 pt-lg-5'>
          <Card className='secure-user-pass'>
            <Card.Body className='special-invalid'>
              <Card.Title className='mb-4 display-6'>
                {APP.RESET.title}
              </Card.Title>
              <UserPassForm
                handleChange={handleChange as (e: ChangeEvent) => void}
                pValue={!userEntryForm ? '' : userEntryForm.password}
                uValue={!userEntryForm ? '' : userEntryForm.username}
                userFormValidated={userFormValidated as boolean}
                uAutoComplete={'username' || 'email'}
                hideFeedback={!userFormValidated}
                value={APP.RESET.buttonText}
                handleSubmit={handleSubmit}
                pAutoComplete={'off'}
                uFeedback={uFeedback}
                {...APP.RESET}
                {...props}
              />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default React.memo(Reset);
