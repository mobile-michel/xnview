---
title: Le mode Vue et le mode Plein écran
description: Lorem ipsum dolor sit amet - 3
layout: ../../layouts/MainLayout.astro
---

Le mode vue (ou mode image)
Lorsque vous double-cliquez une vignette dans l'écran principal, celle-ci s'ouvre dans un nouvel onglet, qui occupe toute la surface de la fenêtre.
On peut ouvrir plusieurs images de cette façon, dans différents onglets visibles en haut de la fenêtre.
Ce nouvel affichage (mode "Vue" ou mode "Image") comporte des menus et des outils qui diffèrent notablement de ceux de l'écran principal.
En particulier, sont accessibles ici toutes les fonctions de retouche d'image de XnViewMP.
Comme ce n'est pas l'objet de cette documentation, je ne vais pas décrire l'impressionnante panoplie d'effets et réglages disponibles, mais seulement quelques fonctions que je trouves pratiques, ou plus ou moins en rapport avec les métadonnées et l'affichage des photos.

Les paramètres de cet affichage sont dans le menu Outils, Paramètres, Vue, dans lequel il y a trois onglets;
Le premier onglet sort du cadre de cette doc. Le deuxième , Divers, contient les réglages du "diaporama rapide" et quelques autres.
Dans le troisième onglet, Informations, on trouve la possibilité de spécifier les informations et métadonnées que l'on souhaite afficher en mode vue

barre outils vue
Figure 49a

La touche magique à utiliser en mode vue est la touche i du clavier pour afficher ces informations.
Plus bas on peut spécifier les informations qui figureront dans la barre de titre de la fenêtre principale; j'ai choisi d'y ajouter {directory} (répertoire) avant le nom de fichier.
Par contre, il ne semble pas possible de modifier les informations de la barre d'état en bas et c'est dommage car elle est pratique et lisible...

Voici un aperçu et quelques indications sur la barre d'outils standard qui apparaît en mode vue

barre outils vue
Figure 49b

Modifier la barre d'outils :
Cette barre d'outils est modifiable de la même façon que celle de l'écran principal. Il faut aller dans Outils, Paramètres, Interface, Barre d'outils.
Dans la boite à menu déroulant, en haut, sélectionnez "Mode Image" au lieu de "Explorateur", puis agissez dans le tableau d'outils comme indiqué à la fin du chapitre 1.
Pensez aussi à sauvegarder cette barre d'outils en même temps dans la fenêtre de personnalisation.

Description de quelques fonctions
Le bouton "Ajuster les couleurs" et la petite flèche blanche à côté permettent de faire rapidement les réglages les plus classiques de luminosité et de teinte.
Le bouton diaporama rapide va lancer un diaporama à partir de l'image affichée. C'est un bouton presque indispensable pour visualiser des photos résultant de filtrages ou tris.

Propriétés
Il y a un bouton "Informations" ou Propriétés, qui permet d'afficher les métadonnées de l'image dans une nouvelle fenêtre ; on y accède aussi avec un clic-droit.
L'avantage est que vous pouvez agrandir largement cette fenêtre, pour copier son contenu (clic-droit ...) et si votre image contient des données GPS, vous pourrez afficher confortablement Google Maps et Street View.
On peut aussi lancer GeoHack à partir des coordonnées GPS de l'image, en utilisant la dèrnière fonction à droite dans la barre d'outils.
Et il y a enfin un bouton pour ouvrir le mode "Plein écran"...

Le mode plein écran
Ce mode d'affichage, accessible aussi avec la touche F11 du clavier, offre quelques fonctionnalités
- un ruban d'images en approchant le pointeur de souris du haut de l'écran
- un affichage paramétrable d'informations ou métadonnées en haut à gauche
- un volet d'informations et d'affichage de métadonnées en approchant la souris du côté droit de l'écran
- des boutons précédent / suivant / lecture / pause au bas de l'image, ce mode "plein écran" fonctionnant comme un diaporama.
- si vos images résultent d'un filtrage, le mode plein écran vous offre donc instantanément (F11) un diaporama thématique.

Les paramètres du mode "plein écran" sont dans Outis, Options, (Vue), Plein écran.
On quitte le mode plein écran avec la touche Echap du clavier. On peut aussi refermer les onglets images avec cette touche.
Si vous gardez des onglets ouverts en quittant XnViewMP, celui-ci vous demandera dans une pop-up si vous souhaitez les mémoriser dans une "session".
Dans les paramètres, (Outis, Options, Général) il y a une boite de choix pour ces sessions d'onglets (Demander, Toujours, Jamais)