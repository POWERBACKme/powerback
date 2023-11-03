import { useCallback, useReducer, useMemo } from 'react';
import { ControlCategory, UserData } from '@Interfaces';
import { FieldControl } from '@Types';

interface Handlers {
  setFieldList: () => void;
}

export default function useFieldList(
  user: UserData,
  activeTab: string,
  CONTROLS: ControlCategory[],
  isMobile: boolean
): [FieldControl[], Handlers] {
  const reducer = useCallback(
      (state: FieldControl[]) => {
        let { country, isEmployed, isCompliant, ...initialFields } = user;
        state = CONTROLS.filter(
          (subForm) => subForm.eventKey !== activeTab
        )
          .map((subForm) => subForm.controls)
          .flat()
          .filter((control) => {
            if (isMobile) {
              if (
                control.required ||
                control['name'] === 'occupation' ||
                control['name'] === 'employer'
              ) {
                return (
                  ((initialFields as UserData)[
                    control['name'] as keyof UserData
                  ] as string) === '' || control['name'] === 'isEmployed'
                );
              } else return false;
            } else return control.required;
          });
        return state;
      },
      [CONTROLS, isMobile, activeTab, user]
    ),
    [state, setState] = useReducer(reducer, []);

  const handlers = useMemo<Handlers>(() => {
    return {
      setFieldList: () => setState(),
    };
  }, []);
  return [state, handlers];
}
