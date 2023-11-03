import React from 'react';
import { handleDescription } from './fn';
import './style.css';

interface Description {
  last_name: string;
  chamber: string;
  state: string;
}

type Props = {
  description: Description;
  promptClass: string;
  amount: number;
};

const DonationPrompt = ({ amount, promptClass, description }: Props) => {
  return (
    <span className={promptClass + ' donation-prompt'}>
      {description ? handleDescription(amount, description) : ''}
    </span>
  );
};

export default React.memo(DonationPrompt);
