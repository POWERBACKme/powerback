import React, { useCallback, useMemo } from 'react';
import Placeholder from 'react-bootstrap/esm/Placeholder';
import ListGroup from 'react-bootstrap/esm/ListGroup';
import { Elements } from '@stripe/react-stripe-js';
import { DisplayName, PolData } from '@Interfaces';
import { InfoTooltip } from '@Components/modals';
import { PaymentForm } from '@Components/forms';
import { PATREON, CHECKOUT } from '@CONSTANTS';
import Image from 'react-bootstrap/esm/Image';
import { PaymentProps, Props } from '@Types';
import Card from 'react-bootstrap/esm/Card';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import accounting from 'accounting';
import { titleize } from '@Utils';
import './style.css';

const CheckoutCard = ({
  displayName,
  setDisplayName,
  setDonorId,
  setTabKey,
  userData,
  donation,
  settings,
  isMobile,
  polData,
  stripe,
  bill,
  ...props
}: Props & PaymentProps) => {
  const fee = useCallback(() => {
    let d = donation as number;
    if (donation === void 0) {
      d = 0;
    }
    return d * CHECKOUT.SURCHARGE.PERCENTAGE + CHECKOUT.SURCHARGE.ADDEND;
  }, [donation]);

  const surchargeMessage = useMemo(() => {
    return (
      'Charges are ' +
      CHECKOUT.SURCHARGE.PERCENTAGE * 100 +
      '% of the donation, plus ' +
      CHECKOUT.SURCHARGE.ADDEND * 100 +
      ' cents.'
    );
  }, []);

  const handleClick = useCallback(
    () => window.open(PATREON.URI, '_blank', PATREON.SETTINGS),
    []
  );

  return (
    <Card className='checkout-card pending-card'>
      <Card.Header as='h5'>Your Pending Celebration</Card.Header>
      <Card.Body>
        <Card.Title>
          <Row>
            <Col>
              <Row className='pending-choices'>
                {!(polData as PolData).name ? (
                  <Placeholder
                    className={'placeholder checkout-pol-heading w-50'}
                    animation={'wave'}
                  />
                ) : (
                  <>
                    {((polData as PolData).chamber === 'House'
                      ? 'Rep. '
                      : 'Sen. ') +
                      (displayName as unknown as DisplayName).value}

                    <span className='subtitle'>{`${
                      (polData as PolData).district !== 'At-Large'
                        ? 'District'
                        : ''
                    } ${(polData as PolData).district} of ${
                      (polData as PolData).state
                    }`}</span>
                  </>
                )}
              </Row>
            </Col>

            <Col>
              {bill ? (
                <Row className='pending-choices bill-of-sale'>
                  {bill.bill}
                  <span className='subtitle'>
                    {bill.short_title &&
                      titleize(
                        bill.short_title,
                        CHECKOUT.BILL_DESCRIPTION_CHAR_LIMIT.LG
                      )}
                  </span>
                </Row>
              ) : (
                <>Loading Bill...</>
              )}
            </Col>
          </Row>
        </Card.Title>

        <Row className='body-top'>
          <Col>
            {!polData ? (
              <Placeholder
                as={Image}
                variant={'top'}
                animation={'wave'}
                className={'checkout-headshot'}
              />
            ) : (
              <Card.Img
                src={`../pfp/${(polData as PolData).id}.webp`}
                className={'checkout-headshot'}
                loading={'lazy'}
                variant={'top'}
                as={Image}
              />
            )}
          </Col>

          <Col>
            <Row id={'checkout-details'} className={'mt-2 pt-3'}>
              <Col>
                <Card.Text className='mb-2'>CHECKOUT</Card.Text>
                <ListGroup
                  variant={'flush'}
                  className={'list-group-flush'}>
                  <ListGroup.Item>
                    Donation
                    <span>
                      {donation ? accounting.formatMoney(donation) : null}
                    </span>
                  </ListGroup.Item>

                  <ListGroup.Item>
                    <span className='surcharge-list-group-item'>
                      Surcharge{' '}
                      <InfoTooltip
                        icon={'question-circle'}
                        infoPlacement={'auto-end'}
                        message={surchargeMessage}
                        toolTipId={'tooltip-right-surcharge-info'}
                        showToolTips={
                          !settings ? false : settings.showToolTips
                        }
                      />{' '}
                    </span>

                    {fee() ? accounting.formatMoney(fee()) : '$0.00'}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <p id='surcharge-info'>
                      {CHECKOUT.SURCHARGE.INFO[0]}
                      <span className='natural-link' onClick={handleClick}>
                        {CHECKOUT.SURCHARGE.INFO[1]}
                      </span>
                    </p>
                  </ListGroup.Item>
                  <ListGroup.Item id='checkout-total'>
                    TOTAL
                    <span>
                      {(donation as number) + fee()
                        ? accounting.formatMoney(
                            (donation as number) + fee()
                          )
                        : '$0.00'}
                    </span>
                  </ListGroup.Item>
                </ListGroup>
              </Col>
              <hr />
            </Row>
          </Col>
        </Row>
      </Card.Body>

      <Card.Footer>
        <Elements stripe={stripe}>
          <PaymentForm
            setDonorId={setDonorId}
            setTabKey={setTabKey}
            donation={donation}
            isMobile={isMobile}
            userData={userData}
            polData={polData}
            {...props}
          />
        </Elements>
      </Card.Footer>
    </Card>
  );
};

export default React.memo(CheckoutCard);
