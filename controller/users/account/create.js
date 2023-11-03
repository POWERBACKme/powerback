const { sendEmail } = require('../../comms');
const { APP } = require('../../../constants');
const { generate } = require('../account/utils/hash');

module.exports = {
  create: async (newPowerbacker, model) => {
    const hashObj = await generate('signup');
    try {
      const created = await model.create({
        ...newPowerbacker,
        settings: APP.SETTINGS,
        signupHash: hashObj.hash,
        signupHashExpires: hashObj.expires,
        signupHashIssueDate: hashObj.issueDate,
      });
      if (created) {
        sendEmail(
          newPowerbacker.username,
          hashObj.hash,
          'SigningUp',
          null
        );
      }
    } catch (err) {
      return err;
    }
  },
};
