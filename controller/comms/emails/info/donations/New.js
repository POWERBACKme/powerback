const localizedFormat = require('dayjs/plugin/localizedFormat'),
  advancedFormat = require('dayjs/plugin/advancedFormat'),
  { deliminate, denominate } = require('./utils'),
  accounting = require('accounting'),
  dayjs = require('dayjs');
dayjs.extend(localizedFormat);
dayjs.extend(advancedFormat);
require('dotenv').config();

const PB_TCO_URI = process.env.REACT_APP_PROD_URI,
  BTC_ADDRESS = process.env.REACT_APP_BTC_ADDRESS,
  PATREON_URI = process.env.REACT_APP_PATREON_URI,
  TWITTER_URI = process.env.REACT_APP_TWITTER_URI,
  PHONE_NUMBER = process.env.REACT_APP_PHONE_NUMBER,
  SUPPORT_EMAIL = process.env.REACT_APP_EMAIL_SUPPORT,
  TWITTER_HASHTAGS = process.env.REACT_APP_TWITTER_HASHTAGS,
  TWITTER_TEXT =
    "I just made a campaign celebration that you can't cash until action is taken on ",
  TWITTER_CTA = '! Find out at @PowerbackApp';

const handleTweetThis = (bill, donee) => {
  return (
    TWITTER_URI +
    '&hashtags=' +
    TWITTER_HASHTAGS +
    '&screen_name=' +
    donee.twitter_account +
    '&text=' +
    TWITTER_TEXT +
    bill.bill +
    (', ' + bill.short_title || '') +
    TWITTER_CTA +
    '&url=' +
    PB_TCO_URI
  );
};

const contingency = 'is brought to the House floor for a vote.';
// 'is signed into law by the President';

module.exports = {
  New: (celebration, firstName) => {
    return [
      2,
      `Your Celebration on POWERBACK #${celebration.ordinal} -  to ${celebration.donee.roles[0].short_title} ${celebration.donee.last_name}`,
      `<div style="font-family: monospace">
      Dear ${firstName ? firstName : 'Powered Citizen'},<br/><br/>
        Thank you for choosing to make your political donation with POWERBACK - the only online conduit that serves the People, <em>not</em> the politicians.<br/><br/>
        You've just made a Celebration on POWERBACK. Your action speaks volumes and is a significant step in our journey to create meaningful change.</br>
        <hr/>
        Details of your celebration:<br/><br/>
        <table style="width: 33%">
            <tr>
                <td><b>Recipient:</b></td>
                <td>${deliminate(celebration.donee)}</td>
            </tr>
                        <tr>
                <td><b>Bill:</b></td>
                <td>${denominate(celebration.bill)}</td>
            </tr>
            <tr>
                <td><b>Donation:</b></td>
                <td>${accounting.formatMoney(celebration.donation)}</td>
            </tr>
            <tr>
                <td><b>Tip:</b></td>
                <td>${accounting.formatMoney(celebration.tip)}</td>
            </tr>
            <tr>
                <td><b>Total:</b></td>
                <td>${accounting.formatMoney(
        celebration.donation + celebration.fee + celebration.tip
      )} (includes payment processing fee)</td>
            </tr>
            <tr>
                <td><b>Time of celebration:</b></td>
                <td>${dayjs(celebration.createdAt).format(
        'MMMM Do[,] YYYY [at] LT'
      )} CST</td>
            </tr>            
            <tr>
                <td><b>ID:</b></td>
                <td>${celebration.idempotencyKey}</td>
            </tr>
            <tr/>
        </table>
        <br/>
        <b>Pending delivery of your celebration occurs if/when the bill ${contingency}.</b>
        <a href=\"${handleTweetThis(
        celebration.bill,
        celebration.donee
      )}\">Share on X</a>
        <hr/>
        ${(!celebration.tip &&
        `We truly appreciate you being a member of POWERBACK. As you likely already know, we depend 100% on donations from our users to run this service.<br/><br/>
         Please keep this in mind for your next contribution by giving us a tip.<br/><br/>
        We also invite you to support us through our Patreon: 
        <a href=\"` +
        PATREON_URI +
        `\">` +
        PATREON_URI +
        `</a><br/><br/>
        If you are so inclined, we can accept Bitcoin donations through the following address: <code>${BTC_ADDRESS}</code><br/><br/>`) ||
      `Your essential support empowers everyday Americans, and together we're making our voices heard.`}
        Thank you for your Celebration and for being part of our extraordinary community.<br/>
        ---<br/>
        The <a href=\"${PB_TCO_URI}\" target=\"__blank\"
        rel=\"noreferrer noopener\">POWERBACK</a> Team<br/><br/><br/>
        Problems or questions? Call us at ${PHONE_NUMBER} or email <a href=\"mailto:${SUPPORT_EMAIL}\">${SUPPORT_EMAIL}</a>
        </div>`,
    ];
  },
};
