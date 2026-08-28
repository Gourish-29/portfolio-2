import React from 'react';
import { motion } from 'framer-motion';
import { FadeIn } from './FadeIn';
import { Magnet } from './Magnet';
import { ContactButton } from './ContactButton';

export const HeroSection: React.FC = () => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen w-full flex flex-col justify-between overflow-x-clip bg-[#0C0C0C]">
      {/* 1. Navbar */}
      <FadeIn delay={0} y={-20} className="w-full z-40">
        <nav className="w-full flex justify-between items-center px-6 md:px-10 pt-6 md:pt-8 text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem]">
          <a
            href="#about"
            onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}
            className="transition-opacity duration-200 hover:opacity-70"
          >
            About
          </a>
          <a
            href="#services"
            onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}
            className="transition-opacity duration-200 hover:opacity-70"
          >
            Services
          </a>
          <a
            href="#projects"
            onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}
            className="transition-opacity duration-200 hover:opacity-70"
          >
            Projects
          </a>
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}
            className="transition-opacity duration-200 hover:opacity-70"
          >
            Contact
          </a>
        </nav>
      </FadeIn>

      {/* Ultra-Smooth Animated Wave Line (Edge-to-Edge behind character z-[1]) */}
      <div className="absolute inset-0 pointer-events-none z-[1] flex items-center justify-center overflow-hidden w-full h-full">
        <svg
          viewBox="0 0 1600 350"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full opacity-90 filter drop-shadow-[0_0_12px_rgba(56,189,248,0.5)]"
        >
          <motion.path
            d="M -100 180 C 250 40, 500 320, 800 180 C 1100 40, 1350 320, 1700 180"
            stroke="url(#heroWaveGradient)"
            strokeWidth="5"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: [0, 0.9, 1, 0.85] }}
            transition={{ duration: 2.4, ease: "easeInOut", delay: 0.3 }}
          />
          <defs>
            <linearGradient id="heroWaveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#B600A8" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#38BDF8" stopOpacity="1" />
              <stop offset="100%" stopColor="#6366F1" stopOpacity="0.8" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* 2. Hero Heading (Z-[2] behind 3D character z-[10] for 3D depth effect) */}
      <div className="w-full overflow-hidden flex justify-center z-[2] relative px-4 pointer-events-none my-auto">
        <FadeIn delay={0.15} y={40} className="w-full text-center flex justify-center">
          <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap text-[8.5vw] sm:text-[9.5vw] md:text-[10.5vw] lg:text-[11.5vw] pointer-events-auto select-none">
            Hi, i&apos;m gourish
          </h1>
        </FadeIn>
      </div>

      {/* 3. Hero Portrait (Absolute Center Z-[10] in front of text for 3D depth effect) */}
      <div className="absolute left-1/2 -translate-x-1/2 z-[10] w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px] top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0 pointer-events-none">
        <FadeIn delay={0.6} y={30} className="w-full flex justify-center">
          <Magnet
            padding={150}
            strength={3}
            activeTransition="transform 0.3s ease-out"
            inactiveTransition="transform 0.6s ease-in-out"
            className="pointer-events-auto"
          >
            <img
              src="/hero-character.png"
              alt="Gourish Portrait"
              className="w-full h-auto object-contain drop-shadow-2xl select-none"
              draggable={false}
            />
          </Magnet>
        </FadeIn>
      </div>

      {/* 4. Bottom Bar */}
      <div className="w-full px-6 md:px-10 pb-7 sm:pb-8 md:pb-10 flex justify-between items-end z-20">
        {/* Left Tagline */}
        <FadeIn delay={0.35} y={20}>
          <p
            className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[160px] sm:max-w-[220px] md:max-w-[260px]"
            style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}
          >
            a data analyst & ai engineer driven by data-driven decision making
          </p>
        </FadeIn>

        {/* Right Contact Button */}
        <FadeIn delay={0.5} y={20}>
          <ContactButton onClick={() => scrollToSection('contact')} />
        </FadeIn>
      </div>
    </section>
  );
};
