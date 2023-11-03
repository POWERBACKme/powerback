const { thisCampaign } = require('../this'),
  { next } = require('./next');

module.exports = {
  nextEnd: () => {
    let { end: end } = thisCampaign();
    return next(end);
  },
};
