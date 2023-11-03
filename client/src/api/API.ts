import axios from 'axios';
import { Celebration } from '@Types';
import { Credentials, Passwords, Intent, Donor } from './types';
import { UserEntryForm, ContactInfo, UserData } from '@Interfaces';

declare const process: {
  env: {
    NODE_ENV: string;
    REACT_APP_API_URI: string;
  };
};

axios.defaults.baseURL = // 'https://api.powerback.me/api/';
  process.env.NODE_ENV === 'development'
    ? '/api/'
    : process.env.REACT_APP_API_URI;

const API = {
  // auth
  refreshToken: (refreshToken: string) => {
    return axios.get('users/refresh', {
      headers: {
        Authorization: `Bearer ${refreshToken}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
  },
  // users
  updateUser: (userId: string, userData: ContactInfo) => {
    return axios.put('users/update/' + userId, userData);
  },
  changePassword: (userId: string, passwords: Passwords) => {
    return axios.put('users/change/' + userId, passwords);
  },
  resetPassword: (credentials: Credentials) => {
    return axios.put('users/reset', credentials);
  },
  confirmResetPasswordHash: (hash: string) => {
    return axios.get('users/reset/' + hash);
  },
  confirmActivationHash: (hash: string) => {
    return axios.get('users/activate/' + hash);
  },
  deleteUser: (userId: string) => {
    return axios.delete('users/delete/' + userId);
  },
  login: (userData: UserData) => {
    return axios.post('users/login', userData);
  },
  checkPrivilege: (userId: string) => {
    return axios.get('/users/privilege/' + userId);
  },
  givePrivilege: (userId: string) => {
    return axios.patch('/users/privilege/' + userId);
  },
  checkDonor: (userId: string) => {
    return axios.get('/users/promote/' + userId);
  },
  promoteDonor: (userId: string) => {
    return axios.patch('/users/promote/' + userId);
  },
  getUser: (userId: string) => {
    return axios.get('users/get/' + userId);
  },
  getUserData: (userId: string) => {
    return axios.get('users/data/' + userId);
  },
  forgotPassword: (email: string) => {
    return axios.put('users/forgot', email);
  },
  createUser: (userData: UserEntryForm) => {
    return axios.post('users', userData);
  },
  logout: () => {
    return axios.get('users/logout');
  },
  // celebrations
  saveCelebration: (celebration: Celebration) => {
    return axios.post('celebrations', celebration);
  },
  getCelebrationsByUserId: (userId: string) => {
    return axios.get('celebrations/user/' + userId);
  },
  resolveDonation: (celebrationId: string) => {
    return axios.patch('celebrations/' + celebrationId);
  },
  sendReceipt: (celebration: Celebration) => {
    return axios.post('celebrations/receipt', celebration);
  },
  getWhatPolsHaveInEscrow: () => {
    return axios.get('celebrations/escrow');
  },
  // pols
  getPolsByIds: async (ids: string[]) => {
    return await axios
      .put('congress/pols', ids)
      .catch((err) => console.error(err.response.data));
  },
  getPol: (id: string) => {
    return axios.get('congress/pols/' + id);
  },
  getBill: (id: string) => {
    return axios.get('congress/bills/' + id);
  },
  // payment [stripe]
  sendPayment: (customer_id: string, celebration: Celebration) => {
    return axios.post('payments/celebrations/' + customer_id, celebration);
  },
  setupIntent: (id: string, body: Intent) => {
    return axios.post('payments/intents/' + id, body);
  },
  setPaymentMethod: (id: string, body: Intent) => {
    return axios.post('payments/donors/' + id, body);
  },
  getNewDonor: (body: Donor) => {
    return axios.post('payments/donors', body);
  },
  // search by location [google civics]
  getPolsByLocation: (address: string) => {
    return axios.put('civics', { address });
  },
  // system
  notifyImgErr: (pol: string) => {
    return axios.put('sys/errors/img/' + pol);
  },
  getConstants: () => {
    return axios.get('sys/constants');
  },
};

export default API;
