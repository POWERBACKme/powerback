import { INIT } from '@CONSTANTS';
import API from '@API';

export const deleteUser = ({
  userData,
  setTabKey,
  setDonation,
  setLoggedIn,
  setUserData,
  setShowAlert,
  setShowModal,
  resetFormPath,
  setSelectedPol,
  setShowSideNav,
  sessionStorageNames,
  switchToErrorScreen,
  stopLoggingInSpinner,
}) => {
  API.deleteUser(userData.id)
    .then((res) => {
      if (res.status === 200) {
        setTabKey('pol-donation'); // reset screen tabs
        setShowModal(INIT.modals); // close Modal
        setShowSideNav(false); // close sidenav
        setLoggedIn(); // log user out
        setUserData(INIT.userData); // initialize user object
        setSelectedPol(null); // clear pol selection
        setDonation(0); // clear donation
        stopLoggingInSpinner();
        resetFormPath(); // mobile only; revert back to formless home screen
        setShowAlert((s) => ({ ...s, activate: false, delete: true })); // show alert

        localStorage.removeItem(sessionStorageNames.refreshToken);
      }
    })
    .catch((err) => switchToErrorScreen(err));
};
