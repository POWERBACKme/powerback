import React, {
  Dispatch,
  useState,
  useCallback,
  SetStateAction,
} from 'react';
import { Body, Footer, Heading } from './subcomps';
import { StyledModal } from '@Components/modals';
import { ShowModal, UserData } from '@Interfaces';
import { HideEvent, Props } from '@Types';
import { AxiosResponse } from 'axios';
import API from '@API';

interface Backdrop {
  backdrop?: boolean | 'static';
  override?: (e: HideEvent) => HideEvent | (() => void);
}

const EligibilityModal = ({
  switchToErrorScreen,
  setShowModal,
  setUserData,
  loggedIn,
  showModal,
  userData,
  tabKey,
  ...props
}: Props) => {
  const handleClick = useCallback(() => {
    if (!loggedIn) {
      return;
    } else if (!(userData as UserData).understands)
      API.givePrivilege((userData as UserData).id)
        .then(() => {
          (setUserData as Dispatch<SetStateAction<UserData>>)((u) => ({
            ...u,
            understands: true,
          }));
        })
        .catch((err) =>
          (switchToErrorScreen as (err: Error) => void)(err)
        );
    (setShowModal as Dispatch<SetStateAction<ShowModal>>)((s) => ({
      ...s,
      eligibility: false,
    }));
  }, [switchToErrorScreen, setShowModal, setUserData, userData, loggedIn]);
  // I want to turn ALL modals to X-button closes only for mobile.
  const [backdrop, setBackdrop] = useState({
    backdrop: true,
    override: null,
  } as unknown as Backdrop);

  const handleBackdrop = useCallback(async () => {
    if (!loggedIn) {
      return;
    } else if ((userData as UserData).understands || tabKey !== 'payment')
      return;
    else {
      const privilege = await API.checkPrivilege(
        (userData as UserData).id
      ).catch((err) => (switchToErrorScreen as (err: Error) => void)(err));
      if ((privilege as AxiosResponse).data === false) {
        setBackdrop({
          backdrop: 'static',
          override: () => {},
        } as unknown as any); // any
      }
    }
  }, [tabKey, userData, loggedIn, switchToErrorScreen]);

  return (
    <StyledModal
      tabIdx={1}
      heading={<Heading />}
      body={<Body />}
      footer={
        <Footer
          tabKey={tabKey}
          loggedIn={loggedIn}
          handleClick={handleClick}
          setShowModal={setShowModal}
          {...props}
        />
      }
      setShowModal={setShowModal as Dispatch<SetStateAction<ShowModal>>}
      backdrop={backdrop.backdrop as 'static'}
      overrideOnClick={backdrop.override}
      showModal={showModal as ShowModal}
      onEnter={handleBackdrop}
      type={'eligibility'}
      size={'lg'}
    />
  );
};

export default React.memo(EligibilityModal);
