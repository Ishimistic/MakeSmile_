import Donation from "../model/Donation.js";
import SendEmail from "../SendEmail.js";

// Generate a random 6-digit OTP
const generateOTP = () => {
  return Math.floor(100000 + Math.random() * 900000).toString();
};

const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const sendOTP = async (req, res) => {
  const { email } = req.body;
  
  if (!email || !isValidEmail(email)) {
    return res.status(400).json({ message: "Valid details are required" });
  }
  
  try {
    // console.log(`Generating OTP for email: ${email}`);
    // Generate OTP
    const otp = generateOTP();
    // console.log(`Generated OTP: ${otp}`);
    
    // Store OTP in session/database with expiration
    global.otpStore = global.otpStore || {};
    global.otpStore[email] = {
      otp,
      expiresAt: Date.now() + 10 * 60 * 1000 // 10 minutes expiry
    };
    
    // Send OTP via email
    // console.log(`Attempting to send OTP to: ${email}`);
    try {
      await SendEmail({
        to: email,
        subject: "Your OTP Verification Code",
        text: `Your OTP code is: ${otp}. This code will expire in 10 minutes.`,
        isOTP: true
      });
      // console.log(`OTP email sent successfully to: ${email}`);
      res.status(200).json({ message: "OTP sent successfully" });
    } catch (emailError) {
      // console.error("Detailed email sending error:", emailError);
      res.status(500).json({ message: "Failed to send OTP email", error: emailError.message });
    }
  } catch (error) {
    // console.error("Error in OTP generation process:", error);
    res.status(500).json({ message: "Failed to process OTP request" });
  }
};


export const verifyOTP = async (req, res) => {
  const { email, otp } = req.body;
  
  if (!email || !otp) {
    return res.status(400).json({ message: "Email and OTP are required" });
  }
  
  try {
    // Check if OTP exists and is valid
    const otpData = global.otpStore?.[email];
    
    if (!otpData || otpData.otp !== otp) {
      return res.status(400).json({ message: "Invalid OTP" });
    }
    
    if (Date.now() > otpData.expiresAt) {
      delete global.otpStore[email];
      return res.status(400).json({ message: "OTP expired" });
    }
    
    // OTP is valid, clear it from store
    delete global.otpStore[email];
    
    res.status(200).json({ message: "OTP verified successfully" });
  } catch (error) {
    // console.error("Error verifying OTP:", error);
    res.status(500).json({ message: "Failed to verify OTP" });
  }
};

export const Submit = async (req, res) => {
  const { fullName, mobileNumber, email, donationItem, handoverDate, message } =
    req.body;

  try {
    const donation = new Donation({
      fullName,
      mobileNumber,
      email,
      donationItem,
      handoverDate,
      message,
    });
    await donation.save();

    // Send confirmation email
    if (email && isValidEmail(email)) {
      await SendEmail({
        fullName,
        mobileNumber,
        email,
        donationItem,
        handoverDate,
        donorMessage: message, 
      });
      // console.log("Email sent to donor");
    } else {
      // console.log("Invalid or missing email - skipping email notification");
    }
    res.sendStatus(200);
  } catch (error) {
    // console.error("Error submitting donation:", error);
    res.sendStatus(500);
  }
};