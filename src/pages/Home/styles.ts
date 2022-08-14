import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  color: ${({ theme }) => theme.colors.primary};

  padding: 2rem;
  padding-top: 2.5rem;

  height: 100%;

  .description {
    margin-top: 6.25rem;
    font-weight: 300;
    font-size: 1.5rem;
  }
`;

export const HeadlineContainer = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 3.5rem;
    font-weight: 600;

    text-align: left;
    width: 100%;
  }

  h5 {
    font-size: 1.5rem;
  }

  img {
    max-height: 7rem;
    max-width: 4.5rem;

    margin-bottom: 2rem;
  }
`;

export const PlayButton = styled(Link)`
  font-weight: 500;
  font-size: 2rem;

  color: ${({ theme }) => theme.colors.darkBackground};

  background-color: ${({ theme }) => theme.colors.primary};

  padding: 1.25rem;

  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 6.25rem;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`;

export const Footer = styled.footer`
  margin-top: auto;
`;
