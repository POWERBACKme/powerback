const { trawl } = require('../../services');

module.exports = {
  getPol: async (req, res, model) => {
    const candidateId = req.params.id;
    if (candidateId === null) res.status(400).json(err);
    else
      model
        .countDocuments({ id: { $eq: candidateId } })
        .then(async (inStorage) => {
          if (inStorage === 0) {
            console.log('Adding Pol#' + candidateId + ' to db party to unfulfilled donation.');
            const document = await trawl('pol', candidateId);
            model.create(document);
            res.json(document);
          } else
            model
              .findOne({ id: candidateId })
              .then((dbModel) => res.json(dbModel))
              .catch((err) => res.status(422).json(err));
        })
        .catch((err) => console.error('getPol error: ' + err));
  },
};
