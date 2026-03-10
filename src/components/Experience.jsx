import React from 'react';
import { motion } from 'framer-motion';

const EXP_DATA = [
  {
    type: 'Education',
    title: 'Bachelor of Technology - Computer Science',
    organization: 'Lovely Professional University | Phagwara, Punjab',
    date: 'Aug 2023 - Present',
    description: 'Current CGPA: 7.12. Core coursework encompasses Data Structures, Algorithms, Operating Systems, and Object-Oriented Programming.',
  },
  {
    type: 'Training',
    title: 'Think Design Prototype - Summer Training',
    organization: 'Certificate Program',
    date: 'Jun 2025 - Jul 2025',
    description: 'Conceptualized and prototyped a user-focused mental-wellness application enhancing mindfulness. Executed continuous design refinements based on core UX methodologies using Figma and Canva.',
  },
  {
    type: 'Certifications',
    title: 'Multiple Advanced Certifications',
    organization: 'Infosys, Udemy, NPTEL',
    date: 'Apr 2025 - Aug 2025',
    description: 'Completed courses in Computational Theory (Infosys), ChatGPT-4 Prompt Engineering & Generative AI (Infosys/Udemy), and Cloud Computing (NPTEL).',
  },
  {
    type: 'Achievement',
    title: 'HackerRank & NPTEL Recognitions',
    organization: 'Programming Platforms',
    date: 'Feb 2025 - Apr 2025',
    description: 'Achieved Elite Grade in NPTEL Cloud Computing. Earned 3-star proficiency in C and 2-star proficiency in Python on HackerRank.',
  },
  {
    type: 'Education',
    title: 'Intermediate & Matriculation',
    organization: "M.R.D Inter College & Dr. M.L Das's Academy | Muzaffarpur, Bihar",
    date: 'Jun 2020 - Apr 2023',
    description: 'Completed Intermediate with 78% (2022-2023) and Matriculation with 65% (2020-2021).',
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-slate-50 dark:bg-dark-300 transition-colors duration-300 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">My <span className="text-primary-500">Journey</span></h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Timeline Line */}
          <div className="absolute left-[15px] md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-300 dark:bg-slate-700 transform md:-translate-x-1/2"></div>
          
          <div className="space-y-12">
            {EXP_DATA.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex items-center justify-between md:justify-normal w-full ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-[15px] md:left-1/2 w-4 h-4 rounded-full bg-primary-500 border-4 border-slate-50 dark:border-dark-300 transform -translate-x-1/2 md:-translate-x-1/2 z-10"></div>
                
                {/* Empty Space for alignment on Desktop */}
                <div className="hidden md:block md:w-[calc(50%-30px)]"></div>
                
                {/* Content Card */}
                <div className={`w-[calc(100%-40px)] md:w-[calc(50%-30px)] ml-auto md:ml-0 glass p-6 rounded-2xl ${
                  index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'
                }`}>
                  <div className="flex justify-between items-center mb-2 flex-wrap gap-2">
                    <span className="text-primary-500 text-sm font-bold uppercase tracking-wider">{item.type}</span>
                    <span className="text-slate-500 dark:text-slate-400 text-xs font-medium bg-slate-200 dark:bg-slate-800 px-2 py-1 rounded-md">{item.date}</span>
                  </div>
                  <h3 className="text-xl font-bold dark:text-white mb-1">{item.title}</h3>
                  <h4 className="text-slate-700 dark:text-slate-300 font-medium mb-3">{item.organization}</h4>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
