import React from 'react';
import { AlertUserEntryError } from '@Components/alerts';
import { SubmitBtn } from '@Components/buttons';
import { View } from '@Types';

type Props = {
  showError: boolean;
  value: string;
  view: View;
};

const ButtonErrorSwapper = ({
  value = 'Continue',
  showError,
  view,
}: Props) => (
  <>
    <SubmitBtn
      btnId={'userform-submitbtn'}
      hidden={showError}
      classProp={''}
      value={value}
      variant={''}
      size={'lg'}
    />
    <AlertUserEntryError hidden={!showError} {...view} />
  </>
);

export default React.memo(ButtonErrorSwapper);
