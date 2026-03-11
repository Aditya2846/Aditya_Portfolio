import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiExternalLink, FiX, FiAward, FiCalendar, FiStar } from 'react-icons/fi';

const CERTIFICATES_DATA = [
  {
    id: 1,
    title: 'Design Thinking & Figma',
    fullTitle: 'Summer Training on Design Thinking & Figma',
    issuer: 'Lovely Professional University',
    issuerShort: 'LPU',
    description:
      "Completed an intensive summer training program on Design Thinking methodologies and Figma prototyping, earning a Certificate of Merit with Grade A from LPU's Centre for Professional Enhancement.",
    date: 'June – July 2025',
    badge: 'Certificate of Merit · Grade A',
    color: 'from-violet-500 to-purple-600',
    lightColor: 'bg-violet-50 dark:bg-violet-900/20',
    textColor: 'text-violet-600 dark:text-violet-400',
    borderColor: 'border-violet-200 dark:border-violet-800',
    icon: '🎨',
    driveLink: 'https://drive.google.com/file/d/16Ft7MfUNFhvmJ5q_KvW8mDGJ13LnMiLt/view?usp=drive_link',
    previewUrl: 'https://drive.google.com/thumbnail?id=16Ft7MfUNFhvmJ5q_KvW8mDGJ13LnMiLt&sz=w800',
  },
  {
    id: 2,
    title: 'Cloud Computing',
    fullTitle: 'Cloud Computing (12-Week Course)',
    issuer: 'NPTEL – IIT Kharagpur',
    issuerShort: 'NPTEL',
    description:
      'Successfully completed the NPTEL 12-week Cloud Computing certification by IIT Kharagpur, covering core cloud concepts, architectures, and deployment models with a final score of 58%.',
    date: 'Jan – Apr 2025',
    badge: 'NPTEL Online Certification',
    color: 'from-blue-500 to-cyan-500',
    lightColor: 'bg-blue-50 dark:bg-blue-900/20',
    textColor: 'text-blue-600 dark:text-blue-400',
    borderColor: 'border-blue-200 dark:border-blue-800',
    icon: '☁️',
    driveLink: 'https://drive.google.com/file/d/1lVSS6VnpJV2CsPgOUkmDeQdbOWUdosh_/view?usp=drive_link',
    previewUrl: 'https://drive.google.com/thumbnail?id=1lVSS6VnpJV2CsPgOUkmDeQdbOWUdosh_&sz=w800',
  },
  {
    id: 3,
    title: 'ChatGPT-4 Prompt Engineering',
    fullTitle: 'ChatGPT-4 Prompt Engineering: ChatGPT, Generative AI & LLM',
    issuer: 'Infosys Springboard',
    issuerShort: 'Infosys',
    description:
      'Earned a certification from Infosys Springboard for mastering ChatGPT-4 prompt engineering techniques, covering Generative AI fundamentals, large language models (LLMs), and practical AI application strategies.',
    date: 'August 2025',
    badge: 'Infosys Springboard Certified',
    color: 'from-emerald-500 to-teal-500',
    lightColor: 'bg-emerald-50 dark:bg-emerald-900/20',
    textColor: 'text-emerald-600 dark:text-emerald-400',
    borderColor: 'border-emerald-200 dark:border-emerald-800',
    icon: '🤖',
    driveLink: 'https://drive.google.com/file/d/1p5CZ9vWIFtOUC4EBTfYHYHz-YpgeUTyf/view?usp=drive_link',
    previewUrl: 'https://drive.google.com/thumbnail?id=1p5CZ9vWIFtOUC4EBTfYHYHz-YpgeUTyf&sz=w800',
  },
  {
    id: 4,
    title: 'Computational Theory',
    fullTitle: 'Computational Theory: Language Principle & Finite Automata Theory',
    issuer: 'Infosys Springboard',
    issuerShort: 'Infosys',
    description:
      'Certified by Infosys Springboard in Computational Theory, including formal language principles and finite automata theory — key foundations of computer science and algorithm design.',
    date: 'July 2025',
    badge: 'Infosys Springboard Certified',
    color: 'from-orange-500 to-amber-500',
    lightColor: 'bg-orange-50 dark:bg-orange-900/20',
    textColor: 'text-orange-600 dark:text-orange-400',
    borderColor: 'border-orange-200 dark:border-orange-800',
    icon: '⚙️',
    driveLink: 'https://drive.google.com/file/d/1DBOLMpH5MLhAZgx3_hvVaofUEEgfj58Z/view?usp=drive_link',
    previewUrl: 'https://drive.google.com/thumbnail?id=1DBOLMpH5MLhAZgx3_hvVaofUEEgfj58Z&sz=w800',
  },
  {
    id: 5,
    title: 'Responsive Web Design',
    fullTitle: 'Responsive Web Design Certification',
    issuer: 'freeCodeCamp',
    issuerShort: 'freeCodeCamp',
    description:
      'Completed freeCodeCamp\'s Responsive Web Design certification (~300 hours of coursework), covering HTML, CSS, Flexbox, Grid, and accessibility best practices for building fully responsive web layouts.',
    date: 'September 2023',
    badge: 'freeCodeCamp Certified · ~300 hrs',
    color: 'from-green-500 to-lime-500',
    lightColor: 'bg-green-50 dark:bg-green-900/20',
    textColor: 'text-green-600 dark:text-green-400',
    borderColor: 'border-green-200 dark:border-green-800',
    icon: '🌐',
    driveLink: 'https://drive.google.com/file/d/1KlfTafE5kEk1054JbFIng53H3WV19bmc/view?usp=drive_link',
    previewUrl: 'https://drive.google.com/thumbnail?id=1KlfTafE5kEk1054JbFIng53H3WV19bmc&sz=w800',
  },
  {
    id: 6,
    title: 'Master Generative AI',
    fullTitle: 'Master Generative AI & Generative AI Tools (ChatGPT & More)',
    issuer: 'Udemy',
    issuerShort: 'Udemy',
    description:
      'Completed an in-depth 14-hour Udemy course on Generative AI, exploring ChatGPT and other modern AI tools, prompt engineering, and practical use cases for AI-powered content generation.',
    date: 'August 2025',
    badge: 'Udemy Certificate · 14 hrs',
    color: 'from-pink-500 to-rose-500',
    lightColor: 'bg-pink-50 dark:bg-pink-900/20',
    textColor: 'text-pink-600 dark:text-pink-400',
    borderColor: 'border-pink-200 dark:border-pink-800',
    icon: '✨',
    driveLink: 'https://drive.google.com/file/d/1cT5QgSh4gnTbwl4VWdxNZUr9gPupa7_B/view?usp=drive_link',
    previewUrl: 'https://drive.google.com/thumbnail?id=1cT5QgSh4gnTbwl4VWdxNZUr9gPupa7_B&sz=w800',
  },
];

const CertificateModal = ({ cert, onClose }) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.85, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.85, opacity: 0, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-3xl bg-white dark:bg-dark-200 rounded-3xl overflow-hidden shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header gradient bar */}
          <div className={`h-1.5 w-full bg-gradient-to-r ${cert.color}`} />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 dark:bg-dark-100 hover:bg-slate-200 dark:hover:bg-dark-300 transition-colors z-10"
          >
            <FiX size={20} />
          </button>

          <div className="p-6 md:p-8">
            {/* Title row */}
            <div className="flex items-start gap-4 mb-6">
              <div className={`text-4xl p-3 rounded-2xl ${cert.lightColor} flex-shrink-0`}>
                {cert.icon}
              </div>
              <div>
                <h3 className="text-2xl font-bold dark:text-white mb-1">{cert.fullTitle}</h3>
                <p className={`font-semibold ${cert.textColor}`}>{cert.issuer}</p>
              </div>
            </div>

            {/* Certificate preview */}
            <div className={`rounded-2xl overflow-hidden border-2 ${cert.borderColor} mb-6 bg-slate-50 dark:bg-dark-300`}>
              <img
                src={cert.previewUrl}
                alt={`${cert.title} certificate`}
                className="w-full object-contain max-h-80"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div
                className="hidden items-center justify-center h-48 flex-col gap-3"
              >
                <span className="text-5xl">{cert.icon}</span>
                <p className="text-slate-500 dark:text-slate-400 text-sm">
                  Preview not available – click "View Certificate" below
                </p>
              </div>
            </div>

            {/* Info grid */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className={`p-4 rounded-xl ${cert.lightColor}`}>
                <div className="flex items-center gap-2 mb-1">
                  <FiCalendar className={cert.textColor} size={14} />
                  <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide">Date</span>
                </div>
                <p className="font-semibold dark:text-white text-sm">{cert.date}</p>
              </div>
              <div className={`p-4 rounded-xl ${cert.lightColor}`}>
                <div className="flex items-center gap-2 mb-1">
                  <FiStar className={cert.textColor} size={14} />
                  <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide">Credential</span>
                </div>
                <p className="font-semibold dark:text-white text-sm">{cert.badge}</p>
              </div>
            </div>

            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">{cert.description}</p>

            <a
              href={cert.driveLink}
              target="_blank"
              rel="noreferrer"
              className={`inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r ${cert.color} text-white font-semibold hover:opacity-90 transition-opacity shadow-lg`}
            >
              <FiExternalLink size={18} />
              View Certificate
            </a>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

const Certificates = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="certificates" className="py-20 bg-slate-50 dark:bg-dark-300 transition-colors duration-300">
      <div className="container mx-auto px-6 md:px-12">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 font-medium text-sm mb-4">
            <FiAward size={16} />
            Verified Credentials
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            My <span className="text-primary-500">Certificates</span>
          </h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto rounded-full mb-4" />
          <p className="text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
            A collection of certifications I've earned across cloud, AI, web design, and computer science.
          </p>
        </motion.div>

        {/* Cards grid */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.15
              }
            }
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {CERTIFICATES_DATA.map((cert, index) => (
            <motion.div
              key={cert.id}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="group glass-card rounded-2xl overflow-hidden cursor-pointer flex flex-col border-b-2 border-transparent hover:border-primary-500 transition-all duration-500 shadow-sm hover:shadow-xl hover:shadow-primary-500/5"
              onClick={() => setSelectedCert(cert)}
            >
              {/* Top gradient bar */}
              <div className={`h-1 w-full bg-gradient-to-r ${cert.color}`} />

              {/* Card body */}
              <div className="p-6 flex flex-col flex-grow">
                {/* Icon + issuer */}
                <div className="flex items-center gap-3 mb-4">
                  <motion.div 
                    whileHover={{ rotate: 15 }}
                    className={`text-3xl w-14 h-14 flex items-center justify-center rounded-2xl ${cert.lightColor} flex-shrink-0`}
                  >
                    {cert.icon}
                  </motion.div>
                  <div>
                    <span className={`text-xs font-bold uppercase tracking-widest ${cert.textColor}`}>
                      {cert.issuerShort}
                    </span>
                    <p className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1 mt-0.5">
                      <FiCalendar size={11} />
                      {cert.date}
                    </p>
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-bold text-lg dark:text-white mb-2 group-hover:text-primary-500 transition-colors leading-snug">
                  {cert.title}
                </h3>

                {/* Description */}
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed flex-grow line-clamp-3">
                  {cert.description}
                </p>

                {/* Badge footer */}
                <div className={`mt-4 pt-4 border-t ${cert.borderColor} flex items-center justify-between`}>
                  <span className={`text-xs font-semibold ${cert.textColor} ${cert.lightColor} px-3 py-1 rounded-full`}>
                    {cert.badge}
                  </span>
                  <motion.span 
                    whileHover={{ x: 3 }}
                    className="text-xs text-slate-400 dark:text-slate-500 flex items-center gap-1 group-hover:text-primary-500 transition-colors"
                  >
                    View <FiExternalLink size={12} />
                  </motion.span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Modal */}
      {selectedCert && (
        <CertificateModal cert={selectedCert} onClose={() => setSelectedCert(null)} />
      )}
    </section>
  );
};

export default Certificates;
