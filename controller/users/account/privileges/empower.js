module.exports = {
  empower: (userId, model) => {
    return model
      .updateOne(
        {
          _id: {
            $exists: true,
            $eq: userId,
          },
        },
        {
          $set: {
            understands: true,
          },
        }
      )
      .catch((err) => {
        console.error('User Controller bestow() err: ' + err);
      });
  },
};
