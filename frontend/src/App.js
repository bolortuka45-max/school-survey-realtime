import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./LoginPage";
import SelectionPage from "./SelectionPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/selection" element={<SelectionPage />} />
      </Routes>
    </Router>
  );
}

export default App;
