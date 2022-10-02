---
title: Transférer les métadonnées
description: Lorem ipsum dolor sit amet - 3
layout: ../../layouts/MainLayout.astro
---

C'est une nouvelle fonction apparue fin 2019 en version 0.94. Il s'agit de pouvoir recopier des métadonnées d'un champ à un autre sur un lot de photos. Les utilisations possibles sont plus étendues que ce à quoi on pourrait s'attendre à priori, car le terme métadonnée englobe aussi les noms et emplacements des fichiers.

Dans les versions précédentes de XnViewMP, on trouvait la même fonction dans l'onglet `Actions` des conversions par lots, mais avec une ergonomie moins commode et surtout un inconvénient important qui était que les images JPG étaient décodées puis réencodées par l'outil. On accède à la fonction `Transférer` dans le menu `Outils, Métadonnées`.

## La métadonnée à écrire

Le premier élément à choisir avec le bouton `Ajouter` et son `+` vert, est le nom de la métadonnée qui va recevoir une valeur. Les possibilités sont `Annotation`, `Commentaire`, `IPTC`, `EXIF`, `XMP`, ces trois derniers offrant chacun une liste de possibilités illustrées dans la figure 37a

![Transfert de métadonnées](/tutoriel/xnvmp50.png)

On remarque qu'il est possible ici d'écrire quelques données EXIF que XnViewMP n'avait jamais gérées. Les métadonnées qui me semblent manquantes dans ces listes sont, en EXIF XP Keywords, date de digitalisation, date de prise. Et en IPTC, Ville, Province, Etat. Comme on ne peut sélectionner en écriture qu'une métadonnée à la fois, il faudra créer plusieurs lignes pour mettre à jour simultanément des valeurs IPTC et XMP, comme illustré dans la figure ci-dessous où on a souhaité mettre le nom du dossier contenant les photos dans les métadonnées légende IPTC et XMP.

![Transfert de métadonnées](/tutoriel/xnvmp51.png)

Cet exemple illustre justement une des possibilités de cet outil qui permet de manipuler une info système, ici le nom de dossier. En effet, si vos photos étaient dans des dossiers à thème, vous pourrez faire entrer le nom de dossier dans les métadonnées de votre choix, comme les mots-clés, le titre ou la légende. De même, si vos photos ont des noms évocateurs, il peut être utile de faire entrer aussi le nom de la photo dans l'une de ces métadonnées.

## Les données source

Il est possible d'entrer en même temps plusieurs informations et du texte dans les cases, si vous voulez par exemple créer une légende "enrichie". La liste des métadonnées que l'on peut utiliser comme source de données apparaît en cliquant la flèche triangulaire à droite des cases.

Cette liste est très complète, hormis les métadonnées XMP dont j'espère l'arrivée dans une future version. Il y a cependant une astuce pour contourner cette absence: utilisez une autre métadonnée, par exemple IPTC Légende et modifiez le champ obtenu dans la case. Il suffit de remplacer {iptc:caption} par le champ que vous souhaitez, par exemple {XMP:City} et le tour est joué.

![Les données sources](/tutoriel/xnvmp52.png)

Attention cependant, cet outil "écrase" toute valeur qui pouvait exister dans la métadonnée cible, même si la nouvelle valeur est vide.

## Entrer les noms de dossiers dans les mots-clés

Un exemple de traitement qui me paraît possible est le suivant:

1. copier les noms de dossiers dans les mots clés IPTC. Vos photos sont dans des dossiers thématiques hiérarchisés, par exemple des plantes ou animaux classés dans des dossiers Genres, familles, espèces. Vous allez faire "entrer" cette hiérarchie de dossiers dans des mots-clés. Sélectionnez un ensemble de photos et allez dans `Outils, Métadonnées, Transférer`. Ajoutez `IPTC keywords` et, comme source, choisissez `Répertoire` puis lancez `Appliquer`. L'outil va donc mettre des chaines de caractères du genre "C:\Photos\reptiles\sauriens\lezards" dans les mots-clés IPTC des dossiers traités.
2. découper ces mots-clés IPTC et les importer en catégories distinctes. Dans vos options de métadonnées, validez `Importer les mots clés` et en lecture de mots-clés hiérarchisés, indiquez le séparateur `\`, afin d'obtenir des mots-clés hiérarchisés et séparés. Décochez l'option `Exporter les catégories`. Lancez une mise à jour du catalogue (`Afficher, Mise à jour du catalogue avec les fichiers`) en ayant sélectionné toutes les photos concernées. Maintenant, le catalogue contient bien les catégories hiérarchisées, mais les mots-clés IPTC sont encore chainés avec le caractère `\`. Nettoyez les catégories inutiles ou incorrectes (C:, photos, etc) en décochant les cases pour les photos concernées et supprimez les catégories vides.
3. mise à jour des mots-clés avec le catalogue. Si vous voulez avoir des mots-clés corrects, dans les options de métadonnées, décochez `importer`, cochez `exporter` et choisissez le type de mots-clés que vous souhaitez (IPTC, XMP, Sidecar). L'ensemble des photos concernées étant sélectionnées, lancez la mise à jour dans l'autre sens (`Afficher, mise à jour des fichiers avec le catalogue`). Après un temps de traitement, vos photos contiendront les mots clés correspondants, cette fois avec une forme correcte, en liste. Un bug présent jusqu'en V0.96 va empêcher la création des mots-clés IPTC avec cette fonction. Seuls les mots clés XMP sont inscrits dans les photos. En version V0.96.4, le bug est corrigé, les mots clés IPTC peuvent être également écrits.

Et donc vous disposerez du classement par catégories de vos photos, ces catégories étant équivalentes aux mots-clés inclus dans les photos. Les avantages sont nombreux: perennité de votre collection, standardisation, filtrages multicritères, etc. Et si de surcroit, vous voulez réorganiser votre archivage de photos par années, allez voir l'outil `Importer et trier` au chapitre 11H qui permet de déplacer et ranger les photos en fonction de leur date de prise.
