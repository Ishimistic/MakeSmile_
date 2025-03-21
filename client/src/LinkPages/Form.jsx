import { useState } from "react";
import axios from "axios";
import Header from "../components/Header";
import "react-phone-input-2/lib/style.css";
import Swal from 'sweetalert2';
import Footer from "../components/Footer";

const url = import.meta.env.VITE_REACT_APP_API_BASE_URL;
console.log("API URL:", url);

const DonationForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    // mobileNumber: "",
    email: "",
    donationItem: "",
    handoverDate: "",
    message: "",
    locationOfPickUp: "",
    timeOfPickUp: ""
  });

  const [isOtpVerified, setIsOtpVerified] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const sendOTP = async () => {
    // Email validation before sending OTP
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email || !emailRegex.test(formData.email)) {
      Swal.fire({
        title: "Invalid Email",
        text: "Please enter a valid email address",
        icon: "error"
      });
      return;
    }

    try {
      const response = await axios.post(`${url}/api/send-otp`, { 
        email: formData.email 
      });
      console.log("------------ Email: ", formData.email);

      if (response.status === 200) {
        // Show OTP input dialog
        const { value: otpCode } = await Swal.fire({
          title: "Verification Code",
          text: "Please enter the verification code sent to your email (Check spam folder also)",
          input: "text",
          inputPlaceholder: "Enter your 6-digit code",
          showCancelButton: true,
          confirmButtonText: "Verify",
          showLoaderOnConfirm: true,
          inputValidator: (value) => {
            if (!value) {
              return "Please enter the verification code";
            }
            if (!/^\d{6}$/.test(value)) {
              return "Please enter a valid 6-digit code";
            }
          },
          preConfirm: async (otp) => {
            try {
              const verifyResponse = await axios.post(`${url}/api/verify-otp`, {
                email: formData.email,
                otp: otp
              });
              return verifyResponse.data;
            } catch (error) {
              Swal.showValidationMessage(
                `Verification failed: ${error.response?.data?.message || "Invalid code"}`
              );
              return false;
            }
          },
          allowOutsideClick: () => !Swal.isLoading()
        });

        if (otpCode) {
          setIsOtpVerified(true);
          Swal.fire({
            title: "Verified!",
            text: "Your email has been verified successfully",
            icon: "success"
          });
          
          // Continue with form submission
          submitForm();
        }
      }
    } catch (error) {
      console.error("Error sending OTP:", error);
      Swal.fire({
        title: "Error",
        text: error.response?.data?.message || "Failed to send verification code",
        icon: "error"
      });
    }
  };

  const submitForm = async () => {
    try {
      const response = await axios.post(`${url}/api/submit-donation`, formData);

      console.log("API response:", response);

      if (response.status === 200 || response.status === 201) {
        Swal.fire({
          title: "Thank You for being a part of our Mission!",
          icon: "success",
          draggable: true
        }).then((result) => {
          window.location.href = '/'; 
        });
      } 
      else {
        Swal.fire({
          title: "Error",
          text: "Something went wrong. Please try again.",
          icon: "error"
        });
        console.error("Unexpected response status:", response.status);
      }
    } catch (error) {
      console.error("Error submitting the form", error);
      Swal.fire({
        title: "Error",
        text: "Failed to submit your donation. Please try again.",
        icon: "error"
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Form validation
    // if (!formData.fullName || !formData.email || !formData.donationItem || !formData.handoverDate || !formData.mobileNumber) {
    if (!formData.fullName || !formData.email || !formData.donationItem || !formData.handoverDate || !formData.locationOfPickUp || !formData.timeOfPickUp) {
      Swal.fire({
        title: "Missing Information",
        text: "Please fill all required fields",
        icon: "warning"
      });
      return;
    }

    if (formData.timeOfPickUp) {
      const selectedTime = formData.timeOfPickUp;
      if (selectedTime < "09:00" || selectedTime > "20:00") {
        alert("Please select a pickup time between 9:00 AM and 8:00 PM");
        return;
      }
    }
    
    // If already verified, submit directly; otherwise send OTP first
    if (isOtpVerified) {
      submitForm();
    } else {
      sendOTP();
    }
  };

  return (
    <div className="form">
      <Header />
      <div className="form-container">
        <form className="donation-form" >
          <div className="form-group">
            <label>Full Name:</label>
            <input
              type="text"
              name="fullName"
              required
              value={formData.fullName}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>What you want to donate:</label>
            <input
              type="text"
              name="donationItem"
              required
              value={formData.donationItem}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Handover Date:</label>
            <input
              type="date"
              name="handoverDate"
              required
              value={formData.handoverDate}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Message:</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="form-group">
            <label>Location (Of pickup):</label>
            <input
              type="text"
              name="locationOfPickUp"
              required
              value={formData.locationOfPickUp}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Time (Of pickup):</label>
            <input
              type="time"
              name="timeOfPickUp"
              required
              value={formData.timeOfPickUp}
              onChange={handleChange}
            />
          </div>
         
          {/* <div className="form-group">
            <label>Mobile Number:</label>
            <PhoneInput
              onlyCountries={["in"]}
              value={formData.mobileNumber}
              onChange={(phone) => {
                setFormData({
                  ...formData,
                  mobileNumber: phone,
                });
              }}
            />
          </div> */}
          <button type="submit" onClick={handleSubmit}>
            {isOtpVerified ? "Submit" : "Verify & Submit"}
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default DonationForm;
