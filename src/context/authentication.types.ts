export interface IHandleLoginProps {
  username: string;
  password: string;
  isGuest?: boolean;
}

export interface IHandleSignUpProps {
  username: string;
  password: string;
  passwordConfirmation: string;
}

export type AuthStateType = {
  isAuthenticated: boolean;
  user?: {
    username: string;
    id: string;
    isGuest: boolean;
  };
  token?: string;
  isLoading?: boolean;
};
