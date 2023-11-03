const { lookupBill, lookupPol } = require('../congress'),
  { sendEmail } = require('../comms'),
  { contact } = require('../users'),
  { count } = require('./count');

module.exports = {
  receipt: async (celebration, userModel, polModel) => {
    celebration.ordinal = await count(celebration);
    const donee = await lookupPol(celebration.pol_id, polModel),
      donor = await contact(celebration.donatedBy, userModel),
      bill = await lookupBill(celebration.bill_id);
    celebration.donee = donee;
    celebration.bill = bill;
    await sendEmail(
      donor.email ? donor.email : donor.username,
      celebration,
      'New',
      donor.firstName ?? donor.firstName
    );
  },
};
