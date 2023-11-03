const { STRIPE } = require('../../constants'),
  stripe = require('stripe')(STRIPE.API.SK_TEST);

module.exports = {
  createPayment: async (req, res) => {
    const retrievedDonor = await stripe.customers.retrieve(
        req.params.customer_id
      ),
      paymentIntent = await stripe.paymentIntents.create(
        {
          currency: 'usd',
          customer: req.params.customer_id,
          setup_future_usage: 'on_session',
          payment_method:
            retrievedDonor.invoice_settings.default_payment_method,
          amount: Math.floor(
            (req.body.fee + req.body.tip + req.body.donation) * 100
          ),
        },
        { idempotencyKey: req.body.idempotencyKey }
      );
    console.log(
      `A donation of $${req.body.donation.toFixed(2)}${
        req.body.tip ? ' with a $' + req.body.tip.toFixed(2) + ' tip' : ''
      } was just made!`
    );
    res.send({
      paymentIntent: paymentIntent.id,
      clientSecret: paymentIntent.client_secret,
    });
  },
};
