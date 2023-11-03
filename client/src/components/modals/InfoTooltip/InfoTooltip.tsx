import React, { ReactNode } from 'react';
import Tooltip from 'react-bootstrap/esm/Tooltip';
import { Placement } from 'react-bootstrap/esm/types';
import OverlayTrigger from 'react-bootstrap/esm/OverlayTrigger';

const InfoTooltip = ({
  icon,
  message,
  toolTipId,
  showToolTips,
  infoPlacement = 'auto',
}: {
  icon: string;
  toolTipId: string;
  message: ReactNode;
  showToolTips: boolean;
  infoPlacement?: string;
}) =>
  showToolTips ? (
    <OverlayTrigger
      overlay={<Tooltip id={toolTipId}>{message}</Tooltip>}
      placement={infoPlacement as Placement}>
      <i className={`bi bi-${icon}`}></i>
    </OverlayTrigger>
  ) : (
    <></>
  );

export default React.memo(InfoTooltip);
