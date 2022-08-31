import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InputElement = styled.input`
  width: 100%;
  height: 3.125rem;

  padding: 0.625rem;

  background-color: #fff2e4;
  border: none;

  border-radius: ${({ theme }) => theme.rounded.md};

  font-size: 18px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.darkText};
`;

export const TopContainer = styled.div`
  display: flex;
  align-items: center;
`;
export const ToggleVisibilityButton = styled.button`
  all: unset;

  margin-left: auto;
  font-size: 1.2rem;

  transition: color 100ms ease;
  color: ${({ theme }) => theme.colors.primary};

  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.tertiary};
  }
`;

export const Label = styled.label`
  color: ${({ theme }) => theme.colors.primary};

  font-weight: 200;

  margin-bottom: 0.15rem;
`;
