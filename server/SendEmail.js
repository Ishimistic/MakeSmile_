import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables from .env file

const SendEmail = async ({ fullName, mobileNumber, email, donationItem, handoverDate, message }) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_TO,
        subject: 'New Donation Submission',
        text: `A new donation has been submitted:
            Name: ${fullName}
            Mobile Number: ${mobileNumber}
            Email: ${email}
            Donation Item: ${donationItem}
            Handover Date: ${handoverDate}
            Message: ${message}`
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully');
    } catch (error) {
        console.error('Error sending email:', error);
    }
};

export default SendEmail;
