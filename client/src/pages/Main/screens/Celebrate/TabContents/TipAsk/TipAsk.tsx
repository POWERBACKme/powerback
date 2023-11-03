import React, {
  useMemo,
  Dispatch,
  useState,
  useCallback,
  SetStateAction,
} from 'react';
import { ShowAlert, UserData, PolData, Bill } from '@Interfaces';
import { useStripe } from '@stripe/react-stripe-js';
import { CHECKOUT, RECOMMENDED } from '@CONSTANTS';
import { AlertDonated } from '@Components/alerts';
import { ContinueBtn } from '@Components/buttons';
import { BtnGrid } from '@Components/interactive';
import Spinner from 'react-bootstrap/esm/Spinner';
import Card from 'react-bootstrap/esm/Card';
import { Stripe } from '@stripe/stripe-js';
import { donationFailure } from '@Utils';
import { useSpinner } from '@Hooks';
import { nanoid } from 'nanoid';
import API from '@API';
import './style.css';
import {
  CelebrationRejection,
  Celebration,
  UserEvent,
  Props,
} from '@Types';

const TipAsk = ({
  setRejectedDonationReasons,
  setPaymentProcessed,
  paymentProcessed,
  setPaymentError,
  refreshAppState,
  resetSearchBar,
  paymentError,
  setUserData,
  isDesktop,
  donation,
  userData,
  donorId,
  polData,
  setTip,
  bill,
  tip,
  ...props
}: Props) => {
  const stripe: Stripe | null = useStripe();

  type SentPayment = {
    clientSecret: string;
    paymentIntent: string;
  };

  const tipAsk =
      (donation as number) >= RECOMMENDED.TIPS.THRESHOLD
        ? RECOMMENDED.TIPS.HIGH
        : RECOMMENDED.TIPS.LOW,
    btnLabel = tip !== 0 ? 'Add tip' : 'Continue';

  const donationPackage = useMemo(() => {
    return {
      idempotencyKey: nanoid(),
      FEC_id: polData ? (polData as PolData).FEC_id : '',
      pol_name: polData ? (polData as PolData).name : '',
      bill_id: bill ? (bill as Bill).bill_id : '',
      donatedBy: userData
        ? userData.id
          ? userData.id
          : 'donatedBy ?'
        : 'donatedBy ?',
      pol_id: polData ? (polData as PolData).id : '',
      donation: donation ?? 0,
      tip: tip ?? 0,
      twitter: polData ? (polData as PolData).twitter : '',
    };
  }, [tip, bill, polData, userData, donation]);

  const processDonation = useCallback(
    async (data: SentPayment) => {
      return await (stripe as Stripe)
        .confirmCardPayment(data.clientSecret)
        .then(() => {
          (setPaymentError as Dispatch<SetStateAction<Error | null>>)(
            null
          );
          (setPaymentProcessed as Dispatch<SetStateAction<boolean>>)(true);
          API.saveCelebration({
            ...(donationPackage as Celebration),
            payment_intent: data.paymentIntent as string,
          }).then(({ data: savedCelebration }) =>
            (setUserData as Dispatch<SetStateAction<UserData>>)(
              (state) => ({
                ...(state as UserData),
                donations: [
                  ...state.donations,
                  { ...savedCelebration } as Celebration,
                ],
              })
            )
          );
        })
        .catch((err) =>
          (setPaymentError as Dispatch<SetStateAction<Error>>)(err)
        );
    },
    [
      setPaymentProcessed,
      donationPackage,
      setPaymentError,
      setUserData,
      stripe,
    ]
  );

  const [
      processingTip,
      { start: startProcessingTipSpinner, stop: stopProcessingTipSpinner },
    ] = useSpinner(),
    [prevPaymentProcessed, setPrevPaymentProcessed] =
      useState(paymentProcessed);
  if (prevPaymentProcessed !== paymentProcessed) {
    setPrevPaymentProcessed(paymentProcessed);
    if (paymentProcessed) stopProcessingTipSpinner();
  }

  const attemptPayment = useCallback(() => {
    (startProcessingTipSpinner as () => void)();
    API.sendPayment(donorId as string, donationPackage as Celebration)
      .then((res) => {
        const paymentResults = res.data;
        return paymentResults;
      })
      .then((paymentResults) => {
        if (
          Object.keys(paymentResults).includes(
            'paymentIntent' && 'clientSecret'
          )
        )
          processDonation(paymentResults);
        else {
          (resetSearchBar as () => void)();
          (refreshAppState as () => void)();
          (
            setRejectedDonationReasons as Dispatch<
              SetStateAction<CelebrationRejection>
            >
          )(donationFailure(paymentResults));
        }
      })
      .catch((err: SetStateAction<Error>) => {
        (setPaymentError as Dispatch<SetStateAction<Error>>)(err);
        (refreshAppState as () => void)();
      });
  }, [
    setRejectedDonationReasons,
    startProcessingTipSpinner,
    donationPackage,
    processDonation,
    refreshAppState,
    setPaymentError,
    resetSearchBar,
    donorId,
  ]);

  const handleSubmit: (e: UserEvent) => void = useCallback(
    (e) => {
      e.preventDefault();
      e.stopPropagation();
      if (paymentError) (refreshAppState as () => void)();
      else attemptPayment();
    },
    [paymentError, attemptPayment, refreshAppState]
  );

  return (
    <Card id={'tip-ask'} className={'checkout-card'}>
      <Card.Header>Please add a tip</Card.Header>
      <Card.Body>
        <AlertDonated
          show={true as ShowAlert & boolean}
          donation={donation}
          userData={userData}
          setShow={() => {}}
          {...props}
        />

        <p className='tip-ask px-3'>
          <span className='powerback'>POWERBACK</span>
          {CHECKOUT.STATEMENT}
        </p>
        <p className='tip-ask pt-3'>{`Can you throw in $${tipAsk}?`}</p>

        <BtnGrid
          size={isDesktop ? 'lg' : 'sm'}
          donation={donation}
          // id={'tip-btn-grid'}
          setAmount={setTip as Dispatch<SetStateAction<number>>}
          polData={polData}
          amount={tip as number}
          isTip={true}
          {...props}
          value={[
            RECOMMENDED.TIPS.HIGH / 10,
            RECOMMENDED.TIPS.HIGH / 20,
            0,
          ]}
        />

        <p className='tip-ask form-info'>
          Tips made directly to{' '}
          <span className='powerback'>POWERBACK</span> are not tax
          deductible.
        </p>
      </Card.Body>
      <Card.Footer>
        <div className='tip-submit--btn-spinner'>
          {processingTip ? (
            <Spinner
              role={'status'}
              animation={'border'}
              className={'tip-ask-spinner'}>
              <span className={'visually-hidden'}>Processing Tip...</span>
            </Spinner>
          ) : (
            <ContinueBtn
              handleClick={handleSubmit as (e: UserEvent) => void}
              hidden={typeof tip !== 'number'}
              variant={'outline-dark'}
              label={btnLabel}
              type={'submit'}
            />
          )}
        </div>
      </Card.Footer>
    </Card>
  );
};

export default React.memo(TipAsk);
