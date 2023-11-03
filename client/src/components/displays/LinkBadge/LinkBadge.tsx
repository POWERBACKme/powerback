import React from 'react';
import Badge from 'react-bootstrap/esm/Badge';
import './style.css';

type Props = {
  bg: string;
  cls: string;
};

const LinkBadge = ({ bg, cls }: Props) => (
  <Badge bg={bg} className={`text-muted ${cls}`}>
    {cls}
  </Badge>
);

export default React.memo(LinkBadge);
