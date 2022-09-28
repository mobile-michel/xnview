---
title: 9 - Notes et couleurs
description: Lorem ipsum dolor sit amet - 3
layout: ../../layouts/MainLayout.astro
---

Marquage des photos par étoiles ou couleurs
Un moyen rapide utilisé par de nombreux photographes pour faire un premier tri des photos consiste à utiliser des étoiles (ou "notes", "rating" en anglais)
Il existe un deuxième type de marquage des photos, les "libellés de couleur", dont le fonctionnement est similaire à celui des étoiles.
Je vais utiliser ici les mots "étoile" et "couleur" au lieu de "note" et "libellé de couleur", ça me paraît plus clair, même si on s'écarte des termes utilisés dans XnViewMP.

C'est une fonctionnalité qui existe depuis longtemps, ce qui signifie que les plus anciens marquages sont situés dans les métadonnées exif.
(Métadonnées : EXIF:IFD0:Rating et EXIF:IFD0:RatingPercent)
L'utilisation des "exif" dans ce but est progressivement abandonné, car on considère que les exif sont plutôt des données techniques gérées par l'appareil photo.
Rien n'interdit de continuer à les utiliser, mais la tendance récente est d'utiliser les métadonnées XMP pour ce marquage.
(Métadonnées : XMP:XMP-xmp:Rating et XMP:XMP-microsoft:RatingPercent)
L'explorateur de Windows 7 gère parfaitement ces quatre métadonnées de "rating", et les étoiles qui vont avec.
Je viens de voir qu'il a existé (chez Adobe) des métadonnées du groupe XAP dans les XMP ... xap:Rating ce qui promet des non-compatibilités...
et aussi des bugs liés au logiciel Nikon capture NX2.

Il y a des précautions à prendre, car la plupart des logiciels gèrent ce type de marquage essentiellement dans leur propre base de données, ce qui vous expose au risque de tout perdre en cas de plantage de la base de données, ou d'abandon du logiciel.
Pour XnViewMP, comme pour d'autres logiciels, pensez à vérifier votre paramétrage pour que le marquage se fasse dans les métadonnées des photos.
Dans notre cas : Outils, Paramètres, Métadonnées ; cochez la case "exporter la note vers xmp". Vous pouvez cocher également l'option "Exporter le libellé de couleur vers xmp"
D'autant que la manip de sauvegarde/récupération de la base de données que je décris ci-dessous (Chapitre 10 paragraphe 6) n'inclut pas les étoiles et couleurs

Les versions récentes de XnViewMP apportent des améliorations dans le fonctionnement des étoiles (lecture, mise à jour)
XnViewMP inscrit systématiquement les marquages par étoiles et par couleurs dans sa base de données dans les trois cas suivants:
- au moment ou on marque une photo, - lorsqu'on inclut des dossiers dans le catalogue, - lors de l'affichage des dossiers de photos dans le browser.
Depuis la V0.87 , étoiles et couleurs peuvent être inscrits dans un fichier xmp sidecar. Cochez l'option "mise à jour ou création du sidecar xmp" si vous utilisez ce type de marquage.
XnviewMP ne lit ni ne met à jour les étoiles dans les deux métadonnées EXIF qui ont été utilisées par d'autres logiciels dans les années 2000.
Si vous souhaitez rajeunir ces marquages exif en les recopiant en XMP, il faudra utiliser Exiftool, ou peut-être que l'explorateur de Windows suffirait (à essayer).
Avec la fonctionnalité "ouvrir avec" de XnViewMP, on doit pouvoir faire cette manip de recopie avec Exiftool. (-xmp:rating<exif:rating) et (-xmp:ratingpercent<exif:ratingpercent)
Allez voir les exemples du chapitre 11N pour paramétrer ces fonctions.

Marquage par étoiles ou couleurs
Vous pouvez marquer des lots de photos en faisant un clic-droit, menu "notes et libellés de couleur"
Pour les étoiles, avec la touche Ctrl, combinée avec un chiffre de 0 à 5 c'est plus efficace.
Pour un usage intensif, je suggère d'ajouter les étoiles dans la barre d'outils (choisissez les outils incluant "passer à la photo suivante", c'est toujours plus pratique)
L'ajout d'outils dans la barre d'outils est décrit en fin de chapitre 1
étoiles
Figure 36

De la même façon, vous pouvez aussi ajouter les libellés de couleur dans la barre d'outils.

Quand une photo est marquée par une étoile ou une couleur, le symbole correspondant est affiché en haut à gauche de la vignette.
Ces symboles, et les quelques autres situés autour des vignettes, sont décrits en fin de chapitre 1 (configuration de l'affichage)



Choix d'utilisation
Chaque photographe peut choisir sa propre façon de mettre en oeuvre et d'utiliser la notation par étoiles des photos; voici un exemple de ce qui est possible :
Mettre à priori deux étoiles sur toutes les photos; la signification de ces deux étoiles sera : "photo à évaluer"
Ensuite, un passage sur les photos ayant deux étoiles aura pour but de modifier la notation :
- Une étoile pour les photos à supprimer
- Trois étoiles pour des photos ordinaires
- Quatre étoiles pour les bonnes photos
- Cinq étoiles pour les très bonnes.
Mais c'est à chacun de faire son propre usage et ses propres choix.

Les couleurs On peut affecter une couleur parmi cinq (rouge, jaune, vert, bleu, violet)
L'affichage ce ces libellés de couleurs est géré dans le troisième onglet de l'écran Outils, Paramètres, Métadonnées.
On peut changer les libellés dans cet écran d'options pour y mettre des informations personnalisées, destinées à l'affichage.
Ordinairement, ces couleurs servent à organiser l'avancement du travail de tri des photos.
Mais n'importe quel usage peut y être associé (à trier, à sauvegarder, urgent, personnel, public, ... etc)
Pour XnViewMP, la métadonnée correspondante, XMP:XMP-xmp:Label (disons xmp:label), prend une valeur parmi cinq : red, yellow, green, blue, purple.

Mais il est possible dans certains logiciels de traduire les noms des couleurs dans la langue de l'utilisateur.
Ca signifie que les métadonnées xmp:label sont susceptibles de contenir des noms de couleurs dans diverses langues, et XnViewMP ne les reconnaitra pas ...
Voire même certains logiciels inscrivent des valeurs qui leur sont propres dans cette métadonnée (valeurs numériques 1,2,3,... par exemple pour Digikam)
Les cinq couleurs en anglais sont reconnues par défaut par XnViewMP lors de l'importation de photos. (red, yellow, green, blue, purple)
 (13/09/2019) Depuis la V0.93, une nouvelle gestion des labels de couleur est disponible dans l'onglet "Libellés" des options de métadonnées :
il est maintenant possible de lire et écrire les noms des couleurs de son choix, c'est surtout intéressant en lecture pour les autres langues.
Cette métadonnée manque donc de normalisation, à mon avis il aurait fallu utiliser des valeurs numériques, et les afficher ensuite selon son goût...


Filtrage par étoiles ou couleurs
On peut filtrer l'affichage des photos en fonction des étoiles ou des couleurs, j'en ai déjà parlé dans le milieu du chapitre 5B
La première façon de filtrer les photos par étoiles se fait dans le volet "filtre catégories" : l'utilisation est la même que pour les autres catégories.
- Soit, dans le filtre des catégories, vous cliquez seulement sur une étoile, et vous obtenez toutes les photos ayant cette note.
- Soit vous cliquez une catégorie, et, avec la touche Ctrl, vous sélectionnez en même temps une étoile. Vous obtenez alors les photos de la catégorie ayant cette note.
Pour cet usage, le menu "Correspond, n'importe lequel" ne s'applique qu'aux catégories, et pas aux notes, puisque c'est forcément un ET logique qui doit s'appliquer avec une note.

Par ailleurs, si vous sélectionnez plusieurs notes, c'est forcément un "OU" qui est appliqué (2 OU 3 étoiles) puisqu'il est impossible d'avoir deux notes différentes sur une photo.
Vérifiez aussi le choix entre "Global", "Dossier courant" et "Dossier courant récursif" pour préciser sur quel ensemble de photos vous appliquez le filtrage...

Pour l'utilisation des couleurs, le fonctionnement est exactement le même.
La forme générale est donc :
              (sélection de catégories en fonction du menu correspond) ET (note1 OU note2) ET (couleur1 OU couleur2)
En Français, ça s'exprime en disant : "afficher telle catégorie de photos, ayant telle ou telle note, et telle ou telle couleur"

 Il y avait des bugs résiduels en V0.92 : On ne pouvait pas combiner les "marques" et les autres filtres; ni combiner couleurs avec étoiles. A vérifier.
Dans les combinaisons "Couleur" ET plusieurs catégories, un OU est réalisé entre les catégories, même si "Correspond, Tous" est sélectionné.
Idem pour "Etoiles" ET plusieurs catégories..bug.

Il y a une autre méthode, offrant un peu plus de possibilités de filtrage, c'est d'utiliser le bouton de filtrage de la barre d'outils.
Je décris l'utilisation de ce bouton dans le chapitre 11 paragraphe 11D.

Affichage des étoiles ou couleurs
- Dans le browser, on peut afficher ou non les étoiles et couleurs sous forme d'icônes en haut à gauche de chaque vignette :
Passez dans Paramètres, (Explorateur) Vignette, Superposition des icônes; vous pouvez cocher ou non pour permettre l'affichage des icônes.
-  (15/12/2020) V0.98 Une autre possibilité d'affichage est proposée : on peut ajouter un libellé, sous chaque vignette :
Passez dans Paramètres, (Explorateur) Vignette, Libellés, faites passer l'option "Rating + color label" du côté droit du tableau
-  (15/12/2020) V0.98 L'affichage des étoiles et couleurs est également paramétrable pour le mode Vue ou Plein écran : Paramètres, Vue : Option "Show Rating & Label color"

Parenthèse : vous avez pu remarquer une notion de "Marquage" des photos dans le filtre des catégories (autres) ou dans certains menus...
Ce "Marquage" ne correspondant à aucune métadonnée, j'en parle peu, par exemple dans le milieu du chapître 5B