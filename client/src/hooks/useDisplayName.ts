import { DisplayName } from '@Interfaces';
import { useCallback, useReducer, useMemo } from 'react';

interface Names {
  hasMiddle: boolean;
  fil: string;
  iml: string;
  iil: string;
  il: string;
}

interface Handlers {
  setDisplayName: (maxLen: number) => void;
}

type Props = {
  middle?: string;
  first: string;
  last: string;
  isMobile: boolean;
};

const MAGIC = {
  e: 0.00261,
  c: 0.0424,
  m: -0.75,
  d: 0.33,
  b: 10,
  f: 1,
  x: 2,
  l: 3,
};

export default function useDisplayName({
  first,
  middle,
  last,
  isMobile,
}: Props): [DisplayName, Handlers] {
  const isMiddleNamed = useMemo(() => {
      return middle && (middle as string).length > 0;
    }, [middle]),
    fullName = useMemo(() => {
      return first + ' ' + (isMiddleNamed && middle + ' ') + last;
    }, [first, middle, last, isMiddleNamed]),
    fLast = useMemo(() => {
      return first.substring(0, 1) + '. ' + last;
    }, [first, last]),
    names = useMemo(() => {
      return {
        // a progression of how names should be displayed:
        fil:
          (isMiddleNamed &&
            first +
              ' ' +
              (middle as string).substring(0, 1) +
              '. ' +
              last) ||
          fLast, // First M. Last
        iml:
          (isMiddleNamed &&
            first.substring(0, 1) + '. ' + middle + ' ' + last) ||
          fLast, // F. Middle Last
        iil:
          (isMiddleNamed &&
            first.substring(0, 1) +
              '. ' +
              (middle as string).substring(0, 1) +
              '. ' +
              last) ||
          fLast, // F. M. Last
        il: fLast, // F. Last
      };
    }, [first, middle, last, isMiddleNamed, fLast]),
    doesFit = useCallback(
      (type: keyof Names, maxLen: number) => {
        return ((names as Names)[type] as string).length <= maxLen;
      },
      [names]
    ),
    reducer = useCallback(
      (state: DisplayName, maxLen: number) => {
        function x(value: string) {
          return (
            MAGIC.b *
              (1 / (value as string).length) *
              (isMobile ? MAGIC.f : MAGIC.d) +
            'vw'
          );
        }
        function y(value: string) {
          return (
            (MAGIC.m -
              MAGIC.c * (value as string).length +
              MAGIC.e * (value as string).length ** MAGIC.x) *
              (isMobile ? MAGIC.l : MAGIC.f) +
            'vw'
          );
        }
        const value =
          fullName.replace('  ', '').length <= maxLen
            ? fullName
            : isMiddleNamed
            ? doesFit('fil', maxLen)
              ? names.fil
              : doesFit('iml', maxLen)
              ? names.iml
              : doesFit('iil', maxLen)
              ? names.iil
              : last
            : doesFit('il', maxLen)
            ? names.il
            : last;

        state = { value: value, x: x(value), y: y(value) };
        return state;
      },
      [last, names, isMobile, fullName, isMiddleNamed, doesFit]
    );

  const [state, dispatch] = useReducer(reducer, {
      value: '',
      x: '0',
      y: '0',
    }),
    handlers = useMemo<Handlers>(
      () => ({
        setDisplayName: (maxLen) => dispatch(maxLen),
      }),
      []
    );

  return [state, handlers];
}
