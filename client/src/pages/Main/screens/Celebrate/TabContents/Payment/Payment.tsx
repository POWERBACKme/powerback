import React, {
  useLayoutEffect,
  SetStateAction,
  useEffect,
  Dispatch,
} from 'react';
import { PolData, ShowModal, UserData } from '@Interfaces';
import { CheckoutCard } from '@Components/displays';
import { PaymentProps, Props } from '@Types';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import { useDisplayName } from '@Hooks';
import API from '@API';
import './style.css';

const Payment = ({
  switchToErrorScreen,
  setShowModal,
  isMobile,
  userData,
  polData,
  tabKey,
  ...props
}: Props & PaymentProps) => {
  const [displayName, { setDisplayName }] = useDisplayName({
    first: polData?.first_name as string,
    middle: polData?.middle_name ?? '',
    last: polData?.last_name as string,
    isMobile,
  });
  useLayoutEffect(
    () =>
      (
        (polData as PolData) &&
        (setDisplayName as (maxLen: number) => void)
      )(17),
    [polData, setDisplayName]
  );
  // checks database if user has already agreed to Eligibility rules
  useEffect(() => {
    if (tabKey !== 'payment' || !userData) {
      return;
    }
    let ignore = false;
    API.checkPrivilege((userData as UserData).id)
      .then((res) => {
        const data = res.data;
        return data;
      })
      .then((data) => {
        if (data === false && !ignore)
          (setShowModal as Dispatch<SetStateAction<ShowModal>>)((s) => ({
            ...s,
            eligibility: true,
          }));
      })
      .catch((err) => (switchToErrorScreen as (err: Error) => void)(err));
    return () => {
      ignore = true;
    };
  }, [tabKey, userData, setShowModal, switchToErrorScreen]);

  return (
    <Row className='payment pt-lg-3'>
      <Col className='payment'>
        <CheckoutCard
          key={(userData as UserData).id + 'checkout-card'}
          switchToErrorScreen={switchToErrorScreen}
          setDisplayName={setDisplayName}
          setShowModal={setShowModal}
          displayName={displayName}
          isMobile={isMobile}
          userData={userData}
          polData={polData}
          tabKey={tabKey}
          {...props}
        />
      </Col>
    </Row>
  );
};

export default React.memo(Payment);
