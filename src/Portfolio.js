// src/Portfolio.js
import React from 'react';
import { useRef , useEffect, useState } from 'react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { Analytics } from "@vercel/analytics/react";
import { Link } from 'react-router-dom';
import ActusSection from './ActusSection';

const Portfolio = () => {
    const movies = [
        { title: "Espoir", year: 2021, author: "Nixon Singa", details: "Court-métrage, Drame, 19 min. Canal Plus", img: "espoir.jpg", link: "https://www.unifrance.org/film/54032/espoir" },
        { title: "En Maria", year: 2021, author: "Alice de Lencquesaing", details: "Court-métrage, Comédie dramatique, 28 min. France 2", img: "en_maria.webp", link: "https://www.cotecourt.org/film/en-maria" },
        { title: "L'Écho Dissonant du Désir", year: 2020, author: "Miao Yu", details: "Court-métrage, Drame, 25 min. Arte", img: "echo.jpg", link: "https://www.unifrance.org/film/52928/l-echo-dissonant-du-desir" },
        { title: "À Flot", year: 2020, author: "Louise Silverio & Médérick Watteville", details: "Court-métrage, Comédie, 20 min. Arte", img: "aflot.jpg", link: "https://www.unifrance.org/film/52932/a-flot" },
        { title: "En Pleine Lulu", year: 2019, author: "Marguerite Pellerin", details: "Court-métrage, Comédie dramatique, 7 min. Arte", img: "lulu.jpg", link: "https://www.unifrance.org/film/50357/en-pleine-lulu" },
    ];
    const performances = [
        { title: "Vingt Pierres", location: "Théâtre de l'Odéon, Villa Médicis, La Criée, Librairie 7L", year: "2026-2027", author: "Laura Vazquez, Élise Blotière", img: "vingtpierres.png", link: "https://villamedici.it/programme/20-pierres/" },
        { title: "Lecture-concert « De l'esprit et de sa capacité à se dilater »", location: "Le Cri du Port, Marseille", year: 2025, author: "Laura Vazquez, Arthur Boval", img: "lectureconcert.png", link: "https://bouillonsonore.com/15-fvrier" },
        { title: "Graine Lumière Cuire", location: "Montréal, Marseille, Nice", year: 2024, author: "Laura Vazquez, Élise Blotière", img: "graine.png", link: "https://usine-c.com/spectacle/actoral-2024" },
        { title: "Issue de secours", location: "Beaux Arts de Paris", year: 2023, author: "Loïs Szymczak", img: "issue.jpg", link: "https://youtu.be/FpmuA3h_rJM?si=fZ1P0oYQjPZCUoBp" },
        { title: "    Songs for Space - Blue Origin NS-18", location: "Espace, apogée de 106km", year: 2021, author: "Dr Chris Boshuizen", img: "space.jpg", link: "https://soundcloud.com/drchrispy/sets/songs-for-space" },
        { title: "Festival 100%", location: "la Villette, Paris", year: 2019, author: "Safia Bahmed Schwartz", img: "100.jpg", link: "https://slash-paris.com/fr/evenements/100-l-expo" },

    ];

    const lives = [
        { title: "Le Cuirassé Potemkine", real: "Sergei Eisenstein", platform: "La Station Gare des Mines, Paris - L'International, Paris", date: "2019", img:"potemkine.avif", link: "https://fb.watch/vq23pR2_aE/" },
        { title: "Meshes of the Afternoon", real: "Maya Deren", platform: "Conservatoire à Rayonnement Régional, Paris", date: "2019", img:"meshes.jpg", link: "https://musiquecontemporaine.org/" },
        { title: "Live première partie Kedr Livanskiy", platform: "Badaboum, Paris", date: "2019" , img:"kedr.jpg", link: "https://manifesto-21.com/fils-de-venus-invite-kedr-livanskiy-et-lafawndah-pour-une-soiree-astrale/"},
        { title: "Live @ 3615 club", platform: "Le Gambetta Club, Paris", date: "2019", img:"live.png", link: "https://www.facebook.com/events/361906581339469/?ref=newsfeed" },
        { title: "Live @ Larmes de Sang", platform: "La Station Gare des Mines, Paris", date: "2019", img:"larme.jpg", link: "https://www.facebook.com/events/412740549425916?ref=newsfeed" },

        { title: "Signal", real: "Marilou Soller", platform: "Silencio, Paris", date: "2018", img:"ensad.jpg" , link: "https://www.facebook.com/events/487599968828346/?ref=newsfeed"},
        { title: "La Tempête", real: "Astrid Guinet", platform: "Silencio, Paris", date: "2018", img:"ensad.jpg", link: "https://www.facebook.com/events/487599968828346/?ref=newsfeed" },
        { title: "La petite perle", real: "Pierre-Julien Fieux", platform: "Silencio, Paris", date: "2018", img:"ensad.jpg", link: "https://www.facebook.com/events/487599968828346/?ref=newsfeed" },
        { title: "Live première partie OKLOU + Jlin Narley", platform: "Gibus, Paris", date: "2016", img:"jlin.jpg", link: "https://www.facebook.com/events/944313715662840/?ref=newsfeed" },


    ];
    const autos = [
        { title: "Roar", date: "2021", details: "Réalisation et musique, Éssai vidéo, 7 min. collectif ROAR ", img:"ror.png", link: "https://vimeo.com/643119615"},

        { title: "Police TV", date: "2020", details: "Réalisation, Documentaire Expérimental, 19 min. collectif ROAR", img:"tv.png", link: "https://vimeo.com/520163774?from=outro-local" },
        { title: "Rescue", date: "2020", details: "Réalisation et musique, Électronique, 7 min. Trax Magazine", img:"rescue.jpg", link: "https://fb.watch/vq3Deu_fgs/" },

        
    ];

    const releases = [
        { title: "Recurring dreams", date: "2020", details: "GTP 325 - Silent World - Universal Music", img:"gum.jpg", link: "https://search.upright-music.pl/album/35150aa3-7f77-46fe-919c-9c99d9add527#d7f1aae7-fc7a-4016-89c5-4416e177808c" },
        { title: "Hope", date: "2020", details: " Confiné-e Records CR09", img:"conf.jpg", link: "https://www.youtube.com/watch?v=-slxN4KM66Q&ab_channel=Moskalus" },
        { title: "Rescue", date: "2020", details: "Confiné-e Records CR22" , img:"conf1.jpg", link: "https://www.youtube.com/watch?v=kSuMxDu0tK8&ab_channel=Moskalus"},
        { title: "Tout Terriblement - Safia Bahmed Schwartz", date: "2018", details: "Musique originale", img:"safia.jpg", link: "https://open.spotify.com/intl-fr/track/7B9PVeLiJCJ3f84tm4j3wn?si=3a6ddfb911554bf0" },

        { title: "Raïwave", date: "2017", details: "Martian's Parlor", img:"martian.jpg", link: "https://martiansparlor.com/musique/chasing_the_unknown/index.php"},
        // { title: "Paleo Dreams", date: "2020", details: "Moskalus (YT)" , img:"conf1.jpg", link: "https://www.youtube.com/watch?v=kSuMxDu0tK8&ab_channel=Moskalus"},

        
    ];

    const podcasts = [
        { title: "Invisibles", date: "2026", details: "Charlie Delboy, Blast", img:"invisibles.webp" , link: "https://www.blast-info.fr/articles/2026/vss-au-travail-mon-corps-est-devenu-une-arme-contre-moi-m3g-VENuQyC9uZPw5n-doQ"},
        { title: "Paroles de Vignes", date: "2022", details: "Bettane et Desseauve, Spotify", img:"vigne.jpg" , link: "https://open.spotify.com/show/2C2WpI97FK4q48yFt7cpMi?si=ce199d31c2fa4e99"},
        { title: "L'éruption", date: "2021", details: "Pilote, fiction historique, Spotify", img:"pele.jpg", link: "https://link-to-espoir.com" },
        { title: "Crystal Craft", date: "2017", details: "Pilote, fiction horreur, Audible", img:"audible-2.png", link: "https://link-to-espoir.com" },

        
    ];
    const turbulenceRef = useRef(null);

  useEffect(() => {
    let frames = 0;
    const rad = Math.PI / 180;
    let bfx = 0.02;
    let bfy = 0.01;
    let animationRunning = false;


    // Fallback for requestAnimationFrame using setTimeout for older mobile browsers
    const requestAnimationFramePolyfill = (callback) => {
      return window.requestAnimationFrame
        ? window.requestAnimationFrame(callback)
        : setTimeout(callback, 1000 / 60); // Fallback to 60 fps
    };

    // Function to animate the baseFrequency
    function animateBaseFrequency() {
      frames += 0.25;
      bfx += 0.002 * Math.cos(frames * rad);
      bfy += 0.01 * Math.sin(frames * rad);
      const bf = `${bfx} ${bfy}`;

      if (turbulenceRef.current) {
        turbulenceRef.current.setAttribute('baseFrequency', bf);
      }

      if (animationRunning) {
        requestAnimationFramePolyfill(animateBaseFrequency);
      }
    }

    // Function to control the loop: 2 sec pause -> 3 sec animation -> repeat
    function startAnimationLoop() {
      setTimeout(() => {
        animationRunning = true;
        requestAnimationFramePolyfill(animateBaseFrequency);

        setTimeout(() => {
          animationRunning = false; // Stop animation after 3 seconds
          startAnimationLoop(); // Repeat the loop after 2-second pause
        }, 4000); // Run the animation for 3 seconds
      }, 1000); // Wait for 2 seconds before starting
    }

    // Start the animation loop when component is mounted
    startAnimationLoop();

    // Cleanup function to stop animation if component unmounts
    return () => {
      animationRunning = false;
    };
  }, []);

  const handleItemClick = (url) => {
    window.open(url, "_blank");
};

    return (
        <div className="portfolio-container">
            <header className="header">
                <div className="header-text">
                    <h3 className="down">Compositeur - Interprète - DJ</h3>

                    <div>
                        <h1><span className='black'>Arthur</span> Boval</h1>
                        <img src="/arth.png" alt="Arthur Boval" className="profile-image" />
                        <img src="/arth.png" alt="Arthur Boval" className="profile-image bispic" />

                        {/* <hr className='bando'></hr> */}
                    </div>

                    <p className="down"><a href="mailto:contact@arthurboval.com" className="email-link">arthur.boval@gmail.com</a><br></br><br></br>
                    <Link className="email-link" to="/poesie">.txt                           
                    </Link></p>
                </div>
            </header>

            <ActusSection/>

            <section className="category">
                <h2>Musiques de film</h2>
                <hr className="separator" />
                <ul>
                    {movies.map((movie, index) => (
                        <li key={index} className="media-item" onClick={() => handleItemClick(movie.link)}>
                            <img src={movie.img} alt={movie.title} className="media-thumbnail" />
                            <div className="media-info">
                                <div className="media-title">
                                    <strong>{movie.title}</strong>  {movie.author} ({movie.year})
                                </div>
                                <p className="media-details">{movie.details}</p> {/* Details in italic */}
                            </div>
                            <div className="arrow-sign">-></div>
                        </li>

                    ))}
                </ul>
            </section>

            <section className="category">
                <h2>Performances</h2>
                <hr className="separator" />
                <ul>
                    {performances.map((performance, index) => (
                        <li key={index} className="media-item" onClick={() => handleItemClick(performance.link)} >
                            <img src={performance.img} alt={performance.title} className="media-thumbnail" />
                            <div className="media-info">
                                <div className="media-title">
                                    <strong>{performance.title}</strong>  {performance.author} ({performance.year})
                                </div>
                                <p> {performance.location}</p>
                            </div>
                            <div className="arrow-sign">-></div>

                        </li>
                    ))}
                </ul>
            </section>

            <section className="category">
                <h2>Ciné-concerts, lives</h2>
                <hr className="separator" />
                <ul>
                    {lives.map((live, index) => (
                        <li key={index} className="media-item" onClick={() => handleItemClick(live.link)}>
                            <img src={live.img} alt={live.title} className="media-thumbnail" />
                             <div className="media-info">
                            <div className="media-title">
                                <strong>{live.title}</strong> {live.real}
                            </div>
                            <p>
                                {live.platform} - {live.date}
                            </p>
                            </div>
                            <div className="arrow-sign">-></div>

                        </li>
                    ))}
                </ul>
            </section>
            <section className="category">
                <h2>Autoproductions</h2>
                <hr className="separator" />
                <ul>
                    {autos.map((auto, index) => (
                        <li key={index} className="media-item " onClick={() => handleItemClick(auto.link)}>
                            <img src={auto.img} alt={auto.title} className="media-thumbnail" />
                             <div className="media-info">
                            <div className="media-title">
                                <strong>{auto.title}</strong>  {auto.date}
                            </div>
                            <p>
                                {auto.details}
                            </p>
                            </div>
                            <div className="arrow-sign">-></div>

                        </li>
                    ))}
                </ul>
            </section>
            <section className="category">
                <h2>Releases</h2>
                <hr className="separator" />
                <ul>
                {releases.map((release, index) => (
                        <li key={index} className="media-item">
                            <img src={release.img} alt={release.title} className="media-thumbnail" />
                             <div className="media-info">
                            <div className="media-title">
                                <strong>{release.title}</strong> - {release.date}
                            </div>
                            <p>
                                {release.details}
                            </p>
                            </div>
                            <div className="arrow-sign">-></div>

                        </li>
                    ))}
                🫢 MORE COMING SOON...
                </ul>
            </section>
            <section className="category">
                <h2>Podcasts</h2>
                <hr className="separator" />
                <ul>
                {podcasts.map((podcast, index) => (
                        <li key={index} className="media-item" onClick={() => handleItemClick(podcast.link)}>
                            <img src={podcast.img} alt={podcast.title} className="media-thumbnail" />
                             <div className="media-info">
                            <div className="media-title">
                                <strong>{podcast.title}</strong>  {podcast.date}
                            </div>
                            <p>
                                {podcast.details}
                            </p>
                            </div>
                            <div className="arrow-sign">-></div>

                        </li>
                    ))}
                
                </ul>
            </section>
            <section className="category">
                <h2>DJ sets 🎧</h2>
                <hr className="separator" />

                <ul>

                    <h4>Résidences</h4>
                    <li><p><strong>Petit Palace</strong>, Paris</p></li>
                    <li><p><strong>Madame Arthur</strong>, Paris</p></li>
                    <li> <p><strong>La Machine du Moulin Rouge (Vénus Club)</strong>, Paris</p></li>
                    <li> <p><strong>Le Zorba</strong>, Paris</p></li>
                    <li> <p><strong>Batofar (Trash Romance)</strong>, Paris</p></li>
                    <li> <p><strong>Wanderlust (Jeudi OK)</strong>, Paris</p></li>




                    <h4>Festivals</h4>
                    <li> <p><strong>We Love Green</strong>, Paris</p></li>
                    <li><p><strong>Le Bon Air Festival</strong>, Friche Belle de Mai, Marseille</p></li>
                    <li><p><strong>Le Weekend des Curiosités</strong>, Le Bikini, Toulouse</p></li>
                    <li><p><strong>Peacock Society</strong>, Paris</p></li>

                    <li><p><strong>Les Nuits Sonores</strong>, Le Transbordeur, Lyon</p></li>
                    <li><p><strong>Le Beau Festival</strong>, La Station Gare des Mines, Paris</p></li>
                    <li><p><strong>Cabourg Mon Amour</strong>, Plage de Cabourg, Cabourg</p></li>
                    <li><p><strong>Restons Sérieux</strong>, Supersonic, Paris</p></li>
                    <li><p><strong>Hello Birds</strong>, Saint-Malo</p></li>
                    <li><p><strong>MOFO Festival</strong>, Mains d'Oeuvres, Saint Ouen</p></li>
                    <li><p><strong>Smmmile - Vegan Pop Festival</strong>, La Villette, Paris</p></li>



                    <li><p><strong>Days Off</strong>, La Philharmonie de Paris, Paris</p></li>
                    <li><p><strong>Pzzl Festival #3</strong>, Maison Folie Moulins, Lille</p></li>
                    <li><p><strong>Karaïb Festival</strong>, Le 6B, Saint-Denis</p></li>
                    <li><p><strong>Futur en Seine</strong>, La Villette, Paris</p></li>
                    <li><p><strong>Une Saison Graphique</strong>, Tétris, Le Havre</p></li>
                    <li><p><strong>Enigma</strong>, Petit Palais, Paris</p></li>





                    <li><p><strong>Artagon Live</strong>, Cité internationale des arts, Paris</p></li>

                    

                    <h4>Radios</h4>
                    <li><p><strong>Rinse</strong></p></li>
                    <li><p><strong>Tsugi</strong></p></li>
                    <li><p><strong>PiiAF</strong></p></li>
                    <li><p><strong>Hotel Radio Paris</strong></p></li>
                    <li><p><strong>3615</strong></p></li>
                    <li><p><strong>Radio Brume</strong></p></li>
                    <li><p><strong>Radio Campus Paris</strong></p></li>









                🫢 COMING SOON...

                {/* {podcasts.map((podcast, index) => (
                        <li key={index} className="media-item">
                            <img src={podcast.img} alt={podcast.title} className="media-thumbnail" />
                             <div className="media-info">
                            <div className="media-title">
                                <strong>{podcast.title}</strong>  {podcast.date}
                            </div>
                            <p>
                                {podcast.details}
                            </p>
                            </div>
                            <div className="arrow-sign">-></div>

                        </li>
                    ))} */}
                
                </ul>
            </section>
            <footer className="footer">
                <div className="footer-content">
                    <a href="https://soundcloud.com/atoll92">
                <svg className="footer-logo" fill="#000000" height="800px" width="800px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"  
	 viewBox="0 0 300 300" >
<g id="XMLID_526_">
	<path id="XMLID_527_" d="M14.492,208.896c0.619,0,1.143-0.509,1.232-1.226l3.365-26.671l-3.355-27.278
		c-0.1-0.717-0.623-1.23-1.242-1.23c-0.635,0-1.176,0.524-1.26,1.23l-2.941,27.278l2.941,26.662
		C13.316,208.377,13.857,208.896,14.492,208.896z"/>
	<path id="XMLID_530_" d="M3.397,198.752c0.608,0,1.101-0.473,1.19-1.18l2.608-16.574l-2.608-16.884
		c-0.09-0.685-0.582-1.18-1.19-1.18c-0.635,0-1.127,0.495-1.217,1.19L0,180.999l2.18,16.569
		C2.27,198.269,2.762,198.752,3.397,198.752z"/>
	<path id="XMLID_531_" d="M27.762,148.644c-0.08-0.867-0.715-1.5-1.503-1.5c-0.782,0-1.418,0.633-1.491,1.5l-2.811,32.355
		l2.811,31.174c0.073,0.862,0.709,1.487,1.491,1.487c0.788,0,1.423-0.625,1.503-1.487l3.18-31.174L27.762,148.644z"/>
	<path id="XMLID_532_" d="M38.152,214.916c0.922,0,1.668-0.759,1.758-1.751l3.005-32.156l-3.005-33.258
		c-0.09-0.999-0.836-1.749-1.758-1.749c-0.935,0-1.692,0.751-1.756,1.754l-2.656,33.253l2.656,32.156
		C36.46,214.158,37.217,214.916,38.152,214.916z"/>
	<path id="XMLID_533_" d="M50.127,215.438c1.074,0,1.936-0.86,2.025-2.011l-0.01,0.008l2.83-32.426l-2.83-30.857
		c-0.08-1.132-0.941-2.005-2.016-2.005c-1.09,0-1.947,0.873-2.012,2.014l-2.502,30.849l2.502,32.418
		C48.18,214.578,49.037,215.438,50.127,215.438z"/>
	<path id="XMLID_534_" d="M67.132,181.017l-2.655-50.172c-0.074-1.272-1.065-2.286-2.281-2.286c-1.207,0-2.195,1.013-2.269,2.286
		l-2.35,50.172l2.35,32.418c0.074,1.278,1.063,2.278,2.269,2.278c1.217,0,2.207-1,2.281-2.278v0.009L67.132,181.017z"/>
	<path id="XMLID_535_" d="M74.386,215.766c1.339,0,2.45-1.111,2.513-2.529v0.021l2.482-32.233l-2.482-61.656
		c-0.063-1.418-1.174-2.529-2.513-2.529c-1.37,0-2.471,1.111-2.545,2.529l-2.185,61.656l2.195,32.222
		C71.915,214.655,73.016,215.766,74.386,215.766z"/>
	<path id="XMLID_536_" d="M86.645,111.435c-1.508,0-2.725,1.238-2.787,2.799l-2.033,66.801l2.033,31.884
		c0.063,1.553,1.279,2.783,2.787,2.783c1.504,0,2.73-1.22,2.783-2.788v0.016l2.307-31.895l-2.307-66.801
		C89.375,112.663,88.148,111.435,86.645,111.435z"/>
	<path id="XMLID_782_" d="M99.01,215.766c1.656,0,2.975-1.336,3.037-3.056v0.019l2.133-31.693l-2.133-69.045
		c-0.063-1.714-1.381-3.056-3.037-3.056c-1.666,0-3.005,1.342-3.031,3.056l-1.916,69.045l1.916,31.693
		C96.005,214.43,97.344,215.766,99.01,215.766z"/>
	<path id="XMLID_783_" d="M111.477,215.734c1.787,0,3.237-1.463,3.291-3.318v0.029l1.963-31.404l-1.963-67.289
		c-0.054-1.854-1.504-3.311-3.291-3.311c-1.8,0-3.25,1.456-3.303,3.311l-1.725,67.289l1.736,31.389
		C108.227,214.271,109.677,215.734,111.477,215.734z"/>
	<path id="XMLID_784_" d="M129.359,181.041l-1.777-64.836c-0.043-2-1.609-3.571-3.551-3.571c-1.947,0-3.514,1.571-3.555,3.584
		l-1.594,64.823l1.594,31.198c0.041,1.984,1.607,3.556,3.555,3.556c1.941,0,3.508-1.572,3.551-3.585v0.029L129.359,181.041z"/>
	<path id="XMLID_785_" d="M136.682,215.853c2.064,0,3.773-1.717,3.805-3.828v0.017l1.613-30.984l-1.613-77.153
		c-0.031-2.119-1.74-3.833-3.805-3.833c-2.063,0-3.767,1.722-3.809,3.844l-1.434,77.111l1.434,31.016
		C132.915,214.136,134.619,215.853,136.682,215.853z"/>
	<path id="XMLID_786_" d="M149.291,92.814c-2.229,0-4.037,1.849-4.074,4.103l-1.667,84.151l1.677,30.526
		c0.027,2.225,1.836,4.068,4.064,4.068c2.195,0,4.037-1.844,4.047-4.105v0.037l1.82-30.526l-1.82-84.151
		C153.328,94.655,151.486,92.814,149.291,92.814z"/>
	<path id="XMLID_787_" d="M160.82,215.882c0.09,0.008,101.623,0.056,102.275,0.056c20.385,0,36.904-16.722,36.904-37.357
		c0-20.624-16.52-37.349-36.904-37.349c-5.059,0-9.879,1.034-14.275,2.907c-2.922-33.671-30.815-60.077-64.842-60.077
		c-8.318,0-16.429,1.662-23.593,4.469c-2.788,1.09-3.534,2.214-3.556,4.392v118.539C156.861,213.752,158.607,215.655,160.82,215.882
		z"/>
</g>
</svg>
</a>
<a href="https://www.youtube.com/@arthurboval">
    <img class="yt" style={{height: 50 }} src="/yt.png"/>
</a>
                    <p className="footer-text">© 2024 Arthur Boval - All Rights Reserved</p>
                    <p className="footer-text"> 🕵🏽‍♂️ Known aliases : Hans Pfaal - Fils de Vénus - Atoll92 - Boval - Crabe - MGWX </p>

                </div>
            </footer>
            <svg className='none'>
        <filter id="shaka">
          <feTurbulence
            ref={turbulenceRef}
            type="turbulence"
            baseFrequency="0.05"
            numOctaves="2"
            result="turbulence"
          />
          <feDisplacementMap
            in2="turbulence"
            in="SourceGraphic"
            scale="50"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </svg>
      <SpeedInsights />
      <Analytics/>
        </div>
    );
};

export default Portfolio;
