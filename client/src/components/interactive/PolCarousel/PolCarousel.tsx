import React, {
  useMemo,
  useEffect,
  useReducer,
  useTransition,
} from 'react';
import Placeholder from 'react-bootstrap/esm/Placeholder';
import Container from 'react-bootstrap/esm/Container';
import { PolsOnParade, PolData } from '@Interfaces';
import { transformPolData, calcDays } from '@Utils';
import Stack from 'react-bootstrap/esm/Stack';
import Row from 'react-bootstrap/esm/Row';
import { PolSelection, Loading } from '.';
import { Props } from '@Types';
import './style.css';

const PolCarousel = ({
  showCosponsors,
  polsOnParade,
  cosponsorIds,
  isMobile,
  polData,
  ...props
}: Props) => {
  const [polsAreLoaded, setPolsAreLoaded] = useReducer((state) => {
    return (state = true);
  }, false);

  const [isLoading, startLoading] = useTransition();

  // carousel items after user manipulation
  const applied = useMemo(() => {
    return !polsOnParade ? [] : polsOnParade.applied;
  }, [polsOnParade]);

  useEffect(() => {
    if (applied && !polsAreLoaded)
      startLoading(() => {
        if (applied.length) setPolsAreLoaded();
      });
  }, [applied, polsAreLoaded]);

  const handleCenteringPolSelection = useMemo(() => {
    if (!polsAreLoaded) return;
    // turn this into a switch activity for different screen sizes
    else if (applied.length < 8 && applied.length > 3) {
      return 'pol-row short';
    } else if (applied.length === 3) {
      return 'pol-row three';
    } else if (applied.length === 2) {
      return 'pol-row two';
    } else if (applied.length === 1) {
      return 'pol-row one';
    } else return 'pol-row';
  }, [polsAreLoaded, applied]);

  const filteredByCosponsorship = (
    polsOnParade as PolsOnParade
  ).applied.filter((pol) =>
    (cosponsorIds as string[]).length > 0 && (showCosponsors as boolean)
      ? (cosponsorIds as string[]).includes(pol.member_id)
      : pol
  );

  return (
    <Container id={'pol-carousel'} className={'pol-carousel'}>
      {isLoading || (!polsAreLoaded && !handleCenteringPolSelection) ? (
        <>
          <Placeholder
            as={Container}
            animation={'wave'}
            className={'pol-carousel-placeholder'}>
            <Placeholder
              className={'pol-row-placeholder'}
              animation={'wave'}
              as={Row}>
              <Loading />
            </Placeholder>
          </Placeholder>
        </>
      ) : (
        <Row
          className={'pol-carousel ' + handleCenteringPolSelection}
          style={
            filteredByCosponsorship.length < 9 && !isMobile
              ? { justifyContent: 'center' }
              : {}
          }>
          {polsOnParade &&
            filteredByCosponsorship.length > 0 &&
            filteredByCosponsorship.map((choice) => (
              <Stack
                key={choice.id}
                direction={'horizontal'}
                className={'pol-w-card'}>
                <PolSelection
                  {...props}
                  {...choice}
                  id={choice.id}
                  polData={polData}
                  isMobile={isMobile}
                  lastName={choice.last_name}
                  polsOnParade={polsOnParade}
                  firstName={choice.first_name}
                  state={choice.roles[0].state}
                  info={transformPolData(choice)}
                  description={polData as PolData}
                  twitter={choice.twitter_account}
                  rank={choice.roles[0].state_rank}
                  chamber={choice.roles[0].chamber}
                  district={choice.roles[0].district}
                  middleName={choice.middle_name}
                  FEC_id={choice.roles[0].fec_candidate_id}
                  end_date={calcDays(choice.roles[0].end_date)}
                  start_date={calcDays(choice.roles[0].start_date)}
                  name={choice.first_name + ' ' + choice.last_name}
                  key={'pol-selection-card-' + choice.id}
                />
              </Stack>
            ))}
        </Row>
      )}
    </Container>
  );
};

export default React.memo(PolCarousel);
