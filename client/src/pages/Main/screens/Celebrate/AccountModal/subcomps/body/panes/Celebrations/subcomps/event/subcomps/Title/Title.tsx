import React, { useLayoutEffect } from 'react';
import { PolName } from '@Components/displays';
import { HouseMember } from '@Interfaces';
import { useDisplayName } from '@Hooks';
import './style.css';

type Props = {
  donee: HouseMember;
  isMobile: boolean;
};

const Title = ({ donee, isMobile }: Props) => {
  const [displayName, { setDisplayName }] = useDisplayName({
    first: donee?.first_name as string,
    middle: donee.middle_name ?? '',
    last: donee?.last_name as string,
    isMobile,
  });

  useLayoutEffect(() => setDisplayName(21), [setDisplayName]);

  return (
    donee && (
      <PolName
        name={displayName.value}
        cls={'vertical-timeline-element-title'}
        headingSize={6}
      />
    )
  );
};
export default React.memo(Title);
