interface ReleaseCardProps {
  title: string;
  spotifyTrackId: string;
  appleAlbumId: string;
  appleTrackId: string;
}

const getGradientClasses = (title: string) => {
  switch (title) {
    case 'Drowning':
      return {
        card: 'bg-gradient-to-br from-purple-950/60 via-purple-900/40 to-black/90',
        border: 'border-purple-800/40',
        shadow: 'shadow-purple-900/30',
        title: 'from-purple-200 to-purple-400'
      };
    case 'Off the Shore':
      return {
        card: 'bg-gradient-to-br from-blue-950/60 via-blue-900/40 to-black/90',
        border: 'border-blue-800/40',
        shadow: 'shadow-blue-900/30',
        title: 'from-blue-200 to-blue-400'
      };
    case 'Petrichor':
      return {
        card: 'bg-gradient-to-br from-red-950/60 via-red-900/40 to-black/90',
        border: 'border-red-800/40',
        shadow: 'shadow-red-900/30',
        title: 'from-red-200 to-red-400'
      };
    default:
      return {
        card: 'bg-gradient-to-br from-gray-900/80 to-black/80',
        border: 'border-purple-900/30',
        shadow: 'shadow-purple-900/20',
        title: 'from-purple-300 to-blue-300'
      };
  }
};

export const ReleaseCard = ({ title, spotifyTrackId, appleAlbumId, appleTrackId }: ReleaseCardProps) => {
  const gradients = getGradientClasses(title);

  return (
    <div className="group mb-16 last:mb-0">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-blue-600/10 to-green-600/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500" />

        <div className={`relative ${gradients.card} backdrop-blur-sm rounded-3xl p-8 border ${gradients.border} shadow-2xl ${gradients.shadow}`}>
          <h3 className={`text-3xl md:text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r ${gradients.title}`}>
            {title}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl overflow-hidden shadow-lg mx-auto w-full md:w-full max-w-[240px] md:max-w-none">
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
            <div className="rounded-xl overflow-hidden shadow-lg mx-auto w-full md:w-full max-w-[240px] md:max-w-none">
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
