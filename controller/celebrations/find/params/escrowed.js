module.exports = {
  escrowed: (req, res, model) => {
    model
      .find(req.query, { pol_id: 1, donation: 1 })
      .sort({ date: -1 })
      .then((dbModel) => {
        let b = {};
        dbModel.forEach((el) => {
          b[el.pol_id] = (b[el.pol_id] || 0) + 1;
        });
        let arr = Array.from(
          dbModel.reduce(
            (m, { pol_id, donation }) =>
              m.set(pol_id, (m.get(pol_id) || 0) + (donation || 0)),
            new Map()
          ),
          ([pol_id, donation]) => ({ pol_id, donation })
        );
        arr.forEach((element) => (element.count = b[element.pol_id]));
        res.json(arr);
      })
      .catch((err) => res.status(422).json(err));
  },
};

// duplicate this function into one that returns the donations for a single bill only. will need to bundle up the bill_id or something with the request for that to happen.
