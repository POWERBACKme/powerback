import { Settings, Init } from '@Interfaces';

const defaultSettings: Settings = {
  showLoginLogout: true,
  emailReceipts: true,
  showToolTips: true,
  autoTweet: false,
};

export const INIT: Init = {
  sessionStorageNames: {
    refreshToken: 'powerback_refresh-token',
    selectedPol: 'powerback_selected-pol',
    donation: 'powerback_donation',
    settings: 'powerback_settings',
  },
  alerts: {
    err: false, // "swaps" with login/signin submit button on API error
    login: false,
    logout: false,
    signup: false,
    delete: false, // deleted acct
    update: false, // updated user profile
    activate: false, // new account validated
    linkSent: false, // password reset
    rejected: false, // celebration rejected
  },
  overlays: {
    resetPass: false,
  },
  honestPol: {
    middle_name: '',
    first_name: '',
    last_name: '',
    start_date: 0,
    end_date: 0,
    district: '',
    chamber: '',
    twitter: '',
    FEC_id: '',
    state: '',
    name: '',
    id: '',
  },
  modals: {
    faq: false,
    limit: false,
    terms: false,
    account: false,
    eligibility: false,
  },
  defaultSettings: defaultSettings,
  optionCategory: {
    label: 'Search by name.',
    value: 'Name',
    name: 'NAME',
  },
  activeSearchOption: {
    NAME: 'options-link-active',
    DISTRICT: '',
    STATE: '',
  },
  userData: {
    payment: { customer_id: '', payment_method: '' },
    settings: defaultSettings,
    isCompliant: false,
    understands: false,
    isEmployed: true,
    phoneNumber: '',
    occupation: '',
    donations: [],
    firstName: '',
    employer: '',
    lastName: '',
    passport: '',
    username: '',
    address: '',
    country: '',
    credits: {},
    email: '',
    state: '',
    city: '',
    zip: '',
    id: '',
  },
  credentials: { username: '', password: '', err: '' }, // userEntryForm
  changePasswordForm: { newPassword: '', confirmNewPassword: '', err: '' }, // passFormObject
};
