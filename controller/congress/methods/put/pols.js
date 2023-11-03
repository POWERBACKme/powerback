const { trawl } = require('../../services'),
  _ = require('lodash');

// consumes an array of Congress members' unique bio ID numbers
// compares them to the IDs of all members already stored in DB
// then fetches any new pols from ProPublica
// adds new documents to "Pol" collection
// then returns the complete pol information corresponding to each ID requested

module.exports = {
  fetchUpdatedPols: (req, res, model) => {
    let dbQuery = {};
    if (Object.keys(req.body).length) dbQuery = { id: { $in: req.body } };
    // creates array of IDs mapping to those in db collection matching those from req.body
    model
      .find(dbQuery)
      .then((polsAlreadyInDB) => {
        const diff = _.difference(
          req.body,
          polsAlreadyInDB.map((pol) => pol.id) // cleans req.body array of IDs matching documents already stored in db
        );
        if (diff.length) {
          // condition is if there are any IDs remaining (i.e. new pols that are not yet stored in db)
          let getFnArr = [];
          for (const id of diff) {
            getFnArr.push(trawl('pol', id)); // fetches IDs one by one from ProPublica API
            // ** CONSIDER INSTEAD, GET MEMBERS FROM HOUSE AND SENATE, THEN PRUNE THEM USING THE IDS! NOW YOU ONLY NEED TO DO TWO REQUESTS!"
          }
          getFnArr.filter((pol) => pol.in_office); // filter out anyone no longer in office
          // console.log(getFnArr);
          // getFnArr.filter((pol) => pol.roles[0].chamber === 'House');
          Promise.allSettled(getFnArr).then((promiseArr) => {
            let newPolsForDB = [];
            for (const promise of promiseArr) {
              if (promise.value.roles[0].chamber !== 'House') {
                // filters out Senators that are sneaking in for some strange reason ... *** THIS WON'T WORK IF I DO THE "ALL-CAPS" METHOD MENTIONED ABOVE BECAUSE POLS PUPLLED FROM THAT ENDPOINT DON'T INCLUDE "ROLES" ***
                return;
              } else {
                newPolsForDB.push(promise.value);
                model.create(promise.value); // after receiving data, write new pol documents to db
                console.log(
                  '[ADDITION] Pol ' +
                  promise.value.id +
                  ' added to database.'
                );
              }
            }
            if (polsAlreadyInDB == 0) {
              // if there were no matches to begin with (i.e. all IDs contained in req.body were not in db)
              res.json(newPolsForDB); // return only new pols (which is the entire collection!)
            } else res.json(newPolsForDB.concat(polsAlreadyInDB)); // otherwise put the two lists together (which is now the entire collection)
          });
          return;
        } else res.json(polsAlreadyInDB); // this means all the pols in req.body already were stored in db, so simply return them
      })
      .catch((err) => {
        console.error('getPols error: ' + err);
        res.sendStatus(500).json();
      });
  },
};
