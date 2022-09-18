import styled from 'styled-components';

import { darken } from 'polished';

import { Button } from '../Button';
import { Input } from '../Input';

export const MenuContainer = styled.div`
  z-index: 2;

  background: ${({ theme }) => theme.colors.primary};

  width: 100%;

  padding: 1.8rem 1rem;

  border-radius: 0.5rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  h5 {
    font-weight: 500;
    font-size: 1.5rem;

    margin-bottom: 1.5rem;
  }
`;

export const CreateButton = styled(Button)`
  height: 2.5rem;
  background-color: ${({ theme }) => theme.colors.tertiary};

  font-weight: 500;
  font-size: 1.375rem;

  width: 100%;

  margin-top: 1.5rem;

  &:hover {
    background-color: ${({ theme }) => darken(0.105, theme.colors.primary)};
  }
`;

export const JoinButton = styled(CreateButton)`
  margin-top: auto;
`;

export const JoinConfigsContainer = styled.div`
  margin-top: 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
`;

export const MatchCodeInput = styled(Input)`
  min-width: 10.625rem;

  label {
    color: ${({ theme: { colors } }) => colors.darkText};
    font-size: 1.125rem;
    font-weight: 400;
  }

  input {
    height: 2.5rem;
    background-color: rgba(0, 0, 0, 0.75);
    border: 2px solid ${({ theme }) => theme.colors.tertiary};

    font-size: 1.125rem;
    font-weight: 400;
    color: ${({ theme: { colors } }) => colors.white};
  }
`;

export const JoinContainer = styled.div`
  display: flex;

  width: 100%;
  gap: 1rem;
`;
