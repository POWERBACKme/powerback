const router = require('express').Router(),
  { Pol, Bill } = require('../../models'),
  tokenizer = require('../../auth/tokenizer'),
  Controller = require('../../controller/congress');

// All routes prefixed with '/api/congress'
router
  .route('/bills/:id')
  .get(tokenizer.guard(), (req, res) =>
    Controller.getBill(req, res, Bill)
  );
router.route('/pols').put(tokenizer.guard(), (req, res) => {
  Controller.fetchUpdatedPols(req, res, Pol);
});
router
  .route('/pols/:id')
  .get(tokenizer.guard(), (req, res) => Controller.getPol(req, res, Pol));

module.exports = router;
