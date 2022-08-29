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
    font-size: 3.5rem;
    font-weight: 600;
    line-height: 3.2rem;
    margin-bottom: 1rem;
  }

  h5 {
    font-size: 1.5rem;
    font-weight: 300;
  }

  img {
    height: 7.5rem;
    width: 7.5rem;

    margin: 1rem auto;
    margin-bottom: 20%;
  }
`;

export const DescriptionContainer = styled.div`
  flex: 1;

  display: grid;
  place-items: center;

  span {
    font-weight: 200;
    font-size: 1.5rem;
    line-height: 2rem;
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
  height: 4rem;

  padding: 0 1.25rem;

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

  display: flex;
  flex-direction: column;
  align-items: center;

  font-weight: 200;

  address {
    font-style: normal;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.primary};
    position: relative;

    &:after {
      content: " ";
      height: 1.5px;
      background-color: ${({ theme }) => theme.colors.primary};

      position: absolute;
      width: 0%;
      bottom: 0;
      left: 0;

      transition: width 350ms ease-in-out;
    }

    &:hover {
      &:after {
        width: 100%;
      }
    }
  }

  span {
    font-weight: 100;
    font-size: 0.9rem;
  }
`;
