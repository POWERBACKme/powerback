module.exports = {
  asyncUser: async (userId, model) => {
    return await model
      .find({ donatedBy: userId })
      .catch((err) => res.status(422).json(err));
  },
};
