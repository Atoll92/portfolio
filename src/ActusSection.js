import React from 'react';

const ActusSection = () => {
  return (
    <section className="w-full max-w-5xl mx-auto px-4 py-8 space-y-8">
      {/* Section Header */}
      <div className="flex items-center gap-4">
        <h2 className=" font-bold">Actus</h2>
        <div className="flex-grow border-t border-gray-300" />
      </div>

      {/* Latest Release - hidden for now
      <div className="bg-white rounded-lg shadow-md p-6 space-y-6">
        <h3 className="text-xl font-semibold">Dernière sortie</h3>
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1">
            <div className="relative w-full pb-[56.25%]">
            <iframe
                src="https://player.vimeo.com/video/1045889115"
                className="absolute inset-0 w-full h-full rounded-md"
                frameBorder="0"
                allow="fullscreen; picture-in-picture"
                allowFullScreen
                title="Extinction Song"
              />
            </div>
          </div>
          <div className="flex-1 space-y-4">
            <h4 className="text-2xl font-bold text-center">Extinction Song</h4>
            <p className="text-gray-700">
              En 1987, le chant d'accouplement du dernier Kauaʻi ʻŌʻō connu résonnait sans réponse
              dans les forêts de Kauaʻi, marquant l'extinction silencieuse d'une espèce autrefois florissante.
            </p>
            <p className="text-gray-700">
              Cette vidéo mêle cet enregistrement rare à une composition originale ambient/noise.
            </p>
            <div className="border-t pt-4 space-y-1 text-sm font-medium text-gray-800">
              <p>🎵 Musique et montage: Arthur Boval</p>
              <p>🎥 Vidéo: John L. Sincock</p>
              <p>📼 Field Recording: John L. Sincock</p>
            </div>
          </div>
        </div>
      </div>
      */}

      {/* Prochaine date - Bouillon Sonore */}
      <div className="bg-white rounded-lg shadow-md p-6 space-y-4">
        <h3 className="text-xl font-semibold">Prochaine date</h3>
        <div className="bg-white border border-gray-100 rounded-lg shadow-sm p-6">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Flyer Image */}
            <div className="flex-1 flex justify-center">
              <div className="relative w-full max-w-md">
                <img
                  src="/bouillonsonore.jpg"
                  alt="Bouillon Sonore Festival"
                  className="w-full h-auto rounded-md shadow-md object-cover"
                />
              </div>
            </div>

            {/* Event Details */}
            <div className="flex-1 flex flex-col justify-center space-y-4">
              <div className="font-bold text-xl text-gray-800">
                Bouillon Sonore Festival
              </div>

              <div className="flex flex-col gap-3 text-gray-700 font-medium">
                <div className="flex items-center gap-2">
                  <span className="text-gray-500">📅</span>
                  <span>15 février 2026</span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-gray-500">📍</span>
                  <span>Le Cri du Port, 8 rue du Pasteur Heuzé, Marseille</span>
                </div>
              </div>

              <div className="mt-4">
                <a
                  href="https://bouillonsonore.com/15-fvrier"
                  className="inline-block bg-gray-800 hover:bg-gray-700 text-white font-medium py-2 px-4 rounded-md transition-colors"
                >
                  Plus d'informations
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>



    </section>
  );
};

export default ActusSection;
