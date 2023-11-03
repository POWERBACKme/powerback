import { INIT } from '@CONSTANTS';
import API from '@API';

export const passChange = (
  e,
  { id, username },
  form,
  setPassFormObject,
  setPasswordChanged,
  errHandler,
  closeSecurityCurtain
) => {
  e.preventDefault();
  e.stopPropagation();
  API.changePassword(id, {
    // api call to attempt pw change
    username: username,
    newPassword: form.newPassword,
  })
    .then((res) => {
      const data = res.data;
      return data;
    })
    .then((data) => {
      setPassFormObject(INIT.changePasswordForm);
      if (data !== 'Your password has been successfully changed.')
        throw new Error(); // maybe do a ButtonErrorSwapper?
      else {
        setPasswordChanged(true);
        closeSecurityCurtain();
      }
    })
    .catch((err) => errHandler(err));
};
