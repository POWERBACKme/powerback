import React, {
  useMemo,
  ReactNode,
  useCallback,
  MouseEventHandler,
  KeyboardEventHandler,
} from 'react';
import ListGroup from 'react-bootstrap/esm/ListGroup';
import Stack from 'react-bootstrap/esm/Stack';
import { FieldControl, Props } from '@Types';
import { ContactInfo } from '@Interfaces';
import './style.css';

type FieldGroupProps = {
  fieldList: FieldControl[]; // swap this with FieldControl? or just reconcile them somehow
  employedColumn?: ReactNode;
  jumpToField: MouseEventHandler<HTMLSpanElement> &
    KeyboardEventHandler<HTMLSpanElement>;
  filterFields: (field: any) => boolean;
  type?: string;
};

const FieldGroup = ({
  employedColumn,
  filterFields,
  contactInfo,
  jumpToField,
  fieldList,
  isMobile,
  type,
}: Props & FieldGroupProps) => {
  const employedIcon = useMemo(() => {
      if (!contactInfo || isMobile) return;
      else {
        const bi = 'bi bi-';
        if (!contactInfo.isEmployed) {
          return bi + 'bookmark-check finished-field';
        } else {
          return bi + 'arrow-down-left-square';
        }
      }
    }, [isMobile, contactInfo]),
    hidePassport = useCallback(
      (name: string) => {
        return (
          ((contactInfo as ContactInfo).country as string) ===
            'United States' && name === 'passport'
        );
      },
      [contactInfo]
    ),
    hideEmploymentRelated = useCallback(
      (name: string) => {
        if (!(contactInfo as ContactInfo).isEmployed) {
          return (
            name === 'isEmployed' ||
            name === 'occupation' ||
            name === 'employer'
          );
        } else return false;
      },
      [contactInfo]
    ),
    handleAccessFieldListItem = useCallback(
      (field: string) => {
        return +!(
          (contactInfo as ContactInfo)[field as keyof ContactInfo] ===
            '' || field !== 'isEmployed'
        );
      },
      [contactInfo]
    ),
    handleJumpToFieldClass = useCallback(
      (field: string) => {
        if (
          (contactInfo as ContactInfo)[field as keyof ContactInfo] ===
            '' &&
          field !== 'isEmployed'
        ) {
          return 'jump-to-field';
        }
      },
      [contactInfo]
    ),
    handleItemLabel = useCallback(
      (field: FieldControl) => {
        if (
          field.name === 'zip' &&
          (contactInfo as ContactInfo).country !== 'United States'
        ) {
          return 'Postal Code';
        } else return field.label;
      },
      [contactInfo]
    ),
    employedField = useCallback((field: FieldControl) => {
      return field.name === 'isEmployed';
    }, []),
    handleIcon = useCallback(
      (field: FieldControl) => {
        if (employedField(field)) {
          if (isMobile) return <i className={employedIcon} />;
          else return <></>;
        } else
          return (contactInfo as ContactInfo)[
            (field as FieldControl).name as keyof ContactInfo
          ] ? (
            <i className='bi bi-bookmark-check finished-field' />
          ) : (
            <i className='bi bi-exclamation-circle text-warning' />
          );
      },
      [isMobile, contactInfo, employedIcon, employedField]
    ),
    handleFieldListItemLabel = useCallback(
      (field: FieldControl, altColumn: ReactNode) => {
        return employedField(field) ? altColumn : handleItemLabel(field);
      },
      [employedField, handleItemLabel]
    );

  return (
    <ListGroup variant={'flush'} className={'profile-list-group mt-2'}>
      {fieldList
        .filter((field) => filterFields(field))
        .map((field) => (
          <ListGroup.Item
            className={type}
            hidden={
              hidePassport(field.name) || hideEmploymentRelated(field.name)
            }
            key={field.name + 'list-group-item'}>
            <Stack direction='horizontal'>
              <span
                onClick={jumpToField}
                onKeyDown={jumpToField}
                className={handleJumpToFieldClass(field.name)}
                tabIndex={handleAccessFieldListItem(field.name)}>
                {handleFieldListItemLabel(
                  field as unknown as FieldControl,
                  employedColumn
                )}
              </span>
              &nbsp;
              {handleIcon(field as unknown as FieldControl)}
            </Stack>
          </ListGroup.Item>
        ))}
    </ListGroup>
  );
};

export default React.memo(FieldGroup);
