import API from '@API';

export const activation = async (hash, switchToErrorScreen) => {
  return await API.confirmActivationHash(hash).catch((err) =>
    switchToErrorScreen(err)
  );
};
