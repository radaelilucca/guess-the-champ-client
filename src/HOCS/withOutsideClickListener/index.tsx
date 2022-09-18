import React, { useRef } from 'react';

import { useMountEffect } from '~/hooks';

interface withOutsideClickListenerProps {
  onClickOutside?: () => any;
  Component: React.ElementType;
}
/** Create a component that can handle outside clicks.
 *  Mandatory requirements for FUNCTIONAL COMPONENTS:
 *  - They must be wrapped in forwardRef;
 *  - They should handle received REF repassing it to the element that will be
 *    considered in outside clicks logic;
 */
const withOutsideClickListener = ({ Component, onClickOutside }: withOutsideClickListenerProps) => {
  const BoundComponent = () => {
    const ref = useRef<HTMLElement | null>(null);

    useMountEffect(() => {
      const onClick = (e: MouseEvent) => {
        const { target } = e;

        //TODO: Check inside elements

        const isOutside = target !== ref?.current;

        if (isOutside && onClickOutside) {
          onClickOutside();
        }
      };

      document.addEventListener('mouseup', onClick);

      return () => {
        document.removeEventListener('mouseup', onClick);
      };
    });

    return <Component ref={ref} />;
  };

  return BoundComponent;
};

export { withOutsideClickListener };
