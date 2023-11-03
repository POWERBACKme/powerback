import React, { Suspense, useState } from 'react';
import DesignCelebration from './DesignCelebration';
import { Elements } from '@stripe/react-stripe-js';
import { TabFlow } from '@Components/page/navs';
import { loadStripe } from '@stripe/stripe-js';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import Tab from 'react-bootstrap/esm/Tab';
import { Props } from '@Types';
import './style.css';

const TipAsk = React.lazy(() => import('./TipAsk')),
  Payment = React.lazy(() => import('./Payment')),
  Support = React.lazy(() => import('./Support'));

const TabContents = ({ paymentProcessed, tabKey, ...props }: Props) => {
  const [donorId, setDonorId] = useState<string | {}>({});

  const [stripePromise] = useState(
    loadStripe('pk_test_pLaCeHoLdEr0123456789')
  );

  return (
    <Row className='flex-column'>
      <Col hidden={tabKey !== 'payment' && tabKey !== 'tips'}>
        <TabFlow tabKey={tabKey} {...props} />
      </Col>
      <Col>
        <Tab.Content id='donate-pg-tab-content'>
          <Tab.Pane
            unmountOnExit={paymentProcessed}
            eventKey={'pol-donation'}>
            <DesignCelebration tabKey={tabKey} {...props} />
          </Tab.Pane>

          <Suspense fallback={<></>}>
            <Tab.Pane eventKey='payment'>
              <Payment
                paymentProcessed={paymentProcessed}
                setDonorId={setDonorId}
                stripe={stripePromise}
                tabKey={tabKey}
                {...props}
              />
            </Tab.Pane>

            <Tab.Pane eventKey='tips'>
              <Elements stripe={stripePromise}>
                <Row className='payment'>
                  <Col className='payment'>
                    <TipAsk
                      paymentProcessed={paymentProcessed}
                      donorId={donorId}
                      {...props}
                    />
                  </Col>
                </Row>
              </Elements>
            </Tab.Pane>
            <Tab.Pane eventKey='support'>
              <Row className='support'>
                <Col className='support'>
                  <Support {...props} />
                </Col>
              </Row>
            </Tab.Pane>
          </Suspense>
        </Tab.Content>
      </Col>
    </Row>
  );
};

export default React.memo(TabContents);
