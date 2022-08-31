import { createContext, ReactNode, useCallback, useEffect, useState } from 'react';

import { toast } from 'react-toastify';
import { useSetRecoilState } from 'recoil';
import { guessTheChampApi } from '../services';
import { userStateAtom } from '../state';

type AuthStateType = {
  isAuthenticated: boolean;
  user?: {
    username: string;
    id: string;
  };
  token?: string;
  isLoading?: boolean;
};

export type AuthContextStateType = {
  authState: AuthStateType;
  handleLogin: ({ username, password }: { username: string; password: string }) => void;
  handleSignUp: ({
    username,
    password,
    passwordConfirmation,
  }: {
    username: string;
    password: string;
    passwordConfirmation: string;
  }) => void;
  handleLogout: () => void;
};

export const AuthContext = createContext({} as AuthContextStateType);

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [authState, setAuthState] = useState({
    isLoading: true,
  } as AuthStateType);

  const setUserState = useSetRecoilState(userStateAtom);

  const handleLogin = async ({ username, password }: { username: string; password: string }) => {
    setAuthState((prev) => ({ ...prev, isLoading: true }));

    try {
      const response = await guessTheChampApi.client.post('/login', {
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
    } catch (error) {
      toast.error('Login failed');
      setAuthState((prev) => ({ ...prev, isLoading: false }));
    }
  };

  const handleSignUp = async ({
    username,
    password,
    passwordConfirmation,
  }: {
    username: string;
    password: string;
    passwordConfirmation: string;
  }) => {
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

  const handleLogout = async () => {
    localStorage.clear();
    setAuthState({
      isAuthenticated: false,
    } as AuthStateType);
  };

  const getUserProfile = useCallback(
    async (username: string) => {
      const response = await guessTheChampApi.client.get(`/users/${username}`);

      const { user } = response.data;

      setUserState({
        id: user.id,
        username: user.username,
        scores: {
          total: user.totalScore,
        },
      });
    },
    [setUserState],
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

  const value = { authState, handleLogin, handleLogout, handleSignUp };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export { AuthProvider };
