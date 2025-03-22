import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config(); 

const SendEmail = async ({ fullName, mobileNumber, email, donationItem, handoverDate, donorMessage, LocationOfPickUp, timeOfPickUp, to, subject, text, isOTP = false }) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        secure: true,
        port: 465,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });

    // Determine if this is an OTP email or a donation confirmation
    let mailOptions;
    
    if (isOTP) {
        mailOptions = {
            from: process.env.EMAIL_USER,
            to: to || email,
            subject: subject || "Verification Code",
            text: text // Use the provided text parameter
        };
    } 
    else {
        mailOptions = {
            from: process.env.EMAIL_USER,
            to: email,
            subject: 'New Donation Submission',
            // text: `A new donation has been submitted:
            //     Name: ${fullName}
            //     // Mobile Number: ${mobileNumber}
            //     Email: ${email}
            //     Donation Item: ${donationItem}
            //     Handover Date: ${handoverDate}
            //     Message: ${donorMessage || ""}`
            text: `A new donation has been submitted:
                Name: ${fullName}
                Email: ${email}
                Donation Item: ${donationItem}
                Handover Date: ${handoverDate}
                Message: ${donorMessage || ""}
                Location: ${LocationOfPickUp}
                Time: ${timeOfPickUp}
                `
        };
    }

    try {
        await transporter.sendMail(mailOptions);
        // console.log('Email sent successfully');
        return true;
    } catch (error) {
        // console.error('Error sending email:', error);
        throw error; // Re-throw the error to be handled by the caller
    }
};

export default SendEmail;