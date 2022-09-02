import { createContext, ReactNode, useCallback, useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import { useSetRecoilState } from 'recoil';

import { guessTheChampApi } from '~/services';
import { userStateAtom } from '~/state';

import type { AuthStateType, IHandleLoginProps, IHandleSignUpProps } from './authentication.types';

export type AuthContextStateType = {
  authState: AuthStateType;
  handleLogin: (props: IHandleLoginProps) => Promise<void>;
  handleSignUp: (props: IHandleSignUpProps) => Promise<void>;
  handleLoginAsGuest: () => Promise<void>;
  handleLogout: () => void;
};

export const AuthContext = createContext({} as AuthContextStateType);

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [authState, setAuthState] = useState({
    isLoading: true,
  } as AuthStateType);

  const setUserState = useSetRecoilState(userStateAtom);

  const handleLogin = async ({ username, password, isGuest }: IHandleLoginProps) => {
    setAuthState((prev) => ({ ...prev, isLoading: true }));

    try {
      const response = await guessTheChampApi.client.post('/login', {
        username,
        password,
      });

      const { user, token } = response.data;

      user.isGuest = isGuest;

      localStorage.setItem('@token', token);
      localStorage.setItem('@user', JSON.stringify(user));

      setAuthState((prev) => ({
        ...prev,
        user: {
          ...user,
          isGuest,
        },
        token,
        isLoading: false,
        isAuthenticated: true,
      }));
    } catch (error) {
      toast.error('Login failed');
      setAuthState((prev) => ({ ...prev, isLoading: false }));
    }
  };

  const handleLoginAsGuest = async () => {
    await handleLogin({ username: 'guest', password: 'guest000', isGuest: true });
  };

  const handleLogout = async () => {
    localStorage.clear();
    setAuthState({
      isAuthenticated: false,
    } as AuthStateType);
  };

  const handleSignUp = async ({ username, password, passwordConfirmation }: IHandleSignUpProps) => {
    setAuthState((prev) => ({ ...prev, isLoading: true }));

    try {
      if (password !== passwordConfirmation) throw 'Passwords does not match';

      const response = await guessTheChampApi.client.post('/sign-up', {
        username,
        password,
      });

      const { user, token } = response.data;

      localStorage.setItem('@token', token);
      localStorage.setItem('@user', JSON.stringify(user));

      setAuthState((prev) => ({
        ...prev,
        user,
        token,
        isLoading: false,
        isAuthenticated: true,
      }));

      toast.success('Welcome and have fun! 🕹');
    } catch (error: any) {
      const errorMessage = error?.response?.data ? error.response.data.details : error;

      toast.error(`Error! - ${errorMessage}`);

      setAuthState((prev) => ({ ...prev, isLoading: false }));
    }
  };

  const getUserProfile = useCallback(
    async (username: string) => {
      const response = await guessTheChampApi.client.get(`/users/${username}`);

      const { user } = response.data;

      setUserState({
        id: user.id,
        username: user.username,
        isGuest: authState?.user?.isGuest,
        scores: {
          total: user.totalScore,
        },
      });
    },
    [setUserState, authState],
  );

  useEffect(() => {
    const token = localStorage.getItem('@token');
    if (token) {
      const storeUser = JSON.parse(localStorage.getItem('@user') ?? '');
      setAuthState({
        user: storeUser,
        token,
        isAuthenticated: true,
        isLoading: false,
      });
    } else {
      setAuthState((prev) => ({ ...prev, isLoading: false }));
    }
  }, []);

  useEffect(() => {
    guessTheChampApi.setIsAuthenticated(authState.isAuthenticated);

    if (authState.isAuthenticated && authState.user) {
      getUserProfile(authState.user?.id);
    }
  }, [authState.isAuthenticated, authState.user, getUserProfile]);

  const value = { authState, handleLogin, handleLogout, handleSignUp, handleLoginAsGuest };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export { AuthProvider };
