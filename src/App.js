import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Pages/NavBar';
import HomePage from './Pages/HomePage'; 
import SimulationPage from './Pages/SimulationPage';
import CreditPage from './Pages/CreditPage';
import './styles/GlobalStyles.css';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/simulation" element={<SimulationPage />} />
          <Route path="/credits" element={<CreditPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
