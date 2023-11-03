const { STRIPE } = require('../../constants'),
  stripe = require('stripe')(STRIPE.API.SK_TEST);

module.exports = {
  setPaymentMethod: async (req, res) => {
    await stripe.customers
      .update(
        req.params.id,
        {
          invoice_settings: {
            default_payment_method: req.body.payment_method,
          },
        },
        { idempotencyKey: req.body.idempotencyKey }
      )
      .then(() => {
        console.log(
          'A donor has a payment method! Key: ' + req.body.payment_method
        );
      })
      .catch((err) => res.status(422).json(err));
  },
};
