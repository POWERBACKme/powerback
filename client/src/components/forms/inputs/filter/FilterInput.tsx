import React, { useCallback, KeyboardEvent } from 'react';
import FormLabel from 'react-bootstrap/esm/FormLabel';
import InputGroup from 'react-bootstrap/esm/InputGroup';
import FormControl from 'react-bootstrap/esm/FormControl';
import { Props } from '@Pages/Main/screens/Donate/AccountModal/subcomps/body/panes/Donations/types';
import './style.css';

type FilterProps = {
  name: string;
  text: string;
  cls: string;
};

const FilterInput = ({
  textInputRef = null,
  cls = 'mb-lg-1',
  onChange,
  name,
  text,
}: Props & FilterProps) => {
  const stopEnter = useCallback((e: KeyboardEvent) => {
    if (e.key !== 'Enter') {
      return;
    } else {
      e.preventDefault();
      e.stopPropagation();
    }
  }, []);
  return (
    <div>
      <FormLabel>{name}</FormLabel>
      <InputGroup className={cls} id={`filter.${name}`}>
        <FormControl
          aria-describedby={`filter.${name}`}
          aria-label={`${name} filter`}
          onKeyDown={stopEnter}
          onChange={onChange}
          placeholder={text}
          ref={textInputRef}
          type={'search'}
        />
      </InputGroup>
    </div>
  );
};

export default React.memo(FilterInput);
