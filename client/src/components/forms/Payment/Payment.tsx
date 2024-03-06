import React, {
  SetStateAction,
  useCallback,
  Dispatch,
  useState,
  useRef,
} from 'react';
import { SetupIntent, Stripe } from '@stripe/stripe-js';
import Overlay from 'react-bootstrap/esm/Overlay';
import Spinner from 'react-bootstrap/esm/Spinner';
import Tooltip from 'react-bootstrap/esm/Tooltip';
import Button from 'react-bootstrap/esm/Button';
import { Props } from '@Types';
import {
  StripeElements,
  StripeCardElement,
  StripeCardNumberElement,
  StripeCardElementChangeEvent,
} from '@stripe/stripe-js/types/stripe-js';
import { cardStyle } from './cardStyle';
import { UserData } from '@Interfaces';
import {
  useStripe,
  CardElement,
  useElements,
} from '@stripe/react-stripe-js';
import { nanoid } from 'nanoid';
import API from '@API';
import './style.css';
import { AxiosResponse } from 'axios';

interface SetDonorId {
  setDonorId: Dispatch<SetStateAction<string>>;
}

const PaymentForm = ({
  switchToErrorScreen,
  setDonorId,
  setTabKey,
  donation,
  userData,
  polData,
}: Props & SetDonorId) => {
  const stripe = useStripe(),
    elements = useElements(),
    overlayTarget = useRef(null),
    [disabled, setDisabled] = useState(true),
    [showTooltip, setShowTooltip] = useState(false),
    [error, setError] = useState<string | null>(null),
    [processing, setProcessing] = useState<string | boolean>(''); // useSpinner

  const validatePayment = useCallback(
      async (data: any) => {
        return await (stripe as Stripe)
          .confirmCardSetup(data.clientSecret, {
            payment_method: {
              card: (elements as StripeElements).getElement(
                CardElement
              ) as
                | StripeCardElement
                | StripeCardNumberElement
                | {
                    token: string;
                  },
            },
            // do a teritary operator to check if exists?
          })
          .then((res) => {
            const paymentMethod = (res.setupIntent as SetupIntent)
              .payment_method as string;
            API.setPaymentMethod(data.customer, {
              payment_method: paymentMethod as string,
              idempotencyKey: nanoid(),
            });
            setProcessing(false);
            (setTabKey as Dispatch<SetStateAction<string>>)('tips');
          })
          .catch((err) =>
            (switchToErrorScreen as (err: Error) => void)(err)
          );
      },
      [stripe, elements, setTabKey, switchToErrorScreen]
    ),
    getIntent = useCallback(
      (id: string) => {
        API.setupIntent(id, {
          idempotencyKey: nanoid(),
        })
          .then((res) => validatePayment((res as AxiosResponse).data))
          .catch((err) => {
            (switchToErrorScreen as (err: Error) => void)(err);
            setError(`Payment validation failed. ${err}`);
          });
      },
      [validatePayment, switchToErrorScreen]
    ),
    getDonorId = useCallback(() => {
      return (
        ((userData as UserData).payment.customer_id &&
          (userData as UserData).payment.customer_id.length &&
          (userData as UserData).payment.customer_id) ||
        API.getNewDonor({
          userId: (userData as UserData).id,
          name: (userData as UserData).firstName,
          email: (userData as UserData).username,
          /* address: .... */
          idempotencyKey: nanoid(),
        })
          .then((res) => {
            return res.data;
          })
          .catch((err) => {
            (switchToErrorScreen as (err: Error) => void)(err);
            setError(`Creating donor failed. ${err}`);
          })
      );
    }, [userData, switchToErrorScreen]);

  const handleChange = useCallback((e: StripeCardElementChangeEvent) => {
      setDisabled(e.empty);
      setError(e.error ? e.error.message : '');
    }, []),
    handleSubmit = useCallback(
      (e: any) => {
        const handler = async () => {
          if (error) {
            setShowTooltip((s) => !s);
            return false;
          } else {
            setProcessing(true);
            const id = await getDonorId();
            getIntent(id);
            setDonorId(id);
          }
        };
        if (e.key) {
          if (e.key !== 'Enter') {
            return;
          } else handler();
        } else handler();
      },
      [error, getIntent, getDonorId, setDonorId]
    );

  return (
    <>
      {/* Show any error that happens when processing the payment */}
      {error && (
        <Overlay
          placement='bottom'
          show={showTooltip}
          target={overlayTarget.current}>
          {(props) => (
            <Tooltip role='alert' className='card-error' {...props}>
              {error}
            </Tooltip>
          )}
        </Overlay>
      )}
      <div
        id='stripe-checkout'
        className={processing ? 'preserve-bg' : ''}>
        <div hidden={processing as boolean}>
          <CardElement
            onChange={
              handleChange as (event: StripeCardElementChangeEvent) => any
            }
            id={'card-element'}
            options={cardStyle}
          />
        </div>

        {processing ? (
          <Spinner
            role='status'
            animation='border'
            className='checkout-spinner'>
            <span className='visually-hidden'>Processing Payment...</span>
          </Spinner>
        ) : (
          <Button
            disabled={
              (!polData || processing || !donation || disabled) as boolean
            }
            onKeyDown={(e) => handleSubmit(e)}
            onClick={handleSubmit}
            ref={overlayTarget}
            type={'submit'}>
            Confirm
          </Button>
        )}
      </div>
    </>
  );
};

export default React.memo(PaymentForm);
