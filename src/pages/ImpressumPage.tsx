import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

export const ImpressumPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-gray-100 to-gray-50">
      <Navbar />

      <div className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 transition-colors mb-8"
          >
            <ArrowLeft size={20} />
            Zurück zur Startseite
          </Link>

          <h1 className="text-4xl md:text-5xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
            Impressum
          </h1>

          <div className="prose max-w-none">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 shadow-2xl">
              <h2 className="text-2xl font-bold text-purple-600 mb-4">Angaben gemäß § 5 TMG</h2>
              <p className="text-gray-700 mb-6">
                [Ihr Name oder Firmenname]<br />
                [Straße und Hausnummer]<br />
                [PLZ und Ort]
              </p>

              <h2 className="text-2xl font-bold text-purple-600 mb-4 mt-8">Kontakt</h2>
              <p className="text-gray-700 mb-6">
                Telefon: [Ihre Telefonnummer]<br />
                E-Mail: [Ihre E-Mail-Adresse]
              </p>

              <h2 className="text-2xl font-bold text-purple-600 mb-4 mt-8">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
              <p className="text-gray-700 mb-6">
                [Name]<br />
                [Adresse]
              </p>

              <h2 className="text-2xl font-bold text-purple-600 mb-4 mt-8">Haftungsausschluss</h2>

              <h3 className="text-xl font-semibold text-blue-600 mb-3 mt-6">Haftung für Inhalte</h3>
              <p className="text-gray-700 mb-4">
                Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit,
                Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.
              </p>

              <h3 className="text-xl font-semibold text-blue-600 mb-3 mt-6">Haftung für Links</h3>
              <p className="text-gray-700 mb-4">
                Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen
                Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen.
              </p>

              <h3 className="text-xl font-semibold text-blue-600 mb-3 mt-6">Urheberrecht</h3>
              <p className="text-gray-700">
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen
                dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art
                der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen
                Zustimmung des jeweiligen Autors bzw. Erstellers.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};
