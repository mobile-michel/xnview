---
title: Trier les photos affichées
description: Lorem ipsum dolor sit amet - 3
layout: ../../layouts/MainLayout.astro
---

Quand vous affichez un dossier de photos ou une sélection de photos avec le filtre de catégories, il est possible de modifier l'ordre d'affichage des photos. Cliquez le petit triangle près du bouton avec deux flèches vertes, vous accédez à un certain nombre de critères de tri ou d'options, dont la plupart sont assez évidents. On accède aux mêmes options en utilisant le menu `Afficher, trier les fichiers par`.

![Bouton tri](/tutoriel/xnvmp21a.png)		

On peut d'abord choisir l'option `Ascendant` ou `Descendant` située en fin de liste. On trie habituellement les photos par leur nom puisqu'elles sont numérotées ou par date de prise de vue (date EXIF) pour avoir une chronologie, mais tout autre critère est utilisable.

Le choix "personnalisé" vous permet de déplacer les vignettes des photos une par une en les glissant avec la souris, toujours en restant dans le même dossier. XnViewMP va alors créer un fichier .XnViewSort dans le même dossier, ce fichier permettant de mémoriser l'ordre dans lequel vous avez disposé vos photos. Vous pouvez voir ou modifier le contenu de ce fichier, c'est un fichier texte.

Cette fonction de tri personnalisé peut être désactivée uniquement dans le fichier xnview.ini (paramétrage de XnViewMp). Il faut modifier la variable allowCustomOrder dans la section [browser]en mettant allowCustomOrder=false. Si vous parcourez un autre dossier, un clic sur le bouton aux deux flèches vertes relance le tri sur le critère précédemment utilisé.

Il y a enfin une dernière option `Voir l'entête`. Celle-ci affiche des sortes d'en-têtes de colonnes ressemblant à ce que je décris en fin de chapitre 1 (figure 2) mais en gardant l'affichage des vignettes.

![En-têtes](/tutoriel/xnvmp21)

De la même façon que décrit en fin de chapitre 1, avec un clic droit on peut modifier les en-têtes et ainsi obtenir de nouveaux critères de tri. Pour accéder plus facilement à tous les en-têtes de colonnes, passez provisoirement l'affichage en mode `Détails`, vous aurez un ascenseur horizontal en bas.

Tous les champs affichés dans les en-têtes peuvent servir de critère de tri. Dans la figure 41, c'est `Date EXIF` qui a été choisi. C'est très pratique de pouvoir en un seul clic réordonner les photos selon un critère de son choix.

En mode d'affichage `Détails`, vous pourrez ainsi très rapidement repérer n'importe quelle valeur (ou valeur manquante) dans une colonne. Une possibilité intéressante apparaît si vous utilisez des mots clés IPTC hiérarchisés (dont je parle en fin de chapitre 4 concernant l'option 5). Ce format de mot clés se prête parfaitement à un tri et en un clic vos photos seront affichées dans l'ordre de leurs catégories et sous-catégories.
