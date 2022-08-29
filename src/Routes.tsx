import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { GamePage, HomePage, LoginPage, SignUpPage } from "./pages";

const PagesRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/game" element={<GamePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<SignUpPage />} />
        SignUpPage
      </Routes>
    </Router>
  );
};

export { PagesRoutes };
