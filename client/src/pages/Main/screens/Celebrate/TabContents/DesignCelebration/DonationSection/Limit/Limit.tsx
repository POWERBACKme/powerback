import React, {
  useMemo,
  Dispatch,
  useState,
  useCallback,
  SetStateAction,
  MouseEventHandler,
} from 'react';
import StyledModal from '@Components/modals/StyledModal';
import ListGroup from 'react-bootstrap/esm/ListGroup';
import { AgreeBtn } from '@Components/buttons';
import { ShowModal } from '@Interfaces';
import accounting from 'accounting';
import { FEC } from '@CONSTANTS';
import { Props } from '@Types';
import './style.css';

const TUPLES = {
  lawUnder: 'Federal Election Campaign Act',
  statute: '52 U.S. Code § 30101',
};

type LimitProps = {
  message: string;
};

const LimitModal = ({
  setShowModal,
  LEGAL_LIMIT,
  showModal,
  userData,
  message,
  ...props
}: Props & LimitProps) => {
  const userCanComply = useMemo(() => {
    return !userData ? false : userData.isCompliant;
  }, [userData]);

  const handleClickAcknowledgeBtn = useCallback(() => {
    (setShowModal as Dispatch<SetStateAction<ShowModal>>)((s) => ({
      ...s,
      limit: false,
    }));
  }, [setShowModal]);

  const handleClickAccountLink = useCallback(() => {
    (setShowModal as Dispatch<SetStateAction<ShowModal>>)((s) => ({
      ...s,
      limit: false,
      account: true,
    }));
  }, [setShowModal]);

  const [glowingFootnote, setGlowingFootnote] = useState({ 1: '', 2: '' });
  const handleMouseOver = useCallback((e: MouseEvent) => {
    const citation = ((e.target as HTMLElement).attributes as any).value;
    setGlowingFootnote((g) => ({ ...g, [citation]: 'glow' }));
  }, []);
  const handleMouseOut = useCallback((e: MouseEvent) => {
    const citation = ((e.target as HTMLElement).attributes as any).value;
    setGlowingFootnote((g) => ({ ...g, [citation]: '' }));
  }, []);

  const LegalLimit = LEGAL_LIMIT ?? FEC.LEGAL_LIMIT;

  return (
    <StyledModal
      {...props}
      size={'sm'}
      type={'limit'}
      backdrop={'static'}
      closeButton={false}
      showModal={showModal as ShowModal}
      setShowModal={setShowModal as Dispatch<SetStateAction<ShowModal>>}
      heading={
        <>
          <div className='align-content-center'>
            <i className='bi bi-bank2' />
            &nbsp;{TUPLES.statute + ' -'}
            <br />
            <span>{(userCanComply ? 'Max ' : '') + 'Limit Reached'}</span>
          </div>
        </>
      }
      body={
        <div className='p-lg-2'>
          <p>
            Under the <span className='fst-italic'>{TUPLES.lawUnder}</span>
            , contributions are subject to certain limits.{' '}
            {userCanComply ? 'I' : 'Anonymous i'}
            ndividuals are limited to{' '}
            <span className='dollar-amount'>
              {accounting.formatMoney(
                LegalLimit[+(userCanComply as boolean)],
                '$',
                0
              )}
            </span>{' '}
            <span className='fw-semibold'>per candidate</span>,{' '}
            <span className='fw-bolder'>per election</span>.
            <sup className='super'>
              <a
                onMouseOver={
                  handleMouseOver as unknown as MouseEventHandler
                }
                onMouseOut={handleMouseOut as unknown as MouseEventHandler}
                href={FEC.URI[+(userCanComply as boolean)]}
                target={'__blank'}>
                1
              </a>
            </sup>
          </p>
          <br />
          <p className='pb-1'>{message}</p>
          <br />
          <span className='text-center'>
            <AgreeBtn handleClick={handleClickAcknowledgeBtn} />
          </span>
          <br />
          <br />
          {!userCanComply ? (
            <p className='px-3 text-center small'>
              To increase your per-candidate contribution limit from{' '}
              <span className='dollar-amount'>${LegalLimit[0]}</span> to{' '}
              <span className='dollar-amount'>${LegalLimit[1]}</span> in
              accordance with <abbr title={FEC.NAME}>FEC</abbr> guidelines
              <sup className='super'>
                <a
                  onMouseOver={
                    handleMouseOver as unknown as MouseEventHandler
                  }
                  onMouseOut={
                    handleMouseOut as unknown as MouseEventHandler
                  }
                  href={FEC.URI[+!userCanComply]}
                  target={'__blank'}>
                  2
                </a>
              </sup>
              , simply complete your{' '}
              <span
                onClick={handleClickAccountLink}
                className={'natural-link'}>
                Profile
              </span>{' '}
              section so we can ensure compliance.
            </p>
          ) : (
            <></>
          )}
        </div>
      }
      footer={
        <>
          <ListGroup className='footnotes px-lg-5'>
            {!userCanComply ? (
              <ListGroup.Item
                className={`text-muted citation ${glowingFootnote['1']}`}>
                <sup>{+!userCanComply}&nbsp;</sup>
                <em>Individual contributions.</em>
                &nbsp;
                <span className='citation-uri'>
                  {FEC.URI[+(userCanComply as boolean)]}
                </span>
              </ListGroup.Item>
            ) : (
              <></>
            )}
            <ListGroup.Item
              className={`text-muted citation ${
                glowingFootnote[
                  ((+!(userCanComply as boolean) as number) + 1) as keyof {
                    1: string;
                    2: string;
                  }
                ]
              }`}>
              <sup>{+!userCanComply + 1}&nbsp;</sup>
              <em>Contribution limits.</em>&nbsp;
              <span className='citation-uri'>
                {FEC.URI[+!userCanComply]}
              </span>
            </ListGroup.Item>
          </ListGroup>
        </>
      }
    />
  );
};

export default React.memo(LimitModal);
