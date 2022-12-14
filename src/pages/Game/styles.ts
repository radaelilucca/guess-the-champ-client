import ReactSelect from 'react-select';
import styled from 'styled-components';

import { Button } from '~/components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  height: 100%;
  overflow: hidden;
  padding: 2rem;

  position: relative;

  color: ${({ theme }) => theme.colors.lightText};
`;

export const UserInfoContainer = styled.div`
  position: absolute;
  bottom: 1rem;

  display: flex;
  gap: 1rem;
`;

export const QuitButton = styled(Button)`
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;

  height: 2.5rem;
  width: 2.5rem;

  padding: 0.2rem;

  color: ${({ theme }) => theme.colors.primary};

  background: none;

  &:hover {
    background: none;
    color: ${({ theme }) => theme.colors.tertiary};
  }
`;

export const Question = styled.h1`
  color: ${({ theme }) => theme.colors.primary};

  font-weight: 500;
  font-size: 2.2rem;

  line-height: 3rem;

  text-align: center;

  margin-top: 2.5rem;

  display: block;

  height: 20%;
`;

export const ChampContentContainer = styled.div`
  height: 40%;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-top: 1rem;
  margin-bottom: 1.25rem;

  img {
    height: 5.125rem;
    width: 5.125rem;

    border: ${({ theme }) => `0.125rem solid ${theme.colors.primary}`};
  }

  span,
  p {
    font-size: 1.4rem;
    line-height: 2.2rem;
    text-align: center;
    color: ${({ theme }) => theme.colors.secondary};
    font-weight: 300;
  }
`;

export const SelectContainer = styled.div`
  width: 100%;

  display: flex;
  gap: 0.2rem;
`;

export const ReloadButton = styled(Button)`
  height: 2.5rem;
  width: 2.5rem;

  padding: 0;

  color: ${({ theme }) => theme.colors.primary};

  background: none;

  &:hover {
    background: none;
    color: ${({ theme }) => theme.colors.tertiary};
  }
`;

export const ChampionSelect = styled(ReactSelect)`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.darkText};
  flex: 1;
`;

export const ScoresContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;

  margin-top: 1.875rem;

  border-radius: ${({ theme }) => theme.rounded.md};

  h5 {
    align-self: flex-start;
    font-size: 1.5rem;
  }

  .failures {
    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 1.5rem;
    font-weight: 500;

    height: 5rem;

    color: ${({ theme }) => theme.colors.darkText};

    background-color: ${({ theme }) => theme.colors.secondary};
  }
`;

export const ScoresList = styled.ul`
  display: flex;
  flex-direction: column;

  border-radius: ${({ theme }) => theme.rounded.md};

  overflow: hidden;
`;

export const ScoreItemContainer = styled.li`
  height: 5rem;

  padding: 1rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  color: ${({ theme }) => theme.colors.darkText};
  &:nth-of-type(odd) {
    background-color: ${({ theme }) => theme.colors.primary};
  }

  &:nth-of-type(even) {
    background-color: ${({ theme }) => theme.colors.secondary};
  }

  .texts {
    display: flex;
    flex-direction: column;

    strong {
      font-size: 1.5rem;
      font-weight: 500;

      color: ${({ theme }) => theme.colors.darkText};
    }
  }

  .start-icons-container {
    display: flex;
  }
`;
