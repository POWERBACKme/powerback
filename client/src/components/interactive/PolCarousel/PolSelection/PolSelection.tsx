import React, {
  useRef,
  useMemo,
  useState,
  useEffect,
  RefObject,
  useCallback,
  useLayoutEffect,
  MutableRefObject,
  StyleHTMLAttributes,
} from 'react';
import Col, { ColProps } from 'react-bootstrap/esm/Col';
import { EscrowDisplay, Subheading, Headshot } from '.';
import Row from 'react-bootstrap/esm/Row';
import { useDisplayName } from '@Hooks';
import { handleKeyDown } from '@Utils';
import { Props } from '@Types';
import {
  Bill,
  PolData,
  DisplayName,
  PolDonations,
  PolsOnParade,
} from '@Interfaces';
import './style.css';

type PolSelectionProps = {
  middleName?: string;
  description?: PolData;
  firstName: string;
  lastName: string;
  chamber: string;
  info: PolData;
  name: string;
  bill?: Bill;
  id: string;
};

// donee/Pol unit
const PolSelection = ({
  totalCelebrations,
  polsOnParade,
  description,
  selectedPol,
  middleName,
  firstName,
  selectPol,
  lastName,
  isMobile,
  chamber,
  bill,
  info,
  name,
  id,
  ...props
}: Props & PolSelectionProps) => {
  const [displayName, { setDisplayName }] = useDisplayName({
    middle: middleName ?? '',
    first: firstName,
    last: lastName,
    isMobile,
  });

  useLayoutEffect(() => setDisplayName(19), [setDisplayName]);

  const [polDonationsInEscrow, setPolDonationsInEscrow] = useState(0);
  const [polDonationTally, setPolDonationTally] = useState(0);

  const tallyDonations = useCallback(
    (id: string) => {
      let [polDonations] = (totalCelebrations as PolDonations[]).filter(
        (c) => c.pol_id === id
      );
      if (!polDonations) {
        return;
      } else {
        setPolDonationTally(polDonations.count);
        setPolDonationsInEscrow(polDonations.donation);
      }
    },
    [totalCelebrations]
  );

  useEffect(() => tallyDonations(id), [id, tallyDonations]);

  // ref handles activation of pol selection, scrolling and focus
  const selectedPolRef = useRef<MutableRefObject<null>>();

  const isDifferentPol = useMemo(() => {
    return (
      (id && description && id !== (description as PolData).id) ||
      !id ||
      !description
    );
  }, [id, description]);

  const [selectionClassName, setSelectionClassName] = useState<string>(''); // img border effect
  // keyboard method of choosing pol feeds into Select handler

  const handleSelect = useCallback(() => {
    if (isDifferentPol) (selectPol as (pol: PolData) => void)({ ...info });

    // smooth scrolls pol into center view
    (
      (selectedPolRef as RefObject<MutableRefObject<null>>)
        .current as ColProps
    ).scrollIntoView({
      block: 'nearest',
      inline: 'center', // should be CENTER on mobile?
      behavior: 'instant', // should be SMOOTH on mobile?
    });
    // slap on a border to visually indicate selection
    (
      (
        (selectedPolRef as RefObject<MutableRefObject<null>>)
          .current as ColProps
      ).style as StyleHTMLAttributes<ColProps>
    ).className = 'pol-headshot-selected';
    setSelectionClassName(
      (
        (selectedPolRef as RefObject<MutableRefObject<null>>)
          .current as any
      ).style.className as string
    );
    // for the aforementioned accessibility
    (selectedPolRef as any).current.focus();
  }, [isDifferentPol, selectPol, info]);

  const nail = useMemo(() => {
    return {
      tabIndex:
        (polsOnParade as PolsOnParade).applied.length === 1 ? -1 : 0,
      styles:
        (polsOnParade as PolsOnParade).applied.length === 1
          ? { height: '357px !important' }
          : {},
    };
  }, [polsOnParade]);

  const isExpanded = useMemo(() => {
    return selectedPol !== null;
  }, [selectedPol]);

  return (
    <Col className='pol-wrapper' key={'pol-carousel-selection-' + id}>
      <Row style={nail.styles}>
        <Col
          id={id}
          ref={selectedPolRef}
          onClick={handleSelect}
          tabIndex={nail.tabIndex}
          aria-expanded={isExpanded}
          className={'pol-selection-col'}
          onKeyDown={(e) => handleKeyDown(e, handleSelect)}>
          <EscrowDisplay
            {...(displayName as DisplayName)}
            key={id + '-escrow-display-' + polDonationTally}
            donations={polDonationsInEscrow}
            tally={polDonationTally}
            id={id}
          />
          <Headshot
            {...props}
            id={description ? (description as PolData).id : ''}
            cls={selectionClassName}
            name={name}
            src={id}
          />
          <Subheading
            totalCelebrations={totalCelebrations}
            polsOnParade={polsOnParade}
            selectedPol={selectedPol}
            selectPol={selectPol}
            isMobile={isMobile}
            bill={bill}
            {...props}
          />
        </Col>
      </Row>
    </Col>
  );
};

export default React.memo(PolSelection);
