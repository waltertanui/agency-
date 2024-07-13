import React from 'react';

const Header = () => {
  return (
    <header className="bg-black text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          {/* Replace with your actual logo */}
          <div className="w-10 h-10 bg-white mr-2"></div>
          <h1 className="text-2xl font-bold">Walter AI</h1>
        </div>
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li><a href="#" className="hover:text-green-500">Home</a></li>
            <li><a href="#" className="hover:text-green-500">Services</a></li>
            <li><a href="#" className="hover:text-green-500">Blog</a></li>
            <li><a href="#" className="hover:text-green-500">Team</a></li>
            <li><a href="#" className="hover:text-green-500">Careers</a></li>
          </ul>
        </nav>
        <button className="bg-green-500 text-white px-4 py-2 rounded">
          Contact us
        </button>
      </div>
    </header>
  );
};

export default Header;