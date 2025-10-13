import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import VendingMachine from './components/VendingMachine';
import NavBar from './components/NavBar';
import Chips from './components/Chips';
import Candy from './components/Candy';
import Water from './components/Water';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<VendingMachine />} />
          <Route path="/water" element={<Water />} />
          <Route path="/chips" element={<Chips />} />
          <Route path="/candy" element={<Candy />} />
        </Routes>
      </BrowserRouter>  
    </div>
  );
}

export default App;