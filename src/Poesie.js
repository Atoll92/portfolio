import './Poesie.css';
import { Link } from 'react-router-dom';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { Analytics } from "@vercel/analytics/react";

const Poesie = () => {
    const poems = [

{
    title: "Petit guide pour tromper l'ennui",
    text: `Munissez vous d’une balle
lancez la fort contre
Répétez rebond
Comptez vos battements
Reprenez depuis la fin
jusqu’à temps
Attendre vous
tournez un pouce
est tourné
L’autre
Pensez un animal
est un mouton
sont un troupeau
êtes aussi
Restez étant
N’être jamais
un instant`,
    img: "baloon.jpg",
},
{
    title: "Seuls en scène",
    text: `Mille-regards

Regarde-moi que je te voie

Divertis, influence, abonne-moi

Accepte comme offrande mon attention entière immédiate

Mesure mon audience

Mon engagement

Délivre-moi d’ennui

Que le spectacle se déroule sans entracte

Qu’il abonde de lueur bleue mon œil

Par la pupille décontractée

Tout grouillant dans les coulisses

Attiré par la lumière

Le Machaon s’expose à la chaleur du soleil pour voler

— FLASH —

Je contemple mur blanc 

L’eau coulant du robinet

J’arrache rideau rouge

Bouge des gradins

Joue ta pièce à l’ombre du public

Cultive le hors-champ

Annule la générale`,
    img: "respirateur.jpg",
},
{
    title: "Vide",
    text: `Le vide s’ouvre aux moins que rien
À ceux qui laissent les rêves
S’enfoncer entre leurs mains

Aux aveugles et aux noyés
Aux muscles oubliés du geste
À l'esprit mal intentionné
Qui ne demande pas son reste

Le vide est pour l'exilé
Aux courtes enjambées
Qui va sans plan
Ne désire rien
Et attend tout des goélands

Le vide est aux têtes fêlées
Aux orbites qui débordent
À celui qui chute
Et ne s’attrape jamais`,
    img: "ch.jpg",
},

        {
            title: "J'ai brûlé tous mes textes",
            text: `Le sol murmure sous mes pas

un chant d'argile et de racines.

Nous passons en averse

les mâchoires du vent

que nous ne pouvons voir

et qui sait tout de nous.

Loin devant l’enfance langue pendue

crache ses bouts de peau

comme autant de grillons

écrasés entre nos doigts.

Je reviens poussière perdue

dans l’ivresse de la nuée de perruches

brisée en éclats d'un rire épais

qui porte les étoiles essoufflées.`,
            img: "police.png",
        },
        {
            title: "Banalité",
            text: `Nos petits pas pressés dansant autour de ta lente et digne allure, ne s’éloignant jamais trop, sous peine d’un rappel tremblant d’une sévère douceur

Le plastique encore immaculé et froid du ballon lorsque nous l’arrachons suspendu dans son filet

Au fond d’une épicerie miraculeuse comme dans son cocon attendant métamorphose

Le bercement du bus qui vrombit sous la plante de nos pieds jusqu’à donner des fourmis

Quand nous nous emmêlons autour de la barre d’acier glacé, au rythme des accélérations contrariées d’un chauffeur aussi pressé que  nous

La tête tourne, la porte verte grillagée du square s’ouvre avec efforts, se referme brutalement sur nous

Dans un long claquement métallique qui fait vibrer le cannage et l’air chaud de cet après-midi d’été

Comme l’envol de hérons sur le Nil dans le silence de la sécheresse

La pression de ta poigne qui se desserre et nos doigts qui glissent entre les creux de tes paumes de papier

Nous projetons nos petits pas têtes baissées vers ces forêts, monts et lacs

Dans un nuage de sable blanc de craie qui pique les yeux et rentre dans le nez

Un goût d’herbe de sel et de chocolat dans la bouche, la terre compacte sous les ongles noirs

Les mèches de cheveux lourdes de cette sueur figée de poussière qui nous recouvre

Le ballon fait en Chine fait papillon est maintenant défoncé, limé, collant de glace à la vanille

Son rose originel et prometteur ne se distingue plus qu’au long du fin relief d’usinage qui l’encercle et empêche la saleté de s’y accumuler totalement

Son odeur sucrée d’entrepôt revient par élans alors qu’il se réchauffe craquelant au soleil sur le banc à nos côtés

Nos jambes lourdes pendues , les lattes de bois sous nos poplités irrités, ton épaule et ton épaule

La tête pleine de buissons, de pirates et de cabanes où une vie vient de s’écouler

Les griffures d’un rouge vif incrustées de petits graviers

Le plastique crissant du sac au travers nos trésors de bois de cailloux et d’emballages brillants de gâteaux industriels

Nos pas trainés dans le sillage de ton J’adore, ballon crevé roule à peine`,
            img: "ball.jpg",
        },
        {
            title: "    01100001 01101101 01101111 01110101 01110010",
            text: `De la pulpe de l’index je projette mon coeur impalpable sous les amandiers de la vallée de San Joaquin

À la vitesse que seuls les photons et la pensée peuvent atteindre on traverse l’océan

Dans un long boyau qui intrigue les requins marteaux, nos pouls binaires filent avec un flot de sentiments étrangers unis par les abysses

Le câble est constitué d'une âme composée d'un toron de sept fils de cuivre pur gainé de trois couches de gutta-percha

Dans la chaleur d’un data center, nos sentiments décompressés sont restitués par un serveur couleur bleutée


L’émetteur-récepteur haut dans le ciel cristallise l’information alambiquée et la transmet à ta fréquence

Comme une onde en retour ton écho instantané fait vibrer ma paume

Ton sourire en chargement atteint son but, ce signal radioélectrique fait matière, fait soupir

Nos regards sans le savoir se croisent dans ce ciel grouillant de satellites, constellation œcuménique

Mille lieux en un instant se confondent, l’altérité brouillée de nos souvenirs en réseaux`,
            img: "lieux.jpg",
        },
        {
            title: "Montagne et solitude",
            text: `Les montagnes dorment debout comme les chevaux

La solitude ne se partage pas

Le temps passe plus lentement sur les sommets

La croûte se plisse et les Alpes sont

Il n’existe pas d’île déserte

Je ne suis jamais seul à contempler la Lune

La plus haute montagne du système solaire est si haute qu’on ne peut en voir le sommet

Les montagnes pleurent leurs sœurs érodées et s’érodent à leur tour, ce phénomène s’appelle l’érosion lacrymale

Quand les montagnes s’ennuient, elles attrapent les nuages et mes pensées

Je cache ma solitude quand personne ne regarde

Il n’existe pas de montagnes, seulement des vallées et des poètes

Un jour j’ai aidé une montagne à s’endormir

L’horizon face à l’horizon converse, gêné seulement par quelques monts

Il n’y a rien de plus solitaire qu’un alpiniste dans le métro

Toute les civilisations naissent d’une montagne percée

L’ombre des montagnes est lente et lourde, par pudeur ou nécessité, nul ne sait vraiment

Les montagnes naissent par chaînes pour contrer la vanité

Je gravis ce mont tant de fois qu'il est devenu plat`,
            img: "montagne.jpg",
        },
    ];



    return (
        <div className="poesie-container">
          <header className="header">
                <div className="header-text">
                   

                    <div>
                        <h1><span className='black'>Arthur</span> Boval</h1>
                        <Link to="/"><img src="/arth.png" alt="Arthur Boval" className="profile-image" /></Link>

                        {/* <hr className='bando'></hr> */}
                    </div>
                    <h3 className="down">Poèmes écrits dans le cadre des ateliers d'écriture animés par Laura Vazquez</h3>
                </div>
                
            </header>

            <section className="poesie-list">
                <ul>
                    {poems.map((poem, index) => (
                        <li key={index} className="poem-item">
                            <img src={poem.img} alt={poem.title} className="poem-thumbnail" />
                            <div className="poem-info">
                                <h2 className="poem-title">{poem.title}</h2>
                                <div className="poem-text">
                                    {poem.text.split('\n').map((line, i) => (
                                        <p key={i}>{line}</p>
                                    ))}
                                </div>                            </div>
                        </li>
                    ))}
                </ul>
            </section>
            <Analytics/>
            <SpeedInsights/>
        </div>
    );
};

export default Poesie;
