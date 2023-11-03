import React, {
  useMemo,
  Dispatch,
  useCallback,
  EventHandler,
  ReactElement,
  KeyboardEvent,
  SetStateAction,
  SyntheticEvent,
  MouseEventHandler,
  KeyboardEventHandler,
} from 'react';
import Modal from 'react-bootstrap/esm/Modal';
import { ShowModal } from '@Interfaces';
import { handleKeyDown } from '@Utils';
import { HideEvent } from '@Types';
import './style.css';

type ShowModalKey = keyof ShowModal;

type HandleHide = KeyboardEventHandler<HTMLElement> &
  EventHandler<SyntheticEvent<any, CloseEvent>> &
  MouseEventHandler<HTMLElement> &
  ((node: HTMLElement) => any) &
  (() => void);

type Props = {
  type: 'eligibility' | 'account' | 'terms' | 'limit' | 'faq';
  setShowModal: Dispatch<SetStateAction<ShowModal>>;
  overrideOnClick?: (e: HideEvent) => HideEvent | (() => void);
  onExit?: (node: HTMLElement) => any;
  backdrop?: boolean | 'static';
  size?: 'sm' | 'lg' | 'xl';
  heading: ReactElement;
  closeButton?: boolean;
  footer?: ReactElement;
  showModal: ShowModal;
  onEnter?: () => void;
  body: ReactElement;
  tabIdx?: 0 | 1;
};

const StyledModal = ({
  overrideOnClick,
  setShowModal,
  closeButton,
  size = 'lg',
  tabIdx = 0,
  showModal,
  backdrop,
  heading,
  onEnter,
  footer,
  onExit,
  body,
  type,
}: Props) => {
  const label = useMemo(() => {
    return type + '-modal';
  }, [type]);

  const handleHide = useCallback(
    (e: any) => {
      if (overrideOnClick) return overrideOnClick(e);
      else setShowModal((s: ShowModal) => ({ ...s, [type]: false }));
    },
    [type, setShowModal, overrideOnClick]
  );

  const handleKeyboardHide = useCallback(
    (e: KeyboardEvent) => {
      return handleKeyDown(e, handleHide as HandleHide);
    },
    [handleHide]
  );

  const handleShow = useMemo(() => {
    if (showModal && type) {
      return showModal[type as ShowModalKey];
    } else return false;
  }, [type, showModal]);

  return (
    <Modal
      centered
      id={label}
      size={size}
      onExit={onExit}
      onEnter={onEnter}
      show={handleShow}
      aria-label={label}
      backdrop={backdrop}
      className={'styled-modal'}
      onHide={handleHide as HandleHide}>
      <Modal.Header
        closeButton={closeButton}
        closeVariant={'white'}
        closeLabel={'close'}>
        <Modal.Title>{heading}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        {body}
        <Modal.Footer
          onKeyDown={handleKeyboardHide}
          onClick={handleHide}
          tabIndex={tabIdx}>
          {footer}
        </Modal.Footer>
      </Modal.Body>
    </Modal>
  );
};

export default React.memo(StyledModal);
