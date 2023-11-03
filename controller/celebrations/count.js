const { Celebration } = require('../../models');

module.exports = {
  count: async (celebration) => {
    const sorted = await Celebration.find({
      donatedBy: { $eq: celebration.donatedBy },
    }).sort({ _id: 1 });

    const getIndex = sorted
      .map((c) => c._id.toString())
      .indexOf(celebration._id);

    if (getIndex === -1) return sorted.length;
    else return getIndex + 1;
  },
};
