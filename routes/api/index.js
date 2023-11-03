const celebrationRoutes = require('./celebrations'),
  congressRoutes = require('./congress'),
  paymentRoutes = require('./payments'),
  civicsRoutes = require('./civics'),
  userRoutes = require('./users'),
  sysRoutes = require('./sys');

const router = require('express').Router();

router.use('/sys', sysRoutes);
router.use('/users', userRoutes);
router.use('/civics', civicsRoutes);
router.use('/payments', paymentRoutes);
router.use('/congress', congressRoutes);
router.use('/celebrations', celebrationRoutes);

module.exports = router;
