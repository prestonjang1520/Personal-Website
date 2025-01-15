import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './ContactForm.scss';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        phone: ''
    });

    // Handle changes to form fields
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);

        //use EmailJS to send form data to myself
        emailjs.send(
            process.env.REACT_APP_EMAILJS_SERVICE_ID,      // EmailJS service ID
            process.env.REACT_APP_EMAILJS_TEMPLATE_ID,     // EmailJS template ID
            formData,               // Pass the form data
            process.env.REACT_APP_EMAILJS_PUBLIC_KEY          // EmailJS user ID
        ).then(
            (response) => {
                console.log('Email sent successfully:', response);
            },
            (error) => {
                console.log('Error sending email:', error);
            }
        );
    };

    return(
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="first-name">First Name:</label>
                <input type="text" id="firstName" name="firstName" onChange={handleChange} required />
            </div>
            <div className="form-group">
                <label htmlFor="last-name">Last Name:</label>
                <input type="text" id="lastName" name="lastName" onChange={handleChange} required />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" onChange={handleChange} required />
            </div>
            <div className="form-group">
                <label htmlFor="phone">Phone Number:</label>
                <input type="tel" id="phone" name="phone" onChange={handleChange} required pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" />
                <small>Format: 123-456-7890</small>
            </div>
            <div className="form-group">
                <label htmlFor="subject">Subject:</label>
                <textarea id="subject" name="subject" columns="40" rows="5" onChange={handleChange} required></textarea>
            </div>
            <div className="form-group">
                <input type="submit" value="Submit" />
            </div>
        </form>
    );
}

export default ContactForm;