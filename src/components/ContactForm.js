import React from 'react';

const ContactForm = () => {
  return (
    <div className="flex flex-col md:flex-row gap-8 p-8 bg-black text-white">
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
      <form className="md:w-1/2 space-y-4">
        <input 
          type="text" 
          placeholder="Subject" 
          className="w-full p-2 bg-transparent border-b border-white"
        />
        <div className="flex gap-4">
          <input 
            type="text" 
            placeholder="Name" 
            className="w-1/2 p-2 bg-transparent border-b border-white"
          />
          <input 
            type="email" 
            placeholder="Email" 
            className="w-1/2 p-2 bg-transparent border-b border-white"
          />
        </div>
        <select className="w-full p-2 bg-transparent border-b border-white">
          <option>What is your budget for this project?</option>
          <option>less than $5,000</option>
          {/* Add more options as needed */}
        </select>
        <textarea 
          placeholder="How can we help you?" 
          className="w-full p-2 bg-transparent border-b border-white h-32"
        ></textarea>
        <button 
          type="submit" 
          className="w-full p-3 bg-green-500 text-white rounded-lg"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactForm;