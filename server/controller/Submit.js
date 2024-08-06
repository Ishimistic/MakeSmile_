import Donation from '../model/Donation.js';
import SendEmail from '../SendEmail.js';

export const Submit = async (req, res) => {
    const { fullName, mobileNumber, email, donationItem, handoverDate, message } = req.body;

    try {
        const donation = new Donation({ fullName, mobileNumber, email, donationItem, handoverDate, message });
        await donation.save();
        console.log("Details: ", fullName, mobileNumber, email, donation, handoverDate, message);

        await SendEmail({ fullName, mobileNumber, email, donationItem, handoverDate, message });

        res.sendStatus(200);
    } catch (error) {
        console.error('Error submitting donation:', error);
        res.sendStatus(500);
    }
};
