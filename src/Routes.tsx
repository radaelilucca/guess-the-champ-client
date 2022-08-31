import { useContext, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { PrivateRoute } from "./components/PrivateRoute";
import { AuthContext } from "./context";

import { useGameState } from "./hooks";

import { GamePage, HomePage, LoginPage, SignUpPage } from "./pages";

const PrivateRoutes = () => {
  // GET AVAILABLE CHAMPIONS WHEN AUTHENTICATED!
  const {
    authState: { isAuthenticated },
  } = useContext(AuthContext);
  const { getAvailableChampions } = useGameState();

  useEffect(() => {
    if (isAuthenticated) {
      getAvailableChampions();
    }
  }, [isAuthenticated]);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <PrivateRoute>
            <HomePage />
          </PrivateRoute>
        }
      />
      <Route
        path="/game"
        element={
          <PrivateRoute>
            <GamePage />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};

const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/sign-up" element={<SignUpPage />} />
    </Routes>
  );
};

const PagesRoutes = () => {
  return (
    <Router>
      <PrivateRoutes />
      <PublicRoutes />
    </Router>
  );
};

export { PagesRoutes };
