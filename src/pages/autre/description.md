---
title: Description et Commentaire intégré
description: Lorem ipsum dolor sit amet - 3
layout: ../../layouts/MainLayout.astro
---

En plus des métadonnées exif, iptc et xmp, vous avez pu voir passer dans quelques exemples des métadonnées "système".
Je désigne par ce mot des données gérées par Windows (ou Linux, ou Mac OS), données qui ne sont pas spécifiques aux photos, mais concernent aussi la plupart des fichiers.
Dans ces données "système" j'inclus les noms de fichiers, de dossiers, les dates et heures de création, de modification, d'accès, la taille, le codage etc...
Deux autres données peuvent être rapprochées de ces données système :

Le champ Commentaire ou Annotation
Il existe une donnée que vous avez pu voir dans des menus ou des copies d'écran, qui se nomme "Commentaire intégré" ou "Annotation".
Il s'agit d'un champ commentaire, qui n'est ni exif, ni iptc, ni xmp, dans lequel XnViewMp peut lire et écrire du texte.
Je ne connais pas l'origine de ce champ, ni quelle est son utilisation habituelle, mais il semble bien intégré aux données système.

Le champ Description
Une deuxième donnée ayant une utilisation similaire, bien qu'ayant un fonctionnement très différent, c'est "Description".
Celle-ci semble commune à plusieurs logiciels (Total Commander ? AcdSee ? ...) et consiste à créer un fichier caché nommé descript.ion
Il est créé un fichier par dossier, contenant des informations sous forme de texte, informations que l'utilisateur à ajoutées dans une ou plusieurs photos.
Ce n'est donc pas une info système, mais plutôt un artifice logiciel pour lier des information texte à des images.

Edition
Pour écrire ou modifier des informations dans ces deux données ou "champs", faites un clic-droit sur une photo, et choisissez "Modifier le commentaire"
Il y a une case à cocher pour chacune de ces données, et une case supplémentaire en bas pour travailler simultanément sur les deux.
Il est possible de travailler sur un lot de photos, un bouton supplémentaire "Ecrire tous" apparaîtra alors.

Normes ?
Je ne sais pas pourquoi ces deux données existent, peut-être sont-elles antérieures à la création de l'IPTC, ou destinées à d'autres types de fichiers.
Je n'ai pas étudié non plus quels sont les types de fichiers qui supportent ces deux données, ni les types d'encodage (jeux de caractères) supportés.
Apparemment, les photos JPG les supportent, et je recommande pour les Français l'utilisation de l'encodage UTF8
Le paramétrage se fait dans Outils, Paramètres, Métadonnées, Encodage, commentaire.

Affichage
Pour visualiser ces données, regardez dans le premier onglet "Propriétés" de la zone Informations :
- En fin de liste du groupe "Fichier", un champ "mémo" représente la donnée descript.ion
- Dans le groupe "Image" (le groupe Images !), en bas, on trouve "commentaire intégré".
Je suppose qu'il est possible aussi d'utiliser ces deux données dans divers paramétrages d'affichage de XnViewMp (labels, info bulles, ...)
On peut également lire le commentaire intégré dans l'onglet ExifTool, dans le groupe "File", donnée "Comment", puisque ExifTool lit aussi les infos système.

Utilisation
Dans la plupart des boites déroulantes permettant de choisir des métadonnées pour les outils de XnViewMp, ces deux données sont disponibles.
Je ne vois pas l'intérêt d'y ajouter des informations, elles sont anciennes, peu ou pas normalisées, et je préconise plutôt d'utiliser les métadonnées "normales"
En revanche, si elles contiennent déjà des informations, il est utile de les transcrire dans les métadonnées iptc ou xmp avec les outils de XnViewMp.
Il est peut-être amusant de comparer le contenu d'un fichier descript.ion et un fichier obtenu par "Créer une liste de fichiers" du paragraphe 11B.