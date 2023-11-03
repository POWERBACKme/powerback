const { sendEmail } = require('../../comms/');
const bcrypt = require('bcryptjs');
SALT_WORK_FACTOR = 10;

// make sure password is different from old one?

module.exports = {
  change: (req, res, model) => {
    bcrypt.genSalt(SALT_WORK_FACTOR, (err, salt) => {
      bcrypt.hash(req.body.newPassword, salt, (err, cipher) => {
        model
          .findOneAndUpdate(
            { username: { $eq: req.body.username } },
            {
              password: cipher,
              tryPasswordAttempts: 0,
              resetPasswordHash: null,
              resetPasswordHashExpires: null,
              resetPasswordHashIssueDate: null,
              lastTimeUpdatedPassword: new Date(),
            },
            {
              useFindAndModify: false,
            }
          )
          .then((dbModel) => {
            if (err)
              return res.status(400).json({
                error: err,
              });
            const user = dbModel;
            return user;
          })
          .then((user) => {
            if (user)
              // put something here to send a DIFFERENT email to locked accounts
              sendEmail(
                user.email && user.email !== ''
                  ? user.email
                  : user.username,
                null,
                'Change',
                null // firstName
              );
          })
          .catch((err) => console.error(err));
      });

      if (err)
        return res.status(400).json({
          error: err,
        });
    });

    res.json('Your password has been successfully changed.');
  },
};
