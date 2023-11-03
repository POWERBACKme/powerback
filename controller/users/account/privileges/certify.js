module.exports = {
  certify: async (userId, model) => {
    return Boolean(
      await model.countDocuments({
        _id: {
          $eq: userId,
        },
        understands: {
          $eq: true,
        },
      })
    );
  },
};
