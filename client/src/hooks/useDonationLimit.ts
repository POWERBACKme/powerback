import { useCallback, useReducer, useMemo } from 'react';
import { UserData, PolData } from '@Interfaces';
import { Celebration } from '@Types';
import { FEC } from '@CONSTANTS';
import { cutoff } from '@Utils';

const SUGGESTED = [
  [5, 10, 25, 50], // non-compliant
  [25, 100, 250, 1000], // compliant
];

type Action = {
  type: string;
};

interface Handlers {
  setDonationLimit: () => void;
}

export default function useDonationLimit(
  LEGAL_LIMIT: number[],
  userData: UserData,
  polData: PolData
): [number[], Handlers] {
  const complianceCeiling = useMemo(() => {
    if (!LEGAL_LIMIT) return FEC.LEGAL_LIMIT[0];
    else if (!userData) return LEGAL_LIMIT[0];
    else
      return LEGAL_LIMIT[+((userData as UserData).isCompliant as boolean)];
  }, [userData, LEGAL_LIMIT]);

  const getDonationTotalForPol = useCallback(() => {
    function validateDonation(madeDonation: Celebration) {
      if (
        !madeDonation ||
        // only include donations for the candidate
        madeDonation.pol_id !== polData.id ||
        // only include current donations of this cycle
        !cutoff(madeDonation.createdAt) ||
        // only include unresolved donations
        madeDonation.resolved ||
        //  only include active donations *what does this mean anyway? is there a difference between resolved and defunct?
        madeDonation.defunct
      ) {
        return;
      } else return madeDonation;
    }

    function donationsThisElection() {
      if (userData === void 0) {
        return [];
      } else if (userData.donations === void 0) return [];
      else if (userData.donations.length) {
        return (userData.donations as Celebration[]).filter((d) =>
          validateDonation(d)
        );
      }
    }

    if (
      !donationsThisElection() ||
      (donationsThisElection() as Celebration[]).length === 0
    ) {
      return 0;
    } else
      return (donationsThisElection() as Celebration[])
        .map((d) => d.donation)
        .reduce((a, b) => a + b);
  }, [polData, userData]);

  const remainingDonationLimit = useMemo(() => {
    return complianceCeiling - getDonationTotalForPol();
  }, [complianceCeiling, getDonationTotalForPol]);

  const reducer = useCallback(
    (state: number[], action: Action) => {
      let calculatedSuggestions = SUGGESTED[
        +((userData as UserData).isCompliant as boolean)
      ].filter((n) => n < remainingDonationLimit / 2);
      const max = [remainingDonationLimit];
      switch (action.type) {
        case 'CHANGE': {
          if (calculatedSuggestions.length > 0) {
            let allSuggestions = calculatedSuggestions.concat(max);
            return (state = allSuggestions);
          } else if (remainingDonationLimit > 0) {
            return (state = max);
          } else return (state = []);
        }
        default:
          throw new Error();
      }
    },
    [userData, remainingDonationLimit]
  );

  const [state, dispatch] = useReducer(
    reducer,
    SUGGESTED[0].concat(LEGAL_LIMIT)
  );

  const handlers = useMemo<Handlers>(
    () => ({
      setDonationLimit: () => {
        dispatch({ type: 'CHANGE' });
      },
    }),
    []
  );
  return [state, handlers];
}
