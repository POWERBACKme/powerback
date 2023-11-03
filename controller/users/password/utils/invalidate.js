module.exports = {
  invalidate: async (hash, model) => {
    return await model.updateOne(
      {
        resetPasswordHash: {
          $exists: true,
          $eq: hash,
        },
      },
      {
        $set: {
          tryPasswordAttempts: 0,
          resetPasswordHash: null,
          resetPasswordHashExpires: null,
          resetPasswordHashIssueDate: null,
        },
      }
    );
  },
};
