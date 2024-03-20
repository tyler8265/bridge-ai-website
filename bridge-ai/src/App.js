import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import MapComponent from './components/MapComponent';
import Navbar from './components/Navbar/Navbar';
import LoginPage from './components/LoginPage/LoginPage';
import About from './components/Navbar/About';
import HowTo from './components/Navbar/HowTo';
import FAQs from './components/Navbar/FAQs';
import idToStructure from './Original_data_dict/id_to_structure.json';
import structureToID from './Original_data_dict/structure_to_id.json';

// Function to match structure numbers
function matchStructNums(matchKey, structureNumsList) {
  return structureNumsList.filter(key => key.includes(matchKey));
}

// Function to trim results
function trimResults(results, maxOut) {
  return results.slice(0, maxOut);
}

function App() {
  const [trimmedResults, setTrimmedResults] = useState([]);

  useEffect(() => {
    if (structureToID && structureToID['CT']) {
      const ourStructures = Object.keys(structureToID['CT']).map(key => key.trim());
      const matchedResults = matchStructNums('100', ourStructures);
      const trimmed = trimResults(matchedResults, 20);
      setTrimmedResults(trimmed);
    }
  }, [structureToID]);

  return (
    <BrowserRouter>
      <div className="App">
        <div className='navbar-container'>
        <Navbar trimmedResults={trimmedResults} idToStructure={idToStructure} />
          <Routes>
            <Route path='/' element={<LoginPage />} />
            <Route path='/Main' element={<MapComponent />} />
            <Route path='/About' element={<About />} />
            <Route path='/how-to-page' element={<HowTo />} />
            <Route path='/FAQs' element={<FAQs />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
