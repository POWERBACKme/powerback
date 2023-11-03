module.exports = {
  prune: (userDocument) => {
    const {
      __v,
      locked,
      password,
      createdAt,
      donations, // []
      updatedAt,
      accessToken,
      refreshToken,
      resetPasswordToken,
      lastUpdatedPassword,
      tryPasswordAttempts,
      resetPasswordExpires,
      resetPasswordAttempts,
      resetPasswordTokenIssueDate,
      ...pruned
    } = userDocument;
    return pruned;
  },
};
