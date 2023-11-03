import React, {
  useMemo,
  Dispatch,
  useCallback,
  ChangeEvent,
  useTransition,
  SetStateAction,
  ChangeEventHandler,
} from 'react';
import { FormCheckProps } from 'react-bootstrap/esm/FormCheck';
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
  const settingsAreDefault = useMemo(() => {
    return Object.keys(settings as Settings).every(
      (key) =>
        Object.keys(initSettings).includes(key as string) &&
        (settings as Settings)[key as keyof Settings] ===
          initSettings[key as keyof Settings]
    );
  }, [settings]);

  const handleClickRestoreDefaultSettings = useCallback(() => {
    if (settingsAreDefault) return;
    else {
      (setSettings as Dispatch<SetStateAction<Settings>>)(initSettings);
      (handleUpdateUser as any)(user, { settings: initSettings });
    }
  }, [settingsAreDefault, handleUpdateUser, setSettings, user]);

  const [isSwitching, startSwitch] = useTransition();

  const handleSettingsToggleSwitch = useCallback<
    ChangeEventHandler<HTMLInputElement>
  >(
    (e: ChangeEvent) => {
      if (isSwitching) {
        return;
      } else
        startSwitch(() => {
          const target: HTMLElement | null = (
              e.target.parentElement as HTMLElement
            ).parentElement,
            trimLength = (target as HTMLElement).id.length - 13,
            switchId = (target as HTMLElement).id.substring(0, trimLength),
            elementArray = Array.from(
              ((target as HTMLElement).parentElement as HTMLElement)
                .children as unknown as HTMLElement[]
            );

          const isChecked = (idx: number) =>
            (
              (
                (elementArray[idx] as HTMLElement)
                  .firstChild as HTMLElement
              ).children[0] as FormCheckProps
            ).checked as boolean;

          (setSettings as Dispatch<SetStateAction<Settings>>)(
            (s) => ({ ...s, [switchId]: !s[switchId as keyof Settings] })
            // reads the switch positions directly from the DOM
          );
          (handleUpdateUser as any)(user, {
            settings: {
              autoTweet: isChecked(1),
              showToolTips: isChecked(2),
              showLoginLogout: isChecked(3),
              emailReceipts: isChecked(0) as boolean,
            } as Settings,
          });
        });
    },
    [user, setSettings, isSwitching, handleUpdateUser]
  );

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
            settingsAreDefault={settingsAreDefault}
            settings={settings as Settings}
            {...props}
          />
        </Col>
        <Col xs={12} lg={6}>
          <Security
            handleDeleteUser={handleDeleteUser}
            handleUpdateUser={handleUpdateUser}
            setSettings={setSettings}
            settings={settings}
            user={user}
            {...props}
          />
        </Col>
      </Row>
    </Tab.Pane>
  );
};

export default React.memo(SettingsPane);
