import { Dispatch, SetStateAction } from 'react';

interface PassFormObject {
  confirmNewPassword: string;
  newPassword: string;
  err: string;
}

export type ChangeProps = {
  setPassFormObject: Dispatch<SetStateAction<PassFormObject>>;
  setPasswordChanged: Dispatch<SetStateAction<boolean>>;
  passFormObject: PassFormObject;
  passwordChanged: boolean;
  cnpFeedback: string;
  cnpValue: string;
  npValue: string;
};
