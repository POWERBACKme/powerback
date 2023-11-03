import { useState, useMemo } from 'react';

interface Handlers {
  start: () => void;
  stop: () => void;
}

export default function useSpinner(): [boolean, Handlers] {
  const [state, setState] = useState<boolean>(false);

  const handlers = useMemo<Handlers>(
    () => ({
      start: () => setState(true),
      stop: () => setState(false),
    }),
    []
  );

  return [state, handlers];
}
