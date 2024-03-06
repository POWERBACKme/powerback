import React, {
  useMemo,
  Dispatch,
  useState,
  useCallback,
  ChangeEvent,
  SetStateAction,
  useDeferredValue,
  ChangeEventHandler,
} from 'react';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import Tab from 'react-bootstrap/esm/Tab';
import Preferences from './Preferences';
import { Settings } from '@Interfaces';
import Security from './Security';
import { Props } from '@Types';
import './style.css';

const initSettings: Settings = {
  showLoginLogout: true,
  emailReceipts: true,
  showToolTips: true,
  autoTweet: false,
};

const SettingsPane = ({
  handleDeleteUser,
  handleUpdateUser,
  setSettings,
  settings,
  user,
  ...props
}: Props) => {
  // debounce prevents infinite loop caused by overclicking
  const deferredSettings = useDeferredValue(settings);

  const settingsAreDefault = useMemo(() => {
    return Object.keys(deferredSettings as Settings).every(
      (key) =>
        Object.keys(initSettings).includes(key as string) &&
        (deferredSettings as Settings)[key as keyof Settings] ===
          initSettings[key as keyof Settings]
    );
  }, [deferredSettings]);

  const handleClickRestoreDefaultSettings = useCallback(() => {
    if (settingsAreDefault) return;
    else (setSettings as Dispatch<SetStateAction<Settings>>)(initSettings);
  }, [settingsAreDefault, setSettings]);

  const handleSettingsToggleSwitch = useCallback<ChangeEventHandler>(
    (e: ChangeEvent) => {
      const target: HTMLElement | null = (
          e.target.parentElement as HTMLElement
        ).parentElement,
        trimLength = (target as HTMLElement).id.length - 13,
        switchId = (target as HTMLElement).id.substring(0, trimLength);

      (setSettings as Dispatch<SetStateAction<Settings>>)((s) => ({
        ...s,
        [switchId]: !s[switchId as keyof Settings],
      }));
    },
    [setSettings]
  );

  const [prevSettings, setPrevSettings] = useState(settings);
  if (prevSettings !== deferredSettings) {
    setPrevSettings(deferredSettings);
    (handleUpdateUser as any)(user, {
      settings: deferredSettings as Settings,
    });
  }

  return (
    <Tab.Pane
      unmountOnExit={false}
      eventKey={'Settings'}
      className={'settings-pane text-center'}>
      <Row className='pt-lg-3 pt-2 mt-lg-1 px-4'>
        <Col className={'px-4 pb-lg-3'} xs={12} lg={6}>
          <Preferences
            handleClick={handleClickRestoreDefaultSettings}
            handleSwitch={handleSettingsToggleSwitch}
            settings={deferredSettings as Settings}
            settingsAreDefault={settingsAreDefault}
            {...props}
          />
        </Col>
        <Col xs={12} lg={6}>
          <Security
            handleDeleteUser={handleDeleteUser}
            handleUpdateUser={handleUpdateUser}
            settings={deferredSettings}
            setSettings={setSettings}
            user={user}
            {...props}
          />
        </Col>
      </Row>
    </Tab.Pane>
  );
};

export default React.memo(SettingsPane);
