---
title: 2 - Nettoyage des catégories et base de données, reconstruction
description: Lorem ipsum dolor sit amet - 3
layout: ../../layouts/MainLayout.astro
---

Cette phase n'est pas forcément utile au premier abord, mais tôt ou tard, il faudra y revenir ...
Si vous avez fait des tests avant de vous lancer, si vous avez mis dans le catalogue des infos qu'il fallait ne pas mettre etc ... autant démarrer "propre".
Il y a des cas également où l'on souhaite repartir sur une base nouvelle, on peut là aussi "tout nettoyer".
Attention cependant, assurez-vous avant de tout effacer, que vous avez sauvegardé les informations que vous souhaitez ne pas perdre.
Les méthodes décrites ici ne sont valables que si vous êtes sûr que les informations de la base de données figurent AUSSI sous forme de métadonnées inscrites dans les photos.

Commencez par désactiver des options :
Passez dans Outils, Paramètres, Métadonnées, premier onglet IPTC et XMP, décochez toutes les cases.
(vous remettrez ensuite des options en lisant le paragraphe 4 Paramétrage des options de gestion des métadonnées)

Ensuite, dans Outils, Paramètres, Catalogue, Cliquez le bouton effacer tout, puis cliquez sur Optimisation : dans cette fenêtre intitulée maintenance du catalogue, cochez toutes les cases de suppression (sauf la première donc), et enfin cliquez Ok.
Une fois l'effacement terminé, revenez dans la même fenêtre optimisation, et remettez les coches à leur état initial :

maintenance catalogue
Figure 3

Il m'est arrivé que le bouton "effacer tout" ne fonctionne pas ... La solution est de fermer XnviewMP, et de supprimer ou de renommer le fichier XnView.db (renommé en XnView.db.old, c'est réversible). Redémarrer XnviewMP et reprendre le nettoyage comme indiqué.


Effacer les catégories
Allez tout d'abord lire le paragraphe "Gestion des catégories: Exporter ou importer" au milieu du chapitre 5
Il faut surtout s'assurer de ne pas perdre d'informations avant de tout effacer. Au minimum, faites une copie de sauvegarde du fichier xnview.db

Pour tout effacer, sélectionnez une photo; (c'est indispensable pour pouvoir agir dans les catégories)
Dans la zone "Catégories" à droite de l'écran, cliquez la flèche triangulaire pointe en bas, puis "gestion des catégories", puis "supprimer tout"
J'ai testé cette manip d'effacement : c'est du brutal, ça efface instantanément toutes les catégories !
 Et cela vide aussi la base de données.
Remarque en passant, il vaut mieux créer tout de suite une catégorie (vide) avant de passer à la suite, car XnviewMP semble mal gérer une absence totale de catégories.
Voila pour le nettoyage.

Vous pourrez maintenant importer des dossiers de photos afin de reconstruire la base de données.
 (08/06/2021) Ce terme, "importer", mérite quelques précisions.
Dans la plupart des logiciels de catalogage, il décrit l'action de "lire les métadonnées existant dans les photos pour construire une base de données"
A partir de la version V0.98.3 de XnViewMP, dans l'écran "Paramètres, Catalogue", le libellé du bouton d'importation a été clarifié : "Import Folders"
Bien qu'il ne soit pas encore traduit en français, il précise exactement l'action réalisée au sens classique du mot importer.
Ce mot apparait également dans les options de métadonnées (Importer les mots-clés XMP ou IPTC dans les catégories DB), cette option est nécéssaire pour que l'importation fonctionne.
Les métadonnées que XnViewMP peut importer sont celles qui sont enregistrées dans le catalogue :
Il s'agit des mots-clés, des notes (étoiles) et couleurs, et depuis les versions V0.98, des informations de reconnaissance de visages réalisées par d'autres logiciels.
La lecture des mots-clés va nécessiter des réglages et des précautions décrits en détail dans les chapitres 4 à 7, notamment si vous voulez préparer vos catégories pour qu'elles "accueillent" les photos contenant les mots-clés correspondants.

Pour info, le mot "Importer" apparait aussi dans un autre menu (Outils, Importer et trier), mais dans ce cas il ne s'agit que d'une copie de dossiers d'images provenant par exemple d'une carte mémoire.


Reconstruire entièrement la base de données (le catalogue)
Votre base de données fonctionnait plus ou moins bien, et vous avez décidé de la reconstruire.
Vous avez d'abord procédé au nettoyage décrit ci-dessus
Dans l'écran "Outils, Paramètres,Métadonnées" il faut :
- cocher l'option "Importer les mots clés XMP ou IPTC dans les catégories DB"
- décocher la suivante "Exporter les catégories DB vers le sujet XMP et les mots clés IPTC"
- cocher "lecture des mots clés hiérarchiques"
- cocher "Importer les champs XMP face" si vous voulez récupérer l'dentification de visages qui a pu être réalisée par d'autres logiciels.
Ensuite, dans la rubrique suivante "Catalogue", laissez de préférence la case "répertoire de base pour les images" vide, et cliquer sur le bouton Ajouter dossier Import folder
Spécifiez les dossiers contenant les photos dont vous voulez qu'elles soient prises en compte dans la base de données.
Répetez cette étape d'importation si il y a plusieurs dossiers de photos à inclure dans le catalogue.
Si vous décidez d'ajouter d'un seul coup le dossier racine contenant toutes vous photos, XnViewMp va reconsruire entièrement la base de données, ce qui peut prendre plusieurs dizaines de minutes.
Parenthèse : En V0.90, le bouton Ajouter dossier semblait ne pas très bien fonctionner; Il y a une autre solution qui consiste à sélectionner le lot d'images dans le browser, et utiliser la fonction "Mise à jour du catalogue avec les fichiers" du menu Afficher.

Pour info, il y a une autre méthode pour sauvegarder au moins en partie (exporter ou importer) la base de données de XnViewMP (="le catalogue"), moins radicale que la reconstruction : voir ce paragraphe