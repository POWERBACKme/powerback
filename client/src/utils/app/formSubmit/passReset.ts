import API from '@API';
import { AxiosResponse } from 'axios';
import { UserEntryForm } from '@Interfaces';
import { Dispatch, SetStateAction } from 'react';

type Feedback = {
  1: string;
  2: string;
};

export const passReset = (
  e: SubmitEvent,
  userEntryForm: UserEntryForm,
  URI_SUBTRAHEND: number,
  switchToErrorScreen: (err: Error) => void,
  setUserFormValidated: Dispatch<SetStateAction<boolean>>,
  setSecureUserPassFeedback: Dispatch<SetStateAction<string>>
) => {
  e.preventDefault();
  e.stopPropagation();
  const t = e.currentTarget,
    o = userEntryForm,
    c = URI_SUBTRAHEND;
  let w = window.location.href;
  w = w.substring(w.length - c);
  if (!(t as any).checkValidity()) {
    setUserFormValidated((v) => (v = true)); // form validation
    setSecureUserPassFeedback(
      (v) => (v = 'Please enter the email address you use to login.')
    );
    return;
  } else {
    API.resetPassword({
      // api call to attempt reset
      hash: w,
      newPassword: o.password,
      givenUsername: o.username,
    })
      .then((res) => {
        let feedback = {
          1: 'User not authorized.',
          2: 'User not authorized. One more attempt until account is locked.',
        };
        if (!res.data) {
          window.location.replace('/');
        } else if (typeof res.data === 'number' && res.data < 3) {
          setUserFormValidated((v) => (v = true));
          setSecureUserPassFeedback(
            (v) =>
              (v = feedback[(res as AxiosResponse).data as keyof Feedback])
          ); //form feedback
        } else {
          alert(res.data); // replace with Modal
          setUserFormValidated((v) => (v = false));
          window.location.replace('/');
        }
      })
      .catch((err) => switchToErrorScreen(err));
  }
};
