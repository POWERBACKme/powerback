export const regexMatchURI = (type) => {
  return window.location.href.match(RegExp(`(?<=${type}/).*`));
};
