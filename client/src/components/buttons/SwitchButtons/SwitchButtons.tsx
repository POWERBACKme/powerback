import React, { ChangeEvent } from 'react';
import ToggleButtonGroup from 'react-bootstrap/esm/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/esm/ToggleButton';
import { handleKeyDown, simulateMouseClick } from '@Utils';
import FormGroup from 'react-bootstrap/esm/FormGroup';

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
  return (
    <FormGroup controlId={controlId}>
      <ToggleButtonGroup
        defaultValue={togglePosition}
        aria-label={ariaLabel}
        className={'mt-1'}
        vertical={false}
        name={name}
        size={size}>
        {btns.map((b, i) => (
          <ToggleButton
            name={'radio'}
            value={b.value}
            key={name + b.value}
            id={`sort-btn-${b.value}`}
            checked={togglePosition === b.value}
            onChange={(e) => handleChange(e, b.dispatch)}
            onKeyDown={(e) => {
              if (togglePosition !== b.value)
                handleKeyDown(
                  e,
                  simulateMouseClick as unknown as () => void,
                  e.target
                );
            }}>
            {b.icon ? <i className={`bi bi-${b.icon}`} /> : b.value}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
    </FormGroup>
  );
};

export default React.memo(SwitchButtons);
