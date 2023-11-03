export const clearForm = ({
  setShowAlert,
  swapToButton,
  setShowOverlay,
  setCheckedTerms,
  setUserEntryForm,
}) => {
  swapToButton();
  setUserEntryForm({ username: '', password: '', err: '' });
  setShowAlert((s) => ({ ...s, err: true }));
  setShowOverlay((o) => ({ ...o, resetPass: false })); // kills reset password overlay if open
  setCheckedTerms((t) => (t = false));
};
