import React from 'react';
import Col from 'react-bootstrap/esm/Col';
import './style.css';

const Loading = () => (
  <Col className='loading-headshots'>
    <h2 className='placeholder-wave'>Reticulating Spines...</h2>
  </Col>
);

export default React.memo(Loading);
