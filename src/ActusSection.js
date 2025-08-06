import React from 'react';

const ActusSection = () => {
  return (
    <section className="w-full max-w-5xl mx-auto px-4 py-8 space-y-8">
      {/* Section Header */}
      <div className="flex items-center gap-4">
        <h2 className=" font-bold">Actus</h2>
        <div className="flex-grow border-t border-gray-300" />
      </div>

      {/* Latest Release */}
      <div className="bg-white rounded-lg shadow-md p-6 space-y-6">
        <h3 className="text-xl font-semibold">Dernière sortie</h3>
        <div className="flex flex-col md:flex-row gap-6">
          {/* Video */}
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

          {/* Description */}
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

      {/* Next Event */}
      <div className="bg-white rounded-lg shadow-md p-6 space-y-4">
        <h3 className="text-xl font-semibold">Prochaine date</h3>
        <div className="bg-white border border-gray-100 rounded-lg shadow-sm p-6">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Flyer Image */}
            <div className="flex-1 flex justify-center">
              <div className="relative w-full max-w-md">
                <img 
                  src="/fly.jpg" 
                  alt="Flyer de l'événement" 
                  className="w-full h-auto rounded-md shadow-md object-cover"
                />
                {/* Optional overlay for image credits if needed */}
               
              </div>
            </div>

            {/* Event Details */}
            <div className="flex-1 flex flex-col justify-center space-y-4">
              {/* Event Title */}
              <div className="font-bold text-xl text-gray-800">
                Lecture performée "Graine Lumière Cuire"
              </div>

              {/* Date and Location */}
              <div className="flex flex-col gap-3 text-gray-700 font-medium">
                {/* Date */}
                <div className="flex items-center gap-2">
                  <span className="text-gray-500">📅</span>
                  <span>03/05</span>
                </div>
                
                {/* Time - Added */}
                <div className="flex items-center gap-2">
                  <span className="text-gray-500">🕒</span>
                  <span>17h00</span>
                </div>

                {/* Location */}
                <div className="flex items-center gap-2">
                  <span className="text-gray-500">📍</span>
                  <span>FRAC SUD - Marseille</span>
                </div>
              </div>

              {/* Brief Description - Added */}
              <p className="text-gray-600 mt-3">
              Graine Lumière Cuire est une performance vidéo-lecture créée par Laura Vazquez et Élise Blotière à partir du recueil de textes poétiques éponyme, évoquant la terre et la nature, paru en novembre 2024 aux éditions sun/sun. Au Frac Sud, la performance sera accompagnée d’une proposition musicale live d’Arthur Boval.
              </p>

              {/* CTA Button - Added */}
              <div className="mt-4">
                <a 
                  href="https://fracsud.org/Lecture-performee-avec-Laura-Vazquez-Elise-Blotiere" 
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
