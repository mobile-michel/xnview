---
title: 1 - Configuration de l'affichage
description: Lorem ipsum dolor sit amet - 3
layout: ../../layouts/MainLayout.astro
---

## Disposition

Vous pouvez ajuster l'affichage de l'écran principal à votre convenance en déplaçant les différentes zones d'affichage sans qu'elles se gênent. Ma méthode : Passez dans le menu Afficher, disposition, cliquer sur "Disposition 4".

Vous allez pouvoir ensuite déplacer les différents éléments dans la fenêtre en les attrapant par leur bandeau d'en-tête avec la souris. Si vous disposez de deux écrans, un certain nombre d'éléments d'affichage peuvent être mis sur le deuxième écran. Je n'ai pas fais de tests sur un système à deux écrans, mais c'est certainement très intéressant.

## La zone Catégories

Coller le panneau "Catégories" contre le bord droit, pour qu'il occupe toute la hauteur. Glisser aussi le "groupe de catégories" (qui est en bas) sur "Catégories", ils se recouvrent, on y accèdera par les onglets que vous voyez à droite.

On obtient pour le moment ce type d'affichage, en ayant sélectionné l'onglet Catégories à droite :

ecran principal
Figure 1a

Le bouton "Disposition" de la barre d'outils est illsutré sur la figure 1 , il permet de mémoriser les dispositions A, B, C, D, E. Cliquez ce bouton, et enregistrez cette disposition sous le nom "disposition A".

L'avantage de cette disposition, c'est d'utiliser toute la hauteur de l'écran pour les dossiers et les catégories. Pour limiter la taille des illustrations ici (Figures 1a et 1b), j'ai nettement réduit la zone des vignettes, ce n'est pas l'affichage normal.

## Les Dossiers

Par défaut dans cette disposition, vos dossiers sont en colonne à gauche, avec un petit onglet "Dossiers" si cette zone contient plusieurs écrans. Dans le menu Outils, Paramètres, Général vous pouvez choisir et fixer le dossier que vous voulez afficher à l'ouverture de XnViewMP. A gauche de cette zone il y a les onglets "Favoris" et "Filtre des catégories".

## Les vignettes

Au centre de l'écran il y a zone d'affichage principale pour les vignettes, et leurs "Libellés" en dessous. On verra plus loin que l'on peut choisir les libellés que l'on souhaite afficher.

## La zone Informations

Passer dans le menu Afficher, Volet d'informations, cochez toutes les options. L'une des options, "Afficher", est un choix à deux modes : afficher, ou ne pas afficher le volet d'informations ; laissez-le affiché. Maintenant, sélectionnez une photo dans l'écran principal.

Dans la zone Informations, on doit voir de 3 à 8 onglets selon le contenu de la photo: Propriétés, Histogramme, Exif, IPTC-IIM, XMP, ExifTool, GPS , Aperçu. (15/12/2020) V0.98 Dans la section [Preview] du fichier xnview.ini, modifiez la ligne showAlwaysTabs=true si vous souhaitez afficher tous les onglets, même vides.

## La zone Aperçu

Dans certains cas, l'aperçu est un onglet de la zone informations; Allez dans le menu "afficher, Volet d'informations", et décochez l'option "aperçu en onglet". Dans d'autres cas, il est indépendant, mais positionné SOUS la zone information, et accessible par un onglet situé en bas de cette zone, onglet qui va le ramener au premier plan.

Il est donc maintenant "seul" dans sa zone, muni d'un bandeau, et au premier plan. Attrapez le par le bandeau et glissez-le à droite de la zone Informations, sans pour autant bousculer les catégories.

Maintenant, l'aperçu de la photo est affiché à côté des autres informations, dans une fenêtre indépendante. Ajustez la largeur des colonnes de dossiers et de catégories, puis la hauteur de la zone Informations pour avoir un aperçu confortable. Enregistrez à nouveau cette disposition, (Disposition B par exemple) : ces réglages sont enregistrés dans le fichier xnview.ini et en cas de problème ou de nouvelle installation, vous pourrez retrouver cette disposition d'affichage.

Voici la disposition obtenue

ecran principal
Figure 1b

## La zone principale, les vignettes et libellés, paramétrage

La plus grande zone de l'écran affiche les vignettes, et on peut appeler cette zone "le navigateur" (ou "explorateur" ou "browser") bien que la zone "Dossiers" en fasse partie aussi. Dans cette zone principale d'affichage des vignettes, vous pouvez choisir les informations que vous souhaitez afficher sous chaque miniature : par défaut, le choix Vignettes + Libellés est sélectionné, et il est paramétrable (à mon sens, c'est le mode le plus pratique; voir aussi le paragraphe suivant "utilisation").

## Les libellés

Le paramétrage des libellés est situé dans le menu Outils, Paramètres, (explorateur) Vignettes, onglet Libellés. Dans cet onglet, on peut faire passer des informations du tableau de gauche vers celui de droite pour les ajouter sous les vignettes, ou au contraire les ramener de droite à gauche pour les enlever. Personnellement, j'affiche Filename, EXIF date taken, IPTC caption, IPTC Keywords, ce qui correspond à : Nom du fichier, Date de prise de vue, Légende, Mots clés.

(11/02/2021) Explorez également les nombreuses possibilités de libellés personnalisés :
- ajoutez un des libellés "Custom" proposés en bas de liste; quand vous l'avez passé du côté droit, sélectionnez-le.
- modifiez-le ensuite avec le bouton ">>" situé à droite de la case du bas. Vous pourrez choisir dans une liste de données exif, iptc, ou d'informations de fichiers.

On peut aussi mettre deux informations en une seule ligne pour économiser de la place Exemple : Custom 1: {IPTC:City} {IPTC:State}. Apparemment les champs XMP ne sont pas proposés, mais pour certains cas il y a une astuce: Notez au préalable le nom du champ XMP que vous souhaitez voir en libellé.

Ensuite, ajoutez un champ "Custom", puis validez un champ IPTC quelconque. Et enfin, modifiez-le... Par exemple, remplacez {IPTC:City} par {XMP:City}. Depuis la v0.98, on peut également ajouter les "Catégories" en tant que libellé : utilisez l'un des "Custom", puis modifiez-la case du bas en y écrivant {Catégories}.

Depuis la V0.99, les étoiles (notes) et libellés de couleurs ont été ajoutés en fin de liste. On peut aussi afficher des données en fonction de leur numéro de référence, mais je ne connais pas ce sujet. Exemple : Custom 5:{EXIF:x010F}.

## Info bulles

En ajoutant trop de libellés, vous perdez de la surface d'affichage pour les vignettes. Si vous souhaitez voir beaucoup d'informations, une solution consiste à en mettre une partie dans les info-bulles qui apparaissent au-dessus des vignettes.

Ces info-bulles sont paramétrables dans "Outils, Paramètres, Explorateur", dans le tableau sous l'option "utiliser les info-bulles". J'y ai mis les informations suivantes :

{Folder name}
Taille : {Width}x{Height} - {Size KB} K
Date Exif : {EXIF:Date taken [d/m/Y]}
Date modif : {Modified Date [d/m/Y]}
Ville : {IPTC:City} ({IPTC:State})
GPS : {EXIF:Latitude}{EXIF:Latitude Ref} {EXIF:Longitude}{EXIF:Longitude Ref}
ce qui me permet de retrouver des infos qui me sont utiles dans diverses situations (le nom de dossier après une recherche, et les infos de localisation).

Dans ces info-bulles, on est beaucoup moins limité en espace ! Comme pour les libellés, on peut ici aussi afficher quelques informations XMP, bien qu'elles ne soient pas proposées dans les listes de choix. Il suffit d'écrire ou de modifier manuellement le champ souhaité; exemple : {XMP:City}.

## Taille des vignettes

Il y a deux options principales pour la taille des vignettes (en cliquant les 9 carrés dans le coin en haut à droite): soit on fixe la taille de la vignette, soit le nombre de vignettes par ligne, le choix dépendra de vos habitudes d'utilisation du plein écran ou pas. Dans les deux cas, utilisez ensuite le curseur pour ajuster leur taille ou leur nombre.

La qualité des vignettes dépend d'autres réglages dans Outils, Paramètres, Explorateur, Vignette (plusieurs onglets), et Options, Catalogue (Chap 6). Vous pouvez gagner un peu de surface pour l'affichage des vignettes en réduisant les marges (Outils, Paramètres, (Explorateur), Vignettes, Apparence). En mettant Taille bord=2, Marge=0, Espacement=0, Utiliser l'ombre=non, vous pourrez utiliser des les vignettes bien plus grandes.

## Inclure ou exclure des fichiers dans l'affichage

Il y a des réglages pour afficher ou non certains types de fichiers dans le menu Outils, Paramètres, Explorateur, Liste des fichiers, onglet "Filtre personnalisé". J'ai peu étudié ces réglages, mais on peut par exemple décocher la case "Dossier parent" pour éviter de toujours avoir cette première vignette à l'écran.

## Les vignettes de dossiers

Lorsque vous affichez un dossier contenant lui-même des dossiers, il est possible de personnaliser leur apparence dans la zone centrale de l'écran. Choisissez d'abord si les dossiers doivent être affichés avec l'icône jaune par défaut, ou illustrés avec des miniatures des photos qu'ils contiennent.

Allez dans "Outils, Paramètres, (Explorateur), Liste Fichiers", onglet "Filtre personnalisé", puis reperez la ligne "Dossiers". En cochant la case de la deuxième colonne, "Voir en vignette" , vous pourrez utiliser des photos pour illustrer l'icône de dossier.

Ensuite, dans "Outils, Paramètres, (Explorateur), Vignette", la première option permet de choisir si vous utiliserez une ou quatre photos comme illustration. La ou les photos qui seront utilisées pour cela sont les premières dans l'ordre alphabétique des noms de fichiers. Par exemple les photos 10.jpg, 2.jpg, 3.jpg, a.jpg seront "triées" et choisies dans cet ordre là, si vous avez opté pour 4 vignettes.

Si vous avez besoin de rafraîchir les vignettes de dossiers, le moyen le plus efficace est de supprimer le dossier parent du catalogue. Allez dans "Outis, Paramètres, Catalogue", sélectionnez la ligne du dossier dont vous voulez rafraichir le contenu, et cliquez le bouton "Effacer".

Cette manip efface les données de ce dossier; affichez-le à nouveau afin que XnViewMP le réactualise dans sa base de données et rafraîchisse les vignettes. Autre méthode : si une photo est nommée "folder.jpg", celle-ci sera utilisée prioritairement (et seule) comme vignette de dossier.

## Aperçu de différents types de fichiers

La nature des fichiers pour lesquels l'aperçu est possible dépend de plusieurs paramètres, notamment "Outils, Paramètres, Liste de fichiers, Filtre personnalisé". Vérifiez dans ces options si le type de fichiers (extension) dont vous souhaitez voir l'aperçu est bien présent dans l'une des rubriques, sinon ajoutez-le.

Cela peut être très intéressant d'ajouter des fichiers de type texte (txt, ini, bat, xmp, log, conf, ion). Regardez aussi dans la ligne "exclure"où doivent figurer les fichiers que vous ne voulez pas afficher (cas des fichiers de type SVG par exemple).

## Utilisation

Dans Outils, Paramètres, Interface, Souris, j'ai opté pour "zoom avant/arrière" avec la molette de la souris, ça me permet de zoomer facilement dans les images (en mode "vue"). Mais surtout ce zoom à la molette fonctionne aussi dans l'aperçu et c'est fort utile pendant qu'on met des mots clés ou légendes dans les photos.

Il est possible d'obtenir temporairement l'affichage des photos des sous-dossiers : faites un clic-droit sur un nom de dossier dans le volet des dossiers et cliquez "Voir tous les fichiers, récursif" (à partir de V0.94, il y a aussi le menu "Afficher, voir les fichiers des sous-dossiers"). Et enfin, j'ai choisi un thème d'affichage gris neutre (Afficher, Thème, Thème sombre).

ecran principal
Figure 1c

Pendant votre travail de marquage de photos, vous pouvez basculer par moments sur un affichage en tableau; passez dans le menu Afficher, Afficher en, Détails. Cette fonction est aussi accessible avec le bouton "Afficher en" et son menu déroulant, situé juste à côté du curseur de réglage de taille des vignettes.

ecran principal
Figure 2a

Vous obtenez un grand tableau affichant la plupart des métadonnées IPTC de vos photos. En cliquant dans les en-têtes de colonnes, vous pouvez les déplacer, les élargir, trier le contenu en ordre croissant ou décroissant etc.
Avec un clic-droit sur les en-têtes, vous pouvez diminuer le nombre de colonnes affichées, ou en ajouter. Retrouvez ensuite l'affichage normal en remettant dans le menu Afficher, Afficher en, Vignettes + libellés. Une possibilité d'affichage qui conserve ces en-têtes de colonnes est très intéressante, elle est décrite dans le chapitre 11C, c'est l'option "Voir l'en-tête".

Souvent dans cette page, j'utilise le mot "browser" pour désigner cet écran principal d'affichage des vignettes. On pourrait utiliser le mot "navigateur" en français, mais le mot navigateur désigne surtout la zone d'affichage des dossiers qui est à gauche. Le mot browser a l'avantage d'être spécifique à la zone d'affichage des vignettes, et de contenir une notion de "traitement" des images, qui souligne le fait que les métadonnées sont lues pendant que les images sont affichées.

Une fonction importante et peu visible, "Voir les fichiers des sous-dossiers", consiste à afficher toutes les images des sous-dossiers du dossier actuellement affiché. Cette fonction est accessible soit par un bouton de la barre d'outils :

fichiers des sous-dossiers
Figure 2b

...soit en faisant un clic-droit sur le nom du dossier considéré, et en cliquant sur "Voir tous les fichiers (récursif)". A partir de V0.94, il y a aussi le menu "Afficher, Voir les fichiers des sous-dossiers". Ce type d'affichage récursif est indispensable pour travailler sur un ensemble d'images dispersées dans divers sous-dossiers, mais il n'est pas permanent, il faut le relancer en cas de besoin.

## Modifier la barre d'outils

La barre d'outils est complètement configurable : Passez dans Outils, Option, Interface, Barre d'outils... (ou, avec un clic-droit dessus, "Personnaliser la barre d'outils"). Pour ajouter un outil, sélectionnez-le dans la liste de gauche, et faites le passer dans la liste de droite en utilisant la flèche triangulaire orientée à droite.

Un outil déjà présent (dans la liste de droite) peut être supprimé (flèche vers la gauche), déplacé vers le début de liste (flèche vers le haut), ou vers la fin de liste (vers le bas). On peut agrémenter la barre de séparateurs, ou même ajouter une nouvelle barre d'outils (ces choix sont en début de liste).

Notez qu'il y a deux instances de la barre d'outils, l'une dans le mode "explorateur", l'autre dans le mode "image" quand une image est ouverte dans un onglet. Si vous avez modifié plein de choses dans les barres d'outils, il peut être utile d'enregistrer ces réglages, utilisez le bouton "Enregistrer" en haut à droite.

barre d'outils
Figure 2c

On peut également ajouter une "commande" dans la barre d'outils. Cette fonctionnalité vous permet de créer un bouton pour lancer un programme extérieur à XnViewMP. Après avoir fait passer l'intitulé "COMMANDE" dans la liste de droite, les trois boutons du bas (Commande, Libellé et Icône) vont permettre de faire le paramétrage.

Par exemple, vous pouvez ajouter un bouton qui va ouvrir votre éditeur photo favori pour retoucher une image sélectionnée. Personnellement, j'ai ajouté aussi un bouton qui ouvre Geosetter ... en attendant que XnViewMP permette de géotagguer les images de manière commode.

J'ai sauvegardé ce réglage, afin de le retrouver après un changement de version; l'emplacement de ce fichier est mémorisé (automatiquement ?) dans xnview.ini dans la ligne "toolbar=". Il y a un autre moyen pour lancer des programmes externes, permettant en plus d'ajouter des paramètres, c'est le menu "Ouvrir avec" décrit avec des exemples dans le chapitre 11N, fig 51.

## Une autre disposition

Choisissez "Disposition 7". Déplacez les "Catégories" et les "Groupes de catégories" et posez-les sur le panneau des dossiers à gauche. A droite, le volet d'informations est dans un onglet, caché par l'aperçu. Dans le menu "Afficher", mettez, puis enlevez "Aperçu en onglet".

L'aperçu est maintenant indépendant, en bas de l'écran. Posez-le en bas à droite, au-dessous du volet d'informations. Ajustez les proportions de chaque zone pour que l'aperçu et les informations les plus classiques soient correctement affichés. Les petits onglets à gauche de l'écran Dossiers, Catégories, Favoris etc peuvent être déplacés de haut en bas. Mettez vers le haut les plus utilisés.

L'avantage de cette disposition est de laisser plus d'espace aux vignettes, et une surface plus grande pour l'aperçu, surtout pour les photos verticales. Enregistrez cette dispostion en "disposition C" via la barre d'outils.

disposition7
Figure 2d

## Symboles affichés sur les vignettes

Il y a des options qui vous permettent d'afficher plusieurs symboles autour des vignettes. Ces options sont regroupées dans l'écran "Outils, Paramètres, Explorateur" et une sous-rubrique "Vignette". Une image valant mieux que de longs discours, vous trouverez dans la figure ci-dessous une illustration des différentes fonctionnalités.

affichage symboles
Figure 2e

Dans l'onglet libellés, vous définissez ce qui est affiché sous chaque vignette. Dans l'onglet superposition des icônes sont précisés l'affichage des symboles en bas à droite, et les marquages, étoiles, couleurs en haut à gauche.

Il y a également la bannière jaune qui indique que la photo est reliée à au moins une catégorie. Dans la rubrique Explorateur, premier onglet , c'est le contenu des info-bulles quand le curseur de souris est sur une image sélectionnée que vous pouvez largement personnaliser.

J'attire l'attention sur deux symboles discrets, le "GPS" qui s'affiche quand la photo contient des coordonnées, et le symbole avec une flèche tournante qui indique que l'image a été tournée automatiquement pour l'affichage (en lisant la balise EXIF rotation).

Pour augmenter la visibilité des icônes, vous pouvez les coloriser. Pour cela, créez d'abord un dossier "icons" dans le dossier de XnviewMP; puis copiez dedans une image nommée info.png . Cette image doit respecter la taille et la forme du modèle ci-dessous, que je donne à titre d'exemple.

## Icones colorées

Vous pouvez donc copier cette petite image, la modifier si besoin, et l'utiliser. Avec ces couleurs, on voit tout de suite les images ayant des données GPS.

## Le mode Vue et le mode Plein écran

Le mode vue consiste à afficher une photo sur toute la surface de la fenêtre de XnViewMP, dans un nouvel onglet, les onglets étant affichés en haut, zone où vous pouvez les refermer. Outre les onglets, ne restent accessibles que la barre d'outils du mode vue, la barre de titre et la barre d'état en bas.

En fonction des réglages de clics de souris (que vous avez pu modifier), en principe ce mode de visualisation s'ouvre lors d'un double clic sur une vignette. C'est dans ce mode d'affichage d'une photo que sont accessibles toutes les fonctions de retouche ; par contre, le travail sur les métadonnées n'est pas évident dans ce mode.

Le mode plein écran s'obtient entre-autres par la touche de fonction F11, et se referme de la même façon. La navigation d'une photo à l'autre se fait avec les touches du clavier, la touche Echap permet aussi de refermer le plein écran. Vous aurez plus de détails sur ces deux modes d'affichage dans le chapitre 11M
