module.exports = {
  resolve: (req, res, model) => {
    model
      .updateOne(
        {
          _id: {
            $exists: true,
            $eq: req.params.donationId,
          },
        },
        {
          $set: {
            satisfied: true,
            satisfiedDate: Date.now(),
          },
        }
      )
      .catch((err) => res.status(422).json(err));
  },
};

//sendEmail!
