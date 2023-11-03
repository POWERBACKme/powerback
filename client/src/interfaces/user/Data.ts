import { Payment } from '../celebrations';
import { Settings } from './Settings';
import { Celebration } from '@Types';

export interface UserData {
  id: string;
  donations: Celebration[];
  settings: Settings;
  payment: Payment;
  isCompliant?: boolean;
  understands: boolean;
  isEmployed: boolean;
  phoneNumber: string;
  occupation: string;
  firstName: string;
  employer: string;
  lastName: string;
  passport: string;
  username: string;
  address: string;
  country: string;
  credits: object;
  email: string;
  state: string;
  city: string;
  zip: string;
}
