import React, { useState } from 'react';
import axios from 'axios';
import Header from '../components/Header';
// import Button from "../components"

const DonationForm = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        mobileNumber: '',
        email: '',
        donationItem: '',
        handoverDate: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/api/submit-donation', formData);
            window.location.href = '/thank-you'; // Redirect to thank you page
        } catch (error) {
            console.error('Error submitting the form', error);
        }
    };

    return (
        <div className="form">
            <Header />
            <div className="form-container">
            <form onSubmit={handleSubmit} className="donation-form">
                <div className="form-group">
                    <label>Full Name:</label>
                    <input type="text" name="fullName" required value={formData.fullName} onChange={handleChange}  />
                </div>
                <div className="form-group">
                    <label>Mobile Number:</label>
                    <input type="text" name="mobileNumber" required value={formData.mobileNumber} onChange={handleChange}  />
                </div>
                <div className="form-group">
                    <label>Email:</label>
                    <input type="email" name="email" required value={formData.email}  onChange={handleChange}  />
                </div>
                <div className="form-group">
                    <label>What you want to donate:</label>
                    <input type="text" name="donationItem" required value={formData.donationItem} onChange={handleChange}  />
                </div>
                <div className="form-group">
                    <label>Handover Date:</label>
                    <input type="date" name="handoverDate" required value={formData.handoverDate} onChange={handleChange}  />
                </div>
                <div className="form-group">
                    <label>Message:</label>
                    <textarea name="message" value={formData.message} onChange={handleChange}></textarea>
                </div>
                <button type="submit">Submit</button>
            </form>
            </div>
           
           
        </div>
    );
};

export default DonationForm;
