import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import MapComponent from './components/MapComponent';
import Navbar from './components/Navbar/Navbar';
import LoginPage from './components/LoginPage/LoginPage';
import About from './components/Navbar/About';
import HowTo from './components/Navbar/HowTo';
import FAQs from './components/Navbar/FAQs';
import idToStructure from './Original_data_dict/id_to_structure.json';
import structureToID from './Original_data_dict/structure_to_id.json'

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <div className='navbar-container'>
                    <Navbar idToStructure={idToStructure} structureToID={structureToID}/>
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
