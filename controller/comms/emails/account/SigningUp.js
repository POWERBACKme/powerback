const { emailBtnStyle } = require('../style');

module.exports = {
  SigningUp: (sash, firstName, URI_ROOT) => {
    const URI = URI_ROOT + '/signup/' + sash;
    const CONFIRMATION_LINK = `<a href="${URI}" target="__blank" rel="noreferrer noopener" style="${emailBtnStyle}">
    Confirm Your New Account
    </a>`;
    return [
      0,
      'Welcome to POWERBACK - Activate Your Account',
      `Dear ${firstName ? firstName : 'Incoming Powerbacker'}:<br/><br/>
      Welcome to POWERBACK, where you play a vital role in shaping the future of political causes. We're excited to have you on board as a part of our bold community.<br/><br/>
      To activate your new POWERBACK account, please click on the unique activation link below. This link is time-sensitive and will be active for the next 5 minutes.<br/><br/>
      ${CONFIRMATION_LINK}
        <br/><br/>
        If the link expires or you encounter any issues, don't worry. You can always sign up again to receive a new activation link. We're here to support you every step of the way.<br/><br/>
        Thank you for joining us on this incredible journey.<br/><br/>
        ---<br/>
        Warm Regards,<br/>
        The <a href="https://powerback.me">POWERBACK</a> Team<br/>`,
    ];
  },
};
