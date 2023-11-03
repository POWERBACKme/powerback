import { Settings } from './Settings';

export interface ServerConstants {
  FEC: { LEGAL_LIMIT: number[] }; // [noncompliant, compliant] per candidate, per campaign cycle.,
  APP: {
    SETTINGS: Settings;
  };
}
