import React from 'react';

const services = [
  {
    title: 'Full pages Website design',
    description: 'Crafting immersive and engaging full-page website designs that captivate audiences and deliver a seamless user experience',
  },
  {
    title: 'Company website design',
    description: 'Transform your online presence with our sleek and modern company website designs',
  },
  {
    title: 'Landing page design',
    description: 'Crafting compelling first impressions with our conversion-focused landing page designs',
  },
  {
    title: 'Framer development',
    description: 'Transforming designs into interactive digital realities with precision and innovation using Framer tools',
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20">
      <h2 className="text-2xl font-bold mb-8">What I do</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <div key={index} className="border-t pt-4">
            <h3 className="font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;