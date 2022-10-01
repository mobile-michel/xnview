---
title: Traitement par lots
description: Lorem ipsum dolor sit amet - 3
layout: ../../layouts/MainLayout.astro
---

Avec cet outil, XnViewmp permet de nombreux traitements applicables à des lots de photos, et pas seulement des conversions.
Le nom de l'outil a changé en V0.94, il est plus représentatif des possibilités offertes (il se nommait anciennement "Conversion par lots")
Je ne pourrai pas détailler dans ce paragraphe tous les traitements graphiques ou les conversions, mais le premier exemple illustre une conversion, et la suite du paragraphe proposera quelques idées de traitement sur les métadonnées.

La fenêtre de conversion par lots (Menu Outils) possède 5 onglets : Source, Actions, Sortie, Statut, Paramètres

conversion
Figure 46

C'est l'onglet "Actions" qui est illustré dans la figure 46, pour un premier exemple.
J'ai ajouté trois actions dans cet onglet, dans le but de convertir des photos RAW en JPG.
La première action consiste à ajouter quelques métadonnées dans la photo pour le fun.
La deuxième pour renforcer les contours (réglé à 80%) et la troisième pour réduire le bruit.
Cette page n'étant pas destinée à faire un cours sur la conversion raw vers jpg, je n'en dirai pas plus, j'en suis d'ailleurs incapable.
Notez que dans le dernier onglet (paramètres) il y a un bouton justement pour affiner la lecture des fichiers raw pour ceux qui connaissent cette problématique.
Pour bien utiliser l'aperçu, il y a d'abord le bouton "aperçu" puis les onglets avant / après, les fonctions zoom, et les flèches précédent/suivant.
Pensez également à agrandir notablement la fenêtre, c'est nettement mieux !

 (01/10/2018) Attention, la plupart de ces traitements (tous ?) lisent et réencodent les images jpg, avec les pertes de qualité qui en découlent.
A la fin, vous cliquerez sur "Convertir"

Les autres onglets de la fenêtre sont assez clairs, lisez tout de même attentivement toutes les options qui y figurent pour faire les réglages qui vous conviennent.
En particulier les onglets "source" et "sortie" définissent les emplacements des photos avant et après conversion: ne vous embrouillez pas.
Si vous souhaitez enregistrer vos paramètres de conversion, il y a en bas de la fenêtre un bouton avec une disquette pour cela.
Par la suite, vos pourrez rappeler ces réglages en utilisant le menu déroulant de la case de nom de fichier.

 Autre précaution à prendre, certains réglages réalisés ici deviennent des réglages généraux de XnViewMP, ce qui peut ne pas être souhaitable.
Par exemple, les paramètres de format jpg de l'onglet "Sortie" deviennent des réglages généraux pour XnViewMP !

Traitement par lots sur les métadonnées

(26/11/2019) A partir de la version V0.94, XnViewMP dispose de l'outil "Options, Métadonnées, Transférer" qui remplace avantageusement les fonctionnalités de recopie de métadonnées ici décrites. Voir le (nouveau) chapitre 11A

 En version V0.96.1 (et suivantes ?) il semble que la gestion de métadonnées ne fonctionne plus dans le traitement par lots, et même supprime l'ensemble des métadonnées.

Mais si vous avez au moins un traitement à réaliser avec cet outil, vous pouvez en profiter pour travailler simultanément sur les métadonnées.
En effet, cet outil décode et réencode l'image JPG, c'est une opération qui en dégrade la qualité, et donc qu'il faut éviter si ce n'est pas nécessaire.
Les rares cas d'utilisation seront ceux ou vous faites traitement induisant un décodage de l'image, et en même temps une manip sur les métadonnées.

Il y a donc l'action IPTC-IIM/XMP, que vous pouvez "déplier" ou "replier" en cliquant la flèche triangulaire noire;
On retrouve dans cette rubrique tous les champs iptc ou xmp de la fenêtre "Editer les métadonnées" (la fenêtre Ctrl i), à quelques détails près;
En particulier les derniers réglages, en fin de liste, que vous devez refaire car ils sont indépendants de ceux fixés dans la fenêtre d'édition de métadonnées (Ctrl i) :
Remettez le choix "IPTC, mise à jour ou création XMP" par exemple, si tel est votre choix.

En élargissant suffisamment la fenêtre, vous verrez qu'il y a au bout de chaque champ une flèche vers le bas pour accéder à l'historique de saisie, et une autre flèche orientée à droite, qui permet de choisir des données que vous souhaiteriez voir recopiées dans le champ sélectionné.
Il est donc possible avec cet outil de recopier des informations provenant d'autres métadonnées, ou des dates, des noms de dossiers, de fichiers etc ... dans telle ou telle métadonnée de votre choix.

Autre utilisation, si vous souhaitez ajouter un ensemble de métadonnées toutes identiques à vos photos (par exemple auteur, crédits, copyright...), il suffit de renseigner une fois les divers champs, et enregistrer. Mais là encore, une autre fonction mieux adaptée existe, avec les "Modèles" de la fenêtre "Editer IPTC/XMP"

Remarquez que dans les différents champs proposés, la molette de souris fait défiler votre historique de saisie (cet historique est stocké dans le fichier iptc.ini).