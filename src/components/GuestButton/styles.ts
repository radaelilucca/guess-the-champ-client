import styled from 'styled-components';

import { Button } from '../Button';

export const CustomButton = styled(Button)`
  background: none;

  color: ${({ theme }) => theme.colors.primary};

  font-weight: 300;
  font-size: 1.5rem;

  &:hover {
    background: none;
    color: ${({ theme }) => theme.colors.tertiary};
  }
`;
