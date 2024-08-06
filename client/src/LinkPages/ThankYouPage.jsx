import React from 'react';
import { Link } from 'react-router-dom'; // Make sure you have react-router-dom installed

const ThankYouPage = () => {
    return (
        <div className="thank-you-container">
            <h1>Thank You!</h1>
            <p>Your donation has been submitted successfully. We appreciate your support!</p>
            <Link to="/">Back to Home</Link>
            <Link to="/donate">Make Another Donation</Link>
        </div>
    );
};

export default ThankYouPage;
