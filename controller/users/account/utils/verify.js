module.exports = {
  verify: async (value, field, model) => {
    return await model.countDocuments({
      [`${field}`]: {
        $exists: true,
        $eq: value,
      },
    });
  },
};
