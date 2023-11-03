const { sendEmail } = require('../comms');
require('dotenv').config();

const FIRST_CITIZEN = process.env.REACT_APP_EMAIL_USER;

module.exports = {
  notifyImageErr: (req, res) => {
    const sent = sendEmail(FIRST_CITIZEN, req.params.pol, 'Image', null);
    if (sent) res.json(true);
  },
};
