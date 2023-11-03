const { createDonor } = require('./createDonor'),
  { setupIntent } = require('./setupIntent'),
  { createPayment } = require('./createPayment'),
  { setPaymentMethod } = require('./setPaymentMethod');

module.exports = {
  createDonor,
  setupIntent,
  createPayment,
  setPaymentMethod,
};
