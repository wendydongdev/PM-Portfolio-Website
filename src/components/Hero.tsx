import React from 'react';

const Hero = () => {
  return (
    <section className="py-20 flex flex-col md:flex-row items-center">
      <div className="md:w-1/2 mb-8 md:mb-0">
        <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" alt="Albert Flores" className="rounded-full w-48 h-48 object-cover mx-auto" />
        <h1 className="text-3xl font-bold mt-4 text-center">I'm Albert Flores</h1>
        <p className="text-xl mt-2 text-center">Digital Product Designer based in Tegal, Indonesia.</p>
      </div>
      <div className="md:w-1/2">
        <h2 className="text-4xl font-bold mb-4">Passionate creating great experiences for Digital Product</h2>
        <div className="flex space-x-4 mt-6">
          <a href="#contact" className="bg-black text-white px-6 py-3 rounded-full">Get in touch</a>
          <a href="#projects" className="text-black border border-black px-6 py-3 rounded-full">See my work</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;