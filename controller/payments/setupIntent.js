const { STRIPE } = require('../../constants'),
  stripe = require('stripe')(STRIPE.API.SK_TEST);

module.exports = {
  setupIntent: async (req, res) => {
    const intent = await stripe.setupIntents.create(
      {
        usage: 'on_session',
        customer: req.params.id,
        payment_method_types: ['card'],
      },
      { idempotencyKey: req.body.idempotencyKey }
    );
    res.send({
      customer: req.params.id,
      clientSecret: intent.client_secret,
    });
  },
};
