---
title: 3 - Les autres métadonnées classiques
description: Lorem ipsum dolor sit amet - 3
layout: ../../layouts/MainLayout.astro
---

Ce chapitre illustre l'utilisation de la fenêtre `Editer les métadonnées IPTC` (menu `Outils, métadonnées`, ou Ctrl+i). Les éléments sur lesquels nous allons intervenir avec cette fonction ne figurent pas dans le catalogue.

Les paramètres ne sont pas les mêmes que ceux utilisés avec les catégories. Il s'agit ici d'écrire, mettre à jour ou effacer d'autres métadonnées "classiques", par exemple celles que j'ai citées au premier chapitre.

Ces métadonnées "classiques" sont situées dans les deux groupes, IPTC et XMP, chaque métadonnée du groupe IPTC étant "mise en parallèle" avec une du groupe XMP. En voici une liste partielle, je n'ai mis ici que les champs couramment utilisés par des particuliers&nbsp;:

![Options de filtrage](/catalogage/xnvmp13.png)

## Paramétrage

Sélectionnez au moins deux photos, puis ouvrez la fenêtre `Éditer IPTC`&nbsp;: vous obtenez 8 onglets, permettant de travailler sur les métadonnées. Pour obtenir cette fenêtre, utilisez le menu `Outils, Métadonnées, Éditer IPTC`, ou le bouton correspondant dans la barre d'outils, ou encore les touches Ctrl+i.

Vous pouvez agrandir cette fenêtre de manière à avoir un aperçu assez grand, plutôt qu'une vignette. Sept onglets regroupent l'essentiel des champs IPTC (ou XMP) proposés par XnViewMP, et le huitième onglet, Options est celui du paramétrage.

Depuis la version V0.98, il existe une autre fenêtre, aux fonctions symétriques, nommée `Éditer XMP`.
Pour le moment ignorons-la, car elle concerne des métadonnées XMP spécifiques qu'on n'utilisera pas.

![Editer métadonnées Options](/catalogage/xnvmp02.png)

Dans cet onglet Options, pour le premier cadre `Sélection multiple`&nbsp;:
- cochez les trois premières cases, afin de n'effacer aucune métadonnée sur des lots de photos par inadvertance;
- cochez `Ne pas charger les champs` (en bas à droite).

Il faut sélectionner au moins deux images justement pour pouvoir agir sur ces paramètres de sélection multiple. Ensuite le paramètre `Mode`&nbsp;: Choisissez `IPTC-IIM, création ou mise à jour XMP`. Ça permet de garder les mêmes informations en IPTC et XMP.

La fenêtre à huit onglets est une fenêtre de saisie de données, c'est à dire qu'on n'écrit pas directement les métadonnées dans les photos, mais qu'on prépare leur écriture. La deuxième case des options que vous avez cochée est la plus importante&nbsp;: `Garder la valeur courante du tag si le champ est vide`.

En résumé, voici comment il faut comprendre tout ceci&nbsp;:
- `Ne pas charger les champs` induit que toutes les cases de saisie sont vides à l'ouverture;
- aucune métadonnée existante ne sera effacée, même si on laisse sa zone de saisie vide;
- il suffit d'écrire du texte dans les champs que vous souhaitez utiliser pour préparer l'écriture des métadonnées;
- si vous cliquez le bouton `Écrire`, seule la photo prévisualisée sera mise à jour;
- si vous cliquez `Écrire les fichiers`, toutes les photos sélectionnées recevront la nouvelle valeur du (ou des) champs que vous avez renseignés.

## La méthode pour ajouter ou modifier des métadonnées

Avec la pratique, vous pourrez décocher la troisième case&nbsp;: `Modifier le tag seulement si il est vide`
- à partir de là, les ajouts ou modifications de contenus que vous ferez écraseront d'éventuelles valeurs qui pouvaient déjà être dans les photos;
- au bout de deux ans de pratique, je ne fais plus de dégâts dans mes métadonnées, je sais ce que je modifie, et j'ai décoché la case.

La deuxième case est bien plus dangereuse, si vous la décochez, les résultats sont assez imprévisibles. Je ne connais qu'une situation raisonnable pour décocher cette option, c'est pour supprimer des métadonnées dans une seule photo&nbsp;:
- sélectionnez UNE photo, effacez un champ, cliquez `Écrire` . Voilà, cela efface le champ;
- retournez dans `Options`, et remettez tout de suite la coche dans la deuxième case !

J'ai choisi de garder pour la fin le cas le plus simple&nbsp;: lorsqu'une seule photo est sélectionnée, la plupart des paramètres ci-dessus n'ont plus d'effet ni de raison d'être. On voit directement les métadonnées IPTC existantes dans la photo, on en modifie ou on en ajoute, on clique sur `Écrire` et le tour est joué.

### À éviter

L'onglet `Catégories` est un vestige du passé, c'est une métadonnée que personne n'utilise plus, et ça n'a aucun rapport avec "les catégories" de XnViewMP. L'onglet `Mots clés` est à éviter également, à moins que vous soyez un expert. C'est pour cette raison que je n'ai pas parlé de la première case des options. L'onglet `Date/Heure` concerne des champs de date IPTC, qui sont bien moins utilisés que les dates EXIF. À mon avis, ces données sont inutiles.

### En pratique

Finalement, il ne reste que deux onglets utiles, le premier pour légender les photos et l'onglet `Source` pour les lieux (et éventuellement l'onglet `Crédits` pour les Copyrights). Pour entrer des légendes une par une&nbsp;: Sélectionnez quelques images et ouvrez la fenêtre d'édition. Entrez une légende dans le premier onglet, cliquez `Écrire`, passez à la photo suivante avec le bouton `>`, écrivez sa légende, cliquez `Écrire`, etc...

Vous pouvez aussi sélectionner des lots de photos qui doivent recevoir les mêmes données (Ville et département par exemple), ouvrez la fenêtre d'édition, entrez Ville et Département, et cliquez le bouton `Écrire tous` pour écrire les métadonnées de toutes les photos à la fois.

Ne panachez pas ces deux méthodes, on ne peut pas en même temps écrire des données communes et des données différenciées. En tout cas, pas de risque ici de créer des divergences avec le catalogue, vu que les métadonnées dont on vient de parler ne figurent pas dans le catalogue. À condition bien sûr de ne pas toucher au contenu de l'onglet `Mots-clés`.

## Vérifier les métadonnées que vous venez d'écrire

Vous avez donc entré quelques métadonnées dans une photo. Sélectionnez la vignette correspondante dans l'écran principal, et parcourez les onglets de la fenêtre Informations pour voir les métadonnées que vous avez ajoutées.

Avant de marquer des milliers de photos, vérifiez régulièrement ce que vous faites dans les onglets d'informations IPTC, XMP et ExifTool. L'onglet ExifTool vous permet d'afficher toutes les métadonnées telles qu'elles sont lues par cet excellent utilitaire.

![EXIF](/catalogage/xnvmp12.png)

## Les métadonnées qui ne sont ni IPTC ni XMP

Il reste quelques métadonnées intéressantes à gérer, qui ne sont pas accessibles avec les méthodes vues jusqu'à présent.

### Les coordonnées GPS

Ce sont des métadonnées EXIF; vous pouvez les copier ou les modifier à partir du menu `Outils, Métadonnées, Éditer les données GPS`. Les boutons `Copier` et `Coller` sont compatibles avec les formats en degrés décimaux ou degés minutes secondes comme on les trouve dans Google maps ou Géoportail.

### Les dates

Il y a trois dates EXIF (de prise, de numérisation, de modification) plus deux dates sytème gérées par Windows (ou Linux ou Mac OS). Elles sont modifiables via le menu `Outils, Modifier l'heure`. Pour plus d'informations, allez voir le Chapitre 11J du tuto. Pour les dates avant 1970, vous pouvez les inscrire en EXIF, mais PAS en date système, car ça endommage les fichiers. Les données GPS et les dates EXIF sont visibles dans l'onglet `EXIF`.

### Les noms de fichiers et noms de dossiers

D'une certaine façon, ce sont aussi des métadonnées système (onglet `Propriétés`). Dans certaines manipulations, on peut souhaiter les lire pour les copier dans une légende ou un titre par exemple. Parfois, le nom de la photo est une date, qu'on peut vouloir mettre dans un champ date EXIF. On peut même les modifier, ce qui a des conséquences parfois étonnantes, notamment si vous modifez le nom du dossier d'une image, ce qui va la déplacer&nbsp;!

## Recherches et tris

Les recherches de photos à l'aide du filtre de catégories vues au paragraphe 2D ne s'appliquent pas aux métadonnées supplémentaires qu'on vient de voir dans ce chapitre. C'est une limitation de XnViewMP, qu'on peut partiellement contourner à l'usage.

### Fonction de recherche rapide

Il y a tout d'abord une fonction de recherche rapide dans la barre d'outils. Celle-ci peut porter sur tous les champs IPTC et les noms de fichiers. (voir `Options, Explorateur, Recherche rapide`). Mais cette recherche rapide est limitée aux photos affichées dans le browser, affichage qu'on peut tout de même étendre aux sous-dossiers (menu `Afficher, voir les fichiers des sous-dossiers`). De plus, on peut combiner, en faisant d'abord une sélection par catégories, suivie d'une recherche rapide sur le résultat obtenu.

### Fonction Rechercher

Il y a ensuite la fonction `Rechercher` du menu Outils. Celle-ci est très riche, elle permet des combinaisons, et si les éléments recherchés sont ceux inclus dans le catalogue, le résultat est obtenu très rapidement. Par contre, rechercher des données particulières qui ne sont pas dans le catalogue induit la lecture des tous les fichiers, et c'est très long en accès disque. Le chapitre 11R du tuto détaille l'utilisation de cette fonction.

### Options d'affichage

Il y a enfin des options d'affichage&nbsp;: le menu `Afficher, Afficher en..., Détails` permet de parcourir rapidement du regard la plupart des métadonnées. En cliquant sur une en-tête de colonne, les photos seront triées sur ce critère, ce qui permet de trouver rapidement une information. Les en-têtes de colonnes sont modifiables&nbsp;: avec un clic-droit, vous pouvez en ajouter ou en supprimer de l'affichage, ou déplacer les colonnes. Revenez ensuite à l'affichage classique&nbsp;: `Afficher en, Vignettes + Libellés`. Pour conserver les en-têtes de colonnes, activez l'option `Afficher, Trier les fichiers par, Voir l'en-tête`.

### Picasa

Dernière option, utiliser Picasa. Il suffit de taper quelques lettres dans le champ recherche, puis cliquer une des suggestions proposées. Par défaut, Picasa parcourt tous vos dossiers à la recherche d'images et lit la plupart des métadonnées. Il est même un peu trop fouineur, puisqu'il va dégotter des images dans tous les coins. Allez dans Outils, Gestionnaire de dossiers et mettez des croix rouges pour exclure les dossiers dont vous ne voulez pas indexer le contenu.