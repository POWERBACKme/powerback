const { sendEmail } = require('../../comms');

module.exports = {
  remove: async (userId, model, nextModel) => {
    const deletedUser = await model.findOne({ _id: { $eq: userId } });
    await nextModel.create({
      ...deletedUser,
      exId: userId,
      username: deletedUser.username,
    });
    const deleted = await deletedUser
      .delete()
      .catch((err) => res.status(422).json(err));
    if (deleted)
      sendEmail(
        deletedUser.email ? deletedUser.email : deletedUser.username,
        null,
        'Quitter',
        deletedUser.firstName ? deletedUser.firstName : null
      );
  },
};

// sendEmail!
