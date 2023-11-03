import React, {
  useLayoutEffect,
  SetStateAction,
  useCallback,
  Dispatch,
  useState,
  useMemo,
} from 'react';
import TabContainer from 'react-bootstrap/esm/TabContainer';
import { StyledModal } from '@Components/modals';
import { SECURITY_BUTTONS } from '@CONSTANTS';
import { Body, Heading } from './subcomps';
import { updateUser } from '@Utils';
import { Props } from '@Types';
import {
  ContactInfo,
  UpdatedInfo,
  ShowModal,
  UserData,
  SessionStorage,
} from '@Interfaces';
import {
  useFormCompliance,
  useFormValidation,
  useContactInfo,
  useMontyHall,
  useSpinner,
} from '@Hooks';

type ContactInfoKey = keyof ContactInfo;
type UserDataKey = keyof UserData;

const AccountModal = ({
  switchToErrorScreen,
  sessionStorageNames,
  setActiveKey,
  setShowModal,
  setUserData,
  activeKey,
  showModal,
  isMobile,
  userData,
  ...props
}: Props) => {
  // hooks
  const [isInvalid, { validateField, resetValidation }] =
      useFormValidation(),
    formIsInvalid = useMemo(() => {
      return !Object.values(isInvalid).every((v) => !v);
    }, [isInvalid]),
    [contactInfo, { setContactInfo, loadContactInfo, setIntl }] =
      useContactInfo(userData as UserData),
    [formCompliance, { setFormCompliance }] = useFormCompliance(
      contactInfo,
      formIsInvalid
    ),
    runFormCompliance = useCallback(() => {
      if (!userData) return;
      else if (userData.isCompliant) return;
      else setFormCompliance();
    }, [userData, setFormCompliance]),
    [
      updating,
      { start: startUpdatingSpinner, stop: stopUpdatingSpinner },
    ] = useSpinner();

  const [prevContactInfo, setPrevContactInfo] = useState(contactInfo);
  if (contactInfo !== prevContactInfo) {
    setPrevContactInfo(contactInfo);
    runFormCompliance();
  }

  const employmentIncomplete = useMemo(() => {
      return contactInfo
        ? contactInfo.isEmployed &&
            (contactInfo.occupation === '' || contactInfo.employer === '')
        : true;
    }, [contactInfo]),
    noUserChanges = useMemo(() => {
      return contactInfo
        ? Object.keys(contactInfo).every(
            (k) =>
              // eslint-disable-next-line eqeqeq
              (userData as UserData)[k as UserDataKey] ==
              (contactInfo as ContactInfo)[k as ContactInfoKey]
          )
        : true;
    }, [userData, contactInfo]);

  const handleUpdateUser = useCallback(
      (user: UserData, info: UpdatedInfo | keyof ContactInfo) =>
        updateUser(
          user,
          info,
          setUserData,
          switchToErrorScreen,
          sessionStorageNames as unknown as SessionStorage
        ),
      [setUserData, switchToErrorScreen, sessionStorageNames]
    ),
    handleAccountUpdate = useCallback(() => {
      const {
        employer,
        isEmployed,
        occupation,
        ...unemployedContactInfo
      } = contactInfo;
      if (
        // comparing user props to form state has no difference OR form has invalid req. fields
        noUserChanges ||
        formIsInvalid ||
        (employmentIncomplete && !(userData as UserData).isEmployed)
      ) {
        return; // leave the user contact info as-is in the db
      } else {
        startUpdatingSpinner();
        handleUpdateUser(
          userData as UserData,
          employmentIncomplete ? unemployedContactInfo : contactInfo
        );
      }
    }, [
      userData,
      contactInfo,
      noUserChanges,
      formIsInvalid,
      handleUpdateUser,
      employmentIncomplete,
      startUpdatingSpinner,
    ]);

  const [
    securityTheater,
    { openDoor: showSecurityTheater, closeDoors: closeSecurityCurtain },
  ] = useMontyHall(SECURITY_BUTTONS);

  const handleOnSelect = useCallback(
    (e: any) => {
      handleAccountUpdate();
      closeSecurityCurtain();
      (setActiveKey as Dispatch<SetStateAction<string>>)(e);
    },
    [setActiveKey, handleAccountUpdate, closeSecurityCurtain]
  );

  const [activeProfileTab, setActiveProfileTab] = useState('contact'),
    [prevActiveProfileTab, setPrevActiveProfileTab] =
      useState(activeProfileTab);
  if (prevActiveProfileTab !== activeProfileTab) {
    setPrevActiveProfileTab(activeProfileTab);
    handleAccountUpdate();
  }

  const onEnter = useCallback(() => {
      setActiveProfileTab('contact');
      loadContactInfo();
    }, [loadContactInfo]),
    onExit = useCallback(() => {
      if (updating) stopUpdatingSpinner();
      handleAccountUpdate();
      closeSecurityCurtain();
      resetValidation();
      setActiveProfileTab('contact');
    }, [
      closeSecurityCurtain,
      handleAccountUpdate,
      setActiveProfileTab,
      stopUpdatingSpinner,
      resetValidation,
      updating,
    ]);

  useLayoutEffect(
    () => stopUpdatingSpinner(),
    [userData, stopUpdatingSpinner]
  );

  useLayoutEffect(() => runFormCompliance(), [runFormCompliance]);

  const hasDonated = useMemo(() => {
    return userData && userData.donations.length > 0;
  }, [userData]);

  const headingClass = useMemo(() => {
    return (
      'px-2' +
      (isMobile ? ' mobile-tabs' : hasDonated ? ' no-celebrations' : '')
    );
  }, [isMobile, hasDonated]);

  return (
    <TabContainer
      unmountOnExit={true}
      activeKey={activeKey}
      onSelect={handleOnSelect}>
      <StyledModal
        setShowModal={setShowModal as Dispatch<SetStateAction<ShowModal>>}
        showModal={showModal as ShowModal}
        closeButton={true}
        onEnter={onEnter}
        type={'account'}
        onExit={onExit}
        heading={
          <Heading
            hasDonated={hasDonated as boolean}
            headingClass={headingClass}
            isMobile={isMobile}
          />
        }
        body={
          <Body
            {...props}
            closeSecurityCurtain={closeSecurityCurtain}
            handleAccountUpdate={handleAccountUpdate}
            setActiveProfileTab={setActiveProfileTab}
            showSecurityTheater={showSecurityTheater}
            switchToErrorScreen={switchToErrorScreen}
            activeProfileTab={activeProfileTab}
            handleUpdateUser={handleUpdateUser}
            resetValidation={resetValidation}
            securityTheater={securityTheater}
            formCompliance={formCompliance}
            setContactInfo={setContactInfo}
            formIsInvalid={formIsInvalid}
            validateField={validateField}
            setShowModal={setShowModal}
            contactInfo={contactInfo}
            setUserData={setUserData}
            hasDonated={hasDonated}
            isInvalid={isInvalid}
            showModal={showModal}
            isMobile={isMobile}
            updating={updating}
            userData={userData}
            setIntl={setIntl}
            user={userData}
          />
        }
        footer={<></>}
      />
    </TabContainer>
  );
};

export default React.memo(AccountModal);
