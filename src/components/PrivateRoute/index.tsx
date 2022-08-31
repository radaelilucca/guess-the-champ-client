import { ReactElement, useContext } from 'react';
import { Navigate } from 'react-router';

import { AuthContext } from '~/context';

interface IPrivateRouteProps {
  children: ReactElement;
}

const PrivateRoute = ({ children }: IPrivateRouteProps) => {
  const {
    authState: { isAuthenticated, isLoading },
  } = useContext(AuthContext);

  if (!isAuthenticated && !isLoading) return <Navigate to='/login' />;

  return children;
};

export { PrivateRoute };
