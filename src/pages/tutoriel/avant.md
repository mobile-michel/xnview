---
title: Avant-propos et installation
description: Lorem ipsum dolor sit amet - 3
layout: ../../layouts/MainLayout.astro
---

Parmi les logiciels gratuits pour un usage personnel, c'est pour moi LE logiciel de référence pour gérer les métadonnées. XnViewMP est à la fois une visionneuse de photos, un outil de retouche, un logiciel de catalogage et de tri de photos.

La fonction de visionneuse est assez intuitive et la retouche, qui un est vaste sujet, n'est pas l'objet de cette page. Je vais donc parler ici uniquement de l'aspect catalogage (ajouter des mots-clés et autres commentaires aux photos) et de tris des photos. Tous mes test sont réalisés sous Windows7, donc si vous utilisez Linux ou Mac OS, vous devrez probablement tenir compte de quelques différences d'ergonomie.

### Téléchargement et installation

Je suggère de télécharger XnViewMP en version portable (c'est à dire au format zip) et de le dézipper dans un dossier autre que les _program files_ de Windows. Paramétrez XnViewMP pour qu'il enregistre tous ses réglages au même endroit, ça facilitera les sauvegardes, les changements de version et les réinstallations. Pour cela, passez dans le menu `Outils, Paramètres, Rubrique Intégration, onglet Chemins` et dans chaque menu déroulant sélectionnez l'emplacement `Programme (Xnview)` ou `personnalisé`. Pour choisir la langue (Français) de XnViewMP, passez dans le menu `Outils, Paramètres, Général`.

### Métadonnées

Avant de _foncer_ dans l'utilisation de XnViewMP, prenez le temps de comprendre et de choisir l'endroit où devront être enregistrés vos mots-clés et métadonnées. Il y a des réglages à effectuer pour que XnViewMP écrive vos informations de manière standardisée et à l'abri de toute perte accidentelle.

En effet, il n'est pas prudent de laisser les catégories, marquages, étoiles, couleurs à la merci d'une fausse manipulation. J'insiste sur la nécessité d'assurer la pérennité du travail d'indexation que vous allez faire, en utilisant les métadonnées normalisées. Pérennité qui s'étend d'ailleurs à votre collection de photos, qui, une fois correctement indexée, sera beaucoup plus intéressante pour vos héritiers.

Dans cette page transparaissent des choix que j'ai fait pour ma propre gestion de photos, choix qui sont peut-être discutables. On va supposer que vous savez à quoi servent les métadonnées, ce que sont EXIF, IPTC ou XMP. Sinon, parcourez d'abord les autres pages de ce site.

Pour représenter le nom des métadonnées, j'ai choisi d'utiliser la syntaxe définie pour l'utilitaire ExifTool, qui ne comporte pas d'ambiguïté. Vous pouvez lire aussi dans le site Chez Iceman un court article qui explique bien le sujet. Plus technique, il y a aussi cet excellent document de Bogdan Hrastnik, traduit en français: Quelles métadonnées utiliser?

### IPTC, XMP

La plupart des manipulations décrites ici vont donc concerner les métadonnées IPTC ou XMP intégrées aux photos au format JPG. Pour vous décider sur le choix à faire entre IPTC et XMP, vous pouvez lire le paragraphe relatif à ce sujet en annexe.

### Sidecar

Il existe une autre forme de marquage, pour la norme XMP, qui consiste à écrire un fichier contenant les métadonnées _à côté_ de chaque photo. On nomme ces fichiers _sidecar_ ou _compagnons_. Ils portent le même nom que la photo qu'ils accompagnent, mais avec l'extension `.xmp` dans leur nom.

Cette méthode peut être utilisée pour les photos au format JPG, mais XnViewMP ne gère pas encore complètement ce type de marquage. La méthode est surtout adaptée aux photos au format RAW (NEF, CR2, MRW, ORF, etc), car ces formats d'image ne supportent pas les métadonnées intégrées. Les particularités de ce marquage par fichiers sidecar sont décrites dans le chapitre 7.

### EXIF

Quant aux données EXIF, il n'y a pas beaucoup d'interventions possibles sur leur contenu, qui est essentiellement constitué des données techniques enregistrées par l'appareil photo au moment de la prise de vue. Quelques champs ont été utilisés par le passé (commentaires, mots-clés, notation, etc), mais je considère qu'ils sont obsolètes.

Il reste à notre disposition, dans ce groupe EXIF, les données de géolocalisation GPS, les dates et heures des photos et la balise orientation. Pour éventuellement intervenir sur ces données, on utilsera les menus textuels en haut de la fenêtre de XnViewMP, je donnerai quelques indications dans différents chapitres.

### Système

On peut citer aussi les données "système" qui sont gérées par Windows (dates, tailles, types, dossiers, noms de fichiers) pour lesquelles XnViewMP offre quelques outils et traitements possibles (pour cet aspect, recherchez avec un Ctrl+F dans cette page le mot `système`).

### JPG

Le format JPG est très largement utilisé pour les photos et c'est ce format qui supporte le mieux l'ensemble des traitements et métadonnées décrits dans cette page. Une information importante sur le codage des fichiers JPG: quand on retouche une photo (couleurs, cadrage, etc), le logiciel de retouche décode l'image pour travailler dessus; à la fin, quand on enregistre, il réencode l'image. Ces opérations de décodage et réencodage dégradent la qualité de l'original et mieux vaut éviter de les répéter. Par contre, travailler sur les métadonnées ne nécessite aucune intervention sur l'image, vous pouvez donc passer autant de fois que vous le souhaitez pour les modifier.

## Gérer les métadonnées avec XnViewMP

Dans le chapitre 3, je décris un premier aspect du fonctionnement d'XnViewMP dans lequel on peut lire, ajouter ou retoucher quelques métadonnées classiques dans les photos, pour une prise de contact avec ce domaine et avec le logiciel, et découvrir quelques réglages. Cette première approche repose sur l'utilisation de la fenêtre `Editer les métadonnées iptc/xmp`.

Pour gérer ces métadonnées dans les images JPG, XnViewMP n'utilise pas Exiftool, ce qui le rend beaucoup plus rapide que d'autres logiciels quand on marque des centaines de photos d'un coup. Ces métadonnées "classiques" sont situées dans les deux groupes, IPTC et XMP, chaque métadonnée du groupe IPTC étant "mise en parallèle" avec une du groupe XMP.

En voici une liste partielle, je n'ai mis ici que les champs couramment utilisés par des particuliers:

![Métadonnées classiques](/tutoriel/xnview1.png)

### Les catégories

Mais le sujet central de cette page de documentation est abordé dans les chapitres 4, 5 et 6: il s'agit d'utiliser un outil de gestion des mots-clés qui prend la forme de "catégories".

### Attention aux confusions

Ne confondez pas les "catégories" de XnViewMP et les métadonnées (mots-clés), bien qu'elles soient souvent utilisées simultanément et qu'elles interagissent avec les mots clés. Les catégories (expliquées dans les chapitres 5 et 6) sont avant tout un outil de gestion du "catalogue" interne de XnViewMP alors que les métadonnées sont des informations normalisées (EXIF, IPTC, XMP) à écrire dans le fichier photo (ou "à côté" dans certains cas).

Il existe d'autres définitions du mot "catégories" dans l'univers des métadonnées, il faudra veiller à ne pas les confondre. Par exemple, pour DarkTable, le mot "catégorie" sert à désigner un cas particulier d'élément dans une hiérachie de mots-clés qui ne produit pas de mot-clé et ne sert qu'à les regrouper.

Dans XnViewMP, ce type de regroupement de mot-clés est plutôt proposé dans les `Groupes de catégories`. Autre confusion possible, il existe une métadonnées IPTC qui se nomme "catégorie", mais celle-ci est obsolète et n'est pratiquement plus utilisée.

### Fonctionnalités des catégories

Les catégories de XnViewMP permettent les opérations suivantes:
- mettre de façon pratique et rapide des mots-clés dans les photos;
- en utilisant les `Groupes de catégories`, le confort de saisie des mots-clés est encore meilleur;
- modifier des mots-clés dans des lots de photos;
- gérer des mots-clés hiérarchisés en respectant la forme Adobe Lightroom `XMP-Lr:HierarchicalSubject`;
- éventuellement créer une hiérarchie dans les mots-clés IPTC;
- créer des fichiers XMP compagnons ou sidecar pour vos photos au format RAW;
- gérer votre dictionnaire de mots-clés en exportant les catégories dans un fichier texte ou en important des dictionnaires vers les catégories;
- créer automatiquement une base de données interne à XnViewMP qui indexe les photos marquées par catégories pour faciliter ensuite les recherches;
- filtrer des photos par mots-clés pour réaliser des sélections ou des recherches multicritères;
- inclure des dossiers entiers de photos (avec sous-dossiers) contenant déjà des mots-clés:
- éventuellement cataloguer des fichiers autres que des photos, avec la même efficacité, mais sans métadonnées (voir Chapitre 11L).

Bonne lecture
