import { Dispatch, ReactNode, SetStateAction } from 'react';
import { Variant } from 'react-bootstrap/esm/types';
import { ShowAlert } from '@Interfaces';

export type AlertProps = {
  setShow: Dispatch<SetStateAction<ShowAlert>>;
  type?: keyof ShowAlert & string;
  heading?: ReactNode | string;
  message?: ReactNode | string;
  variant?: Variant | string;
  show: ShowAlert & boolean;
  dismissible?: boolean;
  alertClass?: string;
  iconClass?: string;
  loggedIn?: boolean;
  timeout?: number;
  icon?: string;
  time?: number;
};
