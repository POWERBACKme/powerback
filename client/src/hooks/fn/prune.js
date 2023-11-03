// initialization function for account profile form reducer formats userData to match contactInfo object

const prune = (user) => {
  if (!user) {
    return;
  }
  const {
    id,
    _id,
    __v,
    locked,
    credits,
    payment,
    password,
    settings,
    username,
    createdAt,
    donations,
    updatedAt,
    // isCompliant,
    understands,
    resetPasswordHash,
    tryPasswordAttempts,
    lastTimeUpdatedPassword,
    resetPasswordHashExpires,
    resetPasswordHashIssueDate,
    ...pruned
  } = user;
  return pruned;
};

export default prune;
