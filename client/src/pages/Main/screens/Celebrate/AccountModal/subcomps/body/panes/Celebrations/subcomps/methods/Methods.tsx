import React from 'react';
import Form from 'react-bootstrap/esm/Form';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import { Props } from '../../types';
import Input from './Input';
import Sort from './Sort';
import './style.css';

const Methods = ({ filterEvents, isMobile, ...props }: Props) => {
  return (
    <Form>
      <Row>
        <Col xs={5} lg={12} className='mb-lg-2'>
          <Sort
            isMobile={isMobile}
            filterEvents={filterEvents}
            {...props}
          />
        </Col>

        <Col xs={6}>
          <Input
            filterEvents={filterEvents}
            isMobile={isMobile}
            {...props}
          />
        </Col>
      </Row>
    </Form>
  );
};

export default React.memo(Methods);
