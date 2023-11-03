import {
  Dispatch,
  FormEvent,
  RefObject,
  ChangeEvent,
  SetStateAction,
  FormEventHandler,
  MutableRefObject,
} from 'react';
import {
  Bill,
  Payload,
  PolData,
  RepState,
  Settings,
  UserData,
  ShowAlert,
  ShowModal,
  LinksClass,
  ContactInfo,
  DisplayName,
  HouseMember,
  ShowOverlay,
  UpdatedInfo,
  PolDonations,
  PolsOnParade,
  UserEntryForm,
  OptionCategory,
  SessionStorage,
  UserEntryError,
  SecurityTheater,
  ServerConstants,
  ValidatingFields,
} from '@Interfaces';
import { Route } from 'type-route';
import { routes } from '../../../router';
import { FormControlProps } from 'react-bootstrap/esm/FormControl';
import { FormCheckInputProps } from 'react-bootstrap/esm/FormCheckInput';
import { CelebrationRejection, ComboboxItem, Celebration } from '@Types';

export type Props = {
  historyLengthRef?: MutableRefObject<number | null>;
  setDonationsEvents?: (action: { type: string; payload: string }) => void;
  handleUpdateUser?: (user: UserData, info: UpdatedInfo) => void;
  setTotalCelebrations?: Dispatch<SetStateAction<PolDonations>>;
  setOptionCategory?: Dispatch<SetStateAction<OptionCategory>>;
  setSecureUserPassFeedback?: Dispatch<SetStateAction<string>>;
  setShowRefreshAppSpinner?: Dispatch<SetStateAction<boolean>>;
  setUserEntryForm?: Dispatch<SetStateAction<UserEntryForm>>;
  validateField?: (e: ChangeEvent<HTMLInputElement>) => void;
  setUserIsAssumedValid?: Dispatch<SetStateAction<boolean>>;
  setUserFormValidated?: Dispatch<SetStateAction<boolean>>;
  setAccountActivated?: Dispatch<SetStateAction<boolean>>;
  setPaymentProcessed?: Dispatch<SetStateAction<boolean>>;
  setPolsOnParade?: (houseMembers: HouseMember[]) => void;
  searchPolsByName?: (selectedItem: HouseMember) => void;
  setActiveProfileTab?: Dispatch<SetStateAction<string>>;
  handleLogOut?: (e: KeyboardEvent & MouseEvent) => void;
  setShowOverlay?: Dispatch<SetStateAction<ShowOverlay>>;
  onChange?: (
    e: FormEvent<FormCheckInputProps & FormControlProps>
  ) => void;
  setShowCosponsors?: Dispatch<SetStateAction<boolean>>;
  itemToString?: (item: ComboboxItem | null) => string;
  searchPolsByState?: (selectedItem: RepState) => void;
  setLinksClass?: Dispatch<SetStateAction<LinksClass>>;
  handleUserEntry?: FormEventHandler<HTMLFormElement>;
  setCheckedTerms?: Dispatch<SetStateAction<boolean>>;
  setContactInfo?: ({ name, value }: Payload) => void;
  handleOptions?: (
    e: {
      target: { textContent: string; value: string };
    } & MouseEvent &
      KeyboardEvent
  ) => void;
  setModalMessage?: Dispatch<SetStateAction<string>>;
  setShowClearBtn?: Dispatch<SetStateAction<string>>;
  setShowModal?: Dispatch<SetStateAction<ShowModal>>;
  setShowSideNav?: Dispatch<SetStateAction<boolean>>;
  setShowAlert: Dispatch<SetStateAction<ShowAlert>>;
  setOverlayTarget?: Dispatch<SetStateAction<null>>;
  setPaymentError?: Dispatch<SetStateAction<Error>>;
  setSettings?: Dispatch<SetStateAction<Settings>>;
  setUserData?: Dispatch<SetStateAction<UserData>>;
  handleUserFormChange?: (e: ChangeEvent) => void;
  searchPolsByLocation?: (ocd_id: string) => void;
  setActiveKey?: Dispatch<SetStateAction<string>>;
  setInputItems?: (value: ComboboxItem[]) => void;
  setLoggedIn?: Dispatch<SetStateAction<boolean>>;
  setDonation?: Dispatch<SetStateAction<Number>>;
  rejectedDonationReasons?: CelebrationRejection;
  showSecurityTheater?: (type: string) => void;
  setTabKey?: Dispatch<SetStateAction<string>>;
  handleCosponsors?: (e: ChangeEvent) => void;
  getFieldMap?: () => MutableRefObject<null>;
  switchToErrorScreen?: (err: Error) => void;
  textInputRef?: RefObject<HTMLInputElement>;
  setDisplayName?: (maxLen: number) => void;
  setTip?: Dispatch<SetStateAction<number>>;
  handleChange?: (e: ChangeEvent) => void;
  setFormPath?: (action: string) => void;
  totalCelebrations?: PolDonations | [];
  setRejectedDonationReasons?: Dispatch<
    SetStateAction<CelebrationRejection>
  >;
  sessionStorageNames?: SessionStorage;
  selectPol?: (pol: PolData) => void;
  securityTheater?: SecurityTheater;
  serverConstants?: ServerConstants;
  closeSecurityCurtain?: () => void;
  handleAccountUpdate?: () => void;
  restorePolsOnParade?: () => void;
  handleLastFormPath?: () => void;
  optionCategory?: OptionCategory;
  secureUserPassFeedback?: string;
  showRefreshAppSpinner?: boolean;
  userEntryError?: UserEntryError;
  userEntryForm?: UserEntryForm;
  badResetRedirect?: () => void;
  handleDeleteUser?: () => void;
  isPendingValidation?: boolean;
  setDonationLimit?: () => void;
  suggestedDonations?: number[];
  celebrations?: Celebration[];
  isInvalid?: ValidatingFields;
  resetValidation?: () => void;
  route?: Route<typeof routes>;
  refreshAppState?: () => void;
  userIsAssumedValid?: boolean;
  inputItems?: ComboboxItem[];
  polsOnParade?: PolsOnParade;
  resetSearchBar?: () => void;
  selectedPol?: string | null;
  userFormValidated?: boolean;
  accountActivated?: boolean;
  paymentProcessed?: boolean;
  displayName?: DisplayName;
  swapFormPath?: () => void;
  swapToButton?: () => void;
  activeProfileTab?: string;
  contactInfo?: ContactInfo;
  showOverlay?: ShowOverlay;
  formCompliance?: boolean;
  serverHasError?: boolean;
  showCosponsors?: boolean;
  handleClick?: () => void;
  cosponsorIds?: string[];
  formIsInvalid?: boolean;
  isShortMobile?: boolean;
  linksClass?: LinksClass;
  twitter?: string | null;
  checkedTerms?: boolean;
  formPath?: string | [];
  getEscrow?: () => void;
  LEGAL_LIMIT?: number[];
  donorId?: string | {};
  FORM_PATHS?: string[];
  showAlert?: ShowAlert;
  showClearBtn?: string;
  showModal?: ShowModal;
  showSideNav?: boolean;
  appRefresh?: boolean;
  hasDonated?: boolean;
  paymentError?: Error;
  pols?: HouseMember[];
  setIntl?: () => void;
  isDesktop?: boolean;
  loggingIn?: boolean;
  settings?: Settings;
  start_date?: number;
  userData?: UserData;
  activeKey?: string;
  loggedIn?: boolean;
  updating?: boolean;
  donation?: number;
  district?: string;
  end_date?: number;
  isMobile: boolean;
  polData?: PolData;
  chamber?: string;
  BTNS?: string[];
  FEC_id?: string;
  isTip?: boolean;
  pValue?: string;
  tabKey?: string;
  uValue?: string;
  user?: UserData;
  info?: PolData;
  state?: string;
  name?: string;
  rank?: string;
  tip?: number;
  bill?: Bill;
};
