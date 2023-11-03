import { ContactInfo } from './Contact';
import { Settings } from '../Settings';

export type UpdatedInfo =
  | Date
  | object
  | string
  | boolean
  | Settings
  | keyof ContactInfo;
