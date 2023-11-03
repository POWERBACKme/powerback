import React, { useCallback, useMemo } from 'react';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import Image from 'react-bootstrap/esm/Image';
import Container from 'react-bootstrap/esm/Container';
import './style.css';

const GG_SEAL_URI = 'https://my.greengeeks.com/seal/',
  GG_IMG_SRC = 'https://static.greengeeks.com/ggseal/Green_14.png';

const Footer = () => {
  const ggs_ggseal = useCallback(() => {
      window.open(GG_SEAL_URI, '_blank');
    }, []),
    getYear = useMemo(() => {
      return new Date().getFullYear();
    }, []);
  return (
    <Container fluid className='footer'>
      <Row>
        <Col className='paid-for mb-1'>
          <p className='mt-2 mb-1'>
            Paid for by <span className='powerback'>POWERBACK</span> (
            <span className='link-appearance'>powerback.me</span>) and not
            authorized by any candidate or candidate's committee.
            <br />
            <br />
            Contributions of gifts to political candidates via{' '}
            <span className='powerback'>POWERBACK</span> as a conduit are
            not deductible as charitable contributions for Federal income
            tax purposes.
          </p>
        </Col>
      </Row>
      <Row className='footer-links pt-1'>
        {/* GreenGeeks seal of green energy */}
        <Col className='gg'>
          <Image
            alt={
              '300% Green Powered Web Hosting certification from Green Geeks'
            }
            onClick={ggs_ggseal}
            src={GG_IMG_SRC}
            width={113}
            height={26}
          />
        </Col>
        <Col className='donation-politics'>donation politics</Col>
        <Col>
          ©{getYear + ' '}
          <a href='/'>POWERBACK</a>
        </Col>
      </Row>
    </Container>
  );
};

export default React.memo(Footer);
