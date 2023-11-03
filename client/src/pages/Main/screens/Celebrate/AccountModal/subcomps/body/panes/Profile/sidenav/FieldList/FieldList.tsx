import React, {
  KeyboardEventHandler,
  MouseEventHandler,
  MutableRefObject,
  SetStateAction,
  useTransition,
  useCallback,
  useEffect,
  ReactNode,
  Dispatch,
  useState,
  useMemo,
} from 'react';
import { ContactInfo, UserData } from '@Interfaces';
import { FieldControl, Props } from '@Types';
import FieldGroup from './FieldGroup';
import { CONTROLS } from '../..';
import './style.css';

type FieldListProps = {
  setActiveTab: Dispatch<SetStateAction<string>>;
  getFieldMap: () => MutableRefObject<null>;
  fieldList: FieldControl[];
  setFieldList: () => void;
  activeTab: string;
};

const FieldList = ({
  setActiveTab,
  setFieldList,
  contactInfo,
  getFieldMap,
  activeTab,
  fieldList,
  isMobile,
  user,
  ...props
}: Props & FieldListProps) => {
  const [myLabelledControl, setMyLabelledControl] = useState(null);
  const [focusedInput, setFocusedInput] = useState(null);

  const [isFocusing, startFocusing] = useTransition();

  const jumpToField = useCallback(
    (e: MouseEvent & KeyboardEvent) => {
      if (e.type === 'keydown' && e.key !== 'Enter') return;

      const t = e.target,
        last = (t as HTMLInputElement).lastElementChild;
      let clickedLabel = (t as HTMLInputElement).textContent as string;
      if (clickedLabel === 'Postal Code') clickedLabel = 'Zip';
      if (last)
        clickedLabel = clickedLabel
          .replace(last.textContent as string, '')
          .trim();

      const [clickedFormTab] = CONTROLS.filter((form) =>
        form.controls.map((field) => field.label).includes(clickedLabel)
      );

      setMyLabelledControl(
        (clickedFormTab.controls as unknown as any).filter(
          (field: FieldControl) => field.label.includes(clickedLabel)
        )
      );
      const [labelledControl] = clickedFormTab.controls.filter((field) =>
        field.label.includes(clickedLabel)
      );
      if (
        (contactInfo as ContactInfo)[
          labelledControl.name as keyof ContactInfo
        ] !== ''
      )
        return;
      else setActiveTab(clickedFormTab.eventKey as unknown as any);
    },
    [contactInfo, setActiveTab]
  );

  const [prevActiveTab, setPrevActiveTab] = useState(activeTab);
  if (prevActiveTab !== activeTab) {
    startFocusing(() => {
      setPrevActiveTab(activeTab);
      setFocusedInput((s) =>
        myLabelledControl ? (s = (myLabelledControl[0] as any).label) : s
      );
    });
  }

  useEffect(() => {
    if (!focusedInput || isFocusing) return;
    else {
      const map: MutableRefObject<null> = getFieldMap();
      if (!(getFieldMap() as any).size) return;
      else (map as any).get(focusedInput).focus();
    }
  }, [setFocusedInput, focusedInput, isFocusing, getFieldMap]);

  const employmentRelated = useCallback((field: FieldControl) => {
    return field.name === 'occupation' || field.name === 'employer';
  }, []);

  const notEmploymentRelated = useCallback((field: FieldControl) => {
    return field.name !== 'occupation' && field.name !== 'employer';
  }, []);

  const employedColumn = useMemo(() => {
    return (
      <>
        {!isMobile && <span>Are you employed?</span>}
        {(((contactInfo as ContactInfo).isEmployed as boolean) && (
          <FieldGroup
            {...props}
            filterFields={employmentRelated}
            contactInfo={contactInfo}
            jumpToField={
              jumpToField as unknown as MouseEventHandler<HTMLSpanElement> &
                KeyboardEventHandler<HTMLSpanElement>
            }
            isMobile={isMobile}
            type={'employment'}
            fieldList={fieldList}
            // employedColumn={employedColumn as unknown as ReactNode}
          />
        )) || <></>}
      </>
    );
  }, [
    employmentRelated,
    contactInfo,
    jumpToField,
    fieldList,
    isMobile,
    props,
  ]);

  return !(user as UserData).isCompliant ? (
    <FieldGroup
      fieldList={fieldList}
      filterFields={notEmploymentRelated}
      employedColumn={employedColumn as unknown as ReactNode}
      contactInfo={contactInfo}
      jumpToField={
        jumpToField as unknown as MouseEventHandler<HTMLSpanElement> &
          KeyboardEventHandler<HTMLSpanElement>
      }
      isMobile={isMobile}
      {...props}
    />
  ) : (
    (isMobile && (
      <p className='reminder mt-2'>
        Please keep your information current.
      </p>
    )) || <></>
  );
};

export default React.memo(FieldList);
