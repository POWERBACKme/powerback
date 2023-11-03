import { INIT } from '@CONSTANTS';
import API from '@API';

export const logOut = ({
  setTabKey,
  setDonation,
  setLoggedIn,
  setUserData,
  setShowAlert,
  resetFormPath,
  setSelectedPol,
  setShowSideNav,
  sessionStorageNames,
  switchToErrorScreen,
  stopLoggingInSpinner,
}) => {
  API.logout() // api call -- logout
    .then((res) => {
      const showLoginLogout = res.data;
      return showLoginLogout;
    })
    .then((showLoginLogout) => {
      stopLoggingInSpinner();
      setShowAlert((s) => ({
        ...s,
        login: false,
        activate: false,
        logout: showLoginLogout,
      })); // show alert
      setShowSideNav(false); // close sidenav
      resetFormPath(); // mobile only; revert back to formless home screen
      setLoggedIn(); // log user out
      setUserData(INIT.credentials); // initialize user object
      setSelectedPol(null); // clear pol selection
      setDonation(0); // clear donation
      setTabKey('pol-donation'); // reset screen tabs

      localStorage.removeItem(sessionStorageNames.refreshToken);
    })
    .catch((err) => {
      if (err.response) switchToErrorScreen(err.response);
    });
};
