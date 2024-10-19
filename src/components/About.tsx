import React from 'react';
import { Briefcase, Code, Server } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">About Me</h2>
        <div className="flex flex-wrap justify-center">
          <div className="w-full md:w-1/3 px-4 mb-8">
            <div className="flex flex-col items-center">
              <Briefcase className="h-12 w-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Experience</h3>
              <p className="text-center">5+ years of professional web development experience</p>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-4 mb-8">
            <div className="flex flex-col items-center">
              <Code className="h-12 w-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Frontend</h3>
              <p className="text-center">React, Vue.js, Angular, HTML5, CSS3, JavaScript</p>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-4 mb-8">
            <div className="flex flex-col items-center">
              <Server className="h-12 w-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Backend</h3>
              <p className="text-center">Node.js, Python, Ruby on Rails, SQL, MongoDB</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;