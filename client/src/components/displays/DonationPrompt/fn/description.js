import { dollarsAndCents } from '@Utils';
import handleStateName from './stateName';

export const handleDescription = (amount, description) => {
  if (amount && description)
    return `${dollarsAndCents(amount)} for ${
      description.chamber === 'House' ? 'Rep. ' : 'Sen. '
    }
    ${description.last_name.toUpperCase()} of ${handleStateName(
      description
    )}`;
  else return 'Decide YOUR Donation:';
};
