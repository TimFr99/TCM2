import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { SITE_DATA } from '../data/constants';

export const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <img
        src={SITE_DATA.hero.backgroundImageUrl}
        alt="Live Performance"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-75"
        style={{
          transform: `scale(${1 + scrollY * 0.0005}) translateY(${scrollY * 0.5}px)`,
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/20" />

      <div className="relative h-full flex flex-col items-center justify-center z-10 px-4">
        <div className="animate-fade-in-up">
          <img
            src={SITE_DATA.hero.centerIconUrl}
            alt={SITE_DATA.bandName}
            className="w-64 md:w-80 lg:w-96 h-auto drop-shadow-[0_0_50px_rgba(0,0,0,0.9)] animate-glow"
          />
        </div>
        <p className="mt-8 text-xl md:text-2xl text-white font-light tracking-wider animate-fade-in-up animation-delay-300 drop-shadow-[0_0_15px_rgba(0,0,0,1)] [text-shadow:_2px_2px_8px_rgb(0_0_0_/_80%)]">
          {SITE_DATA.hero.tagline}
        </p>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-white w-8 h-8 drop-shadow-lg" />
      </div>
    </section>
  );
};
