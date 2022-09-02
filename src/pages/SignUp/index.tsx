import { FormEvent, useContext, useState } from 'react';
import { Navigate, useNavigate } from 'react-router';

import { AuthContext } from '~/context';

import {
  Container,
  Header,
  Form,
  SubmitButton,
  SignInButton,
  CustomInput,
  CustomGuestButton,
} from './styles';

const SignUpPage = () => {
  const [formValues, setFormValues] = useState({
    user: '',
    password: '',
    passwordConfirmation: '',
  });

  const navigate = useNavigate();

  const {
    handleSignUp,
    authState: { isAuthenticated },
  } = useContext(AuthContext);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const { user: username, password, passwordConfirmation } = formValues;

    await handleSignUp({ username, password, passwordConfirmation });
  };

  if (isAuthenticated) return <Navigate to='/' />;
  return (
    <Container>
      <Header>
        <img src='/images/logo.png' alt='Guess the Champion Logo' />
        <h1>Sign up!</h1>
      </Header>

      <Form onSubmit={handleSubmit}>
        <CustomInput
          value={formValues.user}
          label='nickname'
          placeholder='nickname'
          onChange={(newValue) => setFormValues((prev) => ({ ...prev, user: newValue }))}
          required
          maxLength={15}
        />
        <CustomInput
          value={formValues.password}
          type='password'
          label='password'
          placeholder='password'
          onChange={(newValue) => setFormValues((prev) => ({ ...prev, password: newValue }))}
          required
          maxLength={15}
        />

        <CustomInput
          value={formValues.passwordConfirmation}
          type='password'
          label='confirm your password'
          placeholder='password confirmation'
          onChange={(newValue) =>
            setFormValues((prev) => ({
              ...prev,
              passwordConfirmation: newValue,
            }))
          }
          required
          maxLength={15}
        />

        <SubmitButton type='submit'>sign up</SubmitButton>

        <SignInButton type='button' onClick={() => navigate('/login')}>
          already has an account? sign in here!
        </SignInButton>
      </Form>

      <CustomGuestButton />
    </Container>
  );
};

export { SignUpPage };
