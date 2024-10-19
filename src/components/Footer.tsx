import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center mb-4 md:mb-0">
          <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=50&q=80" alt="Albert Flores" className="rounded-full w-10 h-10 object-cover mr-3" />
          <div>
            <p className="font-semibold">I'm Albert Flores</p>
            <p className="text-sm">Digital Product Designer based in Tegal, Indonesia</p>
          </div>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#services" className="hover:text-gray-300">Services</a></li>
            <li><a href="#projects" className="hover:text-gray-300">Case studies</a></li>
            <li><a href="#about" className="hover:text-gray-300">About me</a></li>
            <li><a href="#contact" className="hover:text-gray-300">Contact us</a></li>
          </ul>
        </nav>
        <a href="#contact" className="bg-white text-black px-4 py-2 rounded-full text-sm mt-4 md:mt-0">Get in touch</a>
      </div>
    </footer>
  );
};

export default Footer;