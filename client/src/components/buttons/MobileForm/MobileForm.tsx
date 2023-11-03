import React from 'react';
import { GenericBtn } from '@Components/buttons';
import { routes } from '../../../router';

type Props = {
  size: 'sm' | 'lg' | undefined;
  onPress: (e: any) => void;
  label: string;
};

// wraps Generic btn component
const MobileFormBtn = ({ size, label, onPress }: Props) => (
  <a {...routes.main().link}>
    {<GenericBtn label={label} size={size} onPress={onPress} />}
  </a>
);

export default React.memo(MobileFormBtn);
