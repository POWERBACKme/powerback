import { loadUser } from '@Utils';
import API from '@API';

export const login = ({
  setLoggedIn,
  setUserData,
  swapToError,
  setShowAlert,
  userEntryForm,
  setUserEntryForm,
  sessionStorageNames,
  switchToErrorScreen,
  setUserFormValidated,
  stopLoggingInSpinner,
}) => {
  const u = userEntryForm;
  API.login({
    ...u,
  })
    .then((res) => {
      const { data: user } = res;
      loadUser(
        user,
        setLoggedIn,
        setUserData,
        setShowAlert,
        setUserEntryForm,
        sessionStorageNames,
        switchToErrorScreen,
        setUserFormValidated
      );
    })
    .catch((err) => {
      console.error(err);
      setUserEntryForm({
        ...u,
        err: err ? err.response.status : '',
      });
      swapToError(err.response.status);
      stopLoggingInSpinner();
    });
};
