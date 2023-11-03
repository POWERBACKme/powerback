import React, {
  useRef,
  useMemo,
  Dispatch,
  Suspense,
  useState,
  FormEvent,
  useEffect,
  useReducer,
  ChangeEvent,
  useCallback,
  useTransition,
  SetStateAction,
  useLayoutEffect,
} from 'react';
import {
  entry,
  login,
  logOut,
  signup,
  clearForm,
  activation,
  deleteUser,
  refreshToken,
  regexMatchURI,
  userFormChange,
} from '@Utils';
import {
  useSpinner,
  useFormPaths,
  useDonationLimit,
  useButtonErrorSwapper,
} from '@Hooks';
import {
  PolData,
  Settings,
  UserData,
  ShowAlert,
  UserEntryForm,
  ServerConstants,
} from '@Interfaces';
import API from '@API';
import { AxiosResponse } from 'axios';
import { INIT, APP } from '@CONSTANTS';
import { Page } from '@Components/page';
import { useRoute, routes } from './router';
import { CelebrationRejection } from '@Types';
import { createBrowserHistory } from 'history';
import { COSPONSORS } from '@Pages/Main/tuples';
import { useMediaQuery } from 'react-responsive';
import './App.css';

let didInit = false;
const init = INIT;

const App = () => {
  const [serverConstants, setServerConstants] = useState<ServerConstants>(
      {} as any
    ),
    LEGAL_LIMIT = useMemo(() => {
      return (
        (serverConstants &&
          Object.keys(serverConstants).length > 0 &&
          serverConstants.FEC &&
          serverConstants.FEC.LEGAL_LIMIT) || [0, 0]
      );
    }, [serverConstants]);

  // notifications, alerts, modals, overlays, etc
  const [showAlert, setShowAlert] = useState(init.alerts),
    [showModal, setShowModal] = useState(init.modals),
    [showOverlay, setShowOverlay] = useState({
      resetPass: false,
    }),
    [prevShowModal, setPrevShowModal] = useState(showModal),
    [showSideNav, setShowSideNav] = useState<boolean>(false), // mobile only
    [prevShowSideNav, setPrevShowSideNav] = useState(showSideNav);

  if (prevShowModal !== showModal) {
    setPrevShowModal(showModal);
    if (showAlert.login)
      setShowAlert((s: ShowAlert) => ({ ...s, login: false }));
  }
  if (prevShowSideNav !== showSideNav) {
    setPrevShowSideNav(showSideNav);
    if (showAlert.login)
      setShowAlert((s: ShowAlert) => ({ ...s, login: false }));
  }

  const [serverHasError, setServerHasError] = useReducer((state) => {
      return !state;
    }, false),
    switchToErrorScreen = useCallback((err: Error) => {
      console.error(err);
      setShowModal(init.modals);
      setShowSideNav(false);
      setServerHasError();
    }, []);

  const [userData, setUserData] = useState<UserData>(init.userData); // account

  const [loggedIn, setLoggedIn] = useReducer((state) => {
    return !state;
  }, false);

  const sessionStorageNames = init.sessionStorageNames;

  const [selectedPol, setSelectedPol] = useState<string | null>(null); // Politician-donee

  // starting length of user's browser history stack when arriving at our page
  const historyLengthRef = useRef(null);

  // init app
  useEffect(() => {
    if (!didInit) {
      didInit = true;
      (historyLengthRef.current as unknown as number) =
        window.history.length;
      const importConstants = () => {
          API.getConstants()
            .then((res: AxiosResponse) => {
              const response = res;
              return response;
            })
            .then((response: AxiosResponse) =>
              setServerConstants(response.data)
            )
            .catch((err: Error) => switchToErrorScreen(err));
        },
        checkToken = () => {
          try {
            refreshToken(
              setLoggedIn,
              setUserData,
              sessionStorageNames,
              switchToErrorScreen
            );
          } catch (err) {
            switchToErrorScreen(err as Error);
          }
        };

      importConstants();
      checkToken();
    }
  }, [serverConstants, sessionStorageNames, switchToErrorScreen]);

  const sessionStoredSettings = sessionStorage.getItem(
    sessionStorageNames.settings
  );

  // user preferences
  const [settings, setSettings] = useState(
    sessionStoredSettings ?? init.defaultSettings
  );

  useEffect(
    () =>
      sessionStorage.setItem(
        sessionStorageNames.settings,
        JSON.stringify(settings)
      ),

    [settings, sessionStorageNames.settings]
  );

  useEffect(() => {
    let ignore = false;
    if (!userData) {
      if (!serverConstants) {
        return;
      } else if (!serverConstants.APP) {
        return;
      } else if (!serverConstants.APP.SETTINGS) {
        return;
      } else if (!ignore) setSettings(serverConstants.APP.SETTINGS);
    } else {
      if (!ignore) {
        if (sessionStoredSettings) setSettings(sessionStoredSettings);
        if (userData.settings) setSettings(userData.settings);
      }
    }
    return () => {
      ignore = true;
    };
  }, [userData, serverConstants, sessionStoredSettings]);

  const [userFormValidated, setUserFormValidated] = useState(false),
    [checkedTerms, setCheckedTerms] = useState(false); // user checked t&c box

  // UI is based on bootstrap Tabs for process flow
  const [tabKey, setTabKey] = useState('pol-donation'),
    [donation, setDonation] = useState<Number>(0);
  // resetting app to init/logged-in state
  const stageNewProcess = useCallback(() => setTabKey('pol-donation'), []),
    [showRefreshAppSpinner, setShowRefreshAppSpinner] = useState(false),
    [appRefresh, startAppRefresh] = useTransition();

  // when user is tricky
  const [rejectedDonationReasons, setRejectedDonationReasons] =
      useState<CelebrationRejection>(null),
    [prevRejectedDonationReasons, setPrevRejectedDonationReasons] =
      useState(rejectedDonationReasons);
  if (prevRejectedDonationReasons !== rejectedDonationReasons) {
    setPrevRejectedDonationReasons(rejectedDonationReasons);
    setShowAlert((s: ShowAlert) => ({ ...s, rejected: true }));
  }
  // yay
  const [paymentProcessed, setPaymentProcessed] = useState(false),
    [paymentError, setPaymentError] = useState<Error>(
      null as unknown as Error
    ),
    [prevPaymentError, setPrevPaymentError] = useState(paymentError);
  if (prevPaymentError !== paymentError) {
    console.error(paymentError);
    setPrevPaymentError(paymentError);
    setRejectedDonationReasons({
      message: paymentError?.message,
      variant: 'danger',
    });
  }
  // sync session storage with donation state
  const [prevDonation, setPrevDonation] = useState(donation);
  if (prevDonation !== donation) {
    setPrevDonation(donation);
    if (
      tabKey === 'support' &&
      donation === 0 &&
      !paymentProcessed &&
      !appRefresh
    )
      stageNewProcess();
  }
  // styles for search bar category links
  const [linksClass, setLinksClass] = useState(init.activeSearchOption);

  // sets politician as the Donee
  const [polData, setPolData] = useState<PolData>(init.honestPol),
    [isSelectingPol, startSelectingPol] = useTransition(),
    [suggestedDonations, { setDonationLimit }] = useDonationLimit(
      LEGAL_LIMIT as number[],
      {
        ...((userData as UserData) ?? init.userData),
        donations: userData ? userData.donations : [],
      },
      polData as PolData
    ),
    selectPol = useCallback(
      (pol: PolData) => {
        if (
          Object.keys(pol).length !== Object.keys(init.honestPol).length ||
          !Object.keys(pol).every((v) =>
            Object.keys(init.honestPol).includes(v)
          ) ||
          isSelectingPol
        ) {
          return;
        } else {
          startSelectingPol(() => {
            setPolData(pol);
            setSelectedPol(pol.id);
            setDonationLimit();
            setShowAlert((a) => ({ ...a, login: false }));
          });
        }
      },
      [setPolData, isSelectingPol, setSelectedPol, setDonationLimit]
    );

  const [showClearBtn, setShowClearBtn] = useState(''); // despite the name, this String is in fact the text content of the search bar. the "clear" button shows/hides when there is/isn't text

  const [prevShowClearBtn, setPrevShowClearBtn] = useState(showClearBtn);
  if (prevShowClearBtn !== showClearBtn) {
    if (showClearBtn.length === 0 && prevShowClearBtn.length > 0)
      selectPol(init.honestPol);
    setPrevShowClearBtn(showClearBtn);
  }

  const [showCosponsors, setShowCosponsors] = useState(false);
  const [prevShowCosponsors, setPrevShowCosponsors] =
    useState(showCosponsors);
  if (prevShowCosponsors !== showCosponsors) {
    setPrevShowCosponsors(showCosponsors);
    if (
      (showCosponsors && !COSPONSORS.includes(selectedPol as string)) ||
      !showCosponsors
    )
      (selectPol as (pol: PolData) => void)(init.honestPol);
  }

  // top search bar "search-by" type links
  const [optionCategory, setOptionCategory] = useState(
      init.optionCategory
    ),
    [prevOptionCategory, setPrevOptionCategory] = useState(optionCategory);

  // selecting/de-selecting pols (?)
  if (optionCategory)
    if (prevOptionCategory.name !== optionCategory.name) {
      setPrevOptionCategory(optionCategory);
      setPrevShowClearBtn('');
      setShowAlert((a) => ({ ...a, login: false }));
    }

  const [isSelectingOption, startSelectingOption] = useTransition(),
    handleOptions = useCallback(
      (e: KeyboardEvent & MouseEvent) => {
        if (
          optionCategory.name ===
            (
              (e.target as HTMLSpanElement).textContent as string
            ).toUpperCase() ||
          isSelectingOption
        )
          return;
        else {
          const LINKS = [
            {
              name: 'NAME',
              value: 'Name',
              label: 'Search by name.',
            },
            {
              name: 'STATE',
              value: 'State',
              label: 'Search by state.',
            },
            {
              name: 'DISTRICT',
              value: 'District',
              label: '(Your address/zipcode)',
            },
          ];
          startSelectingOption(() => {
            setOptionCategory(
              LINKS.filter((link) => {
                return (
                  link.value ===
                  ((e.target as HTMLSpanElement).textContent as string)
                );
              })[0]
            );

            setLinksClass(() => ({
              ...{ NAME: '', STATE: '', DISTRICT: '' },
              [(
                (e.target as HTMLSpanElement).textContent as string
              ).toUpperCase()]: 'options-link-active',
            }));
            if (!showClearBtn) return;
            else if (showClearBtn.length > 0) setShowClearBtn('');
          });
        }
      },
      [
        isSelectingOption,
        setOptionCategory,
        setShowClearBtn,
        optionCategory,
        setLinksClass,
        showClearBtn,
      ]
    );

  const [tip, setTip] = useState<number>(0);

  const [activeKey, setActiveKey] = useState('Profile');

  const refreshAppState = useCallback(() => {
    if (!userData.id || !userData.understands) return;
    else
      startAppRefresh(() => {
        const priv = async () => {
          return await API.checkPrivilege((userData as UserData).id)
            .then((res: AxiosResponse) => {
              const understands = res.data;
              return understands;
            })
            .then((understands: boolean) => {
              setShowRefreshAppSpinner(false);
              setPaymentProcessed(false); // resetting to init value. not necessarily an indicator of payment failure.
              if (understands !== userData.understands)
                setUserData((s) => ({ ...s, understands: understands }));
            })
            .catch((err: Error) => switchToErrorScreen(err));
        };
        setTip(0);
        setShowClearBtn('');
        setSelectedPol(null);
        setPolData(init.honestPol);
        setLinksClass(init.activeSearchOption);
        priv();
      });
  }, [
    setPaymentProcessed,
    switchToErrorScreen,
    setShowClearBtn,
    setLinksClass,
    setUserData,
    userData,
    setTip,
  ]);

  // refreshes app process after donation on "Celebrate again!" event
  const [prevShowRefreshAppSpinner, setPrevShowRefreshAppSpinner] =
      useState(showRefreshAppSpinner),
    [prevPaymentProcessed, setPrevPaymentProcessed] =
      useState(paymentProcessed);
  if (prevShowRefreshAppSpinner !== showRefreshAppSpinner) {
    setPrevShowRefreshAppSpinner(showRefreshAppSpinner);
    if (showRefreshAppSpinner) {
      setOptionCategory(init.optionCategory);
      refreshAppState();
    } else setDonation(0);
  }
  if (prevPaymentProcessed !== paymentProcessed) {
    setPrevPaymentProcessed(paymentProcessed);
    if (!paymentProcessed) setShowRefreshAppSpinner(false);
  }

  // process 'routing"
  useLayoutEffect(() => {
    if (tabKey === 'pol-donation')
      setShowRefreshAppSpinner((s) => {
        return (s = false);
      });
    else if (tabKey !== 'tips') {
      return;
    } else if (paymentProcessed) setTabKey('support');
  }, [tabKey, paymentProcessed, setTabKey]);

  // responsive screens hook
  const isDesktop = useMediaQuery({
      query: '((min-width: 900px) and (orientation: landscape))',
    }),
    isMobile = useMediaQuery({
      query: '((max-width: 599px) and (orientation: portrait))',
    });
  // mobile form path control
  const route = useRoute(),
    FORM_PATHS = ['Sign Up', 'Sign In'],
    // custom hook
    [formPath, { setFormPath, swapFormPath, resetFormPath }] =
      useFormPaths(isDesktop, FORM_PATHS),
    [userEntryForm, setUserEntryForm] = useState<UserEntryForm>(
      init.credentials
    ),
    // user entry feedback displayed on top of submit button for various forms
    [userEntryError, { swapToError, swapToButton }] =
      useButtonErrorSwapper();

  // browser navigation control
  let history = createBrowserHistory();
  const [lastFormPath, setLastFormPath] = useState(null);

  const handleLastFormPath = useCallback(() => {
    if (window.history.state.usr)
      if (window.history.state.usr.mobileBtn)
        setLastFormPath(window.history.state.usr.mobileBtn);
  }, []);
  // mobile login
  const unlistenMobileEntry = useCallback(
    (stop: boolean) =>
      history.listen(({ location, action }) => {
        if (location.pathname !== '/' || stop) return;
        else if (action === 'POP') {
          if (tabKey === 'pol-donation') {
            if (!loggedIn) {
              if (formPath.length) {
                if (!stop) {
                  // user is pressing "back"
                  stop = true;
                  resetFormPath();
                }
              }
              // user pressing "forward" to return to an entry form
              else if (lastFormPath && !stop) {
                stop = true;
                setFormPath(lastFormPath as unknown as string);
              }
            }
          } else if (stop) {
            return;
          } else {
            stop = true;
            unlistenMobileEntry(true);
          }
        }
      }),
    [
      formPath.length,
      resetFormPath,
      lastFormPath,
      setFormPath,
      loggedIn,
      history,
      tabKey,
    ]
  );
  const unlistenCelebrationFunnel = useCallback(
    (stop: boolean) =>
      history.listen(({ location, action }) => {
        if (location.pathname !== '/' || stop) return;
        // needs more logic here
        else if (action === 'POP' && loggedIn) {
          // nav between Celebration and Payment tabs/screens
          // console.log('unlistenCelebrationFunnel: ', window.history.state);
          stop = true;
          if (window.history.state.usr) {
            console.log(window.history.state.usr);
            setTabKey(window.history.state.usr.tabKey);
          } else unlistenCelebrationFunnel(true);
        } else if (stop) {
          return;
        } else {
          stop = true;
          unlistenCelebrationFunnel(true);
        }
      }),
    [history, loggedIn]
  );

  useEffect(() => {
    let stopMobile = false,
      stopFunnel = false; // stop excess recursion
    setTimeout(() => {
      unlistenMobileEntry(stopMobile);
      unlistenCelebrationFunnel(stopFunnel);
    }, 0);
  }, [unlistenMobileEntry, unlistenCelebrationFunnel]);

  // redirects from expired or fautly reset password hash-URIs
  const [accountActivated, setAccountActivated] = useReducer((state) => {
      return (state = true);
    }, false),
    handleActivateAccount = useCallback(
      async (hash: string) => {
        return await activation(hash, switchToErrorScreen);
      },
      [switchToErrorScreen]
    ),
    // prereq for reset pw etc;
    [userIsAssumedValid, setUserIsAssumedValid] = useState(true),
    // check for signup link activation
    activateAccount = useCallback(async () => {
      if (window.location.href.includes('reset')) return;
      const matchObj = regexMatchURI('signup');
      if (matchObj === null) return;
      else {
        const activated = await handleActivateAccount(matchObj[0]);
        if (!activated.data.isHashConfirmed) setUserIsAssumedValid(false);
        else if (activated.data.isHashConfirmed && !showAlert.delete)
          setAccountActivated();
      }
    }, [showAlert.delete, handleActivateAccount]),
    badResetRedirect = useCallback(() => routes.main().replace(), []);

  useEffect(() => {
    activateAccount();
    badResetRedirect();
  }, [activateAccount, badResetRedirect]);

  const [
    loggingIn,
    { start: startLoggingInSpinner, stop: stopLoggingInSpinner },
  ] = useSpinner();

  // no bad state
  const setters = useMemo(() => {
      return {
        login,
        signup,
        formPath,
        userData,
        setTabKey,
        loggingIn,
        setDonation,
        setLoggedIn,
        setSettings,
        swapToError,
        setUserData,
        setShowAlert,
        setShowModal,
        swapToButton,
        userEntryForm,
        resetFormPath,
        setSelectedPol,
        setShowOverlay,
        setShowSideNav,
        setCheckedTerms,
        setUserEntryForm,
        sessionStorageNames,
        setAccountActivated,
        switchToErrorScreen,
        setUserFormValidated,
        stopLoggingInSpinner,
        startLoggingInSpinner,
      };
    }, [
      startLoggingInSpinner,
      stopLoggingInSpinner,
      sessionStorageNames,
      switchToErrorScreen,
      userEntryForm,
      resetFormPath,
      swapToButton,
      swapToError,
      loggingIn,
      formPath,
      userData,
    ]),
    handlers = useMemo(() => {
      return {
        handleUserEntry: (e: FormEvent) => entry(e, { ...setters }),
        handleDeleteUser: () => deleteUser({ ...setters }),
        handleSettings: ({
          setting,
          value,
        }: {
          setting: string;
          value: boolean;
        }) =>
          (setSettings as Dispatch<SetStateAction<Settings>>)(
            (s: Settings) => ({ ...s, [setting]: value })
          ),
        handleLogOut: (e: KeyboardEvent & MouseEvent) => {
          if (e.type === 'keydown' && e.key !== 'Enter') return;
          else logOut({ ...setters });
        },
        handleUserFormChange: (e: ChangeEvent) =>
          userFormChange(e, { ...setters }),
      };
    }, [setters]);

  const [prevServerHasError, setPrevServerHasError] =
    useState(serverHasError);
  if (prevServerHasError !== serverHasError) {
    if (serverHasError && loggedIn) {
      stopLoggingInSpinner();
      resetFormPath();
      setLoggedIn();
    }
    setPrevServerHasError(serverHasError);
  }

  const [prevFormPath, setPrevFormPath] = useState(
    formPath.length ? formPath : 'Sign In'
  );
  if (prevFormPath !== formPath) {
    setPrevFormPath(formPath);
    if (formPath.length > 0) clearForm({ ...setters });
  }

  return (
    <div className='App'>
      <span
        aria-label={APP.BG_ARIA_LABEL}
        className={'background-image'}
        role={'img'}
      />
      <Suspense fallback={<></>}>
        <Page
          {...handlers}
          historyLengthRef={historyLengthRef}
          setSettings={setSettings as Dispatch<SetStateAction<Settings>>}
          setRejectedDonationReasons={setRejectedDonationReasons}
          setShowRefreshAppSpinner={setShowRefreshAppSpinner}
          rejectedDonationReasons={rejectedDonationReasons}
          setUserIsAssumedValid={setUserIsAssumedValid}
          showRefreshAppSpinner={showRefreshAppSpinner}
          setUserFormValidated={setUserFormValidated}
          sessionStorageNames={sessionStorageNames}
          setPaymentProcessed={setPaymentProcessed}
          switchToErrorScreen={switchToErrorScreen}
          handleLastFormPath={handleLastFormPath}
          suggestedDonations={suggestedDonations}
          userIsAssumedValid={userIsAssumedValid}
          setShowCosponsors={setShowCosponsors}
          userFormValidated={userFormValidated}
          accountActivated={accountActivated}
          badResetRedirect={badResetRedirect}
          paymentProcessed={paymentProcessed}
          setDonationLimit={setDonationLimit}
          refreshAppState={refreshAppState}
          serverConstants={serverConstants}
          setCheckedTerms={setCheckedTerms}
          setPaymentError={setPaymentError}
          setShowClearBtn={setShowClearBtn}
          optionCategory={optionCategory}
          serverHasError={serverHasError}
          setShowOverlay={setShowOverlay}
          setShowSideNav={setShowSideNav}
          settings={settings as Settings}
          showCosponsors={showCosponsors}
          userEntryError={userEntryError}
          donation={donation as number}
          handleOptions={handleOptions}
          setLinksClass={setLinksClass}
          userEntryForm={userEntryForm}
          setActiveKey={setActiveKey}
          checkedTerms={checkedTerms}
          paymentError={paymentError}
          setShowAlert={setShowAlert}
          setShowModal={setShowModal}
          showClearBtn={showClearBtn}
          swapFormPath={swapFormPath}
          swapToButton={swapToButton}
          LEGAL_LIMIT={LEGAL_LIMIT}
          selectedPol={selectedPol}
          setDonation={setDonation}
          setFormPath={setFormPath}
          setLoggedIn={setLoggedIn}
          setUserData={setUserData}
          showOverlay={showOverlay}
          showSideNav={showSideNav}
          appRefresh={appRefresh}
          FORM_PATHS={FORM_PATHS}
          linksClass={linksClass}
          activeKey={activeKey}
          isDesktop={isDesktop}
          loggingIn={loggingIn}
          selectPol={selectPol}
          setTabKey={setTabKey}
          showAlert={showAlert}
          showModal={showModal}
          formPath={formPath}
          isMobile={isMobile}
          loggedIn={loggedIn}
          userData={userData}
          polData={polData}
          setTip={setTip}
          tabKey={tabKey}
          route={route}
          tip={tip}
        />
      </Suspense>
    </div>
  );
};

export default App;
