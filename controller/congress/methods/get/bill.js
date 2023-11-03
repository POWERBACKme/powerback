const { trawl } = require('../../services');

module.exports = {
  getBill: async (req, res, model) => {
    const bill_id = req.params.id;
    model
      .countDocuments({ bill_id: { $eq: bill_id } })
      .then(async (inStorage) => {
        if (inStorage === 0) {
          const document = await trawl('bill', bill_id);
          model.create(document);
          res.json(document);
        } else
          model
            .findOne({ bill_id: bill_id })
            .then((dbModel) => res.json(dbModel))
            .catch((err) => res.status(422).json(err));
      })
      .catch((err) => console.error('getBill error: ' + err));
  },
};
