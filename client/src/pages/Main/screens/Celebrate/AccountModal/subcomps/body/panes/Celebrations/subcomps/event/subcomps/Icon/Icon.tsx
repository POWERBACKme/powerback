import React, { useMemo } from 'react';
import Image from 'react-bootstrap/esm/Image';
import Female from '@Images/placeholder/portrait_female.webp';
import Male from '@Images/placeholder/portrait_male.webp';
import { substituteSrc } from '@Utils';
import './style.css';

type IconProps = {
  donee?:
    | {
        id: string;
        last_name: string;
        member_id: string;
        first_name: string;
      }
    | undefined;
  handleError: (err: Error) => void;
};

const Icon = ({ donee, handleError }: IconProps) => {
  const choosePicture = useMemo(() => {
    return Math.random() < 0.504 ? Female : Male;
  }, []);

  return (
    <div className='icon-container'>
      {donee ? (
        <Image
          loading={'lazy'}
          src={`../pfp/${donee.id}.webp`}
          aria-label={'Politician profile picture'}
          title={`politician donee ${
            donee.first_name + ' ' + donee.last_name
          }`}
          onError={(e) => substituteSrc(e, handleError)}
          alt={`The official Congressional headshot of ${
            donee.first_name + ' ' + donee.last_name
          }.`}
        />
      ) : (
        <Image src={choosePicture} />
      )}
    </div>
  );
};

export default React.memo(Icon);
