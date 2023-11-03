import { useCallback, useReducer, useMemo } from 'react';

interface Handlers {
  setFormPath: (action: string) => void;
  resetFormPath: () => void;
  swapFormPath: () => void;
}

export default function useFormPaths(
  isDesktop: boolean,
  paths: string[]
): [string | [], Handlers] {
  const reducer = useCallback(
      (state: string | [], action: string) => {
        switch (action) {
          case paths[0]:
            return (state = paths[isDesktop ? 1 : 0]);
          case paths[1]:
            return (state = paths[isDesktop ? 0 : 1]);
          case 'SWAP': {
            return (state = paths[+!paths.indexOf(state as string)]);
          }
          case 'RESET':
            return (state = isDesktop ? 'Sign In' : []);
          default:
            throw new Error();
        }
      },
      [paths, isDesktop]
    ),
    [state, dispatch] = useReducer(reducer, []),
    handlers = useMemo<Handlers>(
      () => ({
        setFormPath: (action) => dispatch(action),
        resetFormPath: () => dispatch('RESET'),
        swapFormPath: () => dispatch('SWAP'),
      }),
      []
    );
  return [state, handlers];
}
