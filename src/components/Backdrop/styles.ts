import styled from 'styled-components';

import { IBackdropProps } from './types';

export const Container = styled.div<Pick<IBackdropProps, 'opacity'>>`
  position: absolute;
  z-index: 1;

  background: ${({ opacity = 0.85 }) => `rgba(0, 0, 0, ${opacity})`};

  top: 0;
  right: 0;
  left: 0;
  bottom: 0;

  height: 100%;
  width: 100%;
`;
