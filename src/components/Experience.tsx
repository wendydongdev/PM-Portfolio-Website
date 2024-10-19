import React from 'react';

const experiences = [
  {
    company: 'Part time Product design',
    role: 'Barbacreativa',
    period: 'Feb 2020 - Present',
  },
  {
    company: 'Senior Product design',
    role: 'Barbacreativa',
    period: 'Feb 2020 - Feb 2023',
  },
  {
    company: 'Product design',
    role: 'Colorkuy',
    period: 'Feb 2018 - Feb 2020',
  },
];

const Experience = () => {
  return (
    <section className="py-20">
      <h2 className="text-2xl font-bold mb-8">Working experience</h2>
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <div key={index} className="flex items-start">
            <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-4"></div>
            <div>
              <h3 className="font-semibold">{exp.company}</h3>
              <p className="text-gray-600">{exp.role}</p>
              <p className="text-sm text-gray-500">{exp.period}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;