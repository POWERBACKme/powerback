import { useCallback, useReducer, useMemo } from 'react';
import { ServerConstants, Settings, UserData } from '@Interfaces';

interface Handlers {
  setSettings: (payload: Payload) => void;
  initSettings: () => void;
  loadSettings: () => void;
}
type Payload = string | undefined;
type Action = {
  type: string;
  payload?: Payload;
};

export default function useSettings(
  serverConstants: ServerConstants,
  user: UserData,
  init: Settings
): [Settings, Handlers] {
  const reducer = useCallback(
    (state: Settings, action: Action) => {
      switch (action.type) {
        case 'INIT': {
          return (state = serverConstants.APP.SETTINGS);
        }
        case 'LOAD':
          return (state = user.settings);
        case 'SET':
          return (state = {
            ...state,
            [action.payload as keyof Settings]:
              !state[action.payload as keyof Settings],
          });
        default:
          throw new Error();
      }
    },
    [user, serverConstants]
  );

  const [state, dispatch] = useReducer(reducer, init);

  const handlers = useMemo<Handlers>(
    () => ({
      initSettings: () => dispatch({ type: 'INIT' }),
      loadSettings: () => dispatch({ type: 'LOAD' }),
      setSettings: (payload: Payload) =>
        dispatch({ type: 'SET', payload: payload }),
    }),
    []
  );

  return [state, handlers];
}
