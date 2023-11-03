import React, {
  useMemo,
  Dispatch,
  useState,
  RefObject,
  useCallback,
  SetStateAction,
} from 'react';
import { CELEBRATION_SCREEN_LOAD_HEADER } from '@CONSTANTS';
import { Messages, ShowModal, UserData } from '@Interfaces';
import { BtnGrid } from '@Components/interactive';
import { ContinueBtn } from '@Components/buttons';
import { createBrowserHistory } from 'history';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import { MESSAGES } from './tuples';
import accounting from 'accounting';
import LimitModal from './Limit';
import { Props } from '@Types';
import './style.css';

const DonationSection = ({
  showRefreshAppSpinner,
  suggestedDonations,
  setDonationLimit,
  historyLengthRef,
  setShowModal,
  selectedPol,
  setDonation,
  setTabKey,
  getEscrow,
  donation,
  isMobile,
  userData,
  polData,
  tabKey,
  ...props
}: Props) => {
  const handleContinueBtnDisabled = useMemo(() => {
    return !selectedPol || !donation;
  }, [donation, selectedPol]);

  const [prevShowRefreshAppSpinner, setPrevShowRefreshAppSpinner] =
    useState(showRefreshAppSpinner);
  if (prevShowRefreshAppSpinner !== showRefreshAppSpinner) {
    setPrevShowRefreshAppSpinner(showRefreshAppSpinner);
    (getEscrow as () => void)();
    (setDonationLimit as () => void)(); // should I raise state or useContext on this?
  }

  const remainingDonationLimit =
    (suggestedDonations as number[])[
      (suggestedDonations as number[]).length - 1
    ] ?? 0;

  const [modalMessage, setModalMessage] = useState('');

  const handleBrowserPush = useCallback(
    (MESSAGES: Messages) => {
      if (remainingDonationLimit >= (donation as number)) {
        (setTabKey as Dispatch<SetStateAction<string>>)('payment');
        return;
      } else if (remainingDonationLimit <= 0) {
        setModalMessage(MESSAGES.reached);
      } else {
        setModalMessage(
          MESSAGES.exceeds[0] +
            accounting.formatMoney(remainingDonationLimit) +
            MESSAGES.exceeds[1]
        );
      }
      (setDonation as Dispatch<SetStateAction<number>>)(
        remainingDonationLimit
      );
      (setShowModal as Dispatch<SetStateAction<ShowModal>>)((s) => ({
        ...s,
        limit: (donation as number) >= remainingDonationLimit,
      }));
    },
    [
      remainingDonationLimit,
      setShowModal,
      setDonation,
      setTabKey,
      donation,
    ]
  );

  window.onpopstate = () => {
    if (handleContinueBtnDisabled) {
      return;
    }
    handleBrowserPush(MESSAGES as Messages);
  };
  const handleHide = useCallback(() => {
    if (handleContinueBtnDisabled) return 'hide-cont--btn';
    else return 'show-cont--btn';
  }, [handleContinueBtnDisabled]);

  let history = createBrowserHistory();

  const handleClick = useCallback(() => {
    handleBrowserPush(MESSAGES as Messages);
    if (
      window.history.length <=
      ((historyLengthRef as RefObject<number>)
        .current as unknown as number)
    ) {
      history.push('/', {
        tabKey: tabKey,
        historyLength: window.history.length,
        historyLengthRef: historyLengthRef?.current,
        action: history.action,
        location: history.location,
      });
    }
  }, [tabKey, history, historyLengthRef, handleBrowserPush]);

  return (
    <div>
      <LimitModal
        setShowModal={setShowModal}
        message={modalMessage}
        isMobile={isMobile}
        {...props}
      />
      {!selectedPol ? (
        <div className='loading mt-lg-4 mb-2 px-2'>
          {CELEBRATION_SCREEN_LOAD_HEADER}
        </div>
      ) : (
        <Row className='choose-amount mt-lg-3 pt-lg-1'>
          <Col lg={6}>
            <BtnGrid
              key={(userData as UserData).id + '-donation-btn-grid'}
              setAmount={setDonation as Dispatch<SetStateAction<number>>}
              value={suggestedDonations as number[]}
              size={isMobile ? 'sm' : 'lg'}
              amount={donation as number}
              selectedPol={selectedPol}
              isMobile={isMobile}
              donation={donation}
              polData={polData}
              isTip={false}
              {...props}
            />
          </Col>

          <Col className={handleHide() + ' pt-lg-1'}>
            <ContinueBtn
              {...props}
              handleClick={handleClick}
              variant={'outline-dark'}
              label={'Celebrate!'}
              isMobile={isMobile}
              size={'lg'}
            />
          </Col>
        </Row>
      )}
    </div>
  );
};

export default React.memo(DonationSection);
