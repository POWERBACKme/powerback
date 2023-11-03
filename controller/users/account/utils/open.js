module.exports = {
  open: async (sash, model) => {
    const locked = await model.updateOne(
      {
        signupToken: {
          $exists: true,
          $eq: sash,
        },
      },
      {
        $set: {
          locked: false,
        },
      }
    );
  },
};
