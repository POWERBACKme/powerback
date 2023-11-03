import React, {
  Dispatch,
  KeyboardEvent,
  SetStateAction,
  MouseEventHandler,
  KeyboardEventHandler,
} from 'react';
import { TabLink } from '@Components/interactive';
import Col from 'react-bootstrap/esm/Col';
import Nav from 'react-bootstrap/esm/Nav';
import Row from 'react-bootstrap/esm/Row';
import { ShowModal } from '@Interfaces';
import { Props } from '@Types';
import './style.css';

type UserNavProps = {
  clickLogOut: MouseEventHandler<HTMLSpanElement>;
  keyLogOut: KeyboardEventHandler;
};

const NavUser = ({
  setShowModal,
  clickLogOut,
  keyLogOut,
  loggedIn,
}: Props & UserNavProps) => (
  <Col lg={3}>
    {loggedIn && (
      <Nav className='nav-links flex-row'>
        <Row className='account-logout--row'>
          <Col
            xs={'auto'}
            onKeyDown={(e: KeyboardEvent) => {
              if (
                !(
                  e.type === 'click' ||
                  (e.type === 'keydown' &&
                    (e.key === ' ' || e.key === 'Enter'))
                )
              )
                return;
              else
                (setShowModal as Dispatch<SetStateAction<ShowModal>>)(
                  (s) => ({ ...s, account: true })
                );
            }}
            onClick={() =>
              (setShowModal as Dispatch<SetStateAction<ShowModal>>)(
                (s) => ({ ...s, account: true })
              )
            }>
            <TabLink topic={'Account'} />
          </Col>
          <Col xs={'auto'}>
            <span
              tabIndex={0}
              id={'navbar-logout'}
              onClick={clickLogOut}
              className={'natural-link'}
              onKeyDown={(e: KeyboardEvent) => keyLogOut(e)}>
              Sign out
            </span>
          </Col>
        </Row>
      </Nav>
    )}
  </Col>
);

export default React.memo(NavUser);
