import { FormEvent, useState } from "react";
import { Input } from "../../components";
import {
  Container,
  Header,
  Form,
  SubmitButton,
  SignUpButton,
  ForgotPasswordButton,
  CustomInput,
} from "./styles";

const LoginPage = () => {
  const [formValues, setFormValues] = useState({
    user: "",
    password: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    console.log(formValues);
  };
  return (
    <Container>
      <Header>
        <img src="/images/logo.png" />
        <h1>Welcome back!</h1>
      </Header>

      <Form onSubmit={handleSubmit}>
        <CustomInput
          value={formValues.user}
          label="nickname"
          placeholder="nickname"
          onChange={(newValue) =>
            setFormValues((prev) => ({ ...prev, user: newValue }))
          }
        />
        <CustomInput
          value={formValues.password}
          type="password"
          label="password"
          placeholder="password"
          onChange={(newValue) =>
            setFormValues((prev) => ({ ...prev, password: newValue }))
          }
        />

        <ForgotPasswordButton>forgot your password?</ForgotPasswordButton>

        <SubmitButton type="submit">sign in</SubmitButton>

        <SignUpButton type="button">
          doesn't have an account? sign up here!
        </SignUpButton>
      </Form>
    </Container>
  );
};

export { LoginPage };
