import { useCallback, useReducer, useMemo } from 'react';
import { SwapperBtn } from '@Interfaces';
import { ERRORS } from '@Tuples';
import { View } from '@Types';

const ErrorStatusCodes: number[] = [422, 401, 777, 999];

const init: SwapperBtn = {
  view: { icon: '', msg: '' } as View,
  showError: false,
};

type Action = {
  type: string;
  payload?: number;
};

interface Handlers {
  swapToButton: () => void;
  swapToError: (errorCode: number) => void;
}

export default function useButtonErrorSwapper(): [SwapperBtn, Handlers] {
  const reducer = useCallback((state: SwapperBtn, action: Action) => {
    switch (action.type) {
      case 'BTN': {
        return (state = init);
      }
      case 'ERR': {
        return {
          ...state,
          showError: true,
          view: ERRORS[ErrorStatusCodes.indexOf(action.payload as number)],
        };
      }
      default:
        throw new Error();
    }
  }, []);

  const [state, dispatch] = useReducer(reducer, init),
    handlers = useMemo<Handlers>(() => {
      return {
        swapToButton: () => dispatch({ type: 'BTN' } as Action),
        swapToError: (errorCode: number) =>
          dispatch({ type: 'ERR', payload: errorCode } as Action),
      };
    }, []);

  return [state, handlers];
}
