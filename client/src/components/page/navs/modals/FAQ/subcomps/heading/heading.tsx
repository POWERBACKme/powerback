import React from 'react';
import Nav from 'react-bootstrap/esm/Nav';
import { TabLink } from '@Components/interactive';
import { FAQ } from '@Tuples';
import './style.css';

type Props = {
  handleHeading: string;
};

const Heading = ({ handleHeading }: Props) => (
  <>
    <span className={handleHeading}>FAQ</span>
    <Nav id='faq-modal-nav' variant='pills' className='px-lg-2'>
      {FAQ.map((section) => (
        <Nav.Item key={'FAQ-tab-' + String(section.key)}>
          <TabLink
            eventKey={'FAQ-event-' + String(section.key)}
            topic={section.topic}
          />
        </Nav.Item>
      ))}
    </Nav>
  </>
);

export default React.memo(Heading);
