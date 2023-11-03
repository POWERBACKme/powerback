const { getAddress } = require('./addresses'),
  { EMAIL } = require('../../constants'),
  nodemailer = require('nodemailer'),
  { emails } = require('./emails');
require('dotenv').config();

const CONFIG = {
  host: 'mail.powerback.me',
  port: EMAIL.PORT,
  secure: true,
  auth: {
    user: process.env.REACT_APP_EMAIL_USER,
    pass: EMAIL.PASS,
  },
};

module.exports = {
  sendEmail: async (to, payload, template, firstName) => {
    const components = await emails[template](
      payload,
      firstName,
      process.env.NODE_ENV === 'production'
        ? process.env.REACT_APP_PROD_URI
        : process.env.REACT_APP_DEV_URI
    );
    const transporter = nodemailer.createTransport(CONFIG);
    const mailOptions = {
      to: to,
      html: components[2],
      // + EMAIL_SIGNATURE ?
      subject: components[1],
      from: getAddress(components[0]),
    };
    return await transporter.sendMail(mailOptions, (err, info) => {
      if (err) return console.error('email transporter error: ' + err);
      else console.log(template + ' message sent: ' + info.response);
    });
  },
};
