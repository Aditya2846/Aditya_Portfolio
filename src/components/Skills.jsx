import React from 'react';
import { motion } from 'framer-motion';

const SKILLS_DATA = [
  { category: 'Languages', items: ['Python', 'C/C++', 'Java', 'Data Structures', 'Algorithms'] },
  { category: 'Frameworks & Libraries', items: ['ReactJS', 'NodeJS', 'Express', 'HTML & CSS', 'Bootstrap', 'Tailwind CSS'] },
  { category: 'Tools & Platforms', items: ['MySQL', 'MongoDB', 'Git', 'GitHub', 'Figma', 'Postman'] },
  { category: 'CS Fundamentals & Soft Skills', items: ['Operating Systems', 'Computer Networks', 'OOP', 'Time Management', 'Leadership', 'Problem-Solving'] },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-slate-50 dark:bg-dark-300 transition-colors duration-300">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">My <span className="text-primary-500">Skills</span></h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto rounded-full"></div>
          <p className="mt-6 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
            Here are the technologies and tools I am proficient in. I'm always eager to learn more.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SKILLS_DATA.map((skillGroup, index) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass p-8 rounded-2xl hover:-translate-y-2 transition-transform duration-300"
            >
              <h3 className="text-xl font-bold mb-6 text-slate-800 dark:text-white border-b-2 border-primary-500/30 pb-2 inline-block">
                {skillGroup.category}
              </h3>
              <ul className="space-y-4">
                {skillGroup.items.map((skill, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary-500 flex-shrink-0"></span>
                    <span className="text-slate-700 dark:text-slate-300 font-medium">{skill}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
