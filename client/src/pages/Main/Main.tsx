import React, { useCallback, useEffect, useState } from 'react';
import { COSPONSORS, ALL_POLS, BILL } from './tuples';
import { useComboboxItems, useParade } from '@Hooks';
import { ServerDown, Celebrate } from './screens';
import { ComboboxItem, Props } from '@Types';
import {
  Bill,
  RepState,
  UserData,
  HouseMember,
  OptionCategory,
} from '@Interfaces';

const Main = ({
  showRefreshAppSpinner,
  switchToErrorScreen,
  serverHasError,
  optionCategory,
  appRefresh,
  userData,
  ...props
}: Props) => {
  // pol carousel hook
  const [
    polsOnParade,
    {
      setPolsOnParade,
      searchPolsByName,
      searchPolsByState,
      restorePolsOnParade,
      searchPolsByLocation,
    },
  ] = useParade();

  // selecting/de-selecting pols (?)
  const [prevShowRefreshAppSpinner, setPrevShowRefreshAppSpinner] =
    useState(showRefreshAppSpinner);
  if (prevShowRefreshAppSpinner !== showRefreshAppSpinner) {
    setPrevShowRefreshAppSpinner(showRefreshAppSpinner);
    if (appRefresh || showRefreshAppSpinner) restorePolsOnParade();
  }

  //  => combobox option items
  const itemToString = useCallback(
    (item: ComboboxItem | null) => {
      if (!item) return;
      else {
        switch ((optionCategory as OptionCategory).name) {
          case 'NAME':
            if (!(item as HouseMember).last_name) return '';
            else
              return (
                (item as HouseMember).last_name +
                ', ' +
                (item as HouseMember).first_name
              );
          case 'STATE':
            if (!(item as RepState).full) return '';
            else return (item as RepState).full;
          case 'DISTRICT':
            return '';
          default:
            throw new Error();
        }
      }
    },
    [optionCategory]
  );

  // search bar combobox dropdown options
  const [inputItems, { setInputItems, resetSearchBar }] = useComboboxItems(
    itemToString as (item: ComboboxItem | null) => string,
    polsOnParade.houseMembers,
    (optionCategory as OptionCategory).name
  );

  const [bill] = useState<Bill>(BILL),
    [cosponsorIds] = useState<string[]>(COSPONSORS);

  useEffect(
    () => setPolsOnParade(ALL_POLS as unknown as HouseMember[]),
    [setPolsOnParade]
  );

  return (
    (serverHasError && <ServerDown />) || (
      <Celebrate
        key={(userData as UserData).id + '-main-page'}
        itemToString={
          itemToString as (item: ComboboxItem | null) => string
        }
        showRefreshAppSpinner={showRefreshAppSpinner}
        searchPolsByLocation={searchPolsByLocation}
        restorePolsOnParade={restorePolsOnParade}
        switchToErrorScreen={switchToErrorScreen}
        searchPolsByState={searchPolsByState}
        searchPolsByName={searchPolsByName}
        optionCategory={optionCategory}
        resetSearchBar={resetSearchBar}
        serverHasError={serverHasError}
        setInputItems={setInputItems}
        cosponsorIds={cosponsorIds}
        polsOnParade={polsOnParade}
        appRefresh={appRefresh}
        inputItems={inputItems}
        userData={userData}
        bill={bill}
        {...props}
      />
    )
  );
};

export default React.memo(Main);
