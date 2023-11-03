const { session } = require('./session');

module.exports = {
  endpoints: (fn, param = '') => {
    const utils = {
        bill: param.slice(0, -4),
        session: param.substring(param.length - 3),
      },
      billPath = utils.session + '/bills/' + utils.bill,
      scope = {
        rollCall:
          param.congress +
          '/' +
          param.chamber +
          '/sessions/' +
          param.session_number +
          '/votes/' +
          param.status +
          '.json',
        bill: billPath + '.json',
        introduced: 'bills/search.json',
        recent: 'both/votes/recent.json',
        pol: 'members/' + param + '.json',
        cognates: billPath + '/related.json',
        cosponsors: billPath + '/cosponsors.json',
        houseMembers: billPath + '/houseMembers.json',
        upcoming: 'bills/upcoming/' + param + '.json',
        pols: session() + '/' + param + '/members.json',
      };
    return scope[fn] || new Error();
  },
};
