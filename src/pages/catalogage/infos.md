---
title: Informations générales
description: 
layout: ../../layouts/MainLayout.astro
---

## Le catalogage des photos {#1a}

J'ai décrit cette notion dans une autre [page d'introduction](https://orchisere.pagesperso-orange.fr/logiciels/html/intro.htm), je vous conseille d'aller la lire, ça prend 5 minutes. Mais pour les lecteurs pressés, voici un résumé: pour cette première description, considérons que nous ne parlons que de photos au format JPG qui est le format le plus répandu. Dans les explications qui suivront, je préciserai au besoin les particularités liées aux autres formats d'images.

Les buts du catalogage tel que je souhaite le pratiquer sont:

- avoir des photos rangées de la manière la plus simple possible afin de pouvoir aisément en faire des sauvegardes et éviter les doublons;
- ne pas confondre rangement des photos et catalogage, ce sont deux tâches indépendantes;
- ajouter des informations liées à chaque photo pour en qualifier le contenu et éventuellement leur adjoindre une légende;
- ajouter des mots-clés ou d'autres informations de classement pour retrouver facilement une photo ou un ensemble de photos à partir de différents critères;
- pouvoir spécifier des critères de recherche, de tri et d'affichage pour obtenir des sélections de photos ciblées, par exemple pour générer un diaporama thématique;
- pouvoir se dispenser de renommer les photos une par une ou de les classer dans une kyrielle de sous-dossiers;
- avoir la maitrise totale des informations que le logiciel de catalogage inscrit dans les photos;

En résumé, il s'agit de valoriser vos photos, que ce soit pour votre famille et vos descendants, pour une collection, une utilisation naturaliste ou toute autre exploitation d'un nombre important de photos. Ce catalogage représente un travail important qu'il est possible de mener en plusieurs étapes, en partant des plus générales pour éventellement finir avec plus de détails quand vous en aurez goûté les bénéfices. Les techniques que je vais décrire reposent sur des normes qui se sont grandement stabilisées en une trentaine d'années et donc en minimisant le risque d'être prisonnier de normes à l'abandon, trop liées à une marque ou un éditeur de logiciels.

## Pourquoi choisir XnViewMP {#1b}

### Visionneuse, logiciel de retouche, logiciel de catalogage

XnViewMP est un logiciel gratuit pour un usage personnel, successeur de XnView, et du même auteur, P.E. Gougelet. C'est à la fois une visionneuse de photos, un outil de retouche d'images, et un logiciel de catalogage et de tri des photos. Il peut être installé sur des machines avec Windows, Linux ou Mac OS, MP signifiant Multi-Plateformes. Il y a quelques différences de fonctions entre XnView Classic et XnViewMP, mais le catalogage est bien plus abouti dans XnViewMP.

La fonction de visionneuse est assez intuitive, même si certaines astuces que je décris en détail dans le tuto méritent d'être expliquées. XnViewMP est aussi un logiciel de retouche d'images. La retouche est un trop vaste sujet, et ce n'est pas l'objet de ces pages. Et donc, même si XnViewMP est une excellente visionneuse et un logiciel de retouche commode, je ne décrirai pas ces fonctions ici. Il reste donc le dernier sujet que je vais très largement développer, le catalogage des photos.

### Choisir un logiciel de catalogage

Pourquoi choisir XnViewMP plutôt qu'un autre logiciel de catalogage? XnViewMP répond parfaitement à tous les critères que j'ai mis en avant dans le [paragraphe 1A](#1a). D'autre part, j'essaie ici d'atteindre un objectif, qui est d'aider un utilisateur à démarrer du bon pied en matière de catalogage. Or, le choix éclairé d'un logiciel impose des essais, des questionnements et une bonne compréhension du sujet.

Tout ceci ne peut s'obtenir que par la mise en pratique directe et XnViewMP me parait être le meilleur logiciel pour débuter sans risque. Les points forts de XnViewMP sont la gratuité, l'excellente conformité aux normes, l'éventail de métadonnées proposées, les possibilités de personnalisation, la qualité de la présentation, la grande richesse d'outils disponibles et une ergonomie correcte.

Les points faibles: La base de données est limitée en choix de critères de recherche, le paramétrage un peu compliqué, la gestion du catalogue pas évidente en cas de problème (le catalogue est une base de données interne du logiciel) et une mise au point pas complètement finalisée qui implique de faire des mises à jour de temps en temps.

Par ailleurs, l'offre de logiciels gratuits, bien que riche en première analyse, s'avère être finalement assez restreinte. Vous pouvez aller voir cette [autre page](https://orchisere.pagesperso-orange.fr/logiciels/html/IPTClogiciel.htm) de mon site où j'ai mis quelques informations sur beaucoup d'autres logiciels. En résumé, démarrez avec XnViewMP et vous pourrez ensuite très facilement passer à un autre logiciel si le besoin s'en fait sentir.

Un aparté sur Picasa qui est un logiciel toujours parfaitement fonctionnel, même s'il a été abandonné par Google depuis plusieurs années. Picasa est un bon complément à XnViewMP: vous mettez des mots-clés, des légendes ou d'autres informations dans vos photos avec XnViewMP et, sans aucun effort supplémentaire, Picasa vous permettra de tirer le meilleur parti de ces informations.

De plus, Picasa a une fonctionnalité de reconnaissance de visages dont les résultats peuvent être utilisés dans XnViewMP. Vous trouverez dans le tutoriel des conseils pour télécharger et installer XnViewMP, je suggère de télécharger une version portable au format zip afin de l'installer dans un dossier qui ne soit pas verrouillé par Windows. Je propose aussi de rassembler tous les fichiers de paramétrage dans le même dossier.

## Les autres méthodes que je déconseille {#1c}

### Le classement thématique

Le classement thématique des photos est un casse-tête. Tôt ou tard, dans ce sytème, vous aurez des doublons de photos, des groupes redondants, trop généraux, trop détaillés ou à l'abandon.

À moins d'avoir des critères restreints et fixés (des stocks de pièces détachées par exemple), dans tous les autres cas l'utilisation de mots-clés est nettement plus efficace. Si vous avez déjà beaucoup de photos classées par thèmes, XnViewMP peut transformer les noms des dossiers en mots-clés (voir fin du chapitre 11A du tutoriel).

### Le nommage des photos pour qualifier leur contenu

C'est beaucoup trop long à réaliser (une par une). Ce n'est pas assez souple en termes de critères pertinents à y faire figurer et trop restreint pour apporter des compléments d'information. Ne permet pas facilement des tris multi-critères. Vous risquez de mettre le même nom sur plusieurs photos.

Renommer les photos avec leur date de prise de vue n'apporte pas de bénéfice non plus par rapport à un logiciel de catalogage, la date étant déjà intégrée aux photos. Et si vous souhaitez tout de même renommer vos photos, XnViewMP peut le faire en masse en utilisant des informations existantes ou que vous aurez ajoutées aux photos.

### Écrire sur les images

Que ce soit sur l'image directement, ce qui la déteriore irrémédiablement ou dans un bandeau ajouté sous la photo, là encore cela prend beaucoup de temps. Ça vous amène à éditer une ou plusieurs fois l'image ce qui en dégrade la qualité (inhérente au codage / décodage JPG). Ça ne permet aucune fonction de tri, de classement ou de recherche.

Comme pour les renommages, XnViewMP peut automatiser l'ajout d'un texte en bas des photos en recopiant des données existantes (Chapitre 11V du tutoriel). En résumé, il est bien plus efficace d'associer d'abord des informations aux photos sous forme de métadonnées, comme on va le voir plus loin. Ensuite, il y a des méthodes simples dans XnViewMP pour automatiser des travaux de titrage, renommages, tris, etc.

## Ranger les photos {#1d}

Le rangement des photos est totalement indépendant du catalogage des photos. On peut donc mettre au point une méthode de rangement simple qui puisse faciliter les sauvegardes, sans autre contrainte. Là encore, c'est un vaste sujet donnant lieu à de nombreux débats, mais il me semble incontournable de faire des dossiers chronologiques.

Afin de garder une taille raisonnable à ces dossiers, vous pouvez vous baser sur ces estimations:
- si vous faites moins de 50 photos par mois, soit environ 500 par an, créez un dossier par année, et mettez les photos dedans;
- si vous faites souvent plus de 100 photos par mois, faites des sous-dossiers chronologiques mensuels par exemple;
- si la chronologie est importante pour vous, ajoutez des précisions à vos noms de sous-dossiers, il y en aura donc plus de 12 par an et vous aurez une vision des évènements de chaque année;
- si vous mitraillez beaucoup, dans chaque dossier mensuel faites des sous-dossiers par dates, de la forme `2020-03-21 Confinement dans mon quartier`.

Tout est question de compromis: il est parfaitement possible de laisser 10'000 photos dans un seul dossier, mais seule une machine saura s'y retrouver. À l'inverse, si vous créez un trop grand nombre de sous-dossiers, vous y passerez beaucoup de temps, pas forcément utilement.

Personnellement, mes dossiers annuels contiennent chacun une bonne trentaine de sous-dossiers dont la plupart portent des noms évocateurs. Je retrouve ainsi en un instant des photos de vacances d'été en 2005 sous la forme `\Photos\2005\2005-07-03 Vacances été Bretagne`.

Le fait de laisser les photos groupées par dates conserve le contexte des photos, ce qui m'a souvent aidé pour retrouver des informations oubliées. Évitez les accents et caractères spéciaux dans les dossiers, contentez-vous du tiret ou du tiret bas et hiérarchisez dans l'ordre An/Mois/Jour.

Et si vos photos sont déjà partiellement classées, il n'est pas du tout indispensable d'en modifier le rangement pour commencer à les cataloguer. Si vous modifiez ensuite votre rangement avec XnViewMP, celui-ci tiendra à jour son catalogue (dans lequel il note l'emplacement des photos).

## Métadonnées {#1e}

Le fondement des méthodes de catalogage, ce sont les métadonnées. Les métadonnées sont des informations qui sont ajoutées à une photo numérique. Pour faire une analogie avec les photos papier, ce seraient des informations de référencement, des légendes, des dates, etc. écrites au dos de la photo. Au fil du temps, des organismes de normalisation ont fixé des standards afin que les métadonnées numériques puissent être lues ou écrites de manière standardisée.

La norme la plus ancienne est EXIF. Elle a plus de 30 ans et est toujours utilisée. Dans les années 1990-2000, quelques utilisateurs y ont inscrit des légendes, des mots-clés, des copyrights mais cette méthode est obsolète. Désormais les données EXIF sont écrites uniquement par l'appareil photo au moment de la prise de vue. On y trouve surtout des données techniques de prise de vue et, plus utile, des dates et des coordonnées GPS. Hormis ces deux dernières sortes de données qu'on peut ajouter ou corriger, il n'y a aucune raison de modifier les données EXIF d'une photo.

IPTC et XMP. Ce sont deux normes de métadonnées assez proches, offrant un grand nombre de possibilités que je vais abondamment décrire dans ces pages. IPTC est plus ancienne, mais encore utilisée par certains logiciels, quelques sites web et dans certaines fonctions de XnViewMP. XMP est la norme ayant le meilleur avenir et elle est capable de reprendre la plupart des informations des deux autres groupes.

En l'état actuel des normes (2021), des sites d'hébergement d'images et des logiciels, y compris XnViewMP, je préconise d'utiliser IPTC et XMP en même temps. Je pense qu'on pourra abandonner IPTC dans quelques années.

### Cas particuliers

Certains utilisateurs refusent absolument qu'un quelconque logiciel aille modifier leurs photos. D'autre part, certains formats d'image ne supportent pas les normes IPTC et XMP, en particulier les images RAW des appareils photos performants. Dans ce dernier cas, il est toujours possible de générer des copies des photos au format JPG afin de les cataloguer aisément.

Dans tous les cas, il existe une solution qui consiste à enregistrer les métadonnées (seulement XMP) dans un fichier annexe à la photo. Ces fichiers annexes portent le même nom que la photo, mais avec un suffixe différent (XMP). On les appelle fichiers compagnons ou "sidecar". Par la suite, chaque photo et son fichier sidecar devront être gérés "en couple" pour toute modification ou déplacement des photos.

Une dernière technique, utilisable dans XnViewMP, c'est d'interdire l'écriture de métadonnées dans les photos. Les informations que vous ajoutez sont alors très limitées et inscrites uniquement dans un fichier interne de XnViewMP (le catalogue), ce qui vous expose au risque de perdre tout votre travail en cas de plantage ou d'abandon du logiciel. Évidemment, je déconseille cette dernière méthode.

## Quelles métadonnées utiliser {#1f}

Les métadonnées les plus classiques et les plus simples à utiliser sont: `Légende, Titre, Mots-clés`. Ces trois champs existent parallèlement dans les deux normes (IPTC et XMP dont j'ai suggéré de les utiliser simultanément).

A mon goût, pour un particulier, la notion de titre a peu d'intérêt, si la `Légende` est bien faite. Les mots-clés que je considère essentiels nécessitent une explication assez détaillée qui viendra dans le paragraphe suivant.

Pour moi, il est utile de renseigner aussi le lieu où la photo a été prise. Nous avons deux autres métadonnées disponibles: Ville et Région. Les nouvelles régions en France n'apportant pas grand chose d'utile, j'ai décidé de mettre le numéro de département dans `Région`. On peut aussi utiliser le champ `Pays`, mais comme je voyage peu à l'étranger, j'utilise plutôt le département 99 dans ce cas (et pour un ciel, le département 00).

Je propose donc d'utiliser: `Légende, Ville, Département, Mots-clés`. Pour saisir les mots-clés, nous utiliserons l'outil `Catégories` décrit au chapitre 2. Et pour saisir `Légende, Ville, Département`, nous utiliserons l'écran `Éditer les métadonnées IPTC` décrit au chapitre 3.

Un autre élément important, c'est la date à laquelle la photo a été prise. En général, cette date est déjà inscrite dans la métadonnée `Date taken` ou `Date Time Original`. Considérons pour le moment que c'est bon, le sujet des dates est en fait très compliqué. Parfois il faut les ajuster, parfois il faut les récupérer à partir d'autres informations. Pour plus d'informations sur les dates, je vous renvoie au chapitre 11J du tutoriel.

Évidemment, vous pouvez faire vos propres choix sur les métadonnées que vous trouvez pertinentes, j'ai donné mes préférences à titre d'exemple. Mais tenez compte de ceci: le travail que représente l'écriture de ces informations augmente très vite si vous en augmentez le nombre. Je vous suggère de choisir un lot de photos de test et d'essayer d'y entrer deux informations maximum, `Légende et Ville` par exemple afin de tâter le terrain.

Une lecture utile, c'est cet excellent document de Bogdan Hrastnik, traduit en français: [Quelles métadonnées utiliser](https://exiftool.org/gui/articles/where_what-fr.pdf).

Il est parfois compliqué de s'entendre sur les noms des métadonnées qui dépendent des traductions, des logiciels et des auteurs. J'ai choisi d'utiliser la syntaxe définie pour l'utilitaire ExifTool, qui est assez répandue et qui ne comporte pas d'ambiguïté. En voici une [documentation exhaustive](https://exiftool.org/TagNames.pdf). Vous verrez un peu plus bas dans le chapitre 2A un tableau qui récapitule une dizaine de métadonnées classiques gérées par XnViewMP.

## Les mots-clés {#1g}

Si vous ne souhaitez pas utiliser des mots-clés (parce que c'est trop de boulot ou que ça ne vous est pas utile), vous pouvez abandonner la lecture de catte page car pratiquement toute ma "démonstration" repose sur leur utilisation. À la rigueur, on peut se contenter de mettre des légendes dans les photos, ça ne permettra pas de faire des tris très pertinents avec XnViewMP, mais c'est vite fait et Picasa pourra en tirer parti facilement. Faites l'essai!

Bon, allons-y pour les mots-clés: ils seront adaptés à vos photos, c'est à dire que c'est vous qui les choisirez. Vous allez donc petit à petit constituer votre propre "dictionnaire" de mots-clés, en évitant d'en inventer trop ou trop peu.

Pour les cas particuliers (botanique, zoologie), vous pouvez télécharger sur Internet des dictionnaires déjà constitués (des thésaurus). Bien que prudent dans ce domaine, je suis rapidement arrivé à plus de 150 mots-clés sans compter ceux des orchidées.

Cette liste étant devenue longue et pas pratique à utiliser, il m'est apparu indispensable d'utiliser des mots clés hiérarchisés. J'étais réticent au début, car ils sont (un tout petit peu) plus compliqués à gérer et moins bien normalisés. Mais finalement, c'est bien pratique.

Voici les métadonnées correspondantes, chacune pouvant recevoir les mots-clés:
- IPTC:Keywords;
- XMP-dc:Subject;
- XMP-Lr:HierarchicalSubject.

On observe que la troisième est destinée à "porter" la notion de hiérarchie. En fait, il est possible aussi de gérer une hiérarchie dans la première, IPTC:Keywords, mais c'est mal normalisé et peu utilisé.

Dans XnViewMP, c'est la fonctionnalité `Catégories` qui va permettre d'ajouter les mots-clés et, plus généralement, d'en faire toute la gestion. Il y aura donc un parallèle solide entre catégories et mots-clés, mais ce n'est pas du tout la même chose: les mots-clés sont inscrits dans des métadonnées IPTC et XMP normalisées, alors que les catégories de XnViewMP sont une représentation de ces mots-clés à l'écran, en même temps que des informations dans une base de données (le catalogue).

## Vocabulaire utilisé avec XnViewMP {#1h}

### Le browser

La partie centrale de l'écran de XnViewMP, divisée en deux, est nommée `Le browser`. C'est un vilain mot anglais, mais ce mot contient une notion de "traitement" de données que ne reflèterait pas bien le mot "navigateur". De plus, on pourrait comprendre de façon restrictive "le navigateur" comme étant la partie gauche où sont affichés les dossiers et dans laquelle on navigue.

Donc, les dossiers et sous-dossiers sont affichés à gauche du browser et les miniatures des photos du dossier actif sont affichées à droite. Il y a une zone `Informations` plus bas qui contient de 3 à 8 onglets selon le contenu de la photo: `Propriétés, Histogramme, Exif, IPTC-IIM, XMP, ExifTool, GPS, Aperçu`.

Il existe encore différentes zones d'écran: les catégories, le filtre de catégories, les groupes de catégories, les favoris, la zone information, l'aperçu. Retenez ces noms, car toutes ces zones sont ajustables. En fait, on peut personnaliser très profondément l'apparence et la disposition des éléments et outils.

À un tel point que cela dépasse ma capacité à tout expliquer, même dans le tutoriel. Pour les principales fonctions de personnalisation, vous pouvez consulter le chapitre 1 du tutoriel, "Configuration de l'affichage".

### Le catalogue

C'est le nom donné à la base de données interne de XnViewMP. Quand XnViewMP est fermé, ce catalogue est enregistré dans le fichier XnView.db. Le catalogue fait la liaison entre une photo, son emplacement dans l'ordinateur et les catégories attribuées à la photo.

### Les catégories

Portez une attention particulière à ce mot car dans d'autres logiciels il a une signification différente. Il a été aussi utilisé pour une métadonnée IPTC, la `Catégorie IPTC`. Cette métadonnée, bien qu'elle ne soit plus utilisée, apparait encore dans quelques cas dans XnViewMP.

Je précise donc à nouveau, les `Catégories` de XnViewMP sont un ensemble de fonctionnalités en rapport étroit avec les mots-clés, correspondant aussi à des informations du catalogue, donc globalement c'est un outil logiciel pour que vous puissiez gérer facilement vos mots-clés aussi bien en écriture qu'en filtrage.

### Les autres marquages

Il existe trois formes supplémentaires de marques relativement bien normalisées qui peuvent être ajoutées aux photos:
- les `Étoiles` (rating en anglais) qui vont de 1 à 5 étoiles pour qualifier vos photos;
- les `Étiquettes de couleurs` (color labels) qui permettent de catégoriser d'une autre façon les photos;
- les `Personnes`, il existe des métadonnées pouvant contenir les noms des personnes figurant sur les photos.

Ces trois types de marquage sont également enregistrés dans le catalogue de XnViewMP.
