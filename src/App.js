import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Portfolio from './Portfolio';
import Poesie from './Poesie';

function App() {
  return (
    <Router>
      <div className="App">
    
        
        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="/poesie" element={<Poesie />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
