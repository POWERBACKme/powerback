import React, {
  useMemo,
  Dispatch,
  useCallback,
  SetStateAction,
} from 'react';
import { ContinueBtn } from '@Components/buttons';
import { UserData } from '@Interfaces';
import accounting from 'accounting';
import { Props } from '@Types';
import API from '@API';
import './style.css';

const Compliance = ({
  switchToErrorScreen,
  handleAccountUpdate,
  formCompliance,
  formIsInvalid,
  setShowAlert,
  LEGAL_LIMIT,
  setUserData,
  isMobile,
  user,
}: Props) => {
  const ASK = useMemo(() => {
    return [
      <span>
        Need to donate more than{' '}
        <span className='dollar-limit'>
          {accounting.formatMoney((LEGAL_LIMIT as number[])[0], '$', 0)}
        </span>{' '}
        to an individual candidate per campaign cycle? Simply fill out this
        three-part form and let{' '}
        <span className='powerback'>POWERBACK</span> be responsible for
        your compliance with the{' '}
        <abbr title='Federal Election Commission'>FEC</abbr>.
      </span>,
      <span className='meets-compliance'>
        Your Profile meets the compliance requirements of the{' '}
        <abbr title='Federal Election Commission'>FEC</abbr> to donate up
        to{' '}
        <span className='dollar-limit'>
          {accounting.formatMoney((LEGAL_LIMIT as number[])[1], '$', 0)}
        </span>{' '}
        per politician, per campaign cycle.
      </span>,
    ];
  }, [LEGAL_LIMIT]);
  const handlePromoteAccount = useCallback(() => {
    if (!user) {
      return;
    } else {
      API.promoteDonor(user.id)
        .then(() => {
          (setUserData as Dispatch<SetStateAction<UserData>>)(
            (u: UserData) => ({
              ...u,
              isCompliant: formCompliance,
            })
          );
          (handleAccountUpdate as () => void)();
          setShowAlert((s) => ({ ...s, update: true }));
        })
        .catch((err) =>
          (switchToErrorScreen as (err: Error) => void)(err)
        );
    }
  }, [
    switchToErrorScreen,
    handleAccountUpdate,
    formCompliance,
    setShowAlert,
    setUserData,
    user,
  ]);
  return (
    user && (
      <div className='profile-form-ask px-lg-4 mb-lg-4'>
        <p>
          {
            ASK[
              +(
                ((user as UserData).isCompliant as boolean) ||
                (formCompliance as boolean)
              )
            ]
          }
        </p>
        {formCompliance && !user.isCompliant && !formIsInvalid ? (
          <ContinueBtn
            classProp={'submit-btn compliance mt-lg-1'}
            handleClick={handlePromoteAccount}
            label={'START DONATING MORE'}
            type={'button'}
            size={'sm'}
          />
        ) : user.isCompliant && !isMobile ? (
          <p className='reminder'>Please keep your information current.</p>
        ) : (
          <></>
        )}
      </div>
    )
  );
};

export default React.memo(Compliance);
