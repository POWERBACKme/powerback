import { useCallback, useReducer, Reducer, useMemo } from 'react';
import { Celebrations } from '@Interfaces';
import { Celebration } from '@Types';
import _ from 'lodash';

type Payload = string | undefined;

type Action = {
  type: string;
  payload?: Payload;
};

interface Handlers {
  setCelebrationEvents: (action: Action) => void;
}

export default function useCelebrationEvents(
  userCelebrations: Celebration[]
): [Celebrations, Handlers] {
  const reverse = (events: Celebration[]) => {
      return events.slice().reverse();
    },
    flipDonations = useMemo(() => {
      return reverse(userCelebrations);
    }, [userCelebrations]),
    initCelebrationList: Celebrations = useMemo(() => {
      return {
        events: flipDonations,
        sortedEvents: flipDonations,
        filteredEvents: flipDonations,
        sortDirection: 'descending',
        sortType: 'date',
      };
    }, [flipDonations]);

  const reducer = useCallback(
    (state: Celebrations, action: Action) => {
      const eventsNow = state.filteredEvents;
      const sortsBy = {
          date: ['createdAt', 'donation'],
          amount: ['donation', 'createdAt'],
        },
        sortsTo = {
          inAscent: state.sortDirection === 'ascending',
          inDescent: state.sortDirection === 'descending',
        };

      const checkIfEmptyOrOnlyWhitespace = (query: string) => {
          // prevents empty space messing up filter
          return query.trim().length === 0;
        },
        filterByKey = (
          events: Celebration[],
          query: string,
          key: 'NAME' | 'STATE'
        ) => {
          if (checkIfEmptyOrOnlyWhitespace(query)) return events;
          else
            return (events as Celebration[]).filter(
              (donation: Celebration) =>
                (
                  donation[
                    (key === 'NAME'
                      ? 'pol_name'
                      : 'state') as keyof Celebration
                  ] as string
                )
                  .toLowerCase()
                  .includes(query.toLowerCase())
            );
        };

      switch (action.type) {
        case 'INIT':
          return (state = initCelebrationList);
        case 'REVERSE':
          return {
            ...state,
            sortDirection: sortsTo.inDescent ? 'ascending' : 'descending',
            sortedEvents: reverse(state.sortedEvents),
            filteredEvents: reverse(eventsNow),
          };
        case 'DATE':
          return {
            ...state,
            sortType: 'date',
            sortedEvents: sortsTo.inDescent
              ? reverse(_.sortBy(state.sortedEvents, sortsBy.date))
              : _.sortBy(state.sortedEvents, sortsBy.date),
            filteredEvents: sortsTo.inDescent
              ? reverse(_.sortBy(eventsNow, sortsBy.date))
              : _.sortBy(eventsNow, sortsBy.date),
          };
        case 'AMOUNT':
          return {
            ...state,
            sortType: 'amount',
            sortedEvents: sortsTo.inDescent
              ? reverse(_.sortBy(state.sortedEvents, sortsBy.amount))
              : _.sortBy(state.sortedEvents, sortsBy.amount),
            filteredEvents: sortsTo.inDescent
              ? reverse(_.sortBy(eventsNow, sortsBy.amount))
              : _.sortBy(eventsNow, sortsBy.amount),
          };
        case 'NAME':
          return {
            ...state,
            filteredEvents: filterByKey(
              state.sortedEvents,
              action.payload as string,
              action.type
            ).length
              ? filterByKey(
                  state.sortedEvents,
                  action.payload as string,
                  action.type
                )
              : [],
          };
        default:
          throw new Error();
      }
    },
    [initCelebrationList]
  );

  const [state, dispatch] = useReducer<Reducer<Celebrations, Action>>(
    reducer,
    initCelebrationList as unknown as Celebrations
  );

  const handlers = useMemo<Handlers>(
    () => ({
      setCelebrationEvents: (action: Action) => dispatch(action),
    }),
    []
  );

  return [state, handlers];
}
