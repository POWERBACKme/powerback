import React, {
  KeyboardEventHandler,
  MouseEventHandler,
  SetStateAction,
  Dispatch,
} from 'react';
import { NavTabLinks as Links } from '@Components/interactive';
import { ShowAlert, ShowModal } from '@Interfaces';
import Navbar from 'react-bootstrap/esm/Navbar';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import { User, Brand } from './sections';
import { NAV_MODALS } from '@CONSTANTS';
import { Props } from '@Types';
import './style.css';

type NavigationProps = {
  keyLogOut: KeyboardEventHandler<HTMLSpanElement>;
  clickLogOut: MouseEventHandler<HTMLSpanElement>;
};

const Navigation = ({
  serverHasError,
  setShowSideNav,
  setShowModal,
  clickLogOut,
  setShowAlert,
  showSideNav,
  isDesktop,
  keyLogOut,
  isMobile,
  loggedIn,
  ...props
}: Props & NavigationProps) => {
  return (
    <Navbar id='navbar'>
      <Row>
        {(isDesktop || (!isDesktop && !loggedIn)) && (
          <>
            <Col lg={4}>
              <Links
                LINK_LABELS={NAV_MODALS}
                stateSetter={
                  setShowModal as Dispatch<SetStateAction<ShowModal>>
                }
              />
            </Col>

            <Col lg={3} />
          </>
        )}
        <Col xs={12} lg={4}>
          <Row>
            {(isDesktop || (!isDesktop && loggedIn)) && (
              <Col xs={12} lg={8}>
                <Brand
                  {...props}
                  isDesktop={isDesktop}
                  isMobile={isMobile}
                  loggedIn={loggedIn}
                  setShowAlert={
                    setShowAlert as Dispatch<SetStateAction<ShowAlert>>
                  }
                  setShowSideNav={setShowSideNav}
                />
              </Col>
            )}
            {isDesktop && !serverHasError && (
              <User
                setShowModal={
                  setShowModal as Dispatch<SetStateAction<ShowModal>>
                }
                setShowAlert={
                  setShowAlert as Dispatch<SetStateAction<ShowAlert>>
                }
                loggedIn={loggedIn as boolean}
                clickLogOut={clickLogOut}
                keyLogOut={keyLogOut}
                isMobile={isMobile}
              />
            )}
          </Row>
        </Col>
      </Row>
    </Navbar>
  );
};

export default React.memo(Navigation);
