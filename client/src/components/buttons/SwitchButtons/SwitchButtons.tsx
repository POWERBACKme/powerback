import React, { ChangeEvent, useCallback } from 'react';
import ToggleButtonGroup from 'react-bootstrap/esm/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/esm/ToggleButton';
import FormGroup from 'react-bootstrap/esm/FormGroup';
import { handleKeyDown } from '@Utils';

type Btn = {
  dispatch: string;
  value: string;
  icon: string;
};

type Props = {
  handleChange: (e: ChangeEvent, type: string) => void;
  size: 'lg' | 'sm' | undefined;
  togglePosition: string;
  ariaLabel: string;
  controlId: string;
  name: string;
  btns: Btn[];
};

const SwitchButtons = ({
  btns,
  name,
  ariaLabel,
  controlId,
  size = 'lg',
  handleChange,
  togglePosition,
}: Props) => {
  const handleToggleBtnCursor = useCallback(
    (i: number) => {
      if (togglePosition === btns[i].value) {
        return 'default';
      } else return 'pointer';
    },
    [btns, togglePosition]
  );

  return (
    <FormGroup controlId={controlId}>
      <ToggleButtonGroup
        name={name}
        size={size}
        vertical={false}
        className={'mt-1'}
        aria-label={ariaLabel}
        defaultValue={togglePosition}>
        {btns.map((b, i) => (
          <ToggleButton
            name={'radio'}
            value={b.value}
            key={name + b.value}
            id={`sort-btn-${b.value}`}
            checked={togglePosition === b.value}
            onChange={(e) => handleChange(e, b.dispatch)}
            onKeyDown={(e) => handleKeyDown(e, handleChange as () => void)}
            style={{ cursor: handleToggleBtnCursor(i), width: '80px' }}>
            {b.icon ? <i className={`bi bi-${b.icon}`} /> : b.value}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
    </FormGroup>
  );
};

export default React.memo(SwitchButtons);
