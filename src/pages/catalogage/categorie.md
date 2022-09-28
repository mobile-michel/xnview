---
title: 2 - Les catégories et le catalogue
description: Lorem ipsum dolor sit amet - 3
layout: ../../layouts/MainLayout.astro
---

Je vais donc décrire le paramétrage et l'utilisation de XnViewMP pour cataloguer vos photos, et pour satisfaire à toutes les conditions que j'ai évoquées jusqu'ici, cela va reposer sur :
- L'utilisation d'un outil de XnViewMP nommé "Les catégories" afin d'ajouter des mots-clés IPTC et XMP aux photos.
- L'utilisation des fonctions de tri, de classement et de recherches pour obtenir l'affichage des photos que vous recherchez.
- L'utilisation éventuelle d'un écran "Edition des métadonnées" pour ajouter une légende et d'autres informations aux photos, qu'on verra au chapitre 3.
- Des précautions d'utilisation de XnViewMP pour qu'il tienne à jour sa base de données, permettant de faire des recherches parfaitement ciblées. (chapitre 4)

## Fonctionnement des catégories : le paramétrage

Il y a des réglages à effectuer pour que XnViewMP écrive vos informations dans les photos de manière standardisée et à l'abri de toute perte accidentelle.
En effet, il ne serait pas prudent de laisser les catégories, étoiles, couleurs à la merci d'une fausse manipulation en les laissant à la merci de XnViewMP.
J'insiste sur la nécessité d'assurer la pérennité du travail de marquage que vous allez faire, en utilisant ces métadonnées normalisées.
Comme indiqué en introduction, il est supposé ici que nous travaillons sur des photos au format JPG, ce qui nous assure que les métadonnées IPTC et XMP sont supportées.

Ce chapitre concerne uniquement les éléments gérés dans le catalogue : catégories, étoiles, couleurs et l'utilisation de l'outil "Catégories"
Les paramètres correspondants sont situés dans l'écran "Outils, Paramètres, Métadonnées" et illustrés dans la figure suivante

![Outils Options métadonnées](/public/catalogage/xnvmp04.png)

### Affecter une catégorie à une photo : écrire les mots-clés

Enumérons les paramètres, dans l'ordre de leur importance et voyons immédiatement leur fonction:

 Cochez "Exporter les catégories DB vers le sujet XMP et les mots clés IPTC", et les deux cases "Créer les données XMP" et "Créer les données IPTC"

Sélectionnez une ou plusieurs photos, cochez une case dans l'écran "Catégories", et relâchez la sélection de photos (en sélectionnant autre chose)
L'effet des paramètres indiqués sera le suivant:
- La catégorie va être "exportée" sous forme de mots clés à inscrire dans les photos.(IPTC:Keywords, XMP-DC:Subject, et aussi XMP-Lr:HierachicalSubject)
- Une information va être ajoutée dans le catalogue, indiquant que ces photos sont liées à la catégorie.
- En regardant l'écran "Filtre de catégories" on constate que le compteur (nombre entre parenthèses) de la catégorie a augmenté du nombre de photos catégorisées.
Vous pourriez dire "on a affecté des photos à une catégorie" puisque le nombre de photos a augmenté dans la catégorie ...
Mais je préfère dire "Affecter une catégorie à la photo" car de cette façon, on perçoit mieux l'opération simultanée d'écriture des mot-clés dans la photo.

Voila : vous venez de comprendre l'essentiel de la mécanique : Catégories > Mots-clés.

L'option "Appliquer automatiquement les mots clés parents" concerne les mots clés hiérarchisés.
Sachez déjà que le fait d'utiliser l'option "Créer les données XMP" et de cocher une catégorie provoque de toutes façons l'écriture de mots clés XMP hiérarchisés.
Les catégories pouvant elles-mêmes être hiérachisées, le schéma des catégories concernées va alors être recopié dans les mots clés hiérachisés.
Cette notion de hiérarchie, qui peut paraître à priori plus complexe, apporte en fait un meilleur confort d'utilisation, aussi bien en phase d'écriture qu'en utilisation.

### Etoiles et couleurs

J'ai évoqué précédemment ces deux types de marquages, je ne donne pas ici plus de détails; vous pouvez consulter le chapitre 9 du tuto.
Notons seulement les deux options à cocher "Exporter la note vers XMP" et "Exporter le libellé de couleur vers XMP", pour que ces marquages soient eux-aussi enregistrés dans les métadonnées XMP des photos.

### Sidecar

Il y a des options concernant les fichiers sidecar, le sujet étant un peu spécifique, je vous renvoie là aussi au tuto, chapitre 7.

 Tous ces paramètres sont actifs au moment où vous attribuez un marquage (catégories,étoiles,couleur) à une photo.
 Et n'oubliez pas de relâcher la sélection de photos, c'est ça qui provoque vraiment l'écriture des métadonnées.

 ## Récapitulatif des fonctionnalités des catégories de XnViewMP

 Les catégories de XnViewMP permettent les opérations suivantes :
- Mettre de façon pratique et rapide des mots clés dans les photos.
- Modifier des mots clés dans des lots de photos
- Gérer des mots clés hiérarchisés en respectant la forme Adobe Lightroom : XMP-Lr:HierarchicalSubject
- Créer des fichiers XMP compagnons ou sidecar pour vos photos au format RAW
- Gérer votre dictionnaire de mots clés en exportant les catégories dans un fichier texte ou en important un dictionnaire vers les catégories.
- Créer automatiquement une base de données interne à XnViewMP qui indexe les photos marquées par catégories pour permettre les recherches.
- Filtrer des photos par mots-clés pour réaliser des sélections ou des recherches multicritères.
Et on verra plus tard qu'on peut aussi importer en masse des informations présentes dans les métadonnées générées par d'autres logiciels.

## Utiliser les catégories : mettre des mots-clés

On l'a vu en illustration du paramétrage, il suffit de cocher une case de catégories pour induire l'écriture de mots-clés.
Il y a néanmoins quelques règles à connaitre pour mettre efficacement des mots-clés dans des milliers de photos.

 Tout d'abord, préparez-vous une liste de mots clés, et ajoutez les catégories correspondantes, avec un clic-droit dans le panneau catégories.
Chaque catégorie équivaut à un mot-clé qui doit être unique. Evitez d'utiliser "Divers" ou "Autres". Utilisez plutôt des formules comme "Autres_reptiles"
Si vous envisagez des mots clés botaniques, ou ornithologiques, téléchargez un thésaurus (dictionnaire) que vous pourrez importer dans vos catégories.
L'importation n'est pas toujours sans risque si votre travail était déjà bien avancé. Allez lire le chapitre 5C du tuto, (Gestion des catégories : Importer)

Pour débuter avec les mots-clés, je suggère de procéder de la manière suivante :
Lors d'une première passe, essayez de mettre UN mot clé significatif à toutes vos photos, sans étaler cette phase sur plusieurs mois.
Utilisez pour ça des mots clés très généraux, qui seront plus tard des catégories en tête de hiérarchie, comme Personnes, Animaux, Paysages, Objets, Evenements, Loisirs, Inclassable etc ...
En fait, dans chacune de ces catégories, mettez une sous-catégorie : Personnes_non-trié, Animaux_non_trié, Paysages_non_trié, etc ...
Ayant activé l'option "Appliquer automatiquement les catégories parent", il vous suffit d'un clic sur la sous-catégorie pour affecter aussi la catégorie parent.

Par la suite, il vous suffira de sélectionner "Animaux_non_trié" dans le filtre des catégories pour ajouter des mots clés pertinents à vos photos d'animaux.
Vous leur enlèverez en même temps la catégorie "Animaux_non_trié" (et vous pouvez répéter l'astuce en ajoutant des sous-catégories "Reptile_non_trié", "Oiseau_non_trié" etc ...)
De cette façon, vous saurez exactement où vous en êtes dans votre travail de marquage, et ce qu'il vous reste à faire.
Petit à petit, le nombre des "non_trié" diminuera, ou bien ira dans des sous-catégories plus petites et plus dans le détail, et le nombre et la pertinence des mots clés vont augmenter.

Pour aller plus vite, sélectionnez des lots importants de photos qui doivent recevoir le même mot clé, de cette façon vous pouvez marquer des centaines de photos en quelques minutes.
Pour l'exemple "Animaux_non-trié" ci-dessus, il est facile de sélectionner des dizaines de mammifères pour leur mettre un mot clé en une seule fois, puis les oiseaux, puis les reptiles etc ...
Dès que vous aurez acquis des automatismes, allez lire le chapitre 11Y "Personnalisation" du tuto, vous y trouverez des idées et astuces pour améliorer notablement le confort d'utilisation et la vitesse de travail.

 Souvenez-vous qu'il faut bien désélectionner les images pour que les mots-clés s'inscrivent, avant de passer à un autre dossier.
Et surtout, vérifiez régulièrement une photo dans la zone "informations" les onglets IPTC et XMP pour vous assurer que vous n'avez pas fait de fausse manip.

## Utiliser les catégories : filtrer par mots-clés

La recherche de photos par mots clés se fait essentiellement dans l'écran "Filtre catégories"
Il y a des réglages à effectuer tout d'abord, en cliquant dans le menu déroulant "Correspond" en haut de cette zone.

![Options de filtrage](/public/catalogage/xnvmp05b.png)

Vous pouvez choisir "N'importe lequel" ou "Tous" selon que vous voulez rechercher les images correspondant à chacun des critères, ou à tous les critères.
Le premier est un "OU", le deuxième un "ET". Cochez le deuxième.
Ensuite, choisissez l'étendue des dossiers concernés. Global pour la totalité, Dossier courant, ou avec "récursif" pour inclure les sous-dossiers du dossier courant.
Par exemple, pour rechercher dans toute l'année 2019, le dossier 2019 devra être affiché dans le browser, et vous cochez "Dossier courant, récursif"

La liste des catégories est affichée, avec un triangle pour celles qui contiennent des sous-catégories. Cliquez un triangle pour voir les sous-catégories...

![Filtre categories](/public/catalogage/xnvmp05.png)

Cliquez une catégorie ayant un nombre affiché dans les parenthèses : Après un instant, les photos ayant cette catégorie s'affichent. Et voilà le travail.
 Pour un deuxième critère, utilisez la touche Ctrl en combinaison avec le clic de souris.
Dans l'illustration ci-dessus, si on veut les photos ayant à la fois des mésanges et des moineaux, sélectionnez les deux.
 En combinant la touche Alt avec un clic, vous pouvez exclure un critère ;
Si vous voulez voir les photos de mésanges sauf celles où il y a des moineaux, utilisez Alt-Clic sur moineau pour exclure ce critère.
Si vous voulez mésange ou moineau, il faut valider "Correspond, N'importe lequel" dans le menu.
Il y a une option qui perturbe souvent le "Ctrl-Clic" : allez dans Paramètres, Métadonnées, et décochez "Appliquer les mots clés parents" . Vous le remettrez plus tard.

## Utiliser les catégories : le catalogue et les mots clés toujours synchronisés

Quand on utilise l'écran "Catégories" pour mettre des mots clés, XnViewMP met à jour le catalogue et les mots clés dans les photos en même temps.
Deux conditions à cela, garder l'option de métadonnée "Exporter les catégories du catalogue" cochée, avec les cases IPTC et XMP, et s'appliquer à bien désélectionner les photos a chaque fin de phase.
Jusque là, il n'y a aucune raison des voir des divergences entre le catalogue et les mots-clés.
 Pour déterminer si, dans le catalogue, une photo porte des catégories, sélectionnez la photo et observez le panneau "Catégories" : les cases correspondantes apparaissent cochées

Mais il y a un certain nombre de manipulations qui peuvent perturber ce bel équilibre ...

- Déplacer des photos avec Windows ou un autre logiciel. Dans ce cas, l'emplacement de la photo qui avait été noté dans le catalogue de XnViewMP devient faux.
- En principe, si vous déplacez les photos avec XnViewMP, celui-ci tient à jour son catalogue ... sauf si vos manips sont un peu trop importantes, ou exotiques.
- Si vous modifiez des mots clés dans les photos sans passer par les catégories (et il existe plusieurs moyens de le faire dans XnViewMP), le catalogue ne sera pas mis à jour.
- Evidemment, si vous modifiez des mots-clés avec un autre logiciel ce sera le même problème.
- Si vos modifiez des noms de dossiers contenant les photos en dehors du browser;
- Si vous modifiez une catégorie sans précautions . Je vais détailler ce cas dans le paragraphe suivant.

### Modifier une catégorie

Toute modification de catégories non vides doit être faite avec beaucoup d'attention.
1) Vous voulez supprimer une catégorie : videz-la au préalable
- Affichez toutes les photos ayant cette catégorie, sélectionnez les, décochez la case, désélectionnez les photos.
- Vous pouvez supprimer la catégorie.
2) Vous voulez renommer une catégorie :
- Affichez toutes les photos ayant cette catégorie, sélectionnez les, décochez la case, désélectionnez les photos.
- Renommez la catégorie qui est maintenant vide, sans perdre ni modifier l'affichage des photos
- Sélectionnez toutes les photos, cochez la case de catégorie modifiée, désélectionnez les photos.
- Un autre moyen, plus sûr, consiste à créer une nouvelle catégorie, y rattacher les photos (correctement), puis vider l'ancienne et la supprimer.
3) Vous voulez déplacer une catégorie, pour la rattacher à un autre parent.
- Créez une catégorie provisoire, rattachez-y les photos, videz et supprimez l'ancienne catégorie.
- Re créez la catégorie au nouvel emplacement, rattachez-y les photos, videz et supprimez la catégorie provisoire.

 En fait, toutes ces manipulations ont pour but de ne modifier que des catégories vides.
 Puis refaire une "affectation" de catégorie aux photos, ce qui force la mise à jour du catalogue et la ré-écriture des mots clés, lorsque la sélection de photos est relâchée.

Si des divergences persistent entre catalogue, catégories et mots-clés, des solutions seront décrites dans le chapitre 4.
Les symptômes peuvent être : des comptes inexacts de photos dans le filtre de catégories, des photos sans vignettes, ou des photos qui ne s'ouvrent pas.
Et bien sûr les cas où vous voyez les incohérences : des catégories cochées et mots clés absents, ou au contraire, des mots-clés existants et la catégorie non cochée.