import { useCallback, useReducer, useMemo } from 'react';
import { ContactInfo, UserData, Payload } from '@Interfaces';
import { prune, normalize } from './fn';

interface Handlers {
  setContactInfo: ({ name, value }: Payload) => void;
  loadContactInfo: () => void;
  setIntl: () => void;
}
type ContactInfoKey = keyof ContactInfo;

type Action = {
  type: string;
  payload: Payload;
};

export default function useContactInfo(
  user: UserData
): [ContactInfo, Handlers] {
  const initialArg = useMemo<ContactInfo>(() => prune(user), [user]);
  const reducer = useCallback(
    (state: ContactInfo, action: Action) => {
      switch (action.type) {
        case 'LOAD':
          // isCompliant keeps returning to this object, despite prune(), so just hard delete here.
          let contactInfoOnly = initialArg;
          delete contactInfoOnly['isCompliant' as ContactInfoKey];
          return contactInfoOnly;
        case 'SET':
          return {
            ...state,
            [action.payload.name]:
              action.payload.name === 'phoneNumber'
                ? normalize(
                    action.payload.value,
                    state[action.payload.name]
                  )
                : action.payload.value,
          };
        // clears input field if 'Zip' changes to 'Postal Code'
        case 'INTL':
          return { ...state, zip: '' };
        default:
          throw new Error();
      }
    },
    [initialArg]
  );

  const [state, dispatch] = useReducer(reducer, initialArg);

  const handlers = useMemo<Handlers>(
    () => ({
      setContactInfo: ({ name, value }: Payload) => {
        dispatch({ type: 'SET', payload: { name, value } });
      },
      loadContactInfo: () => {
        dispatch({ type: 'LOAD' } as Action);
      },
      setIntl: () => {
        dispatch({ type: 'INTL' } as Action);
      },
    }),
    []
  );
  return [state, handlers];
}
