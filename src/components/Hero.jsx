import React, { useCallback } from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';
import { FiGithub, FiLinkedin, FiMail, FiDownload } from 'react-icons/fi';
import { Link } from 'react-scroll';

const Hero = () => {
  const particlesInit = useCallback(async engine => {
    // Only load the required plugins
    await loadSlim(engine);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Particles */}
      <div className="absolute inset-0 z-0">
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={{
            background: {
              color: { value: "transparent" },
            },
            fpsLimit: 120,
            interactivity: {
              events: {
                onHover: { enable: true, mode: "repulse" },
                resize: true,
              },
              modes: {
                repulse: { distance: 100, duration: 0.4 },
              },
            },
            particles: {
              color: { value: "#22c55e" },
              links: {
                color: "#22c55e",
                distance: 150,
                enable: true,
                opacity: 0.2,
                width: 1,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: { default: "bounce" },
                random: false,
                speed: 1,
                straight: false,
              },
              number: {
                density: { enable: true, area: 800 },
                value: 40,
              },
              opacity: { value: 0.3 },
              shape: { type: "circle" },
              size: { value: { min: 1, max: 3 } },
            },
            detectRetina: true,
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-xl md:text-2xl text-primary-500 font-medium mb-4">Hello, World! I am</h2>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            Aditya Kumar
          </h1>
          <h3 className="text-2xl md:text-4xl font-semibold text-slate-600 dark:text-slate-300 mb-8 h-12">
            I'm a{' '}
            <span className="text-gradient">
              <Typewriter
                words={['Computer Science Student', 'Problem Solver', 'Web Developer', 'Tech Innovator']}
                loop={true}
                cursor
                cursorStyle='_'
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h3>

          <p className="max-w-2xl mx-auto text-slate-600 dark:text-slate-400 mb-10 leading-relaxed text-lg">
            I build exceptional and accessible digital experiences for the web.
            Passionate about transforming ideas into elegant, blazing-fast, and scalable applications.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 mb-12">
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="cursor-pointer px-8 py-3 rounded-full bg-primary-500 hover:bg-primary-600 text-white transition-colors font-medium text-lg w-full sm:w-auto text-center"
            >
              View My Work
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="cursor-pointer px-8 py-3 rounded-full border-2 border-primary-500 text-primary-500 hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors font-medium text-lg w-full sm:w-auto text-center"
            >
              Contact Me
            </Link>
            <a
              href="/Aditya_Kumar_CV_1.jpg"
              target="_blank"
              rel="noreferrer"
              download="Aditya_Kumar_CV_1.jpg"
              className="cursor-pointer px-8 py-3 rounded-full border-2 border-primary-500 text-primary-500 hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors font-medium text-lg w-full sm:w-auto text-center inline-flex items-center justify-center gap-2"
            >
              <FiDownload size={18} /> CV (Version 1)
            </a>
            <a
              href="/Aditya_Kumar_CV_2.jpg"
              target="_blank"
              rel="noreferrer"
              download="Aditya_Kumar_CV_2.jpg"
              className="cursor-pointer px-8 py-3 rounded-full border-2 border-primary-500 text-primary-500 hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors font-medium text-lg w-full sm:w-auto text-center inline-flex items-center justify-center gap-2"
            >
              <FiDownload size={18} /> CV (Version 2)
            </a>
          </div>

          <div className="flex items-center justify-center gap-6">
            <SocialIcon href="https://github.com/Aditya2846" icon={<FiGithub />} />
            <SocialIcon href="https://www.linkedin.com/in/aditya-kumar-ak7671/" icon={<FiLinkedin />} />
            <SocialIcon href="mailto:kumaraaditya6318@gmail.com" icon={<FiMail />} />
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <Link to="about" smooth={true} duration={500}>
          <span className="text-sm font-medium text-slate-400 mb-2 block">Scroll Down</span>
          <div className="w-[30px] h-[50px] border-2 border-slate-400 rounded-full flex justify-center p-1">
            <div className="w-1.5 h-3 bg-slate-400 rounded-full"></div>
          </div>
        </Link>
      </motion.div>
    </section>
  );
};

const SocialIcon = ({ href, icon }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-2xl text-slate-500 hover:text-primary-500 hover:-translate-y-1 transition-all duration-300"
  >
    {icon}
  </a>
);

export default Hero;
