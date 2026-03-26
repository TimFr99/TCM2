import { useState, useEffect } from 'react';
import { Download, Instagram } from 'lucide-react';
import { SITE_DATA } from '../data/constants';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-lg shadow-lg shadow-gray-200/50'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8 flex-1 justify-end">
            <button
              onClick={() => scrollToSection('live-teaser')}
              className="text-gray-700 hover:text-purple-600 transition-colors duration-300 text-sm tracking-wide font-light hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]"
            >
              Live-Teaser
            </button>
            <button
              onClick={() => scrollToSection('releases')}
              className="text-gray-700 hover:text-purple-600 transition-colors duration-300 text-sm tracking-wide font-light hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]"
            >
              Releases
            </button>
            <button
              onClick={() => scrollToSection('galerie')}
              className="text-gray-700 hover:text-purple-600 transition-colors duration-300 text-sm tracking-wide font-light hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]"
            >
              Galerie
            </button>
          </div>

          <div className="flex items-center justify-center px-8">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="transition-transform duration-300 hover:scale-110"
            >
              <img
                src={SITE_DATA.navbar.logoUrl}
                alt={SITE_DATA.bandName}
                className="h-12 w-auto drop-shadow-[0_0_12px_rgba(168,85,247,0.4)]"
              />
            </button>
          </div>

          <div className="flex items-center gap-8 flex-1">
            <a
              href={SITE_DATA.navbar.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-purple-600 transition-colors duration-300 text-sm tracking-wide font-light flex items-center gap-2 hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]"
            >
              <Instagram size={16} />
              Instagram
            </a>
            <a
              href={SITE_DATA.navbar.downloadPdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-purple-600 transition-colors duration-300 text-sm tracking-wide font-light flex items-center gap-2 hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]"
            >
              <Download size={16} />
              Downloads
            </a>
            <a
              href={`mailto:${SITE_DATA.navbar.contactEmail}`}
              className="text-gray-700 hover:text-purple-600 transition-colors duration-300 text-sm tracking-wide font-light hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]"
            >
              Kontakt
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
