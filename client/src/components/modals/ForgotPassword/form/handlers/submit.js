const submit = (e, m, a, f, v, o, x) => {
  e.preventDefault();
  e.stopPropagation();
  if (e.currentTarget.checkValidity() === false) {
    v((s) => (s = true)); // validate form
    f((s) => (s = 'Please enter a valid email address.')); // user input feedback
    return;
  } else {
    o((h) => ({ ...h, resetPass: !h.resetPass })); // hide popover
    x({ email: m })
      .then((res) => {
        v((s) => (s = false)); // reset validation

        // l(false); // hide modal
        a((s) => ({ ...s, linkSent: true })); // show alert
      })
      .catch((err) => console.error(err));
  }
};

export default submit;
