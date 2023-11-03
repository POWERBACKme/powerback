module.exports = {
  byUserId: (req, res, model) => {
    model
      .find({ donatedBy: req.params.userId })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
};
