import React, { Dispatch, SetStateAction, useMemo } from 'react';
import { StyledModal } from '@Components/modals';
import { Body, Heading } from './subcomps';
import Tab from 'react-bootstrap/esm/Tab';
import { ShowModal } from '@Interfaces';
import { Props } from '@Types';

const FAQModal = ({ isMobile, showModal, setShowModal }: Props) => {
  const handleHeading = useMemo(() => {
    return 'display-' + (isMobile ? '7' : '5');
  }, [isMobile]);
  return (
    <Tab.Container defaultActiveKey='FAQ-event-1'>
      <StyledModal
        setShowModal={setShowModal as Dispatch<SetStateAction<ShowModal>>}
        heading={<Heading handleHeading={handleHeading} />}
        showModal={showModal as ShowModal}
        body={<Body />}
        closeButton={true}
        type={'faq'}
      />
    </Tab.Container>
  );
};

export default React.memo(FAQModal);
