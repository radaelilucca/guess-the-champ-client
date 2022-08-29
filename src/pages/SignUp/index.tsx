import { FormEvent, useState } from "react";

import {
  Container,
  Header,
  Form,
  SubmitButton,
  SignInButton,
  CustomInput,
} from "./styles";

const SignUpPage = () => {
  const [formValues, setFormValues] = useState({
    user: "",
    password: "",
    passwordConfirmation: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    console.log(formValues);
  };
  return (
    <Container>
      <Header>
        <img src="/images/logo.png" />
        <h1>Sign up!</h1>
      </Header>

      <Form onSubmit={handleSubmit}>
        <CustomInput
          value={formValues.user}
          label="nickname"
          placeholder="nickname"
          onChange={(newValue) =>
            setFormValues((prev) => ({ ...prev, user: newValue }))
          }
          required
          maxLength={15}
        />
        <CustomInput
          value={formValues.password}
          type="password"
          label="password"
          placeholder="password"
          onChange={(newValue) =>
            setFormValues((prev) => ({ ...prev, password: newValue }))
          }
          required
          maxLength={15}
        />

        <CustomInput
          value={formValues.passwordConfirmation}
          type="password"
          label="confirm your password"
          placeholder="password confirmation"
          onChange={(newValue) =>
            setFormValues((prev) => ({
              ...prev,
              passwordConfirmation: newValue,
            }))
          }
          required
          maxLength={15}
        />

        <SubmitButton type="submit">sign up</SubmitButton>

        <SignInButton type="button">
          already has an account? sign in here!
        </SignInButton>
      </Form>
    </Container>
  );
};

export { SignUpPage };
