const Enquiry = require('../models/Enquiry');
const nodemailer = require('nodemailer');

exports.submitEnquiry = async (req, res) => {
    try {
        const { name, email, contactNumber, solution, message } = req.body;

        // Save to DB
        const newEnquiry = new Enquiry({
            name, email, contactNumber, solution, message
        });
        await newEnquiry.save();

        // Nodemailer Setup
        const transporter = nodemailer.createTransport({
            service: 'gmail', // or appropriate service
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_APP_PASSWORD
            }
        });

        const mailOptions = {
            from: process.env.GMAIL_USER,
            to: 'info@gozoomtech.com', // destination email
            replyTo: email,
            subject: `New Enquiry from ${name}`,
            text: `Name: ${name}\nEmail: ${email}\nContact Number: ${contactNumber}\nSolution/Service: ${solution}\nMessage: ${message}`
        };

        if (process.env.GMAIL_USER) {
            await transporter.sendMail(mailOptions);
        }

        res.status(201).json({ success: true, message: 'Enquiry submitted successfully' });

    } catch (error) {
        console.error('Error submitting enquiry:', error);
        res.status(500).json({ success: false, message: 'Server Error' });
    }
};
