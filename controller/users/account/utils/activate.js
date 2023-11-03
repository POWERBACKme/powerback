const { transfer } = require('./transfer');
const { sendEmail } = require('../../../comms');

module.exports = {
  activate: async (hash, model, nextModel, storageModel) => {
    let confirmation = {
      isHashConfirmed: true,
      isLinkExpired: false,
    };
    const userExists = await model.countDocuments({
        signupHash: { $eq: hash },
      }),
      verified = Boolean(userExists);
    if (!verified) return (confirmation.isHashConfirmed = false);
    if (verified) {
      const matchingUser = await model.findOne({
        signupHash: { $eq: hash },
      });

      if (!matchingUser.signupHashExpires) return; // is this necessary if collection has same TTL in db index?
      try {
        if (matchingUser.signupHash) {
          await transfer(matchingUser, nextModel);
          const recordOfExUser = await storageModel.findOne({
            username: { $eq: matchingUser.username },
          });
          if (recordOfExUser) {
            return await recordOfExUser.delete();
          }
          await sendEmail(matchingUser.username, null, 'SignedUp', null);
          await matchingUser.remove();
          return confirmation;
        } else {
          confirmation.isHashConfirmed = false;
          return confirmation;
        }
      } catch (err) {
        return err;
      }
    }
  },
};
