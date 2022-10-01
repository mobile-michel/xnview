---
title: Recherche rapide
description: Lorem ipsum dolor sit amet - 3
layout: ../../layouts/MainLayout.astro
---

La "Recherche rapide" est une fonctionnalité qui est irremplaçable pour certaines recherches, en particulier sur les données IPTC.
Elle est accessible dans la barre d'outils du browser, c'est à dire cette barre d'outils située au-dessus de la zone d'affichage des vignettes.
Elle se présente sous la forme d'une case de saisie illustrée par une loupe bleutée.

Paramètres de recherche
Les paramètres de fonctionnement de la recherche rapide sont situés dans Outils, Paramètres, Explorateur, onglet "Recherche rapide"
Il y a seulement trois cases à cocher :
La case Champs IPTC. Cocher cette case permet de faire des recherches sur les données IPTC.
Je préconise toujours, en 2020, de continuer à utiliser cette norme IPTC vieillissante parallèllement à XMP, justement parce que XnViewMP, dans beaucoup de ses fonctions, offre bien plus de possibilités avec IPTC qu'avec XMP.
Notez bien que la recherche rapide, avec cette option cochée, est presque* la seule solution dans XnViewMP pour trouver rapidement des informations dans les métadonnées autres que les mots-clés.
Il y a cependant une contrainte, c'est que la recherche ne porte que sur les photos affichées dans le browser (sans qu'il soit nécessaire de les sélectionner)

Les deux autres options, Commentaire intégré et Description concernent ces deux "pseudo métadonnées" dont je parle dans le chapitre 11T
C'est à dire que la recherche rapide peut aussi vous permettre de trouver rapidement les photos contenant tel ou tel mot dans ces deux champs.
N'étant pas un admirateur de ces deux métadonnées, je vais supposer dans l'exemple suivant que seule la case "Champs IPTC" est cochée

Et bien qu'il n'y ait aucun paramètre supplémentaire ici, il faut bien noter que la recherche rapide porte implicitement aussi sur les noms des fichiers.

Utilisation
Vous avez affiché les photos d'un dossier, commencez à écrire dans la case recherche le mot ou l'expression que vous recherchez.
Pendant la frappe au clavier, XnViewMP filtre les vignettes affichées en restreignant l'affichage des photos à celles qui correspondent à ce critère.
Les mots clés, ou catégories, aussi bien que les titres, légendes, lieux, auteurs , sont bien entendu utilisables en tant que critères.
Et comme indiqué au paragraphe précédent les noms de fichiers sont également traités par la recherche rapide.
Lorsque vous avez suffisamment affiné votre recherche, vous devriez pouvoir retrouver les photos qui vous intéressent, dans le dossier qui était à l'affichage.
Si vous voulez que la recherche s'effectue dans plusieurs dossiers, il va falloir trouver une méthode pour afficher toutes les photos de ces dossiers.

Affichage récursif
Le cas le plus simple est celui où il y a un dossier "parent" correspondant à l'étendue de votre recherche.
Par exemple, vous cherchez une photo contenant le mot "New York" dans l'ensemble des dossiers contenus dans le dossier 2017 :
Sélectionnez le dossier 2017, puis activez l'affichage récursif (Afficher, Voir les fichiers des sous-dossiers")
A ce stade, vous devez attendre que XnViewMP ait fini de tout afficher.
C'est là que le mot "Browser" que j'utilise à la place de "Explorateur" prend tout son sens : XnViewMP "browse" les photos, c'est à dire qu'il lit ou met à jour un certain nombre d'informations, en même temps qu'il rafraichit l'affichage des vignettes.
Si votre dossier 2017 contient 10 000 photos, cela va prendre un certain temps ...
Maintenant, il suffit d'écrire New Y... pour que seules les photos contenant ces quelques lettres dans une métadonnée IPTC soient affichées.
Et voilà.
Remarquez qu'il y a maintenant une petite croix noire pour effacer le critère dans la case de recherche, et obtenir à nouveau l'affichage de toutes les photos.

Recherche combinée
Il y a des cas où l'affichage récursif peut induire trop de lourdeur, si il vous amène à afficher des dizaines de milliers de photos.
Il va être alors utile de réaliser une première recherche, "normale", celle qui est décrite dans le chapitre 11R
Il peut être pertinent d'utiliser des critères sur les noms de dossiers, ou sur les catégories, afin de faire un premier tri et afficher un nombre plus restreint de photos.
A l'issue de cette première phase de recherche, vous aviez alors cliqué sur le bouton "Parcourir" et obtenu un certain nombre de photos dans le browser.
Vous pouvez maintenant entrer un critère dans "Recherche rapide" pour affiner avec précision votre recherche.

* J'ai écrit au début de ce petit chapitre que la recherche rapide est "presque" la seule solution pour faire des recherches dans toutes les métadonnées IPTC.
En fait, la recherche normale, celle du chapitre 11R, permet une recherche sur les métadonnées IPTC
- Soit en précisant le nom de la métadonnée dans laquelle on cherche, mais il faut qu'elle soit proposée ( par exemple City n'y est pas), et qu'on sache où chercher
(Pour le cas particulier de IPTC City qui est manquant, si vous avez dupliqué vos métadonnées en XMP, XMP City est disponible à la recherche)
- Soit en utilisant "Tous les champs" ce qui équivaut à utiliser la recherche rapide.
Mais l'ergonomie est un peu moins bonne, de nombreux clics sont nécessaires pour arriver au même résultat, et les tâtonnements sont moins intuitifs.
Comme pour la recherche rapide, la recherche sur "Tous les champs" est efficace, et va aussi nécessiter la lecture de tous les fichiers, à la recherche de l'information souhaitée.

En termes d'efficacité, la recherche rapide convient bien si vous avez déjà affiché l'ensemble de photos susceptibles de contenir votre critère, et si vous avez besoin de lancer plusieurs recherches rapides dans le cas où vos critères sont mal définis ou progressivement améliorés par essais successifs.
En revanche, si vos critères sont clairement fixés, mais que l'étendue des dossiers à parcourir est grande ou complexe, la fonction recherche ordinaire sera mieux adaptée.

Expression régulière
La case de recherche rapide supporte les "expressions régulières". Il s'agit d'une syntaxe précise qui permet quelques raffinements dans les recherches.
J'ai décrit la syntaxe des expressions régulières dans le chapitre 11R-3, je me bornerai ici à donner deux exemples simples :
Si vous écrivez ^Paris, vous rechercherez des informations commençant par Paris ... (les majuscules sont aussi significatives dans ce type de recherches)
Si vous écrivez Paris | Londres , vous afficherez les photos contenant Paris ou Londres