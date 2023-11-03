module.exports = {
  find: (req, res, model) => {
    model
      .findOne({ _id: req.params.userId })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
};
