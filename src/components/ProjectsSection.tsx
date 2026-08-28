import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { PROJECTS_DATA, ProjectItem } from '../data/projectsData';
import { LiveProjectButton } from './LiveProjectButton';
import { FadeIn } from './FadeIn';

interface CardProps {
  project: ProjectItem;
  index: number;
  totalCards: number;
  progress: MotionValue<number>;
}

const ProjectCard: React.FC<CardProps> = ({ project, index, totalCards, progress }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Calculate target scale when scrolling past
  const targetScale = 1 - (totalCards - 1 - index) * 0.03;
  
  // Map scroll progress to scale transform for card stacking
  const rangeStart = index * (1 / totalCards);
  const rangeEnd = 1;
  const scale = useTransform(progress, [rangeStart, rangeEnd], [1, targetScale]);

  return (
    <div
      ref={containerRef}
      className="sticky h-[85vh] flex items-center justify-center top-20 sm:top-24 md:top-28 w-full"
      style={{
        top: `calc(5rem + ${index * 24}px)`
      }}
    >
      <motion.div
        style={{
          scale,
          transformOrigin: 'top center'
        }}
        className="w-full h-full bg-[#0C0C0C] border-2 border-[#D7E2EA] rounded-[40px] sm:rounded-[50px] md:rounded-[60px] p-4 sm:p-6 md:p-8 flex flex-col justify-between shadow-2xl overflow-hidden"
      >
        {/* Top Row Header */}
        <div className="w-full flex flex-wrap items-center justify-between gap-4 border-b border-[#D7E2EA]/20 pb-4 md:pb-6">
          <div className="flex items-center gap-4 sm:gap-6 md:gap-8">
            {/* Number */}
            <span
              className="font-black text-[#D7E2EA] leading-none"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
            >
              {project.number}
            </span>

            {/* Project Name & Category Stacked */}
            <div className="flex flex-col">
              <span className="font-light text-xs sm:text-sm uppercase tracking-widest text-[#D7E2EA]/60">
                {project.category}
              </span>
              <h3
                className="font-medium uppercase text-[#D7E2EA] tracking-wide"
                style={{ fontSize: 'clamp(1.2rem, 3vw, 2.5rem)' }}
              >
                {project.name}
              </h3>
            </div>
          </div>

          {/* Live Project Ghost Button */}
          <LiveProjectButton onClick={() => window.open('https://github.com/Gourish-29', '_blank')} />
        </div>

        {/* Content Body: Overview, Tech Stack & Key Highlights */}
        <div className="w-full flex-1 mt-4 sm:mt-6 grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 overflow-y-auto">
          {/* Left Side: Overview & Tech Stack (lg:col-span-5) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-4 sm:gap-6 bg-[#141414] border border-[#D7E2EA]/10 p-5 sm:p-7 rounded-[26px] sm:rounded-[32px]">
            <div>
              <h4 className="text-xs uppercase tracking-widest text-[#D7E2EA]/50 font-medium mb-2.5">
                Project Overview
              </h4>
              <p className="text-xs sm:text-sm md:text-base text-[#D7E2EA]/90 leading-relaxed font-light">
                {project.description}
              </p>
            </div>

            {/* Tech Stack Pills */}
            <div>
              <h4 className="text-xs uppercase tracking-widest text-[#D7E2EA]/50 font-medium mb-3">
                Tech Stack & Frameworks
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-3 py-1 rounded-full text-xs font-mono tracking-wider bg-[#1E1E1E] text-[#38BDF8] border border-[#38BDF8]/30 transition-colors hover:border-[#38BDF8]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side: Key Highlighted Points (lg:col-span-7) */}
          <div className="lg:col-span-7 flex flex-col justify-between bg-[#141414] border border-[#D7E2EA]/10 p-5 sm:p-7 rounded-[26px] sm:rounded-[32px]">
            <div>
              <h4 className="text-xs uppercase tracking-widest text-[#D7E2EA]/50 font-medium mb-4">
                Key Highlights & Capabilities
              </h4>
              <ul className="flex flex-col gap-3 sm:gap-4">
                {project.highlights.map((point, pIdx) => (
                  <li key={pIdx} className="flex items-start gap-3 text-xs sm:text-sm md:text-base text-[#D7E2EA]/90 leading-relaxed">
                    <span className="inline-flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#B600A8]/20 text-[#B600A8] font-bold text-xs shrink-0 mt-0.5 border border-[#B600A8]/40">
                      ✓
                    </span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export const ProjectsSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end']
  });

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative w-full bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-10 px-5 sm:px-8 md:px-10 pt-20 pb-32"
    >
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        {/* Singular "Project" Heading */}
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase text-center leading-none tracking-tight mb-16 sm:mb-20 md:mb-24"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            Project
          </h2>
        </FadeIn>

        {/* 3 Sticky Stacking Project Cards */}
        <div className="w-full flex flex-col gap-16 md:gap-24 relative">
          {PROJECTS_DATA.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              totalCards={PROJECTS_DATA.length}
              progress={scrollYProgress}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
