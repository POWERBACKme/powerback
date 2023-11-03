import React, {
  useMemo,
  Dispatch,
  useState,
  useEffect,
  useCallback,
  SetStateAction,
} from 'react';
import Button from 'react-bootstrap/esm/Button';
import { Props } from '@Components/page/types';
import './style.css';

type DonationBtnProps = {
  value: number;
  amount: number;
  donation: number;
  size: 'sm' | 'lg' | undefined;
  setAmount: Dispatch<SetStateAction<number>>;
};

const DonationBtn = ({
  isTip,
  value,
  amount,
  donation,
  setAmount,
  size = 'lg',
}: Props & DonationBtnProps) => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    let ignore = false;
    if (!ignore)
      setActive(
        !isTip
          ? value === amount && amount !== 0
          : value * donation === amount
      );
    return () => {
      ignore = true;
    };
  }, [isTip, value, amount, donation]);

  const handleHideCheckmarks = useMemo(() => {
      return !(active && !isTip);
    }, [isTip, active]),
    handleValue = useMemo(() => {
      return (isTip && Number((value * donation).toFixed(2))) || value;
    }, [value, isTip, donation]),
    handleDisplayValue = useMemo(() => {
      return (
        (value && ((isTip && `${value * 100}% tip`) || `$${value}`)) ||
        'Zero tip'
      );
    }, [value, isTip]),
    handleClick = useCallback(
      () =>
        // tip is % of donation
        setAmount(handleValue),
      [setAmount, handleValue]
    );

  return (
    <Button
      size={size}
      active={active}
      onClick={handleClick}
      variant={'secondary'}
      className={'donation-amt-btn'}>
      <i
        className={'bi bi-check donation-check'}
        // tip grid doesn't show the checkmark
        hidden={handleHideCheckmarks}
      />
      {/* donation and tip btns display values differently */}
      {handleDisplayValue}
    </Button>
  );
};

export default React.memo(DonationBtn);
