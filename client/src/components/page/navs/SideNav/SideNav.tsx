import React, {
  KeyboardEventHandler,
  MouseEventHandler,
  SetStateAction,
  useCallback,
  Dispatch,
} from 'react';
import Container from 'react-bootstrap/esm/Container';
import Offcanvas from 'react-bootstrap/esm/Offcanvas';
import { ShowModal, UserData } from '@Interfaces';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import { BottomPanel } from './Panels';
import SideNavHeader from './Header';
import { Props } from '@Types';
import './style.css';

type SideNavProps = {
  logOut: KeyboardEventHandler & MouseEventHandler;
  setShow: Dispatch<SetStateAction<boolean>>;
  show: boolean;
};

const SideNav = ({
  setShowModal,
  showModal,
  userData,
  setShow,
  logOut,
  show,
  ...props
}: Props & SideNavProps) => {
  const handleClose = useCallback(() => setShow(false), [setShow]);
  const showLinkedModal = useCallback(
    (modal: keyof ShowModal) =>
      (setShowModal as Dispatch<SetStateAction<ShowModal>>)((s) => ({
        ...s,
        [modal]: true,
      })),
    [setShowModal]
  );
  return (
    <Offcanvas
      show={show}
      backdrop={true}
      autoFocus={false}
      enforceFocus={false}
      onHide={handleClose}>
      <Offcanvas.Body>
        <Container>
          <Row className='flex-column justify-content-around'>
            <Col>
              <SideNavHeader handleClose={handleClose} {...props} />
            </Col>
            <Col>
              <hr className='sidebar-hline pb-3' />
            </Col>
            <Col>
              <BottomPanel
                username={userData ? (userData as UserData).username : ''}
                showLinkedModal={showLinkedModal}
                handleLogOut={logOut}
                {...userData}
              />
            </Col>
          </Row>
        </Container>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default React.memo(SideNav);
