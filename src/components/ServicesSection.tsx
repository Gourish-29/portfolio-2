import React from 'react';
import { SERVICES_DATA } from '../data/servicesData';
import { FadeIn } from './FadeIn';

export const ServicesSection: React.FC = () => {
  return (
    <section
      id="services"
      className="w-full bg-[#FFFFFF] text-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 relative z-0"
    >
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        {/* Heading */}
        <FadeIn delay={0} y={40}>
          <h2
            className="text-[#0C0C0C] font-black uppercase text-center leading-none tracking-tight mb-16 sm:mb-20 md:mb-28"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            Services
          </h2>
        </FadeIn>

        {/* Vertical List of 5 Service Items */}
        <div className="w-full flex flex-col">
          {SERVICES_DATA.map((service, index) => (
            <FadeIn key={service.id} delay={index * 0.1} y={30}>
              <div
                className={`w-full flex flex-col sm:flex-row items-start sm:items-center justify-between py-8 sm:py-10 md:py-12 ${
                  index !== SERVICES_DATA.length - 1
                    ? 'border-b border-[rgba(12,12,12,0.15)]'
                    : ''
                }`}
              >
                {/* Number on the Left */}
                <div
                  className="font-black text-[#0C0C0C] leading-none mb-4 sm:mb-0"
                  style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
                >
                  {service.id}
                </div>

                {/* Name + Description Stacked on the Right */}
                <div className="flex flex-col gap-2 sm:gap-3 sm:w-[65%] md:w-[70%]">
                  <h3
                    className="font-medium uppercase text-[#0C0C0C] tracking-wide"
                    style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
                  >
                    {service.name}
                  </h3>
                  <p
                    className="font-light text-[#0C0C0C] leading-relaxed max-w-2xl opacity-60"
                    style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)' }}
                  >
                    {service.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
