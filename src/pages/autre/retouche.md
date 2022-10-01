---
title: Retouche externe et préserver les métadonnées
description: Lorem ipsum dolor sit amet - 3
layout: ../../layouts/MainLayout.astro
---

Lorsque je dois réaliser des retouches sur certaines zones des photos, j'utilise un logiciel de retouche, Photofiltre en l'occurence.
J'ai donc paramétré un nouveau bouton de la barre d'outils pour ouvrir une photo directement dans Photofiltre.
C'est très pratique: il suffit de sélectionner la photo et cliquer le bouton.
Il y a un inconvénient, c'est que je souhaite préserver : les métadonnées, les dimensions de l'image, une partie de son nom et son emplacement.
Or, ces quatre éléments ne sont pas commodes à préserver avec Photofiltre, notamment les métadonnées XMP qui sont effacées. J'ai donc recours à une astuce :
Je laisse l'image originale ouverte dans XnviewMP, je fais les retouches dans Photofiltre, et, à la fin, je copie l'image résultat et je vais la coller sur l'original dans XnViewMP.
Avant de sauvegarder, je change légèrement le nom de l'image (je garde toujours un original non modifié de la photo)
De cette façon, XnViewMP sauvegarde toutes les informations à l'identique dans la nouvelle photo.
Il y a des paramètres à vérfier, dans l'écran Outils, Paramètres, Formats, Ecriture, onglet JPEG :
Les 3 ou 4 cases du bas doivent rester cochées, et vérifiez aussi le curseur Qualité qui devrait rester au moins à 80 ou 90.
Dans le passé, je n'ai pas toujours procédé de cette façon et j'ai perdu quelques milliers de tags XMP et de dates EXIF de prise de vue.