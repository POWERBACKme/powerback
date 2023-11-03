// this creates the RECORD of the donation to be stored in the database. it is NOT the creation of the actual donation payment processed by Stripe.

module.exports = {
  create: async (req, res, model) => {
    return await model
      .create(req.body)
      .catch((err) => res.status(422).json(err));
  },
};
