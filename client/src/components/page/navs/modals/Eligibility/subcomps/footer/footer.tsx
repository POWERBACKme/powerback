import React, {
  SetStateAction,
  useCallback,
  Dispatch,
  useMemo,
} from 'react';
import { AgreeBtn } from '@Components/buttons';
import Stack from 'react-bootstrap/esm/Stack';
import { ShowModal } from '@Interfaces';
import { handleKeyDown } from '@Utils';
import { Props } from '@Types';
import './style.css';

type FooterProps = {
  handleClick: () => void;
};

const Footer = ({
  tabKey,
  loggedIn,
  handleClick,
  setShowModal,
}: FooterProps & Props) => {
  const showTerms = useCallback(() => {
    (setShowModal as Dispatch<SetStateAction<ShowModal>>)((s) => ({
      ...s,
      terms: true,
    }));
  }, [setShowModal]);

  const showAgreement = useMemo(() => {
    return tabKey === 'payment' && loggedIn;
  }, [tabKey, loggedIn]);

  return (
    <Stack direction='vertical' className='pt-lg-1' tabIndex={-1}>
      <AgreeBtn handleClick={handleClick} />
      {showAgreement && (
        <p className='implicit-agreement mt-3 mt-lg-2 mx-3 mx-lg-0'>
          By proceeding with this transaction you agree to&nbsp;
          <span className='powerback'>POWERBACK</span>'s&nbsp;
          <span
            className={'natural-link'}
            onKeyDown={(e) => handleKeyDown(e, showTerms)}
            onClick={showTerms}
            tabIndex={0}>
            terms of use
          </span>
          .
        </p>
      )}
    </Stack>
  );
};

export default React.memo(Footer);
