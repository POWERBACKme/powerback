module.exports = {
  deem: async (userId, model) => {
    return Boolean(
      await model.countDocuments({
        _id: {
          $eq: userId,
        },
        isCompliant: {
          $eq: true,
        },
      })
    );
  },
};
