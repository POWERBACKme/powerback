import React, { useCallback, useReducer } from 'react';
import { GenericBtn } from '@Components/buttons';
import Stack from 'react-bootstrap/esm/Stack';
import { tweetDonation } from '@Utils';
import { Celebration } from '@Types';
import { Bill } from '@Interfaces';
import API from '@API';
import './style.css';

type Props = {
  handleError: (err: Error) => void;
  celebration: Celebration;
  selectedBill: Bill;
};

const ButtonSet = ({ selectedBill, celebration, handleError }: Props) => {
  const [sentReceipt, setSentReceipt] = useReducer((s) => {
    return (s = true);
  }, false);

  const handleReceipt = useCallback(async () => {
    const { status: sent }: any = await API.sendReceipt(
      celebration as Celebration
    ).catch((err) => handleError(err));
    if (sent === 200) setSentReceipt();
  }, [celebration, handleError, setSentReceipt]);

  const handlePress = useCallback(
    () => tweetDonation(selectedBill, celebration),
    [selectedBill, celebration]
  );

  return (
    <div className='donation-receipt-btn-group'>
      <Stack direction='horizontal' gap={2}>
        {sentReceipt ? (
          <span className='msg-sent'>
            <i className='bi bi-send' />
            &nbsp;Sent
          </span>
        ) : (
          <span className='receipt-btn'>
            {' '}
            <GenericBtn
              onPress={handleReceipt}
              label={'Email receipt'}
              size={'sm'}
            />
          </span>
        )}

        {celebration.twitter ? (
          <GenericBtn
            children={
              <Stack direction='horizontal' gap={1}>
                Tweet this{' '}
                <i className='bi bi-twitter receipt-tweet fs-6' />
              </Stack>
            }
            onPress={handlePress}
            size={'sm'}
          />
        ) : (
          <></>
        )}
      </Stack>
    </div>
  );
};

export default React.memo(ButtonSet);
