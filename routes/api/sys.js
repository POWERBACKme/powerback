const router = require('express').Router(),
  tokenizer = require('../../auth/tokenizer'),
  Controller = require('../../controller/sys');

// All routes prefixed with '/api/sys'
router
  .route('/errors/img/:pol')
  .put(tokenizer.guard(), (req, res) =>
    Controller.notifyImageErr(req, res)
  );
router.route('/constants').get(async (req, res) => {
  res.json(await Controller.pullConstants());
});

module.exports = router;
