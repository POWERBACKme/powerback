export const donationFailure = ({ donation, understands, complies }) => {
  let variant = 'warning',
    message = 'You have not been charged anything.';
  if (!understands) {
    message =
      'You must understand and abide by the Eligibility rules before donating. \n' +
      message;
  }
  if (!complies) {
    variant = 'danger';
    message =
      'Donation ($' +
      donation +
      ') exceeds legal limit and cannot be processed. \n ' +
      message;
  }
  message.replace('  ', ' ');
  if (message[message.length - 1] === ' ')
    message = message.substring(0, message.length - 1);
  return { variant: variant, message: message };
};
