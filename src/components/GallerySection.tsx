import { useState, useEffect } from 'react';
import { SITE_DATA } from '../data/constants';

export const GallerySection = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getParallaxOffset = (index: number) => {
    return (scrollY - 2000) * (0.05 + index * 0.02);
  };

  return (
    <section id="galerie" className="py-24 px-6 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-20 text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 drop-shadow-[0_0_20px_rgba(168,85,247,0.5)]">
          Galerie
        </h2>

        <div className="relative min-h-[800px] md:min-h-[1000px]">
          <div
            className="absolute top-0 left-[5%] w-[45%] md:w-[40%] z-10 transition-transform duration-75"
            style={{ transform: `translateY(${getParallaxOffset(0)}px)` }}
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-purple-600/20 rounded-2xl blur-2xl group-hover:blur-3xl transition-all duration-500" />
              <img
                src={SITE_DATA.gallery[0]}
                alt="Gallery 1"
                className="relative w-full h-auto rounded-2xl shadow-2xl shadow-purple-900/50 object-cover"
              />
            </div>
          </div>

          <div
            className="absolute top-[100px] right-[5%] w-[50%] md:w-[45%] z-20 transition-transform duration-75"
            style={{ transform: `translateY(${getParallaxOffset(1)}px)` }}
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-blue-600/20 rounded-2xl blur-2xl group-hover:blur-3xl transition-all duration-500" />
              <img
                src={SITE_DATA.gallery[1]}
                alt="Gallery 2"
                className="relative w-full h-auto rounded-2xl shadow-2xl shadow-blue-900/50 object-cover"
              />
            </div>
          </div>

          <div
            className="absolute top-[300px] left-[15%] w-[40%] md:w-[35%] z-30 transition-transform duration-75"
            style={{ transform: `translateY(${getParallaxOffset(2)}px)` }}
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-green-600/20 rounded-2xl blur-2xl group-hover:blur-3xl transition-all duration-500" />
              <img
                src={SITE_DATA.gallery[2]}
                alt="Gallery 3"
                className="relative w-full h-auto rounded-2xl shadow-2xl shadow-green-900/50 object-cover"
              />
            </div>
          </div>

          <div
            className="absolute top-[450px] right-[10%] w-[45%] md:w-[40%] z-25 transition-transform duration-75"
            style={{ transform: `translateY(${getParallaxOffset(3)}px)` }}
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-purple-600/20 rounded-2xl blur-2xl group-hover:blur-3xl transition-all duration-500" />
              <img
                src={SITE_DATA.gallery[3]}
                alt="Gallery 4"
                className="relative w-full h-auto rounded-2xl shadow-2xl shadow-purple-900/50 object-cover"
              />
            </div>
          </div>

          <div
            className="absolute top-[650px] left-[10%] w-[50%] md:w-[45%] z-15 transition-transform duration-75"
            style={{ transform: `translateY(${getParallaxOffset(4)}px)` }}
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-blue-600/20 rounded-2xl blur-2xl group-hover:blur-3xl transition-all duration-500" />
              <img
                src={SITE_DATA.gallery[4]}
                alt="Gallery 5"
                className="relative w-full h-auto rounded-2xl shadow-2xl shadow-blue-900/50 object-cover"
              />
            </div>
          </div>

          <div
            className="absolute top-[800px] right-[5%] w-[45%] md:w-[40%] z-35 transition-transform duration-75"
            style={{ transform: `translateY(${getParallaxOffset(5)}px)` }}
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-green-600/20 rounded-2xl blur-2xl group-hover:blur-3xl transition-all duration-500" />
              <img
                src={SITE_DATA.gallery[5]}
                alt="Gallery 6"
                className="relative w-full h-auto rounded-2xl shadow-2xl shadow-green-900/50 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
