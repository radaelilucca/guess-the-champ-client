import reactSelect from "react-select";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  height: 100%;
  padding: 32px;

  position: relative;

  color: ${({ theme }) => theme.colors.lightText};
`;

export const ClueButton = styled.button`
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;

  background-color: ${({ theme }) => theme.colors.primary};

  border-radius: ${({ theme }) => theme.rounded.lg};

  display: grid;
  place-items: center;

  height: 48px;
  width: 48px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.darkText};
  }
`;

export const Question = styled.h1`
  color: ${({ theme }) => theme.colors.primary};

  font-weight: 500;
  font-size: 2.5rem;

  text-align: center;

  margin-top: 2rem;
`;

export const ChampContentContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-top: 40px;

  min-height: 170px;

  img {
    height: 5.125rem;
    width: 5.125rem;

    border: ${({ theme }) => `0.125rem solid ${theme.colors.primary}`};
  }
`;

export const ChampionSelect = styled(reactSelect)`
  width: 100%;

  font-size: 19.2px;
  color: ${({ theme }) => theme.colors.darkText};
`;

export const ScoresContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;

  margin-top: 1.875rem;

  border-radius: ${({ theme }) => theme.rounded.md};

  h5 {
    align-self: flex-start;
    font-size: 24px;
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
  height: 80px;
  padding: 16px;

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
