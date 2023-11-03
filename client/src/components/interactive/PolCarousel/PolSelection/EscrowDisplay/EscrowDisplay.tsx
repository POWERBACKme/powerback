import React from 'react';
import { InfoTooltip } from '@Components/modals';
import { PolName } from '@Components/displays';
import Badge from 'react-bootstrap/esm/Badge';
import Stack from 'react-bootstrap/esm/Stack';
import accounting from 'accounting';
import './style.css';

type Props = {
  donations: number;
  value: string;
  tally: number;
  id: string;
  x: string;
  y: string;
};

const EscrowDisplay = ({ donations, value, tally, id, x, y }: Props) => (
  <Stack
    style={donations > 0 ? { marginLeft: y } : {}}
    className={'escrow-display'}
    direction={'horizontal'}
    gap={0}>
    {donations > 0 ? (
      <Badge
        className={'escrow-badge'}
        style={donations > 0 ? { marginRight: x } : {}}>
        <InfoTooltip
          message={
            <>
              <span className={'donation-popper'}>
                {accounting.formatMoney(donations)}
              </span>
              <span>
                {' '}
                total in-waiting for this politician. This total is{' '}
                <span className='fst-italic'>across the userbase.</span>
              </span>

              <br />
              <span>Total celebrations: {tally}</span>
              <br />
              <span>
                Average celebration:{' '}
                {accounting.formatMoney(donations / tally)}
              </span>
            </>
          }
          toolTipId={id + '-donations-tooltip'}
          icon={'currency-dollar'}
          infoPlacement={'auto'}
          showToolTips={true}
        />
      </Badge>
    ) : (
      <></>
    )}
    <PolName name={value as string} cls={'pol-selector'} headingSize={4} />
  </Stack>
);

export default React.memo(EscrowDisplay);
