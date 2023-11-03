const CONSTANTS = require('../../constants');

module.exports = {
  pullConstants: () => {
    const { STRIPE, SERVER, EMAIL, API, ...safeConstants } = CONSTANTS;
    return safeConstants;
  },
};
