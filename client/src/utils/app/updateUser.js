import API from '@API';

export const updateUser = (
  { id, donations },
  info,
  setUserData,
  switchToErrorScreen,
  sessionStorageNames
) => {
  if (!id || !donations) {
    return;
  } else {
    let updatesObj = info;
    const userDonations = donations;
    if (Object.keys(info).includes('settings'))
      sessionStorage.setItem('powerback_settings', info);
    API.updateUser(id, info) // api call
      .then(() => {
        updatesObj.donations = userDonations;
        setUserData((u) => ({ ...u, ...updatesObj })); // update user state and re-attach donations array
      })
      .catch((err) => switchToErrorScreen(err));
  }
};
