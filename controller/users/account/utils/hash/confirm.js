const { invalidate } = require('../../../password/utils/invalidate');

module.exports = {
  confirm: async (hash, model) => {
    let confirmation = {
      // firstName: '',
      isHashConfirmed: true,
      isLinkExpired: false,
    };
    const userExists = await model.countDocuments({
      resetPasswordHash: { $eq: hash },
    });

    const verified = Boolean(userExists);

    if (!verified) return;
    if (verified) {
      const matchingUser = await model.findOne({
        resetPasswordHash: { $eq: hash },
      });
      if (!matchingUser.resetPasswordHashExpires) return;
      else if (
        Date.now() - matchingUser.resetPasswordHashExpires.getTime() >=
        0
      )
        confirmation.isLinkExpired = true;
    } else {
      await invalidate(hash, model);
      confirmation.isHashConfirmed = false;
    }
    return confirmation;
  },
};
