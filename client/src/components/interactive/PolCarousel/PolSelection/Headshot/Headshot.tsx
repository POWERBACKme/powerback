import React, { useCallback, useState } from 'react';
import Image from 'react-bootstrap/esm/Image';
import { substituteSrc } from '@Utils';
import './style.css';

const Headshot = ({
  id,
  src,
  cls,
  name,
}: {
  id: string;
  src: string;
  cls: string;
  name: string;
}) => {
  const [dynamicClass, setDynamicClass] = useState<string>();

  // highlight selected image
  const calcDynamicClass = useCallback(() => {
    if (src === id) {
      if (cls.length) {
        return cls;
      } else {
        return 'pol-headshot-selected';
      }
    } else if (src === id) {
      return `${cls}-nil`;
    } else if (cls === 'checkout-headshot') return cls;
    else return 'pol-selector-img';
  }, [id, src, cls]);

  const [prevId, setPrevId] = useState<string>();
  if (prevId !== id) {
    setPrevId(id);
    setDynamicClass(calcDynamicClass());
  }

  return (
    <div className='headshot-container'>
      <Image
        alt={`The official Congressional headshot of ${name}.`}
        aria-label={'Politician profile picture'}
        className={dynamicClass + ' headshot'}
        title={`politician selection ${name}`}
        src={`../pfp/${src}.webp`}
        onError={substituteSrc}
        loading={'lazy'}
      />
    </div>
  );
};

export default React.memo(Headshot);
