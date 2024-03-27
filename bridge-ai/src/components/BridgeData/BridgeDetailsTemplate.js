import React from 'react';
import { useParams } from 'react-router-dom'; // Import useParams hook

const BridgeDetailsTemplate = ({ bridgeData }) => {
    const { bridgeId } = useParams(); // Extract bridgeId from URL

    return (
            <p>Bridge ID: {bridgeId}</p>
    );
}

export default BridgeDetailsTemplate;
