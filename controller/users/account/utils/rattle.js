// checks if user account is locked

module.exports = {
  rattle: async (field, value, model) => {
    return Boolean(
      await model.countDocuments({
        [`${field}`]: {
          $exists: true,
          $eq: value,
        },
        locked: {
          $eq: true,
        },
      })
    );
  },
};
