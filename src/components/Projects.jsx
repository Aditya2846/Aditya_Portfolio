import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiVideo } from 'react-icons/fi';

const PROJECTS_DATA = [
  {
    title: 'Chatbot-Based Online Ticketing System',
    description: 'Developed a comprehensive digital ticket-generation and support-management platform with full CRUD capabilities. Integrated an AI-enabled virtual assistant to guide users and deliver automated responses, along with live status tracking and a priority-driven workflow.',
    image: 'https://images.unsplash.com/photo-1549692520-acc6669e2f0c?q=80&w=600&h=400&fit=crop',
    tags: ['ReactJS', 'NodeJS', 'Express', 'Tailwind CSS', 'MongoDB', 'JavaScript'],
    github: 'https://github.com/Aditya2846',
    demo: 'https://www.linkedin.com/feed/update/urn:li:activity:7407750385970499584/?originTrackingId=km2GtNeuQs%2Bbo52jcRHSlA%3D%3D',
    live: 'https://chatbot2-15kx.vercel.app/',
  },
  {
    title: 'Precision Pesticide Identification for Healthier Crops',
    description: 'Engineered an intelligent crop-diagnosis system capable of detecting plant diseases and recommending suitable pesticides using a trained machine-learning model. Features a responsive, farmer-friendly UI for image uploads and disease analytics.',
    image: 'https://images.unsplash.com/photo-1586771107445-d3ca888129ff?q=80&w=600&h=400&fit=crop',
    tags: ['Machine Learning', 'HTML & CSS', 'JavaScript', 'Tailwind CSS'],
    github: 'https://github.com/Aditya2846',
    demo: 'https://www.linkedin.com/posts/prajjwalrai4_agroshield-webdevelopment-cropprotection-ugcPost-7319782535163494400-krCC?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEbFQtQBU50Pwz7lWmnKNSbur8fQLgj4cG8',
  },
  {
    title: 'Food Delivery Platform',
    description: 'A responsive frontend interface for a food delivery platform. Features an intuitive design, clean layout, and modern UI components for browsing restaurants and managing orders focusing on an engaging user experience.',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=600&h=400&fit=crop',
    tags: ['ReactJS', 'Tailwind CSS', 'Vite', 'Frontend'],
    github: 'https://github.com/Aditya2846',
    live: 'https://indexhtml-lime.vercel.app/',
  },
  {
    title: 'MovieMate - Movie Discovery',
    description: 'A dynamic movie discovery web application that allows users to explore, search, and find details about their favorite movies. Includes authentication routes and a clean, responsive layout utilizing modern web technologies.',
    image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=600&h=400&fit=crop',
    tags: ['ReactJS', 'Tailwind CSS', 'API Integration', 'Authentication'],
    github: 'https://github.com/Aditya2846',
    live: 'https://adityamoviemate-taupe.vercel.app/login',
  },
  {
    title: 'Personal Portfolio Project',
    description: 'A dedicated personal project showcasing web development skills, responsive design principles, and modern frontend architecture. Features a clean interface and optimized performance for a seamless user experience.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=600&h=400&fit=crop',
    tags: ['ReactJS', 'Web Development', 'UI/UX Design'],
    github: 'https://github.com/Aditya2846',
    live: 'https://adityaproject.vercel.app/',
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-white dark:bg-dark-200 transition-colors duration-300">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Featured <span className="text-primary-500">Projects</span></h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS_DATA.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass rounded-2xl overflow-hidden group flex flex-col h-full"
            >
              <div className="relative overflow-hidden h-48 sm:h-64">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-primary-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noreferrer" title="Source Code" className="p-3 bg-white dark:bg-dark-100 rounded-full text-slate-800 dark:text-white hover:-translate-y-1 transition-transform shadow-lg">
                      <FiGithub size={20} />
                    </a>
                  )}
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noreferrer" title="Watch Demo Video" className="p-3 bg-white dark:bg-dark-100 rounded-full text-primary-500 hover:-translate-y-1 transition-transform shadow-lg">
                      <FiVideo size={20} />
                    </a>
                  )}
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noreferrer" title="Live Project" className="p-3 bg-primary-500 text-white rounded-full hover:-translate-y-1 transition-transform shadow-lg">
                      <FiExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold mb-3 dark:text-white group-hover:text-primary-500 transition-colors">{project.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-6 flex-grow">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 text-sm rounded-full font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
