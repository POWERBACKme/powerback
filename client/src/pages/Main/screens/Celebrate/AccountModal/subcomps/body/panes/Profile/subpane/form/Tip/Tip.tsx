import React, { ReactElement } from 'react';
import OverlayTrigger from 'react-bootstrap/esm/OverlayTrigger';
import Tooltip from 'react-bootstrap/esm/Tooltip';
import { FieldControl } from '@Types';

type Props = {
  field: FieldControl;
  subText: string;
  name: string;
};

const FormTippedField = ({ subText, field, name }: Props) => (
  <OverlayTrigger
    overlay={
      <Tooltip id={name + '-profile-form-tooltip'}>{subText}</Tooltip>
    }
    placement={'bottom'}
    trigger={'focus'}
    delay={0}>
    {field as unknown as ReactElement}
  </OverlayTrigger>
);

export default React.memo(FormTippedField);
