import React, {
  useRef,
  Dispatch,
  useState,
  RefObject,
  useCallback,
  useTransition,
  SetStateAction,
  MutableRefObject,
} from 'react';
import { useFieldList } from '@Hooks';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import TabPane from 'react-bootstrap/esm/TabPane';
import TabContainer from 'react-bootstrap/esm/TabContainer';
import { CONTROLS, ProfileSideNav, ProfileSubPane } from '.';
import {
  UserData,
  ShowAlert,
  ContactInfo,
  ControlCategory,
} from '@Interfaces';
import './style.css';

const autosaveNotice =
  'This form validates and updates your changes automatically.';

type ProfilePaneProps = {
  setShowAlert: Dispatch<SetStateAction<ShowAlert>>;
  setActiveTab: Dispatch<SetStateAction<string>>;
  handleAccountUpdate: () => void;
  contactInfo?: ContactInfo;
  updating?: boolean;
  activeTab: string;
  isMobile: boolean;
  user: UserData;
};

const ProfilePane = ({
  handleAccountUpdate,
  setActiveTab,
  contactInfo,
  activeTab,
  isMobile,
  updating,
  user,
  ...props
}: ProfilePaneProps) => {
  const [fieldList, { setFieldList }] = useFieldList(
    contactInfo as UserData,
    activeTab,
    CONTROLS as ControlCategory[],
    isMobile
  );
  const [, startTabbing] = useTransition();
  const [prevTab, setPrevTab] = useState(activeTab);
  if (prevTab !== activeTab) {
    setPrevTab(activeTab);
    startTabbing(() => setFieldList());
  }
  const fieldsRef = useRef<MutableRefObject<null>>(null),
    getFieldMap = useCallback(() => {
      if (!fieldsRef.current)
        ((fieldsRef as RefObject<MutableRefObject<null>>).current as any) =
          new Map();
      return fieldsRef.current;
    }, []);

  return (
    <TabPane eventKey={'Profile'}>
      <TabContainer
        defaultActiveKey={'contact'}
        onSelect={handleAccountUpdate}>
        <Row>
          <Col xs={'auto'} lg={3}>
            <ProfileSideNav
              handleAccountUpdate={handleAccountUpdate}
              setActiveTab={setActiveTab}
              setFieldList={setFieldList}
              contactInfo={contactInfo}
              getFieldMap={
                getFieldMap as unknown as () => MutableRefObject<null>
              }
              // loggingIn={loggingIn}
              activeTab={activeTab}
              fieldList={fieldList}
              isMobile={isMobile}
              user={user}
              {...props}
            />
          </Col>
          <Col lg={9}>
            <ProfileSubPane
              user={user}
              updating={updating}
              isMobile={isMobile}
              fieldList={fieldList}
              activeTab={activeTab}
              contactInfo={contactInfo}
              getFieldMap={
                getFieldMap as unknown as () => MutableRefObject<null>
              }
              setActiveTab={setActiveTab}
              setFieldList={setFieldList}
              handleAccountUpdate={handleAccountUpdate}
              {...props}
            />
            <Row className='text-center mt-lg-4 ms-lg-2'>
              <Col className='mt-lg-3'>
                <span className='autosave-notice'>
                  <i className='bi bi-file-earmark-lock' />
                  {autosaveNotice}
                </span>
              </Col>
            </Row>
          </Col>
        </Row>
      </TabContainer>
    </TabPane>
  );
};

export default React.memo(ProfilePane);
