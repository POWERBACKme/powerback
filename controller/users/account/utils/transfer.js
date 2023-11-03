const { APP } = require('../../../../constants');

module.exports = {
  transfer: (applicant, userModel) => {
    userModel
      .create({
        ...applicant,
        settings: APP.SETTINGS,
        username: applicant.username,
        password: applicant.password,
      })
      .catch((err) => {
        return err;
      });
  },
};
