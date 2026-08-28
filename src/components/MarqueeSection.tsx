import React, { useEffect, useRef, useState } from 'react';
import { ROW_1_IMAGES, ROW_2_IMAGES } from '../data/marqueeImages';

export const MarqueeSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollOffset, setScrollOffset] = useState(0);

  // Tripled images for seamless scrolling
  const tripledRow1 = [...ROW_1_IMAGES, ...ROW_1_IMAGES, ...ROW_1_IMAGES];
  const tripledRow2 = [...ROW_2_IMAGES, ...ROW_2_IMAGES, ...ROW_2_IMAGES];

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionTop = window.scrollY + rect.top;
      const calculatedOffset = (window.scrollY - sectionTop + window.innerHeight) * 0.3;

      if (!ticking) {
        requestAnimationFrame(() => {
          setScrollOffset(calculatedOffset);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial calculation

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const row1Transform = `translateX(${scrollOffset - 200}px)`;
  const row2Transform = `translateX(${-(scrollOffset - 200)}px)`;

  return (
    <section
      ref={sectionRef}
      className="bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden w-full"
    >
      <div className="flex flex-col gap-3 w-full">
        {/* Row 1: Moves RIGHT on scroll */}
        <div className="w-full overflow-hidden">
          <div
            className="flex gap-3 w-max"
            style={{
              transform: row1Transform,
              willChange: 'transform'
            }}
          >
            {tripledRow1.map((src, index) => (
              <div
                key={`r1-${index}`}
                className="w-[420px] h-[270px] flex-shrink-0 rounded-2xl overflow-hidden bg-[#181818]"
              >
                <img
                  src={src}
                  alt={`Marquee preview ${index + 1}`}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Moves LEFT on scroll */}
        <div className="w-full overflow-hidden">
          <div
            className="flex gap-3 w-max"
            style={{
              transform: row2Transform,
              willChange: 'transform'
            }}
          >
            {tripledRow2.map((src, index) => (
              <div
                key={`r2-${index}`}
                className="w-[420px] h-[270px] flex-shrink-0 rounded-2xl overflow-hidden bg-[#181818]"
              >
                <img
                  src={src}
                  alt={`Marquee preview ${index + 12}`}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
