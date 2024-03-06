import React, {
  useMemo,
  MouseEventHandler,
  ChangeEventHandler,
} from 'react';
import { Settings } from '@Interfaces';
import CUSTOM_SETTINGS from '../switches';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import Form from 'react-bootstrap/esm/Form';
import Stack from 'react-bootstrap/esm/Stack';
import { InfoTooltip } from '@Components/modals';
import { ContinueBtn } from '@Components/buttons';
import './style.css';

type Props = {
  handleSwitch: ChangeEventHandler;
  handleClick: MouseEventHandler;
  settingsAreDefault: boolean;
  settings: Settings;
  isMobile: boolean;
};

const Preferences = ({
  settingsAreDefault,
  handleSwitch,
  handleClick,
  isMobile,
  settings,
}: Props) => {
  // holds undefined value at boot
  const prevPreferences = useMemo(() => {
    return settings;
  }, [settings]);

  return (
    prevPreferences && (
      <Form className='preferences'>
        <span className='settings-subpane fs-4'>Preferences</span>
        <Row className='flex-lg-column mt-1'>
          <Col xs='auto' lg={12}>
            <Row>
              <Col>
                {CUSTOM_SETTINGS.map((setting) => (
                  // switches
                  <Stack
                    gap={isMobile ? 1 : 0}
                    direction={'horizontal'}
                    className={'align-items-baseline'}
                    id={setting.tooltip.toolTipId + '-switch-group'}
                    key={setting.tooltip.toolTipId + '-switch-group'}>
                    <Form.Switch
                      tabIndex={0}
                      className={
                        setting.cls + ' mx-lg-2 donation-filter-switch'
                      }
                      aria-pressed={
                        settings[
                          setting.tooltip.toolTipId as keyof Settings
                        ]
                      }
                      checked={
                        settings[
                          setting.tooltip.toolTipId as keyof Settings
                        ]
                      }
                      onChange={handleSwitch}
                      {...setting}
                    />
                     {/* <Button
                      tabIndex={0}
                      className={
                        setting.cls + ' mx-lg-2 donation-filter-switch'
                      }
                      aria-checked={
                        settings[
                          setting.tooltip.toolTipId as keyof Settings
                        ]
                      }
                      role={'switch'}
                      // checked={
                      //   settings[
                      //     setting.tooltip.toolTipId as keyof Settings
                      //   ]
                      // }
                      onClick={handleSwitch}
                      {...setting}>
                      {' '}
                      <span>off</span>
                      <span>on</span>
                    </Button> */}
                    {isMobile && <>&nbsp;</>}
                    <InfoTooltip
                      showToolTips={settings.showToolTips}
                      {...setting.tooltip}
                    />
                  </Stack>
                ))}
              </Col>
            </Row>
          </Col>
          <Col xs={1} lg={12} className='reset-default mt-lg-3'>
            {settingsAreDefault || (
              <ContinueBtn
                classProp={'reset-default-btn'}
                disabled={settingsAreDefault}
                size={isMobile ? 'sm' : 'lg'}
                variant={'outline-secondary'}
                handleClick={handleClick}
                label={'Reset Default'}
              />
            )}
          </Col>
        </Row>
      </Form>
    )
  );
};

export default React.memo(Preferences);
