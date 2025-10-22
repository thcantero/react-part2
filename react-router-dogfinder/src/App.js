import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import NavBar from './NavBar/NavBar';
import RouteList from './RouteList';

function App() {
  const [dogs, setDogs] = useState({
    data: null,
    isLoading: true,
    error: null
  });

  useEffect(() => {
    async function loadDogs() {
      try {
        const response = await axios.get("http://localhost:5001/dogs");
        setDogs({
          data: response.data,
          isLoading: false,
          error: null
        });
      } catch (err) {
        setDogs({
          data: null,
          isLoading: false,
          error: err.message
        });
      }
    }
    loadDogs();
  }, []);

  if (dogs.isLoading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
        <h1>Loading dogs...</h1>
      </div>
    );
  }

  if (dogs.error) {
    return (
      <div className="error-container">
        <h1>Error loading dogs!</h1>
        <p>{dogs.error}</p>
        <button onClick={() => window.location.reload()}>Try Again</button>
      </div>
    );
  }

  return (
    <div className="App">
      <h1>Welcome to Dog Finder!</h1>
      <BrowserRouter>
        <NavBar dogs={dogs.data} />
        <div className="container">
          <RouteList dogs={dogs.data} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;