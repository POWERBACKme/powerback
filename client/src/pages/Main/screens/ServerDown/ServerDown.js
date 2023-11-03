import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import './style.css';

const ServerDown = () => (
  <Container id='server-down'>
    <h1 className='display-1 pt-lg-5'>God Bless America.</h1>
    <h2 className='display-3'>(Our servers are down.)</h2>
    <h4 className='display-4 mt-lg-5'>
      No need for mass panic. This happens sometimes.
    </h4>
    <h6 className='display-6 mt-lg-3 '>
      Maybe write a letter to your Senator or something. Or refresh the
      page and try again.
    </h6>
  </Container>
);

export default React.memo(ServerDown);
