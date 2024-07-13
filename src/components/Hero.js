import React from 'react';

const Hero = () => {
  return (
    <div className="bg-black text-white py-16">
      <div className="container mx-auto">
        <h3 className="text-xl font-bold mb-4">MORNINGSIDE AI</h3>
        <h1 className="text-5xl font-bold mb-8">
          <span className="text-green-500">BREATHE LIFE INTO YOUR SYSTEMS</span>{' '}
          WITH CUTTING-EDGE AI SOLUTIONS
        </h1>
        <div className="flex space-x-4">
          <button className="bg-green-500 text-white px-6 py-2 rounded">
            Let's talk
          </button>
          <button className="border border-white text-white px-6 py-2 rounded">
            Our Services
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;