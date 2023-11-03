import React, {
  useRef,
  useMemo,
  useReducer,
  useCallback,
  ChangeEvent,
  ReactElement,
  useLayoutEffect,
  MutableRefObject,
  HTMLInputTypeAttribute,
} from 'react';
import { FormTippedField } from '.';
import { international } from './fn';
import { handleKeyDown } from '@Utils';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import Form from 'react-bootstrap/esm/Form';
import { STATES, COUNTRIES } from '@Tuples';
import { Selector } from '@Components/forms';
import { FieldControl, Props } from '@Types';
import ToggleButton from 'react-bootstrap/esm/ToggleButton';
import { ValidatingFields, ContactInfo } from '@Interfaces';
import ToggleButtonGroup from 'react-bootstrap/esm/ToggleButtonGroup';
import './style.css';

type Value = string | boolean;

type EventData = {
  value: Value;
  name: string;
};

type FieldGroup = {
  controls: FieldControl[];
  eventKey: string;
  name: string;
  key: string;
};

// type HandleInputMode = (type: FieldType) => void;

type ProfileFormTypes = {
  getFieldMap: () => MutableRefObject<null>;
  form: FieldControl[];
  isEmployed: string; // this uses the string value of binary for button toggling
};

const ProfileForm = ({
  resetValidation,
  setContactInfo,
  validateField,
  formIsInvalid,
  contactInfo,
  getFieldMap,
  isEmployed,
  isInvalid,
  isMobile,
  settings,
  setIntl,
  form,
}: Props & ProfileFormTypes) => {
  const RADIOS = useMemo(() => {
    return ['NO', 'YES'];
  }, []);

  const { STATES: state, COUNTRIES: country } = { STATES, COUNTRIES };
  const getCountry = useRef(null),
    intlReducer = useCallback(() => {
      if (!getCountry) return;
      if (!(getCountry.current as unknown as HTMLOptionElement)) return;
      if (
        ((getCountry.current as unknown as HTMLOptionElement)
          .value as string) === 'United States'
      )
        return false;
      else return true;
    }, []),
    [isInternational, setIsInternational] = useReducer(
      intlReducer,
      true // otherwise cannot pull focus on Passport field because it renders too quickly
    );

  useLayoutEffect(() => setIsInternational(), [setIsInternational]);

  const handleChange = useCallback(
    (e: ChangeEvent) => {
      let { name, value }: EventData = e.target as HTMLInputElement;
      (validateField as (e: ChangeEvent<HTMLInputElement>) => void)(
        e as ChangeEvent<HTMLInputElement>
      );
      if (name === 'isEmployed') {
        if (value === '1') (value as unknown as Value) = true;
        else if (value === '0') {
          value = false;
          (resetValidation as () => void)();
        }
      }
      if (name === 'country') {
        setIsInternational();
        (setIntl as () => void)();
      }
      (setContactInfo as ({ name, value }: EventData) => void)({
        name,
        value,
      });
    },
    [setIntl, validateField, setContactInfo, resetValidation]
  );

  const handleHideUnemployment = useCallback(
    (name: string) => {
      if (
        !!!Number(isEmployed) &&
        (name === 'occupation' || name === 'employer')
      ) {
        return true;
      } else return false;
    },
    [isEmployed]
  );

  const handleToggleBtnCursor = useCallback(
    (idx: number) => {
      if (Number(isEmployed) === idx) {
        return 'default';
      } else return 'pointer';
    },
    [isEmployed]
  );

  const provideFormComponents = useCallback(
    (field: FieldControl) => {
      function inputElement(field: FieldControl) {
        return (
          <Form.Control
            {...field}
            data-lpignore={field['data-lpignore'] ?? false}
            hidden={handleHideUnemployment(field.name)}
            value={
              ((contactInfo as ContactInfo)[
                field.name as keyof ContactInfo
              ] ?? '') as string | number | string[] | undefined
            }
            type={field.type}
            autoComplete={field.autoComplete}
            aria-label={field['aria-label']}
            autoCapitalize={'words'}
            onChange={handleChange}
            className={'mb-1'}
            spellCheck={false}
            autoFocus={false}
          />
        );
      }

      return {
        tel: inputElement(field),
        text: inputElement(field),
        email: inputElement(field),
        number: inputElement(field),
        radio: (
          <ToggleButtonGroup
            {...field}
            size={'lg'}
            type={'radio'}
            vertical={false}
            className={'my-lg-1'}
            defaultValue={[isEmployed]}
            aria-label={field['aria-label']}>
            {RADIOS.map((radio, i) => (
              <ToggleButton
                name={'radio'}
                value={String(i)}
                checked={!!isEmployed}
                onChange={handleChange}
                id={`employed-choice-${radio}`}
                key={`employed-choice-${radio}`}
                style={{ cursor: handleToggleBtnCursor(i) }}
                onKeyDown={(e) =>
                  handleKeyDown(
                    e,
                    (
                      handleChange as (
                        e: ChangeEvent
                      ) => (() => void) | undefined
                    )(e as unknown as ChangeEvent),
                    e
                  )
                }>
                {radio}
              </ToggleButton>
            ))}
          </ToggleButtonGroup>
        ),
        select: (
          <Selector
            disabled={international.disable(field, isInternational)}
            items={field.name === 'state' ? state : country}
            value={
              ((contactInfo as ContactInfo)[
                (field as FieldControl).name as string as keyof ContactInfo
              ] as unknown as string) ?? ''
            }
            handleChange={handleChange}
            getCountry={getCountry}
            // autoFocus={false}
            {...field}
          />
        ),
      };
    },
    [
      handleHideUnemployment,
      handleToggleBtnCursor,
      isInternational,
      handleChange,
      contactInfo,
      isEmployed,
      country,
      RADIOS,
      state,
    ]
  );

  const handleFieldControls = useCallback(
    (field: FieldControl) => {
      return (
        provideFormComponents(field) as unknown as HTMLInputTypeAttribute
      )[
        field.type as string as keyof HTMLInputTypeAttribute
      ] as HTMLInputTypeAttribute;
    },
    [provideFormComponents]
  );

  const passportControlOnMobile = useCallback(
    (field: FieldControl) => {
      return (
        isMobile &&
        field.name === 'passport' &&
        (contactInfo as ContactInfo).passport === ''
      );
    },
    [isMobile, contactInfo]
  );

  const handleSubText = useCallback(
    (field: FieldControl) => {
      if (passportControlOnMobile(field)) return field.formtext;
      else if (!field.feedback && !field.formtext) {
        return isMobile ? '' : <></>;
      } else if (
        (isInvalid as ValidatingFields)[
          field.name as string as keyof ValidatingFields
        ] &&
        field.feedback
      ) {
        return isMobile ? (
          field.feedback
        ) : (
          <Form.Control.Feedback type={'invalid'}>
            {field.feedback}
          </Form.Control.Feedback>
        );
      } else if (field.formtext) {
        if (field.formtext.length === 2) {
          // array for T/F isEmployed
          return isMobile ? (
            field.formtext[Number(isEmployed)]
          ) : (
            <Form.Text className={'text-center'}>
              {field.formtext[Number(isEmployed)]}
            </Form.Text>
          );
        } else
          return isMobile ? (
            field.formtext
          ) : field.name === 'employer' || field.name === 'occupation' ? (
            <Form.Text className={'text-center'}>
              {field.formtext}
            </Form.Text>
          ) : (
            <Form.Text>{field.formtext}</Form.Text>
          );
      }
    },
    [isMobile, isInvalid, isEmployed, passportControlOnMobile]
  );
  // user choice from Settings
  const showToolTipIsOn = useMemo(() => {
    if (!settings) return true;
    return settings.showToolTips !== void 0 && settings.showToolTips;
  }, [settings]);

  const showTheseTooltips = useCallback(
    (field: FieldControl) => {
      // first, is there even any text to display?
      if (!field.feedback && !field.formtext) return;
      else
        return (
          (field.feedback ? field.feedback.length : false) ||
          ((field.formtext ? field.formtext.length : false) &&
            // special case for Passport field
            (passportControlOnMobile(field) ||
              // or show tooltip if isEmployed "NO" is selected
              ((!(contactInfo as ContactInfo).isEmployed || !isEmployed) &&
                field.name === 'isEmployed') ||
              field.name === 'email' ||
              ((contactInfo as ContactInfo).isEmployed &&
                (field.name === 'employer' ||
                  field.name === 'occupation'))))
        );
    },
    [contactInfo, isEmployed, passportControlOnMobile]
  );

  const verticallyCenterFields = useCallback(
    (controls: FieldControl[]) => {
      // (expand this later for different screen sizes)
      const fieldMarginTopValues = { 6: 2, 4: 2, 3: 4 };
      return fieldMarginTopValues[
        (controls as FieldControl[]).length as number as keyof object
      ];
    },
    []
  );

  return (
    <Form
      noValidate
      validated={formIsInvalid}
      className='profile-form pt-lg-2 px-lg-3'>
      <Row className='align-items-lg-baseline'>
        {form ? (
          ((form as unknown as FieldGroup).controls as FieldControl[]).map(
            (field, i) => {
              const intlWidth = international.width(
                field,
                i,
                isMobile,
                isInternational
              );
              const showTip = showTheseTooltips(field) && showToolTipIsOn;
              return (
                <Col
                  key={'contact-field-' + field.name}
                  ref={(node: ReactElement) => {
                    const map = getFieldMap();
                    if (node)
                      (map as unknown as any).set(
                        field.label,
                        (
                          (node as unknown as any)
                            .children as unknown as any
                        )[field.name as string as keyof ReactElement[]]
                      );
                    else (map as unknown as any).delete(field.label);
                  }}
                  className={`profile-field mt-lg-${verticallyCenterFields(
                    (form as unknown as FieldGroup).controls
                  )}`}
                  hidden={!international.show(field, isInternational)}
                  lg={intlWidth}
                  xs={intlWidth}>
                  <Form.Label
                    htmlFor={field.name}
                    hidden={handleHideUnemployment(field.name)}>
                    {international.label(field, isInternational)}
                  </Form.Label>
                  {isMobile && showTip ? (
                    <FormTippedField
                      name={field.name}
                      subText={handleSubText(field) as string}
                      field={
                        handleFieldControls(
                          field
                        ) as unknown as FieldControl
                      }
                    />
                  ) : (
                    handleFieldControls(field)
                  )}
                  {!isMobile ? (
                    <span
                      className={'pt-lg-2'}
                      hidden={handleHideUnemployment(field.name)}>
                      {handleSubText(field)}
                    </span>
                  ) : (
                    <></>
                  )}
                </Col>
              );
            }
          )
        ) : (
          <>Loading...</>
        )}
      </Row>
    </Form>
  );
};

export default React.memo(ProfileForm);
