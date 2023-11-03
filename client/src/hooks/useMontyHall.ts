import { useCallback, useReducer, useMemo } from 'react';

type Action = {
  type: string;
};

type Which = {
  changePassword: boolean;
  deleteAccount: boolean;
};

interface Handlers {
  openDoor: (type: string) => void;
  closeDoors: () => void;
}

export default function useMontyHall(doors: string[]): [Which, Handlers] {
  const setInit = useCallback(() => {
    let newObj: any = {};
    for (let door of doors) {
      newObj = {
        ...newObj,
        [door.substring(0, 1).toLowerCase() +
        door.slice(1).replace(' ', '')]: false,
      };
    }
    return newObj;
  }, [doors]);

  const init: Which = useMemo(() => {
    return setInit();
  }, [setInit]);

  // what's behind door #2...
  const reducer = useCallback(
    (state: Which, action: Action) => {
      switch (action.type) {
        case action.type: {
          return (state = {
            ...init,
            [action.type.substring(0, 1).toLowerCase() +
            action.type.slice(1).replace(' ', '')]: true,
          });
        }
        case 'RESET': {
          return (state = init);
        }
        default:
          throw new Error();
      }
    },
    [init]
  );

  const [state, dispatch] = useReducer(reducer, init, setInit);

  const handlers = useMemo<Handlers>(
    () => ({
      openDoor: (type) => dispatch({ type: type }),
      closeDoors: () => dispatch({ type: 'RESET' }),
    }),
    []
  );

  return [state, handlers];
}
