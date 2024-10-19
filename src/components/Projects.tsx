import React from 'react';

const projects = [
  {
    title: 'Alumana',
    description: 'This exploration showcases the homepage of the website, featuring sections designed to provide users with a clear and...',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
  },
  {
    title: 'Fiscatory',
    description: 'This exploration showcases the homepage of the website, featuring sections designed to provide users with a clear and...',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
  },
  {
    title: 'Wancana',
    description: 'This exploration showcases the homepage of the website, featuring sections designed to provide users with a clear and...',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <h2 className="text-2xl font-bold mb-8">Selected works</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="border rounded-lg overflow-hidden">
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="font-semibold mb-2">{project.title}</h3>
              <p className="text-sm text-gray-600">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;