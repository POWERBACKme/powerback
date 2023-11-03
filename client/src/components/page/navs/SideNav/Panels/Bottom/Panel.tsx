import React, { KeyboardEventHandler, MouseEventHandler } from 'react';
import NavLink from 'react-bootstrap/esm/NavLink';
import Col from 'react-bootstrap/esm/Col';
import Nav from 'react-bootstrap/esm/Nav';
import Row from 'react-bootstrap/esm/Row';
import Tab from 'react-bootstrap/esm/Tab';
import { ShowModal } from '@Interfaces';
import './style.css';

type Props = {
  handleLogOut: KeyboardEventHandler & MouseEventHandler;
  showLinkedModal: (modal: keyof ShowModal) => void;
  username: string;
};

const BottomPanel = ({
  showLinkedModal,
  handleLogOut,
  username,
}: Props) => {
  return (
    <Tab.Container id='side-nav-tabs'>
      <Row
        id='account-slide-row'
        className={'side-menu-profile-row flex-row'}
        style={{ fontFamily: 'Red Hat Text' }}>
        <Col>
          <Nav className='flex-column pt-2'>
            <NavLink
              // eventKey='profile'
              tabIndex={0}
              onClick={() => showLinkedModal('faq')}>
              FAQ
            </NavLink>
            <NavLink
              // eventKey='profile'
              tabIndex={0}
              onClick={() => showLinkedModal('eligibility')}>
              Eligibility
            </NavLink>
            <NavLink
              // eventKey='profile'
              tabIndex={0}
              onClick={() => showLinkedModal('terms')}>
              Terms
            </NavLink>
            <NavLink
              // eventKey='account'
              tabIndex={0}
              onClick={() => {
                showLinkedModal('account');
              }}>
              <i className='bi-person-circle icon-link iconic-pink' />
              &nbsp;Account
            </NavLink>
            <NavLink
              tabIndex={0}
              className={'py-4'}
              onClick={handleLogOut}>
              <i className='bi bi-box-arrow-left icon-link iconic-pink' />
              &nbsp;Sign out
            </NavLink>
            <span className='signedin-info'>
              {'Signed in as ' + username}
            </span>
            <NavLink
              tabIndex={0}
              className={'pt-5 mt-5 fs-6'}
              href={'https://github.com/POWERBACKme/powerback'}>
              <i className='bi bi-github icon-link iconic-pink' />
              &nbsp;Contribute
            </NavLink>
          </Nav>
        </Col>
      </Row>
    </Tab.Container>
  );
};

export default React.memo(BottomPanel);
