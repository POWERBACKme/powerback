import React, { SetStateAction, Dispatch, useState } from 'react';
import { SecurityTheater, UserData } from '@Interfaces';
import Container from 'react-bootstrap/esm/Container';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import ChangePassword from '../ChangePass';
import DeleteAcct from '../DeleteAcct';
import { Props } from '@Types';
import './style.css';

type TheaterTypes = {
  setPasswordChanged: Dispatch<SetStateAction<boolean>>;
  handleDeleteUser: () => void;
  passwordChanged: boolean;
};

interface ChangePasswordForm {
  confirmNewPassword: string;
  newPassword: string;
  err: string;
}

const initChangePasswordForm = {
  confirmNewPassword: '',
  newPassword: '',
  err: '',
};

const Theater = ({
  secureUserPassFeedback,
  setPasswordChanged,
  handleDeleteUser,
  passwordChanged,
  securityTheater,
  user,
  ...props
}: Props & TheaterTypes) => {
  const [passFormObject, setPassFormObject] = useState(
    initChangePasswordForm as ChangePasswordForm
  ); // input state of change pw form

  const [prevSecurityTheater, setPrevSecurityTheater] =
    useState(securityTheater);
  if (prevSecurityTheater !== securityTheater) {
    setPrevSecurityTheater(securityTheater);
    if ((securityTheater as SecurityTheater).deleteAccount)
      setPassFormObject(initChangePasswordForm);
  }

  return (
    <Container
      className={
        'pt-1 pt-lg-0' +
        ((securityTheater as SecurityTheater).deleteAccount
          ? ' delete'
          : '')
      }>
      <Row>
        <Col>
          {(((securityTheater as SecurityTheater).changePassword &&
            !passwordChanged) ||
            (passwordChanged &&
              !(securityTheater as SecurityTheater).changePassword &&
              !(securityTheater as SecurityTheater).deleteAccount)) && (
            <ChangePassword
              cnpValue={
                passFormObject ? passFormObject.confirmNewPassword : ''
              }
              npValue={passFormObject ? passFormObject.newPassword : ''}
              secureUserPassFeedback={secureUserPassFeedback}
              key={(user as UserData).id + '-change-password-pane'}
              cnpFeedback={secureUserPassFeedback as string}
              setPasswordChanged={setPasswordChanged}
              setPassFormObject={setPassFormObject}
              handleDeleteUser={handleDeleteUser}
              passwordChanged={passwordChanged}
              securityTheater={securityTheater}
              passFormObject={passFormObject}
              user={user}
              {...props}
            />
          )}
          {(securityTheater as SecurityTheater).deleteAccount && (
            <DeleteAcct
              secureUserPassFeedback={secureUserPassFeedback}
              handleDeleteUser={handleDeleteUser}
              securityTheater={securityTheater}
              user={user}
              {...props}
            />
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default React.memo(Theater);
