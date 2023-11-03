import React from 'react';
import { TabLink } from '@Components/interactive';
import { ACCOUNT_TABS } from '@CONSTANTS';
import Nav from 'react-bootstrap/esm/Nav';
import './style.css';

type Props = {
  headingClass: string;
  hasDonated: boolean;
  isMobile: boolean;
};

const Heading = ({ isMobile, hasDonated, headingClass }: Props) => (
  <>
    <span className={'display-' + (isMobile ? '7' : '5')}>Account</span>
    <Nav
      className={headingClass + (!hasDonated ? ' no-donations' : '')}
      defaultActiveKey={'Profile'}
      variant={'pills'}>
      {ACCOUNT_TABS.map((section) => {
        return (
          (section.topic !== 'Celebrations' ||
            (section.topic === 'Celebrations' && hasDonated)) && (
            <Nav.Item key={'account-tab-' + section.key}>
              <TabLink topic={section.topic} eventKey={section.topic} />
            </Nav.Item>
          )
        );
      })}
    </Nav>
  </>
);

export default React.memo(Heading);
