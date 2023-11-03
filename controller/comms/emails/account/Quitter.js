require('dotenv').config();

const PB_URI = process.env.REACT_APP_PROD_URI,
  SUPPORT_EMAIL = process.env.REACT_APP_EMAIL_SUPPORT;

module.exports = {
  Quitter: (firstName) => {
    return [
      3,
      'Your POWERBACK account has been deleted',
      `Dear ${firstName ? firstName : 'Former Powerbacker'},<br/><br/>
      Hi, this is Jonathan with POWERBACK letting you know that your account has been removed. If you have any questions or matters you would like to discuss about this service, please don't hesitate to reach out to me personally at this email address.<br/><br/>
      To be clear, any pending donations of yours that were being held in escrow at the time of your account deletion must remain there and will not be refunded. Upon contingency, they will be released and delivered according to your previous choices.<br/><br/>
      If you would like to reinstate your account or otherwise access some of your old data, please email the team at <a href="mailto:${SUPPORT_EMAIL}">${SUPPORT_EMAIL}</a>.<br/><br/>
      We appreciate everything you have contributed, and wish you the best!<br/><br/>
      ---<br/>
      Very Truly Yours,<br/>
      Jonathan Alpart, Founder<br/>
      <a href="${PB_URI}">${PB_URI}</a>`,
    ];
  },
};
