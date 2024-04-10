import React from 'react';
import { useParams } from 'react-router-dom';
import './BridgeDetailsTemplate.css';

const BridgeDetailsTemplate = ({ bridgeData }) => {
    const { bridgeId } = useParams();


    // Destructure latitude and longitude from the Location array
    const [,, , latitude, longitude] = bridgeData[bridgeId].Location;

    return (
        <div>
            <div className='header'>
                <p>Bridge ID: {bridgeId}</p>
            </div>
            <div className='body-info'>
                <p>Latitude: {latitude}</p>
                <p>Longitude: {longitude}</p>
                <input placeholder='Predict in years...' />
                <button>Bridge Prediction</button>
            </div>
        </div>
    );
}

export default BridgeDetailsTemplate;
