---
title: Importation de mots clés
description: Lorem ipsum dolor sit amet - 3
layout: ../../layouts/MainLayout.astro
---

l'exemple de la reconnaissance de personnes de Picasa  (15/10/2018)
Chapitre 11N top Chapitre 11R

Le mot "importation" a une signification différente dans XnViewMP par rapport à d'autres logiciels de catalogage.
Ordinairement, importer signifie "lire des métadonnées dans des dossiers, et les inclure dans la base de données du logiciel"
Comme indiqué au chapitre 2, l'outil "importer et trier" de XnViewMP n'a rien à voir avec cette définition.
C'est seulement dans l'écran paramètres (Outils, Paramètres,Métadonnées) que la notion d'importation est clairement conforme à la définition.
En effet, dans cet écran, la première case à cocher est : "Importer les mots clés xmp ou iptc dans les catégories DB"
A l'aide d'un exemple je vais essayer de synthétiser la mécanique à mettre en oeuvre pour importer correctement des mots clés présents dans des dossiers d'images.

Cet exemple, je l'ai mis en pratique en octobre 2018
Mes photos comportent déjà plusieurs métadonnées gérées dans XnViewMP : des mots clés, des lieux, des légendes, des marquages par étoiles.
J'ai souhaité ajouter les mots clés correspondant aux noms des personnes apparaissant sur les photos.
Si la reconnaissance de personnes de Picasa ne vous intéresse pas, sautez directement au paragraphe "Troisième phase" un peu plus bas.

Reconnaissance automatique de personnes
Plusieurs logiciels sont (ou ont été) capables de reconnaitre "automatiquement" des personnes sur les photos. (Picasa, Windows live photo gallery ...)
La reconnaissance "complète" de personnes par un logiciel inclut en général la localisation des visages dans des rectangles à l'intérieur des photos.
Je vais seulement m'intéresser ici aux noms des personnes, et laisser de côté cette notion de localisation, qui est bien trop lourde à mon goût.
En effet, si certaines photos devaient être tournées d'un quart de tour (ce qui est déjà source de bien des problèmes), ça deviendrait ingérable.
Ensuite, chaque éditeur de logiciel ayant choisi ses propres métadonnées, on se retrouve avec un tas d'infos disparates à repérer, convertir etc .
Et enfin, je ne vois pas de solution normalisée pour gérer ces localisations, en dehors des logiciels qui les ont créées.

Pour cette première phase, j'ai utilisé Picasa (le logiciel que Google a cessé de maintenir depuis plusieurs années, mais qui fonctionne toujours très bien)
J'ai tout d'abord désactivé dans Picasa la gestion de tous les dossiers, pour ne sélectionner que ceux que je veux traiter.
(Outils, Gestionnaire de dossiers); il faut mettre des croix rouges partout sauf dans un dossier de photos, 2017 par exemple.
En parcourant menus et options, j'ai désactivé aussi tout ce qui a un lien avec internet et le web.

 (14/11/2019) Mise à jour : Une option de Picasa est à activer pour écrire directement les noms des personnes dans un tag xmp.
Ce qui va simplifier les traitements énoncés ci-dessous, je vais devoir réécrire ce chapitre ...
Autre info, des versions des années 2012-2017 de Microsoft Windows Live Photo Gallery permettaient aussi de reconnaitre des personnes, le nom étant également écrit dans un tag xmp, mais pas le même; il s'agit de RegionPersonDisplayName.

Suite
Après quelques tatonnements, j'ai activé la reconnaissance de visages.
En nommant des personnes au début manuellement, Picasa apprend vite à les reconnaitre.
Chaque création d'une nouvelle personne affiche l'écran "Ajouter un contact" ; validez.
Quelques astuces apprises en pratiquant :
En colonne de gauche, utiliser l'arborescence "Personnes" au lieu de "Dossiers" ou "Albums"
En cours de travail, quand vous ajoutez des dossiers dans le gestionnaire de dossiers (2015, puis 2014 etc) , Picasa réalise une analyse des images (parfois plusieurs minutes); observez ensuite dans la liste "Personnes" l'apparition de points d'interrogation orange, ce sont des suggestions; cliquez sur la personne concernée, puis sur le bouton en haut à droite "afficher uniquement les suggestions ..."

Picasa suggestions
Figure 55
Vérifiez si tous les visages "suggérés" correspondent à la même personne, et cliquez le bouton "Tout confirmer". Si des personnes ne sont pas conformes dans la sélection, une croix marron permet de les écarter. Souvent, d'autres suggestions arrivent aussitôt, répétez l'opération.
Pour obtenir plus de suggestions (et travailler beaucoup plus vite), allez dans le menu "Outils, Paramètres" et tirez le "seuil de suggestions" vers la valeur 65 ...
Quand il n'y a plus de suggestions pour toutes les personnes, cliquez dans "Sans nom" et suivez les indications pour continuer à nommer des personnes.
Parfois, dans cette rubrique des "Sans nom" vous devrez cliquer sur "développer les groupes" pour continuer à nommer des personnes.
Voila pour Picasa. (remarquez au passage que Picasa a aussi indexé une quantité d'informations, en utilisant la case de recherche avec la loupe, en haut de l'écran)

Deuxième phase
Les données correspondant aux personnes sont stockées dans Picasa (et dans les fichiers Picasa.ini disséminés dans tous les dossiers) mais pas dans des métadonnées normalisées.
J'ai donc téléchargé un logiciel, AvPicFaceXmpTagger pour recopier les noms des personnes dans les mots clés IPTC et XMP.
Allez consulter le paragraphe consacré à AvPicFaceXmpTagger, dans ma page iptc logiciels vous y trouverez explications et paramètres.
Je suggère de traiter les dossiers progressivement, année par année avec ce logiciel.

Troisième phase
Maintenant que les photos contiennent les noms des personnes sous forme de mots clés IPTC et XMP, on va demander à XnViewMP de lire ces mots clés, pour les inclure dans le catalogue.
Dans l'écran "Outils, Paramètres,Métadonnées" il faut cocher l'option "Importer les mots clés XMP ou IPTC dans les catégories DB".
On va prendre un petit risque, et cocher en même temps la deuxième option "Exporter les catégories DB vers le sujet XMP et les mots clés IPTC"
J'ai toujours évité de cocher ces deux options en même temps, car parfois ça provoque un tas de doublons dans le catalogue.
Mais dans le cas décrit ici, c'est trop galère de revenir permuter les deux cases à chaque phase, on finit par oublier et ça induit des erreurs.
Pour corriger des anomalies décrites à la fin de ce paragraphe, on va le faire en agissant sur les catégories, et cette option d'exportation vers les mots clés va faire automatiquement la mise à jour dans les photos.
On peut aussi cocher "lecture des mots clés hiérarchiques" c'est pas plus cher. Les autres options restent dans l'état ou vous les laissez d'habitude.

Ces options étant réglées, il faudra sélectionner toutes les images concernées et utiliser la fonction "Mise à jour du catalogue avec les fichiers" du menu Afficher.
Dans l'exemple présent, j'ai traité les images de mon dossier "2017" et tous ses sous-dossiers : pour en sélectionner toutes les images il faut :
Sélectionner le dossier "2017" dans l'onglet "Dossiers", et avec un clic-droit choisir "Voir tous les fichiers (récursif)"
Vous pourrez alors, dans l'écran principal, sélectionner toutes les images en faisant un Ctrl A.
... et donc cliquer dans le menu Afficher, "Mise à jour du catalogue avec les fichiers". L'opération prend quelques instants.
Les mots clés hérités de Picasa que AvPicFaceXmpTagger a mis dans les photos sont maintenant dans le catalogue.
On devrait avoir terminé ... mais,

En cas d'anomalies
Il est possible que cette importation comporte quelques anomalies, vérifiez toute votre liste de catégories y compris dans le "Filtre des catégories"
La plus classique, c'est que des catégories racine se soient ajoutées dans votre liste de catégories, alors que vous auriez voulu qu'elles soient placées dans des branches de la hiérarchie.
Il y a aussi le cas des mots clés hiérachisés Lightroom, où AvPicFaceXmpTagger fait quelques approximations pas forcément visibles au premier abord.
On va donc corriger les catégories et, en même temps, automatiquement rectifier dans les photos les mots clés qui sont à l'origine du problème.

Phase de rectification des catégories
1) Catégories mal placées dans la hiérarchie.
Pour déplacer une catégorie, il faut éviter de créer une différence entre la catégorie et les mots clés contenus dans les photos.
 (20/10/2018) En attendant de trouver plus simple, voici les étapes:
- Sélectionnez le dossier dans lequel vous allez travailler (2006 par exemple)
- Dans le filtre des catégories, menu "correspond", choisissez "dossier courant (récursif)"
- Sélectionnez la catégorie incriminée dans le filtre des catégories, puis toutes les images obtenues.
- Dans le panneau des catégories, créez la même catégorie à l'endroit correct de la hiérarchie, et cochez la case. (toutes les photos sont restées sélectionnées)
- Décochez la catégorie qui était mal placée, puis relâchez la sélection en cliquant une seule photo, ou en sélectionnant autre chose dans le filtre.
- Allez vérifier au moins une image ayant subi ce changement.

2) La méthode la plus simple pour corriger les erreurs dans les mots clés Lightroom, c'est de simplement décocher et recocher une catégorie. L'erreur que j'ai constatée est l'absence de la catégorie racine ("famille") L'action décocher / cocher force XnViewMP à réécrire tous les mots clés hierarchisés, et il le fait rapidement et sans erreur, si vous marquez un temps entre décocher et cocher.
Vous pouvez lire le paragraphe 5D2 qui explique une première fois comment corriger ce cas, et revenir lire ici la fin de ce paragraphe.
 (20/10/2018) Pour faire cette manip sur un lot d'images, on va utiliser aussi le filtre des catégories.
- Sélectionnez le dossier dans lequel vous allez travailler (2006 par exemple)
- Dans le filtre des catégories, menu "correspond", choisissez "dossier courant (récursif)"
- Sélectionnez une catégorie parent ("famille" ou "personnes" ou "amis" selon vos choix) prenons par exemple "famille".
- Sélectionnez toutes les photos obtenues
- Décochez la catégorie famille, attendez un instant, et recochez-la. (Parfois, en allant trop vite, ça ne fonctionne pas)
Voila, vos mots clés hiérachisés sont réécrits correctement.
Retournez dans l'affichage d'un dossier quelconque et vérifiez les onglets IPTC et XMP du volet d'informations sur quelques photos.