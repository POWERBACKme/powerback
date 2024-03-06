import React, {
  useMemo,
  Dispatch,
  useState,
  useEffect,
  ChangeEvent,
  SetStateAction,
  MouseEventHandler,
  KeyboardEventHandler,
} from 'react';
import { Navigation, Wrapper, SideNav, Footer } from '@Components/page';
import { Login, Reset, Main } from '@Pages';
import {
  FAQModal,
  TermsModal,
  EligibilityModal,
} from '@Components/page/navs/modals';
import { Route } from 'type-route';
import { routes } from 'router';
import { Props } from '@Types';

const Page = ({
  setUserIsAssumedValid,
  handleUserFormChange,
  switchToErrorScreen,
  userIsAssumedValid,
  accountActivated,
  badResetRedirect,
  optionCategory,
  serverHasError,
  setShowSideNav,
  handleLogOut,
  showSideNav,
  showAlert,
  loggedIn,
  isMobile,
  tabKey,
  route,
  ...props
}: Props) => {
  const [secureUserPassFeedback, setSecureUserPassFeedback] = useState(''),
    [linkIsExpired, setLinkIsExpired] = useState(false); // for reset pw etc

  // global nav modals
  const MODALS = useMemo(() => {
    return [
      { element: FAQModal, key: 'faq-modal-' },
      { element: EligibilityModal, key: 'eligibility-modal-' },
      { element: TermsModal, key: 'terms-modal-' },
    ];
  }, []);

  useEffect(() => {
    if (
      (route as Route<typeof routes>).name === 'reset' &&
      (!userIsAssumedValid || linkIsExpired)
    )
      (badResetRedirect as () => void)();
  }, [route, linkIsExpired, userIsAssumedValid, badResetRedirect]);

  return (
    <>
      {MODALS.map((modal) => {
        const Modal = modal.element;
        return (
          <Modal
            {...props}
            tabKey={tabKey}
            isMobile={isMobile}
            loggedIn={loggedIn}
            showAlert={showAlert}
            key={modal.key + '-nouser'}
            switchToErrorScreen={switchToErrorScreen}
          />
        );
      })}

      <Navigation
        {...props}
        setShowSideNav={
          setShowSideNav as Dispatch<SetStateAction<boolean>>
        }
        keyLogOut={handleLogOut as unknown as KeyboardEventHandler}
        clickLogOut={handleLogOut as unknown as MouseEventHandler}
        serverHasError={serverHasError as boolean}
        showSideNav={showSideNav as boolean}
        loggedIn={loggedIn as boolean}
        isMobile={isMobile}
      />
      {isMobile && (
        <SideNav
          {...props}
          setShow={setShowSideNav as Dispatch<SetStateAction<boolean>>}
          logOut={handleLogOut as () => void}
          show={showSideNav as boolean}
          showAlert={showAlert}
          isMobile={isMobile}
          loggedIn={loggedIn}
        />
      )}

      <Wrapper classProps={'wrapper-' + tabKey}>
        {(route as Route<typeof routes>).name === 'reset' &&
          userIsAssumedValid &&
          !linkIsExpired && (
            <Reset
              {...props}
              setUserIsAssumedValid={
                setUserIsAssumedValid as Dispatch<SetStateAction<boolean>>
              }
              switchToErrorScreen={
                switchToErrorScreen as (err: Error) => void
              }
              setSecureUserPassFeedback={setSecureUserPassFeedback}
              handleChange={
                handleUserFormChange as (e: ChangeEvent) => void
              }
              showErr={showAlert ? showAlert.err : false}
              badResetRedirect={badResetRedirect}
              setLinkIsExpired={setLinkIsExpired}
              uFeedback={secureUserPassFeedback}
              isMobile={isMobile}
            />
          )}
        {((route as Route<typeof routes>).name === 'main' ||
          accountActivated) &&
          optionCategory &&
          (loggedIn ? (
            <Main
              {...props}
              route={route}
              tabKey={tabKey}
              isMobile={isMobile}
              loggedIn={loggedIn}
              showAlert={showAlert}
              showSideNav={showSideNav}
              handleLogOut={handleLogOut}
              optionCategory={optionCategory}
              serverHasError={serverHasError}
              setShowSideNav={setShowSideNav}
              accountActivated={accountActivated}
              badResetRedirect={badResetRedirect}
              userIsAssumedValid={userIsAssumedValid}
              switchToErrorScreen={switchToErrorScreen}
              handleUserFormChange={handleUserFormChange}
              setUserIsAssumedValid={setUserIsAssumedValid}
              secureUserPassFeedback={secureUserPassFeedback}
              setSecureUserPassFeedback={setSecureUserPassFeedback}
            />
          ) : (
            <Login
              {...props}
              setUserIsAssumedValid={setUserIsAssumedValid}
              handleUserFormChange={handleUserFormChange}
              switchToErrorScreen={switchToErrorScreen}
              userIsAssumedValid={userIsAssumedValid}
              accountActivated={accountActivated}
              badResetRedirect={badResetRedirect}
              optionCategory={optionCategory}
              serverHasError={serverHasError}
              setShowSideNav={setShowSideNav}
              handleLogOut={handleLogOut}
              showSideNav={showSideNav}
              showAlert={showAlert}
              isMobile={isMobile}
              loggedIn={loggedIn}
              tabKey={tabKey}
              route={route}
            />
          ))}
      </Wrapper>
      <Footer />
    </>
  );
};

export default React.memo(Page);
