const UserController = require('../../controller/users'),
  Controller = require('../../controller/celebrations'),
  { Celebration, User, Pol } = require('../../models'),
  tokenizer = require('../../auth/tokenizer'),
  { STRIPE } = require('../../constants'),
  router = require('express').Router();

// All routes prefixed with '/api/celebrations'
router.route('/').post(tokenizer.guard(), async (req, res) => {
  req.body.fee =
    req.body.donation * STRIPE.FEES.PERCENTAGE + STRIPE.FEES.ADDEND;
  let newCelebration = await Controller.create(req, res, Celebration);
  if (newCelebration) {
    const {
      settings: {
        autoTweet,
        showToolTips,
        showLoginLogout,
        ...autoEmailsOn
      },
    } = await UserController.contact(req.body.donatedBy, User);
    // controls auto-email via user settings
    if (autoEmailsOn.emailReceipts)
      Controller.receipt(newCelebration, User, Pol);
  }
  res.json(newCelebration);
});
router
  .route('/user/:userId')
  .get(tokenizer.guard(), (req, res) =>
    Controller.byUserId(req, res, Celebration)
  );
router
  .route('/escrow')
  .get(tokenizer.guard(), (req, res) =>
    Controller.escrowed(req, res, Celebration)
  );
router
  .route('/:celebrationId')
  .patch(tokenizer.guard(), (req, res) =>
    Controller.resolve(req, res, Celebration)
  );
router
  .route('/receipt')
  .post(tokenizer.guard(), (req, res) =>
    res.json(Controller.receipt(req.body, User, Pol))
  );

module.exports = router;
