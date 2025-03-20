// import React from 'react';
import { Link } from "react-router-dom"; // Make sure you have react-router-dom installed

const ThankYouPage = () => {
  return (
    <div className="thank-you-container">
      <h1 className="thankuHeading">Thank You!</h1>
      <p>
        Your form has been submitted successfully. We appreciate your
        support!
      </p>
      <div className="thanku-back-links">
        <Link to="/">Back to Home</Link>
        <Link to="/donate">Make Another Donation</Link>
      </div>
    </div>
  );
};

export default ThankYouPage;