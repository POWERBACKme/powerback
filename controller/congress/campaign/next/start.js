const { thisCampaign } = require('../this'),
  { next } = require('./next');

module.exports = {
  nextStart: () => {
    let { start: start } = thisCampaign();
    return next(start);
  },
};
