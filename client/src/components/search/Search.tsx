import React from 'react';
import FormCheckLabel from 'react-bootstrap/esm/FormCheckLabel';
import { LinkGroup } from '@Components/interactive';
import Stack from 'react-bootstrap/esm/Stack';
import Form from 'react-bootstrap/esm/Form';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import { Props } from '@Types';
import './style.css';

const PolCombobox = React.lazy(() => import('./PolCombobox'));

const Search = ({
  handleCosponsors,
  showCosponsors,
  isDesktop,
  isMobile,
  ...props
}: Props) => (
  <>
    <Row className='pol-search-options'>
      <Col xs={5} lg={2} className='section-title'>
        {(isMobile && (
          <Stack direction='horizontal' gap={2}>
            <Form.Check
              onChange={handleCosponsors}
              id={'show-cosponsors'}
              type={'switch'}
            />
            <FormCheckLabel
              htmlFor={showCosponsors ? 'show-cosponsors' : ''}
              className={showCosponsors ? ' interactive' : ''}>
              {showCosponsors ? 'COSPONSORS ONLY' : 'HOUSE MEMBERS'}
            </FormCheckLabel>
          </Stack>
        )) || <span className='interactive'>HOUSE MEMBERS</span>}
      </Col>

      <Col xs={3} lg={5}>
        <LinkGroup isDesktop={isDesktop} isMobile={isMobile} {...props} />
      </Col>
    </Row>

    <Row className='pols-input-row pt-lg-2'>
      <Col>
        <PolCombobox
          handleCosponsors={handleCosponsors}
          isDesktop={isDesktop}
          isMobile={isMobile}
          {...props}
        />
      </Col>
    </Row>
  </>
);

export default React.memo(Search);
