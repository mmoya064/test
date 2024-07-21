import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//FIX NAMES
import P2_services from './pages/p2_services';
import P2_confirmation from './pages/p2_confirmation'; // Import other page components
import Homepage from './pages/homepage';
import Faq from './pages/p2_faq';
import P2_portfolio from './pages/p2_portfolio';
import FRfaq from './pages/FR-faq';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/pages" element={<Homepage />} />
        <Route path="/pages/p2_portfolio" element={<P2_portfolio />} />
        <Route path="/pages/p2_faq" element={<Faq />} />
		<Route path="/pages/FR-faq" element={<FRfaq />} />
        <Route path="/pages/p2_services" element={<P2_services />} />
        <Route path="/pages/p2_confirmation" element={<P2_confirmation />} />
      </Routes>
    </Router>
  );
}

export default App;