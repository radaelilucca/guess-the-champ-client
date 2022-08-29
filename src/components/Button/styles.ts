import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 4rem;

  padding: 0.8rem;

  border: none;
  border-radius: ${({ theme }) => theme.rounded.md};

  background-color: ${({ theme }) => theme.colors.primary};

  font-size: 2rem;
  font-weight: 500;

  color: #121212;

  font-family: Poppins, sans-serif;

  transition: background-color 150ms ease;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.tertiary};
  }
`;
