export const passFormChange = (
  e,
  setPassFormObject,
  setPassFormValidated,
  setSecureUserPassFeedback
) => {
  setPassFormValidated(true); // reset form validation
  const { name, value } = e.target;
  setPassFormObject((f) => ({ ...f, [name]: value })); // update form obj
  setSecureUserPassFeedback('Your passwords must match.');
};
