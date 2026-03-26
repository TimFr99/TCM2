import { SITE_DATA } from '../data/constants';

export const GallerySection = () => {
  return (
    <section id="galerie" className="py-24 px-6 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-20 text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-400 to-cyan-400 drop-shadow-[0_0_20px_rgba(34,211,238,0.5)]">
          Galerie
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          <div className="col-span-2 md:col-span-2 md:row-span-2">
            <div className="relative group h-full">
              <div className="absolute inset-0 bg-cyan-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
              <img
                src={SITE_DATA.gallery[0]}
                alt="Gallery 1"
                className="relative w-full h-full rounded-2xl shadow-2xl shadow-cyan-900/50 object-cover"
              />
            </div>
          </div>

          <div className="col-span-1 md:row-span-1">
            <div className="relative group h-full">
              <div className="absolute inset-0 bg-blue-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
              <img
                src={SITE_DATA.gallery[1]}
                alt="Gallery 2"
                className="relative w-full h-full rounded-2xl shadow-2xl shadow-blue-900/50 object-cover"
              />
            </div>
          </div>

          <div className="col-span-1 md:row-span-1">
            <div className="relative group h-full">
              <div className="absolute inset-0 bg-green-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
              <img
                src={SITE_DATA.gallery[2]}
                alt="Gallery 3"
                className="relative w-full h-full rounded-2xl shadow-2xl shadow-green-900/50 object-cover"
              />
            </div>
          </div>

          <div className="col-span-1 md:col-span-1">
            <div className="relative group h-full">
              <div className="absolute inset-0 bg-cyan-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
              <img
                src={SITE_DATA.gallery[3]}
                alt="Gallery 4"
                className="relative w-full h-full rounded-2xl shadow-2xl shadow-cyan-900/50 object-cover"
              />
            </div>
          </div>

          <div className="col-span-1 md:col-span-1 md:row-span-1">
            <div className="relative group h-full">
              <div className="absolute inset-0 bg-blue-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
              <img
                src={SITE_DATA.gallery[4]}
                alt="Gallery 5"
                className="relative w-full h-full rounded-2xl shadow-2xl shadow-blue-900/50 object-cover"
              />
            </div>
          </div>

          <div className="col-span-2 md:col-span-1">
            <div className="relative group h-full">
              <div className="absolute inset-0 bg-green-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
              <img
                src={SITE_DATA.gallery[5]}
                alt="Gallery 6"
                className="relative w-full h-full rounded-2xl shadow-2xl shadow-green-900/50 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
