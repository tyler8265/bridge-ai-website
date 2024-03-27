import React from 'react';
import { useParams } from 'react-router-dom';
import './BridgeDetailsTemplate.css';

const BridgeDetailsTemplate = ({ bridgeData }) => {
    const { bridgeId } = useParams();

    return (
        <div>
            <div className='header'>
                <p>Bridge ID: {bridgeId}</p>
            </div>
            <div className='body-info'>
                <input placeholder='Predict in years...'/>
                <button>Bridge Prediction</button>
            </div>
        </div>
    );
}

export default BridgeDetailsTemplate;
