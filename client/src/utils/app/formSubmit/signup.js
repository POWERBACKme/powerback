import { INIT } from '@CONSTANTS';
import API from '@API';

export const signup = ({
  swapToError,
  setShowAlert,
  userEntryForm,
  setUserEntryForm,
  setUserFormValidated,
  stopLoggingInSpinner,
}) => {
  const u = userEntryForm;
  API.createUser({ ...u })
    .then(() => {
      stopLoggingInSpinner();
      setUserFormValidated((v) => (v = false)); // reset form validation
      setShowAlert((s) => ({ ...s, signup: true }));
      setUserEntryForm((s) => (s = INIT.credentials));
    })
    .catch((err) => {
      stopLoggingInSpinner();
      setUserEntryForm({
        ...u,
        err: err ? err.response.status : '',
      });
      swapToError(err.response.status);
    });
};
