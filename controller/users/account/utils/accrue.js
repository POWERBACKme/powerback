const { cutoff } = require('../../../congress');

// a backend version of useDonationLimit custom hook

module.exports = {
  accrue: (FEC, donations, compliance, pol_id) => {
    const complianceCeiling = FEC.LEGAL_LIMIT[+compliance],
      getDonationTotalForPol = () => {
        const validateDonation = (madeDonation) => {
            if (
              !madeDonation ||
              // only include donations for the candidate
              madeDonation.pol_id !== pol_id ||
              // only include current donations of this cycle
              !cutoff(madeDonation.createdAt) ||
              // only include unresolved donations
              madeDonation.resolved ||
              //  only include active donations *what does this mean anyway? is there a difference between resolved and defunct?
              madeDonation.defunct
            ) {
              return;
            } else return madeDonation;
          },
          donationsThisElection = donations.filter((d) =>
            validateDonation(d)
          );

        if (!donationsThisElection || donationsThisElection.length === 0) {
          return 0;
        } else
          return donationsThisElection
            .map((d) => d.donation)
            .reduce((a, b) => a + b);
      };

    return complianceCeiling - getDonationTotalForPol();
  },
};
