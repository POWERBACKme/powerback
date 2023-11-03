import { setTokens } from '@Utils';
import { INIT } from '@CONSTANTS';
import API from '@API';

export const loadUser = (
  user,
  setLoggedIn,
  setUserData,
  setShowAlert,
  setUserEntryForm,
  sessionStorageNames,
  switchToErrorScreen,
  setUserFormValidated
) => {
  setTokens(user.accessToken, user.refreshToken, sessionStorageNames);
  API.getCelebrationsByUserId(user.id) // api call -- user donations
    .then((w) => {
      const { data: donations } = w;
      setLoggedIn(); // log in
      setUserFormValidated((s) => (s = false)); // clear form validation
      setUserEntryForm((s) => ({ ...s, ...INIT.credentials })); // user entry form obj
      setShowAlert((s) => ({
        ...s,
        err: false,
        logout: false,
        activate: false,
        login:
          (user && user.settings && user.settings.showLoginLogout) ?? true,
      }));

      let { accessToken, refreshToken, ...z } = user;
      z.donations = donations;
      setUserData({ ...z });
    })
    .catch((err) => switchToErrorScreen(err));
};
