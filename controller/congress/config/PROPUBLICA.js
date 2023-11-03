const { API } = require('../../../constants');
require('dotenv').config();

module.exports = {
  propublica: {
    BASE_URL: process.env.REACT_APP_PROPUBLICA_BASEURI,
    paths: {
      congress: API.PROPUBLICA.CONGRESS_KEY,
    },
    HEADERS: {
      'Content-Type': 'application/json',
      'X-API-Key': API.PROPUBLICA.CONGRESS_ALTERNATE_KEY,
    },
  },
};
