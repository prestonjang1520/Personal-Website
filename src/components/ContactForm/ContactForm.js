import React, { useState  } from 'react';
import './ContactForm.scss';
import useRecaptchaScript from "../../hooks/useExternalScripts"

const ContactForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        phone: ''
    });
    const [recaptchaToken, setRecaptchaToken] = useState(''); //to track the recaptcha value
    const [isSubmitting, setIsSubmitting] = useState(false); //tracks the submitting state
    const [isSubmitSuccess, setIsSubmitSuccess] = useState(false); // To track form submission success or failure
    const [submitError, setSubmitError] = useState(null); // To track submission error (optional)

    //add the Google Recaptcha script to head
    const isScriptLoaded = useRecaptchaScript();

    // Handle changes to form fields
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    // handles the form submission
    // will attempt to send form data to server where the recaptcha will be verified and an email sent
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!isScriptLoaded) {
            console.error('reCAPTCHA script not loaded yet.');
            return;
        }

        // Get the reCAPTCHA token before submitting
        if(window.grecaptcha){
            setIsSubmitting(true);

            //code to test spinner and success messages
            // await new Promise(r => setTimeout(r, 2000000));
            // setIsSubmitting(false); // Done submitting
            // setIsSubmitSuccess(true); // Form submission success

            window.grecaptcha.ready(() => {
                window.grecaptcha.execute(process.env.REACT_APP_GOOGLE_RECAPTCHA_SITE_KEY, { action: 'submit' }).then((token) => {
                    setRecaptchaToken(token);
                    // Now submit the form with the reCAPTCHA token
                    // Send the form data and token to your server
                    // Example:
                    const formDataWithToken = { ...formData, recaptcha_token: recaptchaToken };
                    
                    // Submit the form data (using fetch/axios or whatever method you're using)
                    //use EmailJS to send form data to myself
                    fetch('http://localhost:3001/contact/', {
                        method: 'POST', // Specify the request method
                        headers: {
                        'Content-Type': 'application/json', // Indicate you're sending JSON data
                        },
                        body: JSON.stringify(formDataWithToken), // Convert the data object to a JSON string
                    }).then(
                        (response) => {
                            console.log('Email sent successfully:', response);
                            setIsSubmitting(false); // Done submitting
                            setIsSubmitSuccess(true); // Form submission success
                        },
                        (error) => {
                            console.log('Error sending email:', error);
                            setIsSubmitting(false); // Done submitting
                            setSubmitError(error.message); // Handle the error
                        }
                    );
                });
            });
        }
    };

    return(
        <>
            <form onSubmit={handleSubmit}>
                <input type="hidden" id="recaptcha-token" name="recaptcha_token" />
                <div className="form-group">
                    <label htmlFor="first-name">First Name:</label>
                    <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="last-name">Last Name:</label>
                    <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Phone Number:</label>
                    <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
                    <small>Format: 123-456-7890</small>
                </div>
                <div className="form-group">
                    <label htmlFor="subject">Subject:</label>
                    <textarea id="subject" name="subject" columns="40" rows="5" value={formData.subject} onChange={handleChange} required></textarea>
                </div>
                <div className="form-group submit-container">
                    {isSubmitting ? (
                        // Show the spinner while submitting
                        <div className="spinner"></div>
                    ) : (
                        // Show the submit button when not submitting
                        <button type="submit" disabled={isSubmitting}>Submit</button>
                    )}
                </div>
                {isSubmitSuccess && <div className="success-message">Form submitted successfully!</div>}

                {submitError && <div className="error-message">{submitError}</div>}
            </form>
        </>
        
    );
}

export default ContactForm;