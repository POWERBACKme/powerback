import React, { useMemo, useState, useCallback, ChangeEvent } from 'react';
import { SwitchButtons } from '@Components/buttons';
import Stack from 'react-bootstrap/esm/Stack';
import Form from 'react-bootstrap/esm/Form';
import { Props } from '../../../types';
import './style.css';

const Sort = ({ isMobile, filterEvents }: Props) => {
  const [toggleDirectionBtn, setToggleDirectionBtn] =
      useState('descending'),
    [toggleTypeBtn, setToggleTypeBtn] = useState('date'),
    TOGGLE_BTNS = useMemo(() => {
      return [
        {
          name: 'sort-mode',
          btns: [
            { icon: 'calendar3', value: 'date', dispatch: 'DATE' },
            {
              icon: 'currency-dollar',
              value: 'amount',
              dispatch: 'AMOUNT',
            },
          ],
          controlId: 'sortModeBtn',
          togglePosition: toggleTypeBtn,
          ariaLabel: 'sort donation mode toggle button group',
        },
        {
          name: 'sort-reverse',
          btns: [
            {
              icon: 'sort-down',
              value: 'descending',
              dispatch: 'REVERSE',
            },
            {
              icon: 'sort-down-alt',
              value: 'ascending',
              dispatch: 'REVERSE',
            },
          ],
          controlId: 'sortReverseBtn',
          togglePosition: toggleDirectionBtn,
          ariaLabel: 'sort donation order toggle button group',
        },
      ];
    }, [toggleTypeBtn, toggleDirectionBtn]);

  const handleChange = useCallback(
    (e: ChangeEvent | KeyboardEvent, type: string) => {
      let { value } = e.target as any;
      if (type === 'REVERSE')
        setToggleDirectionBtn((btn) =>
          btn === 'descending' ? 'ascending' : 'descending'
        );
      else if (value === 'date' || value === 'amount')
        setToggleTypeBtn((btn) => (btn === 'date' ? 'amount' : 'date'));
      filterEvents({ type: type, payload: '' });
    },
    [filterEvents]
  );

  return (
    <>
      <Form.Label className='indent'>
        {'SORT BY ' +
          toggleTypeBtn +
          (isMobile ? '' : ', ' + toggleDirectionBtn)}
      </Form.Label>
      <Form.Group className='text-center'>
        <Stack
          className={'donation-subpane-filter-btns'}
          direction={isMobile ? 'vertical' : 'vertical'}>
          {TOGGLE_BTNS.map((btn) => (
            <SwitchButtons
              togglePosition={btn.togglePosition}
              key={btn.name + 'toggle-buttons'}
              size={isMobile ? 'sm' : 'lg'}
              handleChange={handleChange}
              ariaLabel={btn.ariaLabel}
              controlId={btn.controlId}
              btns={btn.btns}
              name={btn.name}
            />
          ))}
        </Stack>
      </Form.Group>
    </>
  );
};

export default React.memo(Sort);
