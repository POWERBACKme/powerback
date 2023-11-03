import React, { ElementType } from 'react';
import Nav from 'react-bootstrap/esm/Nav';
import './style.css';

interface Section {
  topic: string;
  key: string;
}

type Props = {
  as?: ElementType<any>;
  ariaLabel?: string;
  eventKey?: string;
  section?: Section;
  active?: boolean;
  topic?: string;
};

const TabLink = ({
  as = 'span',
  ariaLabel,
  eventKey,
  active,
  topic,
}: Props) => (
  <Nav.Link
    as={as}
    tabIndex={0}
    active={active}
    eventKey={eventKey}
    aria-label={ariaLabel}>
    {topic}
  </Nav.Link>
);

export default React.memo(TabLink);
