module.exports = {
  increment: async (userDocument, field, model) => {
    const incremented = await model.updateOne(userDocument, {
      $inc: {
        [field]: 1,
      },
    });
    if (incremented) {
      return userDocument.tryPasswordAttempts;
    }
  },
};
