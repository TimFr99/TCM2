import { SITE_DATA } from '../data/constants';

export const TeaserSection = () => {
  return (
    <section id="live-teaser" className="py-12 md:py-24 px-6 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-purple-600 drop-shadow-[0_0_20px_rgba(168,85,247,0.5)]">
          Live Teaser
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-purple-900/50 aspect-[9/16] w-full max-w-md mx-auto">
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${SITE_DATA.teaser.youtubeVideoId}`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>
          </div>

          <div className="flex flex-col justify-center h-full">
            <div className="prose prose-invert max-w-none space-y-6">
              <p className="text-base md:text-lg text-gray-300 leading-relaxed font-light">
                The Crimson Moon ist ein modernes Rocktrio aus Lippstadt. Die Band um Sänger und Bassist Jan Hökenschnieder hat sich nach langjähriger Freundschaft gegründet, um gemeinsam eine neue musikalische Welt zu erschaffen.
              </p>
              <p className="text-base md:text-lg text-gray-300 leading-relaxed font-light">
                Nach einer intensiven kreativen Phase hat die Formation einen modernen Rocksound kreiert, der angereichert durch progressive und popmusikalische Einflüsse einzigartig klingt.
              </p>
              <p className="text-base md:text-lg text-gray-300 leading-relaxed font-light">
                Mit dem Ziel Menschen zu bewegen, ist ein mitreißendes audiovisuelles Erlebnis entstanden, welches die Zuhörer für einen Augenblick dem Alltag entfliehen lässt und sie in eine melancholische Welt entführt, die in Erinnerung bleibt.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
