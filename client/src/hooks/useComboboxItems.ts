import { useCallback, useReducer, useMemo } from 'react';
import { HouseMember, RepState } from '@Interfaces';
import { ComboboxItem } from '@Types';
import { POLSTATES } from '@Tuples';

type Action = {
  type: string;
  payload?: {
    value: ComboboxItem;
  };
};

interface Handlers {
  setInputItems: (value: ComboboxItem[]) => void;
  resetSearchBar: () => void;
}

export default function useComboboxItems(
  itemToString: (item: ComboboxItem | null) => string,
  init: HouseMember[],
  category: string
): [ComboboxItem[], Handlers] {
  const reducer = useCallback(
    (state: ComboboxItem[], action: Action) => {
      switch (action.type) {
        case 'NAME':
          return (state = init
            .filter((pol) =>
              (itemToString(pol as HouseMember) as string)
                .toLowerCase()
                .includes(
                  (action.payload as unknown as string).toLowerCase()
                )
            )
            .sort((a, b) => a.first_name.localeCompare(b.first_name))
            .sort((a, b) => a.last_name.localeCompare(b.last_name)));
        case 'STATE': {
          return (state = POLSTATES.filter((STATE: RepState) => {
            return (itemToString(STATE) + STATE.abbrev)
              .toLowerCase()
              .includes(
                (action.payload as unknown as string).toLowerCase()
              );
          }));
        }
        case 'DISTRICT': {
          return state;
        }
        case 'RESET':
          return (state = init);
        default: {
          throw new Error();
        }
      }
    },
    [itemToString, init]
  );

  const [state, dispatch] = useReducer(reducer, init);

  const handlers = useMemo<Handlers>(
    () => ({
      setInputItems: (value: ComboboxItem[]) =>
        dispatch({ type: category, payload: value } as unknown as Action),
      resetSearchBar: () => dispatch({ type: 'RESET' }),
    }),
    [category]
  );

  return [state, handlers];
}
