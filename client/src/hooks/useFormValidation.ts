import { ChangeEvent, useState, useMemo } from 'react';
import { ValidatingFields } from '@Interfaces';

interface Handlers {
  validateField: (e: ChangeEvent<HTMLInputElement>) => void;
  resetValidation: () => void;
}

export default function useFormValidation(): [ValidatingFields, Handlers] {
  const initFields = useMemo<ValidatingFields>(() => {
    return {
      phoneNumber: false,
      employment: false,
      occupation: false,
      firstName: false,
      employer: false,
      lastName: false,
      passport: false,
      address: false,
      country: false,
      email: false,
      state: false,
      city: false,
      zip: false,
    };
  }, []);
  const [state, setState] = useState<ValidatingFields>(initFields);

  const handlers = useMemo<Handlers>(
    () => ({
      validateField: (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.type !== 'text' && e.target.type !== 'select-one') {
          return;
        } else
          setState((v: ValidatingFields) => ({
            ...v,
            [e.target.name]: !e.target.checkValidity(),
          }));
      },
      resetValidation: () => setState(initFields),
    }),
    [initFields]
  );

  return [state, handlers];
}
