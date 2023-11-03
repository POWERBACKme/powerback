import React from 'react';
import Accordion from 'react-bootstrap/esm/Accordion';
import { Questions } from '@Interfaces';
import './style.css';

type Props = {
  questions: Questions[];
};

const QAccordian = ({ questions }: Props) => (
  <Accordion
    flush
    className={'faq-inner-pane'}
    defaultActiveKey={'FAQ-accordion-' + String(questions[0].key)}>
    {questions.map((q) => (
      <Accordion.Item
        className={'inner-accordion'}
        key={'FAQ-accordion-' + String(q.key)}
        eventKey={'FAQ-accordion-' + String(q.key)}>
        <div key={'FAQ-accordion-' + String(q.key)}>
          <Accordion.Header className={'faq-question'}>
            {q.q}
          </Accordion.Header>
          <Accordion.Body className={'faq-answer'}>{q.a}</Accordion.Body>
        </div>
      </Accordion.Item>
    ))}
  </Accordion>
);

export default React.memo(QAccordian);
