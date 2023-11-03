module.exports = {
  byMostPopularBills: (req, res, model) => {
    model
      .find(req.query, { bill_id: 1, donation: 1 })
      .sort({ date: -1 })
      .then((dbModel) => {
        // h/t @J.S.
        let c = {}; // aggregate donations by candidate
        dbModel.forEach((d /*donation*/) => {
          c[d.bill_id] = (c[d.bill_id] || 0) + 1;
        });
        let arr = Array.from(
          dbModel.reduce(
            // reduce donation amounts
            (m, { bill_id, donation }) =>
              m.set(bill_id, (m.get(bill_id) || 0) + (donation || 0)),
            new Map()
          ),
          ([bill_id, donation]) => ({ bill_id, donation })
        );
        arr.forEach((element) => (element.count = c[element.bill_id]));
        res.json(arr);
      })
      .catch((err) => res.status(422).json(err));
  },
};
