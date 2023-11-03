import { UserEntryForm, SessionStorage, Settings, UserData } from './user';
import { OptionCategory, LinksClass, ShowAlert, ShowModal } from './ui';
import { PolData } from './pols';

interface ChangePasswordForm {
  confirmNewPassword: string;
  newPassword: string;
  err: string;
}

export interface Init {
  alerts: ShowAlert;
  modals: ShowModal;
  honestPol: PolData;
  userData: UserData;
  overlays: {
    resetPass: boolean;
  };
  defaultSettings: Settings;
  credentials: UserEntryForm;
  activeSearchOption: LinksClass;
  optionCategory: OptionCategory;
  sessionStorageNames: SessionStorage;
  changePasswordForm: ChangePasswordForm;
}
