// import { useState } from "react";
// import axios from "axios";
// import Header from "../components/Header";
// import PhoneInput from "react-phone-input-2";
// // import TextField from "@mui/material/TextField";
// import "react-phone-input-2/lib/style.css";
// import Swal from 'sweetalert2'
// // import {  RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
// // import { auth } from "../components/FirebaseAuth";


// const url = import.meta.env.VITE_REACT_APP_API_BASE_URL;

// const DonationForm = () => {
//   const [formData, setFormData] = useState({
//     fullName: "",
//     mobileNumber: "",
//     email: "",
//     donationItem: "",
//     handoverDate: "",
//     message: "",
//   });

//   const [user, setUser] = useState(null);
//   const [otp, setOtp] = useState("");

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//  /* const sendOTP = async () => {
//     try {
//       // const recaptcha = new RecaptchaVerifier(auth, "recaptcha", {});
//       const confirmation = await signInWithPhoneNumber(
//         auth,
//         `+${formData.mobileNumber}`, window.recaptchaVerifier
//       );
//       // console.log("Confirmation********************************:: ", confirmation);
//       setUser(confirmation);
//     } catch (err) {
//       console.log("Error occured somewhere in verification: \n", err);
//     }
//     console.log("Formatted Phone Number:", `+${formData.mobileNumber}`);
//   };*/

//  /* const sendOTP = async() => {
//      try{
//       // auth.settings.appVerificationDisabledForTesting = true;
//       if (!window.recaptchaVerifier) {
//         window.recaptchaVerifier = new RecaptchaVerifier(
//           "recaptcha-container",
//           {
//             size: "invisible",
            
//           },
//           auth
//         );
//       }

//       const appVerifier = window.recaptchaVerifier;
//       const confirmationResult = await signInWithPhoneNumber(
//         auth,
//         `${formData.mobileNumber}`,
//         appVerifier
//       );
//       setUser(confirmationResult);

//       // console.log("Confirmation: ", `${formData.mobileNumber}`);
//      }
//      catch(err){

//       console.log("Error>>>>>>>>>>>: ", err);
//       // window.recaptchaVerifier.clear();
//      }
//   }

//   const verifyOTP = async () => {
//     try {
//       const verification = await user.confirm(otp);

//       console.log("Verification otp: ", verification);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   */

//   const handleSubmit = async (e) => {
//     // const PORT = import.meta.env.VITE_REACT_APP_API_PORT;
//     e.preventDefault();
//     console.log("Form submitted with data:", formData); 
        
//     try {
//       const response = await axios.post(`${url}/api/submit-donation`, formData);

//       console.log("API response:", response);

//       if (response.status === 200 || response.status === 201) {
//         // window.location.href = "/thank-you"; // Redirect to thank you page
//         Swal.fire({
//           title: "Thank You for being a part of our Mission!",
//           icon: "success",
//           draggable: true
//         }).then((result) => {
//           window.location.href = '/'; 
//         });
//       } 
//       else {
//         Swal.fire({
//           title: "Error",
//           text: "Something went wrong. Please try again.",
//           icon: "error"
//         });
//         console.error("Unexpected response status:", response.status);
//       }
//     } catch (error) {
//       console.error("Error submitting the form", error);
//     }
//   };

//   return (
//     <div className="form">
//       <Header />
//       <div className="form-container">
//         <form className="donation-form" >
//           <div className="form-group">
//             <label>Full Name:</label>
//             <input
//               type="text"
//               name="fullName"
//               required
//               value={formData.fullName}
//               onChange={handleChange}
//             />
//           </div>
//           <div className="form-group">
//             <label>Email:</label>
//             <input
//               type="email"
//               name="email"
//               required
//               value={formData.email}
//               onChange={handleChange}
//             />
//           </div>
//           <div className="form-group">
//             <label>What you want to donate:</label>
//             <input
//               type="text"
//               name="donationItem"
//               required
//               value={formData.donationItem}
//               onChange={handleChange}
//             />
//           </div>
//           <div className="form-group">
//             <label>Handover Date:</label>
//             <input
//               type="date"
//               name="handoverDate"
//               required
//               value={formData.handoverDate}
//               onChange={handleChange}
//             />
//           </div>
//           <div className="form-group">
//             <label>Message:</label>
//             <textarea
//               name="message"
//               value={formData.message}
//               onChange={handleChange}
//             ></textarea>
//           </div>
//           <div className="form-group">
//             <label>Mobile Number:</label>
//             <PhoneInput
//               onlyCountries={["in"]}
//               value={formData.mobileNumber}
//               onChange={(phone) => {
//                 setFormData({
//                   ...formData,
//                   mobileNumber: phone,
//                 });
//                 // console.log("Mobile number updated:", phone);
//               }}
//             />
//           </div>
//           <button type="submit" onClick={handleSubmit}>Submit</button>
//           {/* <div id="recaptcha-container"></div> */}
//           {/* <button
//             type="button"
//             style={{ cursor: "pointer", margin: "1rem" }}
//             onClick={(e) => {
//               e.preventDefault();
//               sendOTP();
//             }}
//           >
//             {" "}
//             Verify Number{" "}
//           </button>

//           <br /> */}
//           {/* <div style={{ margin: "1rem" }} id="recaptcha"></div> */}
//           {/* <textarea name="check-otp-box" id=""></textarea> */}
//           {/* <TextField
//             onChange={(e) => setOtp(e.target.value)}
//             sx={{ margin: "10px", width: "300px" }}
//             variant="outlined"
//             size="small"
//             label="Enter OTP"
//           />

//           <button onClick={verifyOTP}>Verify OTP</button> */}
//           {/* {isVerified && (
//             <button onClick={handleSubmit}> Submit details</button>
//           )} */}
//         </form>
//       </div>
//     </div>
//   );
// };

// export default DonationForm;

import { useState } from "react";
import axios from "axios";
import Header from "../components/Header";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Swal from 'sweetalert2';
import Footer from "../components/Footer";

const url = import.meta.env.VITE_REACT_APP_API_BASE_URL;
console.log("API URL:", url);

const DonationForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    mobileNumber: "",
    email: "",
    donationItem: "",
    handoverDate: "",
    message: "",
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
    if (!formData.fullName || !formData.email || !formData.donationItem || !formData.handoverDate || !formData.mobileNumber) {
      Swal.fire({
        title: "Missing Information",
        text: "Please fill all required fields",
        icon: "warning"
      });
      return;
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
          </div>
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
