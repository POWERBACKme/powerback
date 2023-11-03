module.exports = {
  lookupPol: async (polId, model) => {
    return await model.findOne({ id: polId });
  },
};
