import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Get in Touch</h2>
        <div className="max-w-md mx-auto">
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-2 font-medium">Name</label>
              <input type="text" id="name" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" required />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 font-medium">Email</label>
              <input type="email" id="email" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" required />
            </div>
            <div>
              <label htmlFor="message" className="block mb-2 font-medium">Message</label>
              <textarea id="message" rows={4} className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" required></textarea>
            </div>
            <button type="submit" className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-300">Send Message</button>
          </form>
        </div>
        <div className="mt-12 flex justify-center space-x-6">
          <a href="mailto:johndoe@example.com" className="text-gray-600 hover:text-indigo-600">
            <Mail className="h-8 w-8" />
          </a>
          <a href="https://github.com/johndoe" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-indigo-600">
            <Github className="h-8 w-8" />
          </a>
          <a href="https://linkedin.com/in/johndoe" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-indigo-600">
            <Linkedin className="h-8 w-8" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;