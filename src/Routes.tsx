import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { GamePage, HomePage, LoginPage } from "./pages";

const PagesRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/game" element={<GamePage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
};

export { PagesRoutes };
