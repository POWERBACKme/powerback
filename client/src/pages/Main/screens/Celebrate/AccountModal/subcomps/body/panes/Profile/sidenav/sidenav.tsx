import React, {
  useMemo,
  Dispatch,
  useCallback,
  KeyboardEvent,
  SetStateAction,
  MutableRefObject,
} from 'react';
import { TabLink } from '@Components/interactive';
import { FieldControl, Props } from '@Types';
import Col from 'react-bootstrap/esm/Col';
import Nav from 'react-bootstrap/esm/Nav';
import Row from 'react-bootstrap/esm/Row';
import Compliance from '../Compliance';
import { UserData } from '@Interfaces';
import FieldList from './FieldList';
import { CONTROLS } from '..';

type HandleAccountUpdate = (
  e: MouseEvent & KeyboardEvent
) => Promise<void>;

type Dataset = {
  rrUiEventKey: string;
};

type FieldListProps = {
  setActiveTab: Dispatch<SetStateAction<string>>;
  getFieldMap: () => MutableRefObject<null>;
  fieldList: FieldControl[];
  setFieldList: () => void;
  activeTab: string;
};

type ProfileSideNavProps = {
  setActiveTab: Dispatch<SetStateAction<string>>;
  activeTab: string;
};

const ProfileSideNav = ({
  setFieldList,
  fieldList,
  handleAccountUpdate,
  setActiveTab,
  contactInfo,
  activeTab,
  isMobile,
  user,
  ...props
}: Props & ProfileSideNavProps & FieldListProps) => {
  const handleClickSwitchTabPane = useCallback(
    async (e: KeyboardEvent & MouseEvent) => {
      if (!((e.target as HTMLElement).dataset as Dataset)) return;
      else if (
        activeTab === (e.target as HTMLElement).dataset.rrUiEventKey
      ) {
        return;
      } else {
        await (handleAccountUpdate as () => void)();
        setActiveTab(
          ((e.target as HTMLElement).dataset as Dataset)
            .rrUiEventKey as string
        );
      }
    },
    [activeTab, setActiveTab, handleAccountUpdate]
  );

  const handleKeySwitchTabPane = useCallback(
    async (e: KeyboardEvent) => {
      if (e.key !== 'Enter') return;
      else if (
        !((e.target as HTMLElement).firstChild as HTMLElement).dataset
      )
        return;
      else if (
        ((e.target as HTMLElement).firstChild as HTMLElement).dataset
          .rrUiEventKey === void 0
      ) {
        return;
      } else {
        await (handleAccountUpdate as () => void)();
        setActiveTab(
          (
            ((e.target as HTMLElement).firstChild as HTMLElement)
              .dataset as Dataset
          ).rrUiEventKey
        );
      }
    },
    [setActiveTab, handleAccountUpdate]
  );

  const handleNavClass = useMemo(() => {
    return 'side-pills' + (isMobile ? ' justify-content-end' : '');
  }, [isMobile]);

  return (
    <Row id='profile-sidenav'>
      <Col xs={12}>
        {isMobile && user && (
          <Compliance
            handleAccountUpdate={handleAccountUpdate}
            contactInfo={contactInfo}
            isMobile={isMobile}
            user={user}
            {...props}
          />
        )}
        <Nav
          role={'tablist'}
          variant={'pills'}
          activeKey={activeTab}
          className={handleNavClass}
          onKeyDown={(e) => handleKeySwitchTabPane(e)}>
          {CONTROLS.map((tab, i) => (
            <Nav.Item
              tabIndex={0}
              key={tab.key}
              onClick={(e: any) =>
                handleClickSwitchTabPane(
                  e
                ) as unknown as HandleAccountUpdate
              }>
              <TabLink
                eventKey={tab.eventKey}
                topic={i + 1 + ') ' + tab.label}
                active={activeTab === tab.eventKey}
                ariaLabel={'account panel navigation tab:' + tab.eventKey}
              />
            </Nav.Item>
          ))}
        </Nav>
      </Col>
      <Col>
        {!isMobile && (
          <FieldList
            {...props}
            user={user}
            isMobile={false}
            activeTab={activeTab}
            fieldList={fieldList}
            contactInfo={contactInfo}
            setActiveTab={setActiveTab}
            setFieldList={setFieldList}
            key={
              'account-modal-profile-sidenav-field-list-' +
              (user as UserData).id
            }
          />
        )}
      </Col>
    </Row>
  );
};

export default React.memo(ProfileSideNav);
