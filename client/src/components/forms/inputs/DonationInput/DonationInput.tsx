import React, {
  useMemo,
  Dispatch,
  ChangeEvent,
  useCallback,
  SetStateAction,
} from 'react';
import FormControl from 'react-bootstrap/esm/FormControl';
import InputGroup from 'react-bootstrap/esm/InputGroup';
import { Messages, ShowModal } from '@Interfaces';
import accounting from 'accounting';
import { Props } from '@Types';
import './style.css';

const INPUT_LIMIT = 9999,
  SIGFIGS = 8;

type DonationInputProps = {
  setModalMessage: Dispatch<SetStateAction<string>>;
  setAmount: Dispatch<SetStateAction<number>>;
  remainingDonationLimit?: number;
  formValue: number | '';
  amount: number | '';
  MESSAGES?: Messages;
};

const DonationInput = ({
  remainingDonationLimit,
  setModalMessage,
  setShowModal,
  formValue,
  setAmount,
  MESSAGES,
  amount,
  isTip,
}: Props & DonationInputProps) => {
  const calcValue = useCallback((e: ChangeEvent) => {
    let v = Number((e.target as HTMLInputElement).value);
    if (v < 0) v = 0;
    if (new RegExp('^\\d+\\.\\d{3,}$').test(String(v)))
      v = Number(
        Number(String(v).slice(0, String(v).length - 1)).toFixed(2)
      );
    // max 6-figures w/o decimals
    if (String(v).length > SIGFIGS || v > INPUT_LIMIT)
      v = Number(String(v).slice(0, String(v).length - 1));
    (e.target as HTMLInputElement).value = String(v);
    return v;
  }, []);

  const handleChange = useCallback(
      (e: ChangeEvent) => {
        let v = calcValue(e);
        if (!isTip && v > (remainingDonationLimit as number)) {
          if ((remainingDonationLimit as number) <= 0) {
            setModalMessage((MESSAGES as Messages).reached);
          } else {
            setModalMessage(
              (MESSAGES as Messages).exceeds[0] +
                accounting.formatMoney(remainingDonationLimit as number) +
                (MESSAGES as Messages).exceeds[1]
            );
          }
          setAmount(0);
          (setShowModal as Dispatch<SetStateAction<ShowModal>>)((s) => ({
            ...s,
            limit: true,
          }));
        } else setAmount(Number(v));
      },
      [
        remainingDonationLimit,
        setModalMessage,
        setShowModal,
        setAmount,
        MESSAGES,
        calcValue,
        isTip,
      ]
    ),
    makePlaceholder = useMemo(() => {
      return String((isTip && 0) || (amount && amount));
    }, [isTip, amount]);

  return (
    <InputGroup id='donation-input' className='donation-input'>
      <InputGroup.Text>$</InputGroup.Text>
      <FormControl
        name={'donation-input'}
        aria-label={'Input for donation or tip amount in dollars'}
        onKeyDown={() => {
          return true;
        }}
        aria-describedby={'donation-input'}
        className={'donation-input-field'}
        placeholder={makePlaceholder}
        onChange={handleChange}
        value={formValue}
        type={'number'}
      />
    </InputGroup>
  );
};

export default React.memo(DonationInput);
