const { Bill } = require('../../../models');

module.exports = {
  lookupBill: async (bill_id) => {
    return await Bill.findOne({ bill_id: bill_id });
  },
};
