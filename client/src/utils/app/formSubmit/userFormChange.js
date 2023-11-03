export const userFormChange = (
  e,
  {
    setShowAlert,
    swapToButton,
    setShowOverlay,
    setUserEntryForm,
    setUserFormValidated,
  }
) => {
  const { name, value } = e.target;
  setUserFormValidated(false); // reset form validation
  setUserEntryForm((f) => {
    let letMeIn = f ? f : { username: '', password: '', err: '' };
    return { ...letMeIn, [name]: value };
  }); // update form obj
  setShowOverlay((s) => ({ ...s, resetPass: false }));
  swapToButton(); // flip error message back to button face
  setShowAlert((s) => ({ ...s, err: false })); // kill err
};
