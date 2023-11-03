const { sendEmail } = require('../../../comms');

module.exports = {
  promote: (userId, model) => {
    model
      .findOne({
        _id: userId,
      })
      .then((dbModel) => {
        const canComply = () => {
          if (
            dbModel.isEmployed === true &&
            (dbModel.occupation === '' || dbModel.employer === '')
          )
            return false;
          else if (dbModel.country !== 'United States') {
            return dbModel.passport !== '';
          } else
            return (
              dbModel.zip.length >= 5 &&
              // both initialization and empty states are falsy
              dbModel.city !== '' &&
              dbModel.state !== '' &&
              dbModel.address !== '' &&
              dbModel.lastName !== '' &&
              dbModel.firstName !== ''
            );
        };
        return canComply;
      })
      .then((canComply) => {
        if (canComply) {
          model
            .findOneAndUpdate(
              { _id: userId },
              { isCompliant: true },
              { useFindAndModify: false }
            )
            .then((dbModel) => {
              sendEmail(
                dbModel.email.length ? dbModel.email : dbModel.username,
                null,
                'Promoted',
                dbModel.firstName
              );
            });
        }
      })
      .catch((err) => {
        console.error('User Controller promote() err: ' + err);
      });
  },
};
