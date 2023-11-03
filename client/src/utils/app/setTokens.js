import axios from 'axios';

export const setTokens = (auth, refresh, sessionStorageNames) => {
  axios.defaults.headers.common = {
    Authorization: `Bearer ${auth}`,
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };
  localStorage.setItem(sessionStorageNames.refreshToken, refresh);
};
