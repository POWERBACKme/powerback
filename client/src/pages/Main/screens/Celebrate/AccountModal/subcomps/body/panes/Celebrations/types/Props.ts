import { RefObject } from 'react';
import { HouseMember, UserData } from '@Interfaces';

type Payload = string | undefined;

type Action = {
  type: string;
  payload?: Payload;
};

export type Props = {
  switchToErrorScreen: (err: Error) => void;
  textInputRef: RefObject<HTMLInputElement>;
  filterEvents: (action: Action) => void;
  pols: HouseMember[];
  isMobile: boolean;
  user: UserData;
};
