import { Link } from 'react-router-dom';
import { SITE_DATA } from '../data/constants';

export const Footer = () => {
  return (
    <footer className="bg-white/40 backdrop-blur-sm border-t border-white/30 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
              {SITE_DATA.bandName}
            </p>
            <p className="text-sm text-white/80 mt-2 drop-shadow-lg">
              © {new Date().getFullYear()} {SITE_DATA.bandName}. Alle Rechte vorbehalten.
            </p>
          </div>

          <div className="flex gap-8">
            <Link
              to="/impressum"
              className="text-white/80 hover:text-purple-300 transition-colors duration-300 text-sm drop-shadow-lg"
            >
              Impressum
            </Link>
            <Link
              to="/datenschutz"
              className="text-white/80 hover:text-purple-300 transition-colors duration-300 text-sm drop-shadow-lg"
            >
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
