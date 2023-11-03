const router = require('express').Router(),
  tokenizer = require('../../auth/tokenizer'),
  Controller = require('../../controller/civics');

// All routes prefixed with '/api/civics'
router
  .route('/')
  .put(tokenizer.guard(), (req, res) => Controller.getLocalPols(req, res));

module.exports = router;
