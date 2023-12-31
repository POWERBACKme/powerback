const router = require('express').Router(),
  apiRoutes = require('./api'),
  path = require('path');

router.use('/api', apiRoutes);
router.use((req, res) =>
  res.sendFile(path.join(__dirname, '../client/public/index.html'))
);

module.exports = router;
