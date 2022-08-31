import { FormEvent, useContext, useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router';
import { LoadingSplash } from '../../components';
import { AuthContext } from '../../context';

import {
  Container,
  Header,
  Form,
  SubmitButton,
  SignUpButton,
  ForgotPasswordButton,
  CustomInput,
} from './styles';

const LoginPage = () => {
  const [formValues, setFormValues] = useState({
    user: '',
    password: '',
  });

  const {
    handleLogin,
    authState: { isLoading, isAuthenticated },
  } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      await handleLogin({
        username: formValues.user,
        password: formValues.password,
      });
    } catch (error) {
      console.error('Error on login:', error);
    }
  };

  const handleNavigateToSignUp = () => navigate('/sign-up');

  if (isAuthenticated) return <Navigate to='/' />;

  return (
    <Container>
      <LoadingSplash isOpen={isLoading} />

      <Header>
        <img src='/images/logo.png' />
        <h1>Welcome back!</h1>
      </Header>

      <Form onSubmit={handleSubmit}>
        <CustomInput
          required
          value={formValues.user}
          label='nickname'
          placeholder='nickname'
          onChange={(newValue) => setFormValues((prev) => ({ ...prev, user: newValue }))}
        />
        <CustomInput
          required
          value={formValues.password}
          type='password'
          label='password'
          placeholder='password'
          onChange={(newValue) => setFormValues((prev) => ({ ...prev, password: newValue }))}
        />

        <ForgotPasswordButton>forgot your password?</ForgotPasswordButton>

        <SubmitButton type='submit'>sign in</SubmitButton>

        <SignUpButton type='button' onClick={handleNavigateToSignUp}>
          doesn't have an account? sign up here!
        </SignUpButton>
      </Form>
    </Container>
  );
};

export { LoginPage };
