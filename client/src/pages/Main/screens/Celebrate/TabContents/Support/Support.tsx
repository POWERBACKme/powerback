import React, {
  useMemo,
  Dispatch,
  useState,
  useCallback,
  SetStateAction,
} from 'react';
import ButtonGroup from 'react-bootstrap/esm/ButtonGroup';
import { BTC_ADDRESS, LIFEBLOOD, NEEDS } from './markup';
import BTC from '@Images/wallets/btc_wallet_qrc_tp.png';
import Spinner from 'react-bootstrap/esm/Spinner';
import Button from 'react-bootstrap/esm/Button';
import Carousel from 'react-bootstrap/Carousel';
import Figure from 'react-bootstrap/esm/Figure';
import Alert from 'react-bootstrap/esm/Alert';
import Stack from 'react-bootstrap/esm/Stack';
import { UserData, Bill } from '@Interfaces';
import Card from 'react-bootstrap/esm/Card';
import { Celebration, Props } from '@Types';
import { tweetDonation } from '@Utils';
import './style.css';

const Support = ({
  setShowRefreshAppSpinner,
  showRefreshAppSpinner,
  isShortMobile,
  donation,
  userData,
  bill,
  tip,
}: Props) => {
  const newDonation = useMemo(() => {
    return (
      userData &&
      (!userData.donations
        ? []
        : userData.donations[userData.donations.length - 1])
    );
  }, [userData]);

  const makeTweet = useCallback(
    () => tweetDonation(bill as Bill, newDonation as Celebration),
    [bill, newDonation]
  );

  const [prevNewDonation, setPrevNewDonation] = useState(newDonation);
  if (newDonation)
    if (Object.keys(newDonation).length)
      if (
        (newDonation as Celebration).twitter &&
        (newDonation as Celebration).twitter !== ''
      )
        if (prevNewDonation !== newDonation) {
          setPrevNewDonation(newDonation);
          if ((userData as UserData).settings.autoTweet) makeTweet();
        }

  const displayName = useMemo(() => {
    return userData && userData.firstName;
  }, [userData]);

  const handleSpinner = useCallback(
    () =>
      (setShowRefreshAppSpinner as Dispatch<SetStateAction<boolean>>)(
        (s) => {
          return (s = true);
        }
      ),
    [setShowRefreshAppSpinner]
  );

  return (
    <>
      <Alert className={'success-message'} variant={'success'}>
        <i className='bi bi-patch-check congratulations-user' />
        &nbsp;
        {'Congratulations' + (displayName ? ', ' + displayName : '') + '!'}
      </Alert>

      <Card className='success-message checkout-card'>
        {(showRefreshAppSpinner && (
          <Spinner
            role={'status'}
            animation={'border'}
            className={'reset-spinner pb-2'}>
            <span className={'visually-hidden'}>
              Processing Celebration...
            </span>
          </Spinner>
        )) || (
          <>
            <Card.Header className='px-4 py-3'>
              <Stack className={'pb-2'} direction={'horizontal'} gap={5}>
                <span>
                  {`Your $${donation} celebration is now being held awaiting action on  ${
                    bill ? (bill as Bill).bill : ''
                  }!`}
                </span>
                <i className='bi bi-stars' />
              </Stack>

              <ButtonGroup size={'sm'} className={'pb-3'}>
                <Button
                  variant={'outline-secondary'}
                  onClick={makeTweet}
                  type={'button'}>
                  Tweet This
                </Button>

                <Button
                  type={'button'}
                  onClick={handleSpinner}
                  variant={'outline-secondary'}>
                  Celebrate Again!
                </Button>
              </ButtonGroup>
            </Card.Header>
            <Card.Body>
              <Card.Title>
                {tip ? (
                  <div className='h6'>
                    Thanks for your generous tip to{' '}
                    <span className='powerback'>POWERBACK</span>
                  </div>
                ) : (
                  <div className='h5'>
                    Please consider giving to{' '}
                    <span className='powerback'>POWERBACK</span>
                  </div>
                )}
              </Card.Title>

              <Stack
                className={'direct-support p-lg-3 pb-3 px-2'}
                direction={'horizontal'}
                gap={3}>
                {isShortMobile ? (
                  <Carousel
                    fade={true}
                    touch={true}
                    slide={false}
                    pause={'hover'}
                    controls={false}
                    indicators={false}>
                    <Carousel.Item>{NEEDS}</Carousel.Item>
                    <Carousel.Item> {LIFEBLOOD}</Carousel.Item>
                  </Carousel>
                ) : (
                  NEEDS
                )}

                <div className={'btc'}>
                  <span>
                    GIVE
                    <i className={'bi bi-currency-bitcoin'} />
                    ACK
                  </span>
                  <Figure>
                    <Figure.Image
                      src={BTC}
                      width={80}
                      className={'btc-qr mt-1'}
                    />
                    <Figure.Caption
                      className={'btc-address'}
                      onClick={() => {}}>
                      {BTC_ADDRESS}
                    </Figure.Caption>
                  </Figure>
                </div>
              </Stack>
            </Card.Body>
            {!isShortMobile && (
              <Card.Footer className={'p-1 px-3'}>{LIFEBLOOD}</Card.Footer>
            )}
          </>
        )}
      </Card>
    </>
  );
};

export default React.memo(Support);
