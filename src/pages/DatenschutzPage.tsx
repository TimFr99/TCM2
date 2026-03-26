import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

export const DatenschutzPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black">
      <Navbar />

      <div className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors mb-8"
          >
            <ArrowLeft size={20} />
            Zurück zur Startseite
          </Link>

          <h1 className="text-4xl md:text-5xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
            Datenschutzerklärung
          </h1>

          <div className="prose prose-invert max-w-none">
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-900/30 shadow-2xl">
              <h2 className="text-2xl font-bold text-purple-300 mb-4">1. Datenschutz auf einen Blick</h2>

              <h3 className="text-xl font-semibold text-blue-300 mb-3 mt-6">Allgemeine Hinweise</h3>
              <p className="text-gray-300 mb-4">
                Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen
                Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit
                denen Sie persönlich identifiziert werden können.
              </p>

              <h2 className="text-2xl font-bold text-purple-300 mb-4 mt-8">2. Datenerfassung auf dieser Website</h2>

              <h3 className="text-xl font-semibold text-blue-300 mb-3 mt-6">Wer ist verantwortlich für die Datenerfassung auf dieser Website?</h3>
              <p className="text-gray-300 mb-4">
                Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten
                können Sie dem Impressum dieser Website entnehmen.
              </p>

              <h3 className="text-xl font-semibold text-blue-300 mb-3 mt-6">Wie erfassen wir Ihre Daten?</h3>
              <p className="text-gray-300 mb-4">
                Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich
                z.B. um Daten handeln, die Sie in ein Kontaktformular eingeben.
              </p>
              <p className="text-gray-300 mb-4">
                Andere Daten werden automatisch beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind
                vor allem technische Daten (z.B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs).
              </p>

              <h3 className="text-xl font-semibold text-blue-300 mb-3 mt-6">Wofür nutzen wir Ihre Daten?</h3>
              <p className="text-gray-300 mb-4">
                Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten.
                Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.
              </p>

              <h2 className="text-2xl font-bold text-purple-300 mb-4 mt-8">3. Allgemeine Hinweise und Pflichtinformationen</h2>

              <h3 className="text-xl font-semibold text-blue-300 mb-3 mt-6">Datenschutz</h3>
              <p className="text-gray-300 mb-4">
                Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln
                Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften
                sowie dieser Datenschutzerklärung.
              </p>

              <h3 className="text-xl font-semibold text-blue-300 mb-3 mt-6">Hinweis zur verantwortlichen Stelle</h3>
              <p className="text-gray-300 mb-4">
                Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
              </p>
              <p className="text-gray-300 mb-4">
                [Name und Adresse des Verantwortlichen]<br />
                Telefon: [Telefonnummer]<br />
                E-Mail: [E-Mail-Adresse]
              </p>

              <h3 className="text-xl font-semibold text-blue-300 mb-3 mt-6">Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>
              <p className="text-gray-300 mb-4">
                Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie
                können eine bereits erteilte Einwilligung jederzeit widerrufen. Dazu reicht eine formlose
                Mitteilung per E-Mail an uns.
              </p>

              <h2 className="text-2xl font-bold text-purple-300 mb-4 mt-8">4. Datenerfassung auf dieser Website</h2>

              <h3 className="text-xl font-semibold text-blue-300 mb-3 mt-6">Server-Log-Dateien</h3>
              <p className="text-gray-300">
                Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten
                Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:
              </p>
              <ul className="list-disc list-inside text-gray-300 mb-4 ml-4">
                <li>Browsertyp und Browserversion</li>
                <li>verwendetes Betriebssystem</li>
                <li>Referrer URL</li>
                <li>Hostname des zugreifenden Rechners</li>
                <li>Uhrzeit der Serveranfrage</li>
                <li>IP-Adresse</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};
