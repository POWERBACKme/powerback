const { sendEmail } = require('../../comms/');
const { verify, generate } = require('../account');

module.exports = {
  forgot: async (email, model) => {
    let verification = await verify(email, 'email', model);
    if (!verification) {
      verification = await verify(email, 'username', model);
    }
    if (!verification) {
      return;
    } else {
      const hashObj = await generate();
      if (!hashObj || hashObj === 'undefined') {
        return;
      } else {
        const matchingUser = await model.findOneAndUpdate(
          {
            $or: [{ username: { $eq: email } }, { email: { $eq: email } }],
          },
          {
            resetPasswordHash: hashObj.hash,
            resetPasswordHashExpires: hashObj.expires,
            resetPasswordHashIssueDate: hashObj.issueDate,
          },
          {
            useFindAndModify: false,
          }
        );

        if (matchingUser)
          // put something here to send a DIFFERENT email to locked accounts
          sendEmail(
            email,
            hashObj.hash,
            'Forgot',
            null // firstName
          );
      }
    }
  },
};
