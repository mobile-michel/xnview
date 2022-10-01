---
title: Personnaliser XnViewMP
description: Lorem ipsum dolor sit amet - 3
layout: ../../layouts/MainLayout.astro
---

Ce chapitre montre les bénéfices qu'on peut obtenir en réalisant quelques personnalisations ou ajout d'outils supplémentaires.
La plupart des sujets ont déjà été décrits dans les chapitres précédents, mais j'ai souhaité rassembler ici l'ensemble des possibilités en mettant l'accent sur les bénéfices escomptés.
Il y a un sujet que j'ai peu abordé, qui est celui de pouvoir rassembler tous les paramètres de personnalisation au même endroit, de manière à pouvoir les gérer.
C'est à dire qu'ils puissent résister à des changements de version, aussi bien de XnViewMP que des éventuels programmes externes utilisés, ainsi que d'en faire des sauvegardes.
Pour le moment, disons que je crée un dossier "Perso" dans le dossier d'installation de XnViewMP, et que je mets dedans ou je copie tout ce qui peut y être mis.
Il faudra un jour que je mette au point une explication plus précise ...

Personnalisation de l'affichage principal
Cet aspect est décrit dans le chapitre 1 ; la disposition des éléments de l'écran principal, les libellés, info-bulles, aperçu, vignettes et icônes etc...
Tout ceci est largement personnalisable, et permet d'améliorer le confort d'utilisation et la lisibilité des informations qui vous sont utiles.

Le menu "Ouvrir avec ..."
Cette fonctionnalité permet de faire appel à des programmes externes simplement avec un clic-droit sur une image ou un lot d'images.
Le paramétrage de cette fonction se fait en cliquant dans "Outils, Ouvrir avec, Configurer les programmes".
La méthode détaillée est décrite dans le chapitre 11N, à partir des exemples d'utilisation de l'utilitaire ExifTool.
Les appels à d'autres programmes externes se feront en suivant la même méthode.
Par exemple, vous voulez assembler une série de photos en un panoramique; vous avez ajouté l'appel à un logiciel d'assemblage (comme Panaustik) dans "Ouvrir avec"
Sélectionnez votre lot d'images, Clic-droit, Ouvrir avec, Panaustik ... et hop, vous pouvez faire la manip.

Allez aussi lire l'exemple 8 du chapitre 11N qui montre comment créer un fichier GPX de cette façon.

A mon avis, cette fonction "Ouvrir avec" peut se limiter à des cas d'utilisation peu fréquente, car il y a une autre méthode pour les actions fréquemment utilisées.
Elle offre cependant une possibilité intéressante pour aller vite dans tous les cas, car une combinaison de touches clavier est associée à chaque fonction que vous aurez créée.

Boutons supplémentaires dans les barres d'outils
La méthode de personnalisation des barres d'outils est aussi décrite dans le chapitre 1, modification des barres d'outils
On peut donc déplacer des boutons existants, ajouter des boutons correspondant à d'autres fonctions de XnviewMP, ou créer des boutons pour lancer des programmes externes.
Pour reprendre un exemple déjà évoqué, l'appel à un programme de retouche externe, Photofiltre.
Photofiltre est un éditeur graphique gratuit, que j'ai copié en version portable dans mon dossier C:\Utils, à l'emplacement suivant C:\Utils\Photofiltre6\PhotoFiltre6.exe
Dans l'écran "Paramètres, Interface, Barre d'outils" , j'ai sélectionné "-- COMMANDE-- " que j'ai fait passer vers le côté droit avec la flèche triangulaire ;
Cette commande étant ensuite sélectionnée à droite, le bouton "Commande" permet d'aller sélectionner le programme à l'emplacement où il réside.
Si besoin, modifiez l'icône de nouveau bouton, ou le libellé associé, Libellé qui apparaitra sous forme d'info-bulle au survol du bouton.
Vous pouvez ensuite le déplacer vers le début de liste avec la flèche montante, ou vers la fin de liste avec l'autre flèche.

Pour retoucher une photo qui est sélectionnée dans votre écran XnViewMP, il suffira alors d'un clic sur le bouton Photofiltre.

Choisir des icônes
Toujours dans le but d'améliorer le confort visuel, et donc la rapidité des actions, ne négligez pas d'associer de jolies icônes à vos boutons personnalisés.
Personnellement j'utilise des fichiers de 64 x 64 pixels de type PNG ou GIF comme icônes, fichiers que je réalise avec Photofiltre à partir d'exemples trouvés sur Internet.
Par exemple, j'ai ajouté un bouton pour la fonction "Outils, Métadonnées, Editer les données GPS" puis j'y ai associé une icône.
De même pour la fonction "Outils, Modifier l'heure" visible aussi ci-dessous.

Barre d'outils
Figure 62

Autres exemples
Les icônes 38 et 13 que vous voyez à gauche correspondent à des fichiers batch (Grenoble.bat et Marseille.bat) qui lancent l'écriture de métadonnées de localisation avec ExifTool
Je ne détaille pas ici l'ensemble de la méthode, mais vous pouvez vous inspirer de l'exemple 8 du chapitre 11N , ou étudier le paragraphe Exiftool avec un fichier batch de ma page ExifTool.
Puis créer un nouveau bouton de type "--COMMANDE--" qui pointe vers chaque fichier batch. Le libellé associé au bouton (Grenoble ou Marseille) y apporte une précision élégante.
Ces boutons me permettent en 1 seul clic d'entrer 4 métadonnées dans les photos sélectionnées (Ville et région en IPTC et XMP )
La commande exifTool est : exiftool.exe -overwrite_original "-iptc:city=Grenoble" "-xmp:city=Grenoble" "-iptc:Province-State=38" "-xmp:State=38" %*   pour Grenoble.
Ayant des milliers de photos où je dois ajouter ces informations, je vous assure que le confort d'utilisation est incomparable.

L'icône "Loupe" pointe également vers un fichier batch, celui-ci me permet de trouver instantanément un élément quelconque dans un fichier préétabli contenant la (longue) liste de mes dossiers de photos.

Et enfin un dernier détail, les petites icônes grises qui se superposent aux vignettes du navigateur (Exif, Iptc, Xmp, Gps, rotation, etc ...)
Ces icônes sont activées ou désactivées dans le menu "Paramètres, (Explorateur), Vignettes, Superposition des icônes"

J'ai souhaité leur donner des couleurs vives pour les rendre bien plus repérables, et ainsi observer facilement la présence ou l'absence de certaines informations.
Pour cela, il faut créer un dossier "icons" dans le dossier d'installation de XnViewMP, et y ajouter une image nommée info.png
L'image doit respecter des dimensions précises (11 x 169 pixels), et sera alors utilisée en priorité par rapport aux icones grises du système.
Voic l'image que j'utilise, vous pouvez la télécharger et l'utiliser.
Icones superposition
Figure 63

Les groupes de catégories
Si vous utilisez l'outil "Catégories" pour mettre des mots clés dans vos photos, il est probable que votre liste de catégories devienne assez longue.
Et si cette liste est très longue et détaillée, cela ralentit votre travail d'indexation. Il peut être pertinent d'utiliser alors les groupes de catégories.
Par exemple, vous avez des catégories concernant une collection, des personnes, des voyages, des activités professionnelles...
Si vous construisez un groupe de catégories pour chacun de ces cas, le nombre de catégories y sera très inférieur, et de plus, elles seront sous forme de boutons.
Là encore il y a un gain de temps et de confort qui justifie largement l'effort de préparation que l'on y consacre.
Le paragraphe groupes de catégories du chapitre 5A en décrit la mise en oeuvre.

Les raccourcis
Un raccourci clavier peut être défini pour affecter une catégorie; la méthode est décrite dans le paragraphe Edition des catégories du chapitre 5C.
Ce raccourci est d'une efficacité impressionnante, mais il faut une certaine rigueur et de l'habitude pour bien s'en servir.

Et si vous n'utilisez pas les catégories pour mettre des mots-clés dans vos photos, il est temps de vous y mettre !