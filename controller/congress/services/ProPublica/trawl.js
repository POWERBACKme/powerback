const superagent = require('superagent'),
  { endpoints } = require('../../config'),
  { API } = require('../../../../constants'),
  ppKeys = ['CONGRESS_KEY', 'CONGRESS_ALTERNATE_KEY'];
require('dotenv').config();

module.exports = {
  trawl: async (fn, param) => {
    const tryCallProPublica = async (k) => {
      const response = await superagent
        .get(
          process.env.REACT_APP_PROPUBLICA_BASEURI +
            process.env.REACT_APP_PROPUBLICA_CONGRESS_SUBDIR +
            endpoints(fn, param)
        )
        .set({
          'Content-Type': 'application/json',
          'X-API-Key': API.PROPUBLICA[ppKeys[k]],
        });
      const schema = {
        // the API has inconsistent data structure. 'recent' is not wrapped in an array
        recent: JSON.parse(response.text).results,
        pols: JSON.parse(response.text).results[0],
        default: await JSON.parse(response.text).results[0],
      };
      return schema[fn] || schema.default;
    };

    try {
      return await tryCallProPublica(0);
    } catch (err) {
      console.error(
        'Controller congress service trawl.js caught error: ' +
          err +
          ' - Retrying with alt API key...'
      );
      try {
        return await tryCallProPublica(1);
      } catch (err) {
        console.error(
          'Controller congress service trawl.js caught error: ' +
            err +
            ' - All keys tried.'
        );
        return err;
      }
    }
  },
};
