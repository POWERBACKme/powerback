import React from 'react';
import FormControl from 'react-bootstrap/esm/FormControl';
import InputGroup from 'react-bootstrap/esm/InputGroup';
import FormGroup from 'react-bootstrap/esm/FormGroup';
import FormLabel from 'react-bootstrap/esm/FormLabel';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import { Props } from '../Props';
import './style.css';

const UsernameField = ({
  pattern = '^[\\w\\.]+@[a-zA-Z_]+?\\.[a-zA-Z]{2,3}$',
  autoComplete,
  hideFeedback,
  placeholder,
  cls = '',
  feedback,
  onChange,
  label,
  value,
}: Props) => (
  <Row className={cls}>
    <Col xs={12} className={'userpass--col'}>
      <FormLabel htmlFor={'validation-username'}>{label}</FormLabel>
      <FormGroup
        className={'form-input-wfeedback'}
        controlId={'validation-username'}>
        <InputGroup hasValidation className='form-group'>
          <InputGroup.Text className='input-icon'>
            <i title='envelope icon' className='bi bi-envelope-fill' />
          </InputGroup.Text>

          <FormControl
            required
            value={value}
            type={'email'}
            name={'username'}
            pattern={pattern}
            onChange={onChange}
            placeholder={placeholder}
            autoComplete={autoComplete}
          />
          <InputGroup.Text className='input-icon nub'>
            &nbsp;&nbsp;&nbsp;&nbsp;
          </InputGroup.Text>
          <FormControl.Feedback type={'invalid'}>
            {feedback}
          </FormControl.Feedback>
          <FormControl.Feedback type={'valid'} hidden={hideFeedback}>
            {feedback}
          </FormControl.Feedback>
        </InputGroup>
      </FormGroup>
    </Col>
  </Row>
);

export default React.memo(UsernameField);
