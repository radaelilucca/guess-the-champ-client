import { useEffect } from 'react';

const useMountEffect = (callback: () => any) => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  return useEffect(() => callback(), []);
};

export { useMountEffect };
