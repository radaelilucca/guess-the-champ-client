import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { GameView, HomePage } from "./pages";

const PagesRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/game" element={<GameView />} />
      </Routes>
    </Router>
  );
};

export { PagesRoutes };
