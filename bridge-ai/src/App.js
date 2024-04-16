import React, { useState } from 'react';
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
import BridgeDetailsTemplate from './components/BridgeData/BridgeDetailsTemplate';
import bridgeData from './Original_data_dict/CTbridgeDataOriginal.json';
import Chart from "chart.js/auto";
import { CategoryScale } from 'chart.js';

Chart.register(CategoryScale);

const App = () => {
    const [chartData] = useState({
        labels: [],
        datasets: [
          {
            label: "Users Gained",
            data: [],
            backgroundColor: [
              "rgba(75,192,192,1)",
              "#ecf0f1",
              "#50AF95",
              "#f3ba2f",
              "#2a71d0"
            ],
            borderColor: "black",
            borderWidth: 2
          }
        ]
    });

    return (
        <BrowserRouter>
            <div className="App">
                <div className='navbar-container'>
                    <Navbar idToStructure={idToStructure} structureToID={structureToID} bridgeData={bridgeData} />
                    <Routes>
                        <Route path='/' element={<LoginPage />} />
                        <Route path='/Main' element={<MapComponent />} />
                        <Route path='/About' element={<About />} />
                        <Route path='/how-to-page' element={<HowTo />} />
                        <Route path='/FAQs' element={<FAQs />} />
                        <Route path='/bridge-details/:bridgeId' element={<BridgeDetailsTemplate bridgeData={bridgeData} chartData={chartData} />} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
