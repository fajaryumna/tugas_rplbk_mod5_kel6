import React, { useEffect, useState, createContext, useContext } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import './App.css'; // Import CSS file


const AppContext = createContext();

function App() {
  const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {
    if (pokemonData.length === 0) {
      fetch('https://pokeapi.co/api/v2/pokemon/')
        .then((response) => response.json())
        .then((data) => {
          setPokemonData(data.results);
        });
    }
  }, [pokemonData]);

  return (
    <Router>
      <AppContext.Provider value={pokemonData}>
        <div>
          <h1>Tugas Modul 5</h1>
          <h2>Kelompok 6</h2>
          <Routes>
            <Route path="/" element={<Page1 />} />

            <Route path="/page1" element={<Page1 />} />
            <Route path="/page2" element={<Page2 />} />
          </Routes>
          <div class='button-container'>
            <Link to="/page1">
              <button>Page 1</button>
            </Link>
            <Link to="/page2">
              <button>Page 2</button>
            </Link>
          </div>
        </div>
      </AppContext.Provider>
    </Router>
  );
}

function Page1() {
  const pokemonData = useContext(AppContext);
  const page1Data = pokemonData.slice(0, 10);

  return (
    <div>
      <ul>
        {page1Data.map((pokemon, index) => (
          <li key={index}>{pokemon.name}</li>
        ))}
      </ul>
    </div>
  );
}

function Page2() {
  const pokemonData = useContext(AppContext);
  const page2Data = pokemonData.slice(10, 20);

  return (
    <div>
      <ul>
        {page2Data.map((pokemon, index) => (
          <li key={index}>{pokemon.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
