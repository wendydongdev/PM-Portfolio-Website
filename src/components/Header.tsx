import React from 'react';

const Header = () => {
  return (
    <header className="py-6">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="text-xl font-semibold">Albert</div>
        <ul className="flex space-x-6">
          <li><a href="#services" className="hover:text-gray-600">Services</a></li>
          <li><a href="#projects" className="hover:text-gray-600">Case studies</a></li>
          <li><a href="#about" className="hover:text-gray-600">About me</a></li>
          <li><a href="#contact" className="hover:text-gray-600">Contact us</a></li>
        </ul>
        <a href="#contact" className="bg-black text-white px-4 py-2 rounded-full text-sm">See my work</a>
      </nav>
    </header>
  );
};

export default Header;