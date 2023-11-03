const { lock } = require('../../account/utils');
const { sendEmail } = require('../../../comms');
const { invalidate } = require('./invalidate');
const { increment } = require('./increment');

module.exports = {
  validate: async ({ hash, model, emailTemplate, givenUsername }) => {
    let matchingUser = await model.findOne({ resetPasswordHash: hash });
    if (matchingUser === null) return;
    if (matchingUser.locked) return; // define ?
    await increment(matchingUser, 'tryPasswordAttempts', model);
    if (matchingUser.username === givenUsername) {
      sendEmail(
        matchingUser.email && matchingUser.email !== ''
          ? matchingUser.email
          : matchingUser.username,
        null,
        emailTemplate,
        null // firstName
      );
      return true;
    } else if (matchingUser.tryPasswordAttempts >= 2) {
      const locked = await lock('resetPasswordHash', hash, model);
      if (locked.ok)
        sendEmail(
          matchingUser.email && matchingUser.email !== ''
            ? matchingUser.email
            : matchingUser.username,
          null,
          'Locked',
          null // firstName
        );
      await invalidate(hash, model);
    }
    return matchingUser.tryPasswordAttempts + 1;
  },
};
