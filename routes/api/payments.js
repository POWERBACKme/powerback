const Controller = require('../../controller'),
  { Celebration, User } = require('../../models'),
  { FEC, STRIPE } = require('../../constants'),
  tokenizer = require('../../auth/tokenizer'),
  router = require('express').Router();

// All routes prefixed with '/api/payments'
router
  .route('/intents/:id')
  .post(tokenizer.guard(), (req, res) =>
    Controller.payments.setupIntent(req, res)
  );
router
  .route('/donors/:id')
  .post(tokenizer.guard(), (req, res) =>
    Controller.payments.setPaymentMethod(req, res)
  );
router
  .route('/donors')
  .post(tokenizer.guard(), (req, res) =>
    Controller.payments.createDonor(req, res, User)
  );
router
  .route('/celebrations/:customer_id')
  .post(tokenizer.guard(), async (req, res) => {
    try {
      const donationAmount = req.body.donation;
      req.body.fee =
        donationAmount * STRIPE.FEES.PERCENTAGE + STRIPE.FEES.ADDEND;

      const compliance = await Controller.users.deem(
          req.body.donatedBy,
          User
        ),
        celebrations = await Controller.celebrations.asyncUser(
          req.body.donatedBy,
          Celebration
        ),
        donationLimit = await Controller.users.accrue(
          FEC,
          celebrations,
          compliance,
          req.body.pol_id
        ),
        donationIsCompliant = donationAmount <= donationLimit,
        understandsEligibility = await Controller.users.certify(
          req.body.donatedBy,
          User
        );

      if (
        understandsEligibility === false ||
        donationIsCompliant === false
      ) {
        // Controller.users.strike(req.body.donatedBy, User); // three strikes and account is locked
        res.json({
          donation: donationAmount,
          complies: donationIsCompliant,
          understands: understandsEligibility,
        });
      } else if (understandsEligibility && donationIsCompliant) {
        // prevent user from changing the bill to anything else (for now)
        req.body.bill_id = 'hr3421-118';
        Controller.payments.createPayment(req, res);
      } else throw Error('Payment failed.');
    } catch (err) {
      console.error(err);
      res.statusCode = '500';
      res.send(err.message);
    }
  });

module.exports = router;
