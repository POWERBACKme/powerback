import { useState, useMemo } from 'react';
import { ContactInfo } from '@Interfaces';

interface Handlers {
  setFormCompliance: () => void;
}

export default function useFormCompliance(
  contactInfo: ContactInfo,
  formIsInvalid: boolean
): [boolean, Handlers] {
  const [state, setState] = useState<boolean>(false);

  const handlers = useMemo<Handlers>(
    () => ({
      setFormCompliance: () =>
        setState(() => {
          if (formIsInvalid || !contactInfo) return false;
          else if (
            contactInfo.isEmployed === true &&
            (contactInfo.occupation === '' || contactInfo.employer === '')
          )
            return false;
          else
            return (
              contactInfo.zip.length >= 5 &&
              // both initialization and empty states are falsy
              contactInfo.city !== '' &&
              contactInfo.state !== '' &&
              contactInfo.address !== '' &&
              contactInfo.lastName !== '' &&
              contactInfo.firstName !== '' &&
              (contactInfo.country === 'United States' ||
                contactInfo.passport !== '')
            );
        }),
    }),
    [contactInfo, formIsInvalid]
  );
  return [state, handlers];
}
