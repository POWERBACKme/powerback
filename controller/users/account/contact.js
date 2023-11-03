const { prune } = require('./utils');

module.exports = {
  contact: (userId, model) => {
    const contact = model
      .findOne({ _id: userId })
      .then((dbModel) => {
        const data = dbModel;
        return data;
      })
      .then((data) => {
        return prune(data._doc);
      })
      .catch((err) => console.error(err));
    return contact;
  },
};
