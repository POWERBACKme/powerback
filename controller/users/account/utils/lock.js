module.exports = {
  lock: async (field, hash, model) => {
    return await model.updateOne(
      {
        [`${field}`]: {
          $exists: true,
          $eq: hash,
        },
      },
      {
        $set: {
          locked: true,
        },
      }
    );
  },
};
