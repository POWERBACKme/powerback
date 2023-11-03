import React, { KeyboardEventHandler, MouseEventHandler } from 'react';
import CloseButton from 'react-bootstrap/esm/CloseButton';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import Marquee from './Marquee';
import './style.css';

type Props = {
  handleClose: MouseEventHandler & KeyboardEventHandler;
};

const SideNavHeader = ({ handleClose }: Props) => (
  <>
    <Row id='sidenav-header' className='pb-3'>
      <Col xs={7} className='powerback fs-2'>
        POWERBACK
      </Col>
      <Col>
        <CloseButton
          className={'sidenav-close--btn'}
          aria-label={'Hide sidenav'}
          onClick={handleClose}
          variant={'white'}
        />
      </Col>
    </Row>
    <Marquee />
  </>
);

export default React.memo(SideNavHeader);
