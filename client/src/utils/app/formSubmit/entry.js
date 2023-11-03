export const entry = (
  e,
  {
    login,
    signup,
    formPath,
    loggingIn,
    setUserFormValidated,
    startLoggingInSpinner,
    ...setters
  }
) => {
  e.preventDefault();
  e.stopPropagation();
  if (loggingIn) {
    return;
  } else {
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      setUserFormValidated((s) => (s = true));
    } else {
      startLoggingInSpinner();
      if (formPath === 'Sign Up')
        signup({ setUserFormValidated, ...setters });
      else login({ setUserFormValidated, ...setters });
    }
  }
};
