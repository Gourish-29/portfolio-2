import React from 'react';
import { FadeIn } from './FadeIn';

export const ContactSection: React.FC = () => {
  return (
    <section
      id="contact"
      className="relative w-full bg-[#0C0C0C] text-[#D7E2EA] px-5 sm:px-8 md:px-10 py-20 sm:py-28 md:py-32 overflow-hidden border-t border-[#D7E2EA]/10 z-20"
    >
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        {/* Section Heading */}
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase text-center leading-none tracking-tight mb-16 sm:mb-20 md:mb-24"
            style={{ fontSize: 'clamp(3rem, 12vw, 150px)' }}
          >
            Get In Touch
          </h2>
        </FadeIn>

        {/* Contact Info & Details Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-16 sm:mb-20">
          {/* Left Column: Direct Contact & Socials */}
          <FadeIn delay={0.1} y={30} className="w-full">
            <div className="bg-[#141414] border border-[#D7E2EA]/15 rounded-[30px] sm:rounded-[40px] p-6 sm:p-8 md:p-10 flex flex-col justify-between h-full">
              <div>
                <span className="font-light text-xs sm:text-sm uppercase tracking-widest text-[#D7E2EA]/60 block mb-2">
                  Contact Information
                </span>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase mb-6 text-[#D7E2EA]">
                  Gourish
                </h3>
                <p className="font-light text-sm sm:text-base md:text-lg text-[#D7E2EA]/80 mb-8 leading-relaxed">
                  Data Analyst & AI Engineer passionate about data cleaning, interactive visualizations, machine learning, and building automated business intelligence platforms.
                </p>
              </div>

              <div className="flex flex-col gap-4 font-medium text-sm sm:text-base md:text-lg">
                <a
                  href="mailto:gourishanagire@gmail.com"
                  className="flex items-center gap-3 text-[#D7E2EA] hover:text-[#B600A8] transition-colors duration-200"
                >
                  <span className="opacity-60 text-xs sm:text-sm font-light uppercase tracking-wider">Email:</span>
                  <span className="underline underline-offset-4">gourishanagire@gmail.com</span>
                </a>

                <a
                  href="tel:+916360863377"
                  className="flex items-center gap-3 text-[#D7E2EA] hover:text-[#B600A8] transition-colors duration-200"
                >
                  <span className="opacity-60 text-xs sm:text-sm font-light uppercase tracking-wider">Phone:</span>
                  <span>+91 6360863377</span>
                </a>

                <div className="flex gap-4 pt-4 border-t border-[#D7E2EA]/10">
                  <a
                    href="https://linkedin.com/in/gourish-74791b2a1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-full border border-[#D7E2EA]/40 px-5 py-2 text-xs sm:text-sm uppercase tracking-widest text-[#D7E2EA] hover:bg-[#D7E2EA] hover:text-[#0C0C0C] transition-all duration-300"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="https://github.com/Gourish-29"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-full border border-[#D7E2EA]/40 px-5 py-2 text-xs sm:text-sm uppercase tracking-widest text-[#D7E2EA] hover:bg-[#D7E2EA] hover:text-[#0C0C0C] transition-all duration-300"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Right Column: Certifications & Achievements */}
          <FadeIn delay={0.2} y={30} className="w-full">
            <div className="bg-[#141414] border border-[#D7E2EA]/15 rounded-[30px] sm:rounded-[40px] p-6 sm:p-8 md:p-10 flex flex-col gap-8 h-full justify-between">
              {/* Certifications */}
              <div>
                <span className="font-light text-xs sm:text-sm uppercase tracking-widest text-[#D7E2EA]/60 block mb-4">
                  Certifications
                </span>
                <ul className="flex flex-col gap-3 font-light text-sm sm:text-base text-[#D7E2EA]/90">
                  <li className="flex justify-between items-baseline border-b border-[#D7E2EA]/10 pb-2">
                    <span className="font-medium text-[#D7E2EA]">Google AI Professional Certificate</span>
                    <span className="text-xs opacity-60">Google / Coursera</span>
                  </li>
                  <li className="flex justify-between items-baseline border-b border-[#D7E2EA]/10 pb-2">
                    <span className="font-medium text-[#D7E2EA]">Meta Data Analyst Certificate</span>
                    <span className="text-xs opacity-60">Meta / Coursera</span>
                  </li>
                  <li className="flex justify-between items-baseline pb-2">
                    <span className="font-medium text-[#D7E2EA]">GenAI Powered Data Analytics</span>
                    <span className="text-xs opacity-60">Tata Group (Forage)</span>
                  </li>
                </ul>
              </div>

              {/* Key Achievements */}
              <div>
                <span className="font-light text-xs sm:text-sm uppercase tracking-widest text-[#D7E2EA]/60 block mb-4">
                  Key Achievements
                </span>
                <ul className="flex flex-col gap-3 font-light text-xs sm:text-sm text-[#D7E2EA]/80">
                  <li className="border-b border-[#D7E2EA]/10 pb-2">
                    🏆 <strong className="text-[#D7E2EA]">Salesforce Champion Program 2026:</strong> 45 Trailhead badges & 15,000+ points.
                  </li>
                  <li className="border-b border-[#D7E2EA]/10 pb-2">
                    🌟 <strong className="text-[#D7E2EA]">Team Lead @ DAE Plasma Exhibition:</strong> Led scientific outreach for IPR.
                  </li>
                  <li className="pb-2">
                    🚀 <strong className="text-[#D7E2EA]">National Hackathon Participant:</strong> Cepheus 2.0 GDG On Campus 24h Hackathon.
                  </li>
                </ul>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Footer Copyright Notice */}
        <div className="w-full pt-8 border-t border-[#D7E2EA]/10 flex flex-col sm:flex-row justify-between items-center text-xs sm:text-sm uppercase tracking-wider text-[#D7E2EA]/40 gap-4">
          <p>© {new Date().getFullYear()} Gourish. All rights reserved.</p>
          <p>Computer Science & Data Engineering</p>
        </div>
      </div>
    </section>
  );
};
