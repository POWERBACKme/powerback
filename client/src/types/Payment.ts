import { SetStateAction, Dispatch } from 'react';
import { Stripe } from '@stripe/stripe-js';

export type PaymentProps = {
  setDonorId: Dispatch<SetStateAction<string>>;
  stripe: Promise<Stripe | null>;
};
