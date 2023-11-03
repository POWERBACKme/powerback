const bcrypt = require('bcryptjs');
SALT_WORK_FACTOR = 10;
require('dotenv').config();

// make sure password is different from old one?

module.exports = {
  reset: (req, res, model) => {
    let password = req.body.newPassword;
    bcrypt.genSalt(SALT_WORK_FACTOR, (err, salt) => {
      bcrypt.hash(password, salt, (err, cipher) => {
        model
          .updateOne(
            { username: req.body.givenUsername },
            {
              $set: {
                password: cipher,
                tryPasswordAttempts: 0,
                resetPasswordHash: null,
                resetPasswordHashExpires: null,
                resetPasswordHashIssueDate: null,
                lastTimeUpdatedPassword: new Date(),
              },
            }
          )
          .catch((err) => res.status(422).json(err));
        if (err) console.error(err);
        res.json('Your password has been successfully reset.');
      });
      if (err) console.error(err);
    });
  },
};
