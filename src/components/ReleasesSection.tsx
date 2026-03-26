import { ReleaseCard } from './ReleaseCard';
import { SITE_DATA } from '../data/constants';

export const ReleasesSection = () => {
  return (
    <section id="releases" className="py-12 md:py-24 px-6 bg-gradient-to-b from-black via-gray-950 to-black">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-20 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 drop-shadow-[0_0_20px_rgba(168,85,247,0.5)]">
          Releases
        </h2>

        <div>
          {SITE_DATA.releases.map((release, index) => (
            <ReleaseCard
              key={index}
              title={release.title}
              spotifyTrackId={release.spotifyTrackId}
              appleAlbumId={release.appleAlbumId}
              appleTrackId={release.appleTrackId}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
