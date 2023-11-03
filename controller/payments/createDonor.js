const { STRIPE } = require('../../constants'),
  stripe = require('stripe')(STRIPE.API.SK_TEST);

module.exports = {
  createDonor: async (req, res, model) => {
    const items = req.body;
    await stripe.customers
      .create(
        {
          name: items.name,
          email: items.email,
          metadata: { powerbackUserId: items.userId },
        },
        { idempotencyKey: req.body.idempotencyKey }
      )
      .then((newDonor) => {
        console.log(
          'A donor "%s" has been created! Donor ID: ',
          items.name,
          newDonor.id
        );
        model
          .updateOne(
            { _id: items.userId },
            {
              $set: {
                // come back to this to save payment method
                payment: { payment_method: '', customer_id: newDonor.id },
              },
            }
          )
          .catch((err) => res.status(422).json(err));
        res.json(newDonor.id);
      })
      .catch((err) => res.status(422).json(err));
  },
};
