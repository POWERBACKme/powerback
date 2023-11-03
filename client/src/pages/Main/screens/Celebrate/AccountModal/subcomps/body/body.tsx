import React, { SetStateAction, Dispatch } from 'react';
import { CelebrationsPane, SettingsPane, ProfilePane } from './panes';
import { AlertCompliant } from '@Components/alerts';
import { ShowAlert, UserData } from '@Interfaces';
import Tab from 'react-bootstrap/esm/Tab';
import { Props } from '@Types';
import './style.css';

const Body = ({
  handleAccountUpdate,
  setActiveProfileTab,
  activeProfileTab,
  setShowAlert,
  hasDonated,
  showAlert,
  user,
  ...props
}: Props) => (
  <Tab.Content>
    <AlertCompliant
      key={(user as UserData).id + '-compliant-alert'}
      show={showAlert as ShowAlert & boolean}
      setShow={setShowAlert}
    />
    <ProfilePane
      {...props}
      setActiveTab={
        setActiveProfileTab as Dispatch<SetStateAction<string>>
      }
      handleAccountUpdate={handleAccountUpdate as () => void}
      activeTab={activeProfileTab as string}
      setShowAlert={setShowAlert}
      user={user as UserData}
    />
    <SettingsPane
      {...props}
      user={user}
      showAlert={showAlert}
      hasDonated={hasDonated}
      setShowAlert={setShowAlert}
      activeProfileTab={activeProfileTab}
      setActiveProfileTab={setActiveProfileTab}
    />
    {hasDonated && (
      <CelebrationsPane
        setActiveProfileTab={setActiveProfileTab}
        activeProfileTab={activeProfileTab}
        setShowAlert={setShowAlert}
        hasDonated={hasDonated}
        showAlert={showAlert}
        user={user}
        {...props}
      />
    )}
  </Tab.Content>
);

export default React.memo(Body);
