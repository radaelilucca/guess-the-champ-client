import styled from "styled-components";
import { Button, Input } from "../../components";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  height: 100%;
  width: 100%;

  padding: 3.5rem 2rem;
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    margin-top: 2.75rem;

    color: ${({ theme }) => theme.colors.primary};

    font-weight: 600;
    font-size: 2.25rem;
    line-height: 2.25rem;
  }
`;

export const Form = styled.form`
  width: 100%;

  margin-top: 4rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  & > div:not(:nth-of-type(3)) {
    margin-bottom: 1.25rem;
  }
`;

export const CustomInput = styled(Input)`
  width: 100%;
`;

export const SubmitButton = styled(Button)`
  width: 100%;

  margin-top: 3.125rem;
  margin-bottom: 0;
`;

export const SignInButton = styled.button`
  font-size: 0.8rem;
  font-weight: 200;

  color: ${({ theme }) => theme.colors.primary};

  background: none;
  border: none;
  cursor: pointer;

  margin-top: 0.4rem;

  &:hover {
    color: ${({ theme }) => theme.colors.tertiary};
  }
`;
