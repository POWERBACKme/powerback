import { calcDays } from '@Utils';

export const transformPolData = (choice) => {
  return {
    name: choice.first_name + ' ' + choice.last_name,
    start_date: calcDays(choice.roles[0].start_date),
    end_date: calcDays(choice.roles[0].end_date),
    FEC_id: choice.roles[0].fec_candidate_id,
    middle_name: choice.middle_name ?? null,
    district: choice.roles[0].district,
    chamber: choice.roles[0].chamber,
    twitter: choice.twitter_account,
    first_name: choice.first_name,
    state: choice.roles[0].state,
    last_name: choice.last_name,
    id: choice.id,
  };
};
