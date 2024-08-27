import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import "./css/App.css";
import "./css/Card.css";

import Home from "./pages/Home";
import Traditions from "./pages/Traditions";
import InfoPage from './pages/InfoPage';

const App = () => (
	<Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/traditions/:country" element={<Traditions />} />
        <Route path="/info-page" element={<InfoPage />} />
      </Routes>
    </Router>
);


export default App;