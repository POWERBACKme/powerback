import { setTokens } from '@Utils';
import API from '@API';

export const refreshToken = (
  setLoggedIn,
  setUserData,
  sessionStorageNames,
  switchToErrorScreen
) => {
  if (
    !localStorage.getItem(sessionStorageNames.refreshToken) ||
    !localStorage.getItem(sessionStorageNames.refreshToken) === 'undefined'
  ) {
    return;
  } else {
    let t = localStorage.getItem(sessionStorageNames.refreshToken);
    API.refreshToken(t) // get token & user data
      .then((res) => {
        const data = res.data;
        return data;
      })
      .then((data) => {
        setLoggedIn(); // log in
        const y = data;
        setTokens(y.accessToken, y.refreshToken, sessionStorageNames);
        API.getCelebrationsByUserId(y.user._id) // api call -- User donations
          .then((w) => {
            const { data: donations } = w;
            let z = y.user;
            z.donations = donations;
            setUserData(
              (s) =>
                (s = {
                  // set User
                  id: z._id,
                  zip: z.zip ?? '',
                  city: z.city ?? '',
                  email: z.email ?? '', // ?? z.username
                  state: z.state ?? '',
                  username: z.username,
                  address: z.address ?? '',
                  country: z.country ?? '',
                  credits: z.credits ?? {},
                  isEmployed: z.isEmployed,
                  payment: z.payment ?? {},
                  employer: z.employer ?? '',
                  lastName: z.lastName ?? '',
                  passport: z.passport ?? '',
                  settings: z.settings ?? {
                    showLoginLogout: true,
                    emailReceipts: true,
                    showToolTips: true,
                    autoTweet: false,
                  },
                  donations: z.donations ?? [],
                  firstName: z.firstName ?? '',
                  occupation: z.occupation ?? '',
                  phoneNumber: z.phoneNumber ?? '',
                  isCompliant: z.isCompliant ?? false,
                  understands: z.understands ?? false,
                })
            );
          });
      })
      .catch((err) => switchToErrorScreen(err));
  }
};
