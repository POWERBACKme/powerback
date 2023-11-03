import React, { useEffect, useMemo, useState } from 'react';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import { Icon, Title, ButtonSet, Subtitle } from './subcomps';
import 'react-vertical-timeline-component/style.min.css';
import advancedFormat from 'dayjs/plugin/advancedFormat';
import relativeTime from 'dayjs/plugin/relativeTime';
import EventPlaceholder from '../../Placeholder';
import { HouseMember, Bill } from '@Interfaces';
import Image from 'react-bootstrap/esm/Image';
import Logo from '@Images/logo/cable-nav.png';
import Stack from 'react-bootstrap/esm/Stack';
import { Celebration, Props } from '@Types';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import dayjs from 'dayjs';
import './style.css';

type EventProps = {
  handleError: (err: Error) => void;
  timelineStyles: {
    contentArrowStyle: object;
    contentStyle: object;
    iconStyle: object;
  };
  celebration: Celebration;
  elementId: string;
  id: string;
};

const CelebrationEvent = ({
  timelineStyles,
  celebration,
  handleError,
  elementId,
  isMobile,
  bill,
  pols,
  id,
  ...props
}: Props & EventProps) => {
  dayjs.extend(relativeTime);
  dayjs.extend(advancedFormat);

  const idToDate = useMemo(() => {
    return celebration._id
      ? new Date(
          parseInt(
            (celebration._id as unknown as string).substring(0, 8),
            16
          ) * 1000
        )
      : new Date();
  }, [celebration._id]);

  const dDT = useMemo(() => {
      const dT = ['MM-DD-YYYY', 'HH:mm'];
      return {
        date: dayjs(idToDate).format(dT[0]),
        time: dayjs(idToDate).format(dT[1]),
      };
    }, [idToDate]),
    BILL_ID = useMemo(() => {
      return celebration.bill_id
        .substring(0, celebration.bill_id.length - 4)
        .toUpperCase();
    }, [celebration.bill_id]);

  const [donee, setDonee] = useState<HouseMember | undefined>();

  useEffect(
    () =>
      setDonee(
        (pols as HouseMember[]).filter(
          (d: HouseMember) => d.member_id === celebration.pol_id
        )[0]
      ),
    [pols, celebration]
  );

  return donee ? (
    <VerticalTimelineElement
      id={elementId}
      {...timelineStyles}
      key={id + '-celebration-event'}
      icon={<Icon donee={donee} handleError={handleError} {...props} />}
      date={
        (
          <Row>
            <Col xs={'auto'}>
              <Stack direction='vertical' gap={2}>
                <Stack direction='horizontal' gap={3}>
                  <span>date: {dDT.date}</span>
                  <span>time: {dDT.time}</span>
                </Stack>{' '}
                <span>id: {id}</span>
              </Stack>
            </Col>
            <Col>
              {' '}
              <Image
                className={'splash-icon receipt-mark pt-lg-1'}
                height={40}
                src={Logo}
              />
            </Col>
          </Row>
        ) as unknown as string
      }>
      <>
        <Row>
          <Col xs={8}>
            <Stack direction={'vertical'}>
              <Title donee={donee} isMobile={isMobile} />
              <Subtitle donee={donee} {...props} />
            </Stack>
          </Col>
          <Col>
            <Stack direction={'vertical'} className={'text-end'}>
              <span className={'donation-bill'}>{BILL_ID}</span>
              <span className={'donation-amount'}>
                ${celebration.donation}
              </span>
            </Stack>
          </Col>
        </Row>
        <Row className='mt-3'>
          <Col>
            <ButtonSet
              {...props}
              selectedBill={bill as Bill}
              celebration={{ ...celebration }}
              handleError={handleError}
            />
          </Col>
        </Row>
      </>
    </VerticalTimelineElement>
  ) : (
    <EventPlaceholder
      timelineStyles={timelineStyles}
      handleError={handleError}
      isMobile={isMobile}
    />
  );
};

export default React.memo(CelebrationEvent);
