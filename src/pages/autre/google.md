---
title: Préparer des images pour Google Photos
description: Lorem ipsum dolor sit amet - 3
layout: ../../layouts/MainLayout.astro
---

Depuis que PicasaWeb a été remplacé par Google photos, il n'est plus possible d'afficher une légende sous les photos.
De plus, il n'est pas commode de remettre des photos dans un ordre précis, à moins de les déplacer une par une dans l'album.
On va donc faire ces deux actions dans XnViewMp, avant de transférer des images dans l'album Google.
.picasa.google.album.albumweb.google-photos
Préparez un nouveau dossier qui recevra les images, puis sélectionnez les images à traiter, et cliquez dans "Outils, Traitement par lots."
Tout d'abord, peut-être souhaiterez vous harmoniser la taille des images que vous aller mettre dans votre album.
Dans ce cas il vaut mieux que ce soit la première action, en utilsant le choix "Image, Redimensionner".
Je n'ai pas décrit cette fonction, elle n'est pas bien compliquée, et c'est un classique du traitement d'images.
Ajouter une légende
On va ajouter une zone de texte au bas de l'image, en ajoutant deux actions :
- La première consiste à ajouter une zone, avec le choix "Image, Recadrage", avec l'option "relatif", une hauteur de 150 pixels par exemple et la position "Haut"
("haut" signifie que l'image est poussée vers le haut dans la nouvelle surface agrandie de 150 pixels "relativement" à la taille originale)
- La deuxième action avec "Image, Texte", avec la position "bas à gauche", et avec des marges de quelques pixels pour recentrer un peu le texte.
Dans la grande case "Texte", dans l'exemple illustré ci-dessous, c'est la légende IPTC qui a été sélectionnée parmi un large choix de champs et de métadonnées proposés en cliquant la flèche triangulaire.
Si vous n'avez pas mis de légende, vous pouvez utiliser une autre donnée, ou simplement le nom de la photo.
En vous aidant de l'aperçu, vous pouvez ajuster les diverses dimensions, les marges, la taille de police, les couleurs et les effets dans les 4 onglets du bas.
Pensez à utiliser une couleur de texte différente de la zone ajoutée ... blanc sur blanc, c'est invisible !

Légende
Figure 61. Mettre une légende sur l'image.

Eventuellement, ajoutez d'autres actions si vous avez des traitements à effectuer sur les photos, puis passez aux derniers réglages :
Dans le deuxième onglet en haut, cliquez sur "Sortie" pour indiquer le nom du dossier qui va recevoir les images, et éventuellement retoucher le nom des images.
Si vous envoyez vos images modifiées dans un nouveau dossier(c'est mieux !), vous pourrez leur laisser le même nom = {Filename} dans la case nom.
Vérifiez que tous les autres réglages et options vous conviennent, et enfin cliquez sur le bouton "Convertir".
L'outil "Traitement par lots" va donc ajouter une bande au bas des images, contenant la légende IPTC de chacune.

Le classement
Classez à votre convenance les images que vous venez de créer, en utilisant l'un des nombreux outils disponibles dans XnViewMP (voir le Chapitre 11C)
Maintenant, on va attribuer une date et heure arbitraires à toutes les images, en les espaçant de 2 minutes.
En effet, Google photos se base sur les dates et heures des images pour les ordonner dans les albums.
Sélectionnez vos images classées, et cliquez dans "Outils, Modifier l'heure".
Vous choisirez "date et heure spécifiques", puis entrez une date quelconque, la date de l'évènement par exemple.
Mettez ensuite 120 secondes dans la case "Incrémenter à chaque fichier de"... puis dans le bas de la fenêtre, cochez les 5 cases à modifier.
Cliquez sur "tout écrire" et patientez un peu, cette opération n'est pas rapide.
Voilà vos photos sont légendées et datées de 2 en 2 minutes et il n'y a plus qu'à les uploader dans Google photos...
Si l'upload ne fonctionne pas bien, changez de navigateur pour un autre, basé sur Chrome.
Si nécéssaire, (modifiez l'album) puis "triez les photos" chez Google, cela classe automatiquement les images par ordre de dates.