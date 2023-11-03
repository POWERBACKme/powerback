import { Role } from '@Types';

export type HouseMember = {
  _id: string;
  middle_name?: string;
  facebook_account?: string;
  google_entity_id?: string;
  most_recent_vote?: string;
  times_topics_url?: string;
  youtube_account?: string;
  twitter_account?: string;
  date_of_birth?: string;
  last_updated?: string;
  votesmart_id?: string;
  govtrack_id?: string;
  first_name: string;
  in_office: boolean;
  times_tag?: string;
  cspan_id?: string;
  icpsr_id?: string;
  last_name: string;
  member_id: string;
  createdAt?: Date;
  updatedAt?: Date;
  rss_url?: string;
  crp_id?: string;
  gender?: string;
  suffix?: string;
  url?: string;
  id: string;
  roles: [Role];
};