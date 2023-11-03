import { SyntheticEvent, KeyboardEvent, MouseEvent } from 'react';

export type HideEvent =
  | SyntheticEvent<any, CloseEvent>
  | KeyboardEvent<HTMLElement>
  | MouseEvent<HTMLElement>;
