import React from 'react';

const Hero = () => {
  return (
    <div className="bg-black text-white h-screen flex items-center">
      <div className="container mx-auto px-4">
        <h3 className="text-xl font-bold mb-4">WALTER AI</h3>
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
          <span className="text-green-500">BREATHE LIFE INTO YOUR SYSTEMS</span>{' '}
          WITH CUTTING-EDGE AI SOLUTIONS
        </h1>
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <button className="bg-green-500 text-white px-6 py-3 rounded text-lg">
            Let's talk
          </button>
          <button className="border border-white text-white px-6 py-3 rounded text-lg">
            Our Services
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;