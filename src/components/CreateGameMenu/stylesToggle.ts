import styled from 'styled-components';

import type { PlayersModesType } from '~/types';

export const ToggleContainer = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    font-weight: 400;
    font-size: 20px;
  }
`;

interface IToggleProps {
  value: PlayersModesType;
}

export const Toggle = styled.button<IToggleProps>`
  all: unset;

  cursor: pointer;

  position: relative;

  background-color: ${({ theme }) => theme.colors.tertiary};

  display: flex;
  align-items: center;
  justify-content: space-between;

  border-radius: 2rem;

  padding: 0 0;

  height: 1.875rem;

  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.darkText};
  overflow: hidden;

  svg {
    margin: 0 0.2rem;
  }
`;

export const ToggleSlot = styled.div`
  background-color: inherit;

  height: 100%;
  width: 2rem;

  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const getCoverMarginsStyle = (toggleValue: PlayersModesType) => {
  if (toggleValue === 'single-player') {
    return {
      marginRight: '2rem',
    };
  }

  return {
    marginLeft: '2rem',
  };
};

export const Cover = styled(ToggleSlot)<IToggleProps>`
  position: absolute;

  background-color: ${({ theme }) => theme.colors.darkText};

  transition: all 400ms ease-out;

  ${({ value }) => getCoverMarginsStyle(value)};
`;
