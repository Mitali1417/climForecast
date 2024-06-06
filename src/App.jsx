import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import WeatherPage from "./pages/WeatherPage";

const App = () => {

  return (
     <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/weather/:name/:countryCode/:lat/:lon"
            element={<WeatherPage />}
          />
        </Routes>
      </Router>
  );
};

export default App;
