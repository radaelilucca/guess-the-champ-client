import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  top: 0.2rem;

  color: ${({ theme }) => theme.colors.lightText};
  opacity: 0.2;

  z-index: 100;
`;
