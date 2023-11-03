require('dotenv').config();
const PHONE_NUMBER = process.env.REACT_APP_PHONE_NUMBER;

module.exports = {
  Update: (update, firstName) => {
    return [
      2,
      'Your new POWERBACK donation!',
      `Dear ${firstName ? firstName : 'Active Citizen'},<br/><br/>
        Thank you for entrusting your political donation with POWERBACK - the only online conduit that serves the people,. <italics>not</italics> the politicians.<br/><br/>
        Details of your donation:<br/><br/>` +
        // details of the donation

        `Since we're here talking, we truly appreciate you being a member of POWERBACK. As you likely already know, we depend 100% on donations from our users to run this service.<br/><br/>
         Please keep this in mind the next time you make a contribution to a political candidate by giving us a tip.<br/><br/>
        We also invite you to support us through our Patreon: 
        <a href=\"https://www.patreon.com/powerback\">https://www.patreon.com/powerback</a><br/><br/>
        If you are so inclined, we can accept Bitcoin donations through the following address: 1Q1HmBh9Wiqg5Kv12aY2zqhAnfz1CDz7Wr .<br/><br/>
        The nation thanks you!<br/><br/><br/><br/>
        ---<br/>
        The <a href="https://powerback.me" target='__blank'
        rel='noreferrer noopener'>POWERBACK</a> Team<br/><br/><br/><br/><br/>
        Problems or questions? Call us at ${PHONE_NUMBER} or email <a href="mailto:support@powerback.me">support@powerback.me</a>`,
    ];
  },
};
