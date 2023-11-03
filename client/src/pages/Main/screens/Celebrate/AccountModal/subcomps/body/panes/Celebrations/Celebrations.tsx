import React, {
  useCallback,
  Suspense,
  useState,
  useMemo,
  useRef,
} from 'react';
import { VerticalTimeline } from 'react-vertical-timeline-component';
import { PolsOnParade, UserData } from '@Interfaces';
import { useCelebrationEvents } from '@Hooks';
import { Explore, Methods } from './subcomps';
import EventPlaceholder from './Placeholder';
import { Celebration, Props } from '@Types';
import Tab from 'react-bootstrap/esm/Tab';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import accounting from 'accounting';
import './style.css';

const CelebrationEvent = React.lazy(() => import('./subcomps/event'));

interface FilteredEvents {
  filteredEvents: Celebration[];
}

const CelebrationsPane = ({
  switchToErrorScreen,
  polsOnParade,
  isMobile,
  user,
  ...props
}: Props) => {
  // keeps timeline up-to-date after celebration cycle
  const [prevUserCelebrations, setPrevUserCelebrations] = useState(
    (user as UserData).donations
  );
  if (prevUserCelebrations !== (user as UserData).donations)
    setPrevUserCelebrations((user as UserData).donations);
  const [celebrationEvents, { setCelebrationEvents }] =
    useCelebrationEvents(prevUserCelebrations as Celebration[]);

  const textInputRef = useRef<HTMLInputElement>(null);

  const filterActive = useCallback(() => {
    if (!textInputRef) return;
    else if (!textInputRef.current) return;
    else
      return textInputRef.current.value
        ? textInputRef.current.value.trim().length > 0
        : false;
  }, []);

  const totalViewedDonations = useCallback(
    ({ filteredEvents }: FilteredEvents) => {
      if (!filteredEvents.length) {
        return;
      } else {
        return accounting.formatMoney(
          filteredEvents.reduce((a, b) => a + b.donation, 0)
        );
      }
    },
    []
  );

  const eventsReady = useMemo(() => {
    return (
      celebrationEvents &&
      celebrationEvents.events &&
      celebrationEvents.events.length
    );
  }, [celebrationEvents]);

  const timelineStyles = {
    contentStyle: { background: '#1f1f1f', color: '#f9c' },
    contentArrowStyle: { borderLeft: '7px solid #fc9' },
    iconStyle: { background: '#5E8191', color: '#ccc' },
  };

  return (
    <Tab.Pane
      className={'pt-1'}
      mountOnEnter={true}
      unmountOnExit={true}
      eventKey={'Celebrations'}
      id={'celebrations-modal-subpane'}
      onEnter={() => setCelebrationEvents({ type: 'INIT' })}>
      <Row className='celebrations-modal-subpane'>
        <Col xs={12} lg={3}>
          <Methods
            {...props}
            pols={(polsOnParade as PolsOnParade).houseMembers}
            switchToErrorScreen={
              switchToErrorScreen as (err: Error) => void
            }
            filterEvents={setCelebrationEvents}
            textInputRef={textInputRef}
            user={user as UserData}
            isMobile={isMobile}
          />
        </Col>

        <Col xs={12} lg={9}>
          <Row className='flex-lg-column'>
            <Col xs={12}>
              <Explore
                filterActive={filterActive}
                events={celebrationEvents}
                user={user as UserData}
              />
            </Col>

            <Col className='mx-lg-4'>
              <div
                className={
                  'px-lg-3 timeline-bg' +
                  (!eventsReady ? 'stop-scroll' : '')
                }>
                <VerticalTimeline
                  key={(user as UserData).id + '-vertical-timeline'}
                  layout={'1-column-right'}
                  lineColor={'#9f8879'}>
                  <Suspense
                    fallback={
                      <>
                        <EventPlaceholder
                          isMobile={isMobile}
                          timelineStyles={timelineStyles}
                          handleError={
                            switchToErrorScreen as (err: Error) => void
                          }
                        />
                        <EventPlaceholder
                          handleError={
                            switchToErrorScreen as (err: Error) => void
                          }
                          timelineStyles={timelineStyles}
                          isMobile={isMobile}
                        />
                      </>
                    }>
                    {celebrationEvents.filteredEvents.map(
                      (c: Celebration) => (
                        <CelebrationEvent
                          {...props}
                          key={c.idempotencyKey + '-celebration-event'}
                          handleError={
                            switchToErrorScreen as (err: Error) => void
                          }
                          pols={
                            (polsOnParade as PolsOnParade).houseMembers
                          }
                          elementId={
                            c.idempotencyKey + '-celebration-event'
                          }
                          id={c.idempotencyKey as string}
                          timelineStyles={timelineStyles}
                          polsOnParade={polsOnParade}
                          isMobile={isMobile}
                          celebration={c}
                          user={user}
                        />
                      )
                    )}
                    {celebrationEvents.filteredEvents.length > 0 && (
                      <div className={'viewed-celebrations-total'}>
                        {(!filterActive() ? 'Grand ' : 'Filtered ') +
                          'Total: ' +
                          totalViewedDonations(celebrationEvents)}
                      </div>
                    )}
                  </Suspense>
                </VerticalTimeline>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Tab.Pane>
  );
};

export default React.memo(CelebrationsPane);
