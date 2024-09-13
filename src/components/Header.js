import React from 'react';

const Header = () => {
  return (
    <header className="bg-black text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          {/* Replace 'logo.png' with the actual path to your logo */}
          <img src="/Logo.png" alt="Logo" className="w-20 h-20 mr-2" />
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


