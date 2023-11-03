import React, {
  Dispatch,
  Suspense,
  ChangeEvent,
  useCallback,
  SetStateAction,
} from 'react';
import Placeholder from 'react-bootstrap/esm/Placeholder';
import { PolCarousel } from '@Components/interactive';
import DonationSection from './DonationSection';
import { Search } from '@Components/search';
import { PolsOnParade } from '@Interfaces';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import { Props } from '@Types';
import './style.css';

const DesignCelebration = ({
  setShowCosponsors,
  showCosponsors,
  polsOnParade,
  selectPol,
  ...props
}: Props) => {
  const handleCosponsors = useCallback(
    (e: ChangeEvent) =>
      (setShowCosponsors as Dispatch<SetStateAction<boolean>>)(
        (e.target as HTMLInputElement).checked
      ),
    [setShowCosponsors]
  );
  return (
    <div className='design-celebration'>
      <Row>
        <Col className='celebration-top third'>
          <Suspense
            fallback={
              <Placeholder
                className={'selector-bar'}
                animation={'wave'}
                as={Col}
                lg={5}
              />
            }>
            <Row className='selector-bar'>
              <Col id='choose-pols' lg={5}>
                {(polsOnParade as PolsOnParade).applied.length > 0 && (
                  <Search
                    handleCosponsors={handleCosponsors}
                    showCosponsors={showCosponsors}
                    {...props}
                  />
                )}
              </Col>
            </Row>
          </Suspense>
        </Col>
      </Row>
      <Row>
        <Col className='celebration-middle third'>
          <PolCarousel
            showCosponsors={showCosponsors}
            polsOnParade={polsOnParade}
            selectPol={selectPol}
            {...props}
          />
        </Col>
      </Row>
      <Row>
        <Col className='celebration-bottom third pt-lg-1'>
          {(polsOnParade as PolsOnParade).applied.length > 0 && (
            <DonationSection {...props} />
          )}
        </Col>
      </Row>
    </div>
  );
};

export default React.memo(DesignCelebration);
