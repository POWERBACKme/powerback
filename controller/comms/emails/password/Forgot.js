require('dotenv').config();
const PHONE_NUMBER = process.env.REACT_APP_PHONE_NUMBER;

module.exports = {
  Forgot: (hash, firstName, URI_ROOT) => {
    const URI = URI_ROOT + '/reset/' + hash;
    const BUTTON_LINK = `<a href="${URI}" target="__blank" rel="noreferrer noopener"
    style="
    width:auto;
    max-width:25%;
    padding:10px;
    color: #000000;
    background: #c9f;
    text-decoration:none;
    border:1px solid #1b1b1b;
    border-radius:8px;
    cursor:pointer;
  ">
  24-hour link to reset password
  </a>`;
    return [
      0,
      'New password request',
      `Dear ${firstName ? firstName : 'Concerned Citizen'},<br/><br/>
      This is an automated response to your forgotten password request.<br/><br/>
      Click the button below within 24 hours from now to reset your password.<br/><br/>
      If you run out of time, it will expire. If so, just return to POWERBACK.me and click "Forgot Password?" at the Login prompt as before. We will send you another email just like this one with a fresh link.<br/><br/>
      ${BUTTON_LINK}
      <br/><br/>
      If you didn't request this, you may ignore this message and leave your password unchanged. (However, you may still wish to go ahead and reset your password in case your account has been compromised.)<br/><br/>
      ---<br/>
      The <a href="https://powerback.me" target='__blank'
      rel='noreferrer noopener'>POWERBACK</a> Team<br/><br/><br/><br/><br/>
      Problems or questions? Call us at ${PHONE_NUMBER} or email <a href="mailto:support@powerback.me">support@powerback.me</a>`,
    ];
  },
};
