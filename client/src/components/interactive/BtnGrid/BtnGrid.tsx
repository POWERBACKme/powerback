import React, {
  useMemo,
  Dispatch,
  useState,
  useCallback,
  SetStateAction,
  useLayoutEffect,
} from 'react';
import { DonationPrompt } from '@Components/displays';
import { DonationInput } from '@Components/forms';
import { DonationBtn } from '@Components/buttons';
import { PolData } from '@Interfaces';
import { Props } from '@Types';
import './style.css';

type BtnGridProps = {
  setAmount: Dispatch<SetStateAction<number>>;
  size: 'sm' | 'lg' | undefined;
  value: number | number[];
  amount: number;
};

const BtnGrid = ({
  setModalMessage,
  setAmount,
  donation,
  polData,
  amount,
  isTip,
  value,
  size,
  ...props
}: Props & BtnGridProps) => {
  const [promptClass, setPromptClass] = useState<string | undefined>(),
    makePromptClass = useMemo(() => {
      return amount ? 'display-heading' : 'dark-mode-text-danger';
    }, [amount]);

  const handleUseClass = useCallback(() => {
      return (isTip && ' tips-btn-grid') || '';
    }, [isTip]),
    handleUse = useCallback(
      () =>
        (!isTip && (
          <DonationPrompt
            {...props}
            amount={amount}
            description={polData as PolData}
            promptClass={promptClass as string}
          />
        )) ||
        null,
      [props, isTip, amount, polData, promptClass]
    );

  useLayoutEffect(
    () => setPromptClass(makePromptClass),
    [makePromptClass]
  );

  return (
    <div className='btn-container'>
      {handleUse()}

      <div className={`btn-grid${handleUseClass()}`}>
        {Array.isArray(value) ? (
          value.map((amt, i) => {
            return (
              <DonationBtn
                {...props}
                size={size}
                value={amt}
                isTip={isTip}
                amount={amount}
                setAmount={setAmount}
                donation={donation as number}
                key={('#' + i + '-$' + amt).toString()}
              />
            );
          })
        ) : (
          <></>
        )}

        <DonationInput
          {...props}
          isTip={isTip}
          amount={amount}
          setAmount={setAmount}
          formValue={amount || ''}
          setModalMessage={
            setModalMessage as Dispatch<SetStateAction<string>>
          }
        />
      </div>
    </div>
  );
};

export default React.memo(BtnGrid);
