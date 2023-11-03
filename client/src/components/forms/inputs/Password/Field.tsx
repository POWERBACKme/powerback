import React, {
  useCallback,
  FocusEvent,
  useReducer,
  useState,
} from 'react';
import PasswordStrengthBar from 'react-password-strength-bar';
import FormControl from 'react-bootstrap/esm/FormControl';
import InputGroup from 'react-bootstrap/esm/InputGroup';
import FormLabel from 'react-bootstrap/esm/FormLabel';
import FormGroup from 'react-bootstrap/esm/FormGroup';
import { InputGroupBtn } from '@Components/buttons';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import { ICONS } from './tuples';
import { Props } from '../Props';
import './style.css';

const PasswordField = ({
  controlId = 'validation-password',
  controlName = 'password',
  pattern = '^[\\s\\S].*$',
  isGenerating = false, // generating a new password, or using an existing one
  autoComplete,
  placeholder = '',
  feedback = '',
  onChange,
  label,
  value,
}: Props) => {
  const [passwordField, setPasswordField] = useState(ICONS[1]),
    [iconToggle, setIconToggle] = useReducer((i) => {
      return !i;
    }, true);

  const [prevIconToggle, setPrevIconToggle] = useState(iconToggle);
  if (prevIconToggle !== iconToggle) {
    setPrevIconToggle(iconToggle);
    setPasswordField(ICONS[Number(iconToggle)]);
  }

  const [passwordInputIsInFocus, setPasswordInputIsInFocus] =
    useState(false);

  const handleFocus = useCallback(
    (e: FocusEvent) => setPasswordInputIsInFocus(e.type === 'focus'),
    []
  );

  const showPasswordStrengthBar =
    isGenerating &&
    (passwordInputIsInFocus || (value && value.length > 0));

  const minPasswordLength = 8;

  return (
    <Row>
      <Col xs={12} className='userpass--col'>
        <FormLabel htmlFor={controlId}>{label}</FormLabel>
        <FormGroup controlId={controlId} className='form-input-wfeedback'>
          <InputGroup hasValidation className='form-group'>
            <InputGroupBtn
              title={(iconToggle ? '' : 'opened') + ' lock icon'}
              ico={passwordField.iconL + '-fill'}
              cls={'input-icon'}
              tab={1}
            />
            <FormControl
              autoComplete={autoComplete}
              placeholder={placeholder}
              type={passwordField.type}
              onFocus={handleFocus}
              onBlur={handleFocus}
              onChange={onChange}
              name={controlName}
              pattern={pattern}
              value={value}
              required
            />
            <InputGroupBtn
              cb={setIconToggle}
              ico={passwordField.iconR}
              cls={'password-field-icon'}
              title={
                iconToggle
                  ? 'open eye icon on reveal password text'
                  : 'cancelled-out eye icon on hide password text'
              }
            />
            <FormControl.Feedback type='invalid'>
              {feedback}
            </FormControl.Feedback>
          </InputGroup>
          {showPasswordStrengthBar && (
            <PasswordStrengthBar
              minLength={minPasswordLength}
              shortScoreWord={''}
              scoreWords={['']}
              password={value}
            />
          )}
        </FormGroup>
      </Col>
    </Row>
  );
};

export default React.memo(PasswordField);
