

import React, { useState } from 'react';
import axios from 'axios';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    subject: '',
    name: '',
    email: '',
    budget: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission to Airtable
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic form validation
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      alert('Please fill out all required fields');
      return;
    }

    setLoading(true); // Set loading state
    setError(null); // Clear any previous errors

    // Airtable API URL and headers configuration
    const airtableBaseUrl = 'https://api.airtable.com/v0/appkYzDMLvOXhq0cs/AAAI'; // Replace with your Airtable Table URL
    const config = {
      headers: {
        Authorization: `Bearer patpPltkgKgKCRReQ.ef355ed8ca36a53cdd6e4c5d75194bfd5f7b274fe18ec45afb3a781f270f637f`, // Replace with your Airtable API key
        'Content-Type': 'application/json',
      }
    };

    // Prepare data to be sent to Airtable
    const data = {
      records: [
        {
          fields: {
            Subject: formData.subject,
            Name: formData.name,
            Email: formData.email,
            Budget: formData.budget,
            Message: formData.message,
          }
        }
      ]
    };

    try {
      // Post data to Airtable
      await axios.post(airtableBaseUrl, data, config);
      setSubmitted(true);  // Mark the form as submitted
    } catch (err) {
      console.error('Error submitting form:', err);
      setError('There was an issue submitting the form. Please try again.');
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  return (
    <div className="flex flex-col md:flex-row gap-8 p-8 bg-black text-white">
      {submitted ? (
        <div className="md:w-full text-center">
          <h2 className="text-4xl font-bold mb-4">Thank You!</h2>
          <p>Your message has been submitted successfully.</p>
        </div>
      ) : (
        <>
          <div className="md:w-1/2">
            <h1 className="text-4xl font-bold mb-4">
              THE FUTURE <span className="text-green-500">AWAITS</span>
            </h1>
            <p className="mb-4">
              Got a burning AI idea, question, or just want to chat about what we do? 
              We're all ears! Reach out, and our friendly team at Morningside AI will 
              be right there to guide, assist, or simply share in your excitement. 
              Let's make your AI journey memorable together!
            </p>
          </div>
          <form onSubmit={handleSubmit} className="md:w-1/2 space-y-4">
            <input 
              type="text" 
              name="subject"
              placeholder="Subject" 
              value={formData.subject}
              onChange={handleChange}
              className="w-full p-2 bg-transparent border-b border-white"
              required
            />
            <div className="flex gap-4">
              <input 
                type="text" 
                name="name"
                placeholder="Name" 
                value={formData.name}
                onChange={handleChange}
                className="w-1/2 p-2 bg-transparent border-b border-white"
                required
              />
              <input 
                type="email" 
                name="email"
                placeholder="Email" 
                value={formData.email}
                onChange={handleChange}
                className="w-1/2 p-2 bg-transparent border-b border-white"
                required
              />
            </div>
            <select 
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              className="w-full p-2 bg-transparent border-b border-white"
            >
              <option value="">What is your budget for this project?</option>
              <option value="less than $5,000">Less than $5,000</option>
              {/* Add more options as needed */}
            </select>
            <textarea 
              name="message"
              placeholder="How can we help you?" 
              value={formData.message}
              onChange={handleChange}
              className="w-full p-2 bg-transparent border-b border-white h-32"
              required
            ></textarea>

            {error && <p className="text-red-500">{error}</p>}

            <button 
              type="submit" 
              className="w-full p-3 bg-green-500 text-white rounded-lg"
              disabled={loading}
            >
              {loading ? 'Sending...' : 'Send'}
            </button>
          </form>
        </>
      )}
    </div>
  );
};

export default ContactForm;
