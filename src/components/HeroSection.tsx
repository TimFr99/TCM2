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
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-75"
        style={{
          backgroundImage: `url(${SITE_DATA.hero.backgroundImageUrl})`,
          transform: `scale(${1 + scrollY * 0.0005}) translateY(${scrollY * 0.5}px)`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
      </div>

      <div className="relative h-full flex flex-col items-center justify-center z-10 px-4">
        <div className="animate-fade-in-up">
          <img
            src={SITE_DATA.hero.centerIconUrl}
            alt={SITE_DATA.bandName}
            className="w-64 md:w-80 lg:w-96 h-auto drop-shadow-[0_0_30px_rgba(168,85,247,0.6)] animate-glow"
          />
        </div>
        <p className="mt-8 text-xl md:text-2xl text-gray-200 font-light tracking-wider animate-fade-in-up animation-delay-300 drop-shadow-[0_0_10px_rgba(0,0,0,0.8)]">
          {SITE_DATA.hero.tagline}
        </p>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-gray-400 w-8 h-8" />
      </div>
    </section>
  );
};
