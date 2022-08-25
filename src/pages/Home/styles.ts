import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  height: 100%;

  padding: 2rem;
  padding-top: 2.5rem;

  color: ${({ theme }) => theme.colors.primary};
`;

export const HeadlineContainer = styled.header`
  display: flex;
  flex-direction: column;

  width: 100%;

  h1 {
    font-size: 3.2rem;
    font-weight: 600;
  }

  h5 {
    font-size: 1.5rem;
    font-weight: 400;
  }

  img {
    max-height: 7rem;
    max-width: 4.5rem;

    margin: 1rem auto;
    margin-bottom: 20%;
  }
`;

export const DescriptionContainer = styled.div`
  flex: 1;

  display: grid;
  place-items: center;

  span {
    font-weight: 300;
    font-size: 1.5rem;
  }
`;

export const PlayButtonContainer = styled.div`
  flex: 1 1;
  width: 100%;

  display: grid;
  place-items: center;
`;

export const PlayButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;

  padding: 1.25rem;

  font-weight: 500;
  font-size: 2rem;
  font-family: ${({ theme }) => theme.fontFamily.poppins};

  color: ${({ theme }) => theme.colors.black};

  cursor: pointer;

  border: none;
  border-radius: ${({ theme }) => theme.rounded.md};

  background-color: ${({ theme }) => theme.colors.primary};

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`;

export const Footer = styled.footer`
  margin-top: auto;

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.primary};
  }
`;
