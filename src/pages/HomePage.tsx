import { Navbar } from '../components/Navbar';
import { HeroSection } from '../components/HeroSection';
import { TeaserSection } from '../components/TeaserSection';
import { ReleasesSection } from '../components/ReleasesSection';
import { GallerySection } from '../components/GallerySection';
import { Footer } from '../components/Footer';

export const HomePage = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <HeroSection />
      <TeaserSection />
      <ReleasesSection />
      <GallerySection />
      <Footer />
    </div>
  );
};
