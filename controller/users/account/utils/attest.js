module.exports = {
  attest: async (userPropKey, userPropValue, field, value, model) => {
    const attested = await model.countDocuments({
      [`${userPropKey}`]: {
        $exists: true,
        $eq: userPropValue,
      },
      [`${field}`]: {
        $eq: value,
      },
    });
    return Boolean(attested);
  },
};
