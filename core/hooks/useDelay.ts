import {useEffect, useState} from 'react';

export const useDelayedState = <T>(initial: T, final: T, delay: number) => {
  const [val, setVal] = useState(initial);

  useEffect(() => {
    const cancel = setTimeout(() => setVal(final), delay);
    return () => clearTimeout(cancel);
  }, []);

  return val;
};
