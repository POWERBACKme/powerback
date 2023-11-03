const localizedFormat = require('dayjs/plugin/localizedFormat');
const advancedFormat = require('dayjs/plugin/advancedFormat');
const dayjs = require('dayjs');
dayjs.extend(localizedFormat);
dayjs.extend(advancedFormat);

module.exports = {
  Locked: (firstName) => {
    return [
      0,
      'Your POWERBACK account has been locked',
      `Dear ${firstName ? firstName : 'Powerbacker'},<br/><br/>
      This is an automated response to a suspicious attempt to change the password of your account.<br/><br/>
      A failed request for a password change associated with your account occurred on ${dayjs(
        Date.now()
      ).format(
        'MMMM Do[,] YYYY [at] LT'
      )}, Central Standard Time. For your security, your account has been temporarily locked for 24 hours.<br/><br/>
      If this was you and done in error, simply return to POWERBACK and click "Forgot Password?" at the Sign-in prompt. We will send you another email from this same address with a unique link to securely set a new password, which you'll be able to use after the lock is lifted.<br/><br/>
      If you either a) never requested a password change or b) did make the request but had not yet followed the link to proceed with the change, your email and/or POWERBACK account may have been compromised. If you suspect either to be the case, please contact us at <a href="mailto:support@powerback.me">support@powerback.me</a> immediately, and perhaps from a different email address.<br/><br/>
      ---<br/>
      The POWERBACK Team<br/>
      <a href='https://powerback.me'>powerback.me</a>`,
    ];
  },
};
