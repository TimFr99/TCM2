interface ReleaseCardProps {
  title: string;
  spotifyTrackId: string;
  appleAlbumId: string;
  appleTrackId: string;
}

export const ReleaseCard = ({ title, spotifyTrackId, appleAlbumId, appleTrackId }: ReleaseCardProps) => {
  return (
    <div className="group mb-16 last:mb-0">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-blue-600/10 to-green-600/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500" />

        <div className="relative bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm rounded-3xl p-8 border border-purple-900/30 shadow-2xl shadow-purple-900/20">
          <h3 className="text-3xl md:text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-blue-300">
            {title}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <iframe
                style={{ borderRadius: '12px' }}
                src={`https://open.spotify.com/embed/track/${spotifyTrackId}?utm_source=generator`}
                width="100%"
                height="152"
                frameBorder="0"
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              />
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg">
              <iframe
                allow="autoplay *; encrypted-media *; fullscreen *"
                frameBorder="0"
                height="150"
                style={{ width: '100%', maxWidth: '660px', overflow: 'hidden', background: 'transparent' }}
                sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
                src={`https://embed.music.apple.com/de/album/${appleAlbumId}?i=${appleTrackId}`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
