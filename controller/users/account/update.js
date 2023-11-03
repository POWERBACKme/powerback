const { prune } = require('../account/utils/prune');

module.exports = {
  update: (req, res, model) => {
    const {
      _id,
      locked,
      credits,
      payment,
      password,
      username,
      createdAt,
      donations,
      updatedAt,
      isCompliant,
      understands,
      resetPasswordHash,
      tryPasswordAttempts,
      lastTimeUpdatedPassword,
      resetPasswordHashExpires,
      resetPasswordHashIssueDate,
      ...safeForClientToUpdate
    } = req.body;
    model
      .findOneAndUpdate(
        { _id: req.params.userId },
        { ...safeForClientToUpdate }, // remove any reset password links if email address is tried to be updated. then send email to OLD email address user letting them know of this change. link inside this email lets them confirm email address change, or to undo the change. this link should be valid for 7 days. https://security.stackexchange.com/questions/184497/should-a-password-reset-link-be-valid-after-changing-email
        {
          useFindAndModify: false,
        }
      )
      .then((dbModel) => res.json(prune(dbModel._doc)))
      .catch((err) => res.status(422).json(err));
  },
};
