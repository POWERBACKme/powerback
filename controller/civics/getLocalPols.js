const { API } = require('../../constants'),
  superagent = require('superagent');
require('dotenv').config();

module.exports = {
  getLocalPols: async (req, res) => {
    const URI =
      process.env.REACT_APP_CIVICS_API_URI +
      '?address=' +
      req.body.address.replace(' ', '20%') +
      '&levels=country&roles=legislatorLowerBody&key=' +
      API.CIVICS.KEY;
    try {
      const response = await superagent.get(URI).set({
        Accept: 'application/json',
      });

      // const regexArr = [
      //     new RegExp('^ocd-division/country:us/state:[a-z]{2}$'),
      //     new RegExp(
      //       '^ocd-division/country:us/state:[a-z]{2}/cd:\\d{1,2}$'
      //     ),
      //   ],

      const [ocd_id] = Object.keys(JSON.parse(response.text).divisions);
      res.json(ocd_id);
    } catch (err) {
      console.error('getLocalPols error: ' + err);
      res.status(400).json(err);
    }
  },
};
