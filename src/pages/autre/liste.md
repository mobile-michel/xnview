---
title: Créer une liste de fichiers
description: Lorem ipsum dolor sit amet - 3
layout: ../../layouts/MainLayout.astro
---

Si vous voulez travailler sur des listes de fichiers, il y a un outil pratique: c'est dans le menu `Créer, Liste de fichiers`. On pourrait croire au premier abord que ça ne sert qu'à lister le contenu d'un dossier, mais vous allez voir que cette fonction est d'une richesse insoupçonnée.

C'est en fait un moyen d'exporter toutes sortes de données. Sélectionnez une série de photos affichées (ou toutes avec un Ctrl+A) et cliquez dans ce menu pour générer une liste de fichiers.

La liste ainsi obtenue aura la forme d'un tableau avec une ligne par photo et autant de colonnes de données que vous aurez ajouté de paramètres. Pour commencer, dans la petite case format, on va utiliser le format texte, les informations seront simplement séparées par des tabulations.

liste fichiers
Figure 38a

Vous pouvez choisir les informations qui seront inscrites dans cette liste parmi une multitude de choix possibles, en cliquant sur la flèche triangulaire au bout de la case. Pour ajouter des informations ou des champs il y a un `+` vert pour ajouter une case, ou un `X` rouge pour en enlever une. On peut aussi bien mettre plusieurs informations dans une même ligne, ou créer plusieurs lignes séparées pour une meilleure lisibilité.

J'ai illustré des possibilités de métadonnées dans la figure 38a en utilisant par exemple quatre "champs" (nom complet du fichier, couleur, légende, mot-clés), le tableau aura donc 4 colonnes. Et dans la figure suivante vous trouvez les listes de données disponibles, avec en exemple le détail du groupe EXIF-camera et aussi le détail des formats de dates.

options
Figure 38b

Il semble souhaitable dans tous les cas que le nom des fichiers figure dans la liste, utilisez par exemple `nom de fichier` donc {filename} sera inscrit dans la case. Vous pouvez aussi ajouter des caractères dans une case, ils seront ajoutés tels quels. Exemple: Photo-{Filename Number}.jpg produira des listes de noms du type: Photo-00123.jpg.

En plus des infos système, les métadonnées EXIF ou IPTC sont organisées en 8 groupes (par exemple si vous cherchez la date de prise de vue, elle est dans le groupe EXIF-image).

- revenons à la figure 38a, l'option `seulement les fichiers image` parle d'elle même;
- l'option `inclure les sous dossiers` fonctionne quand vous sélectionnez l'icône d'un dossier dans la zone des vignettes de XnViewMP (et pas dans l'arborescence de dossiers). Par contre, si vous sélectionnez un ensemble de fichiers ET de dossiers, la liste contiendra les fichiers sélectionnés ET les fichiers des sous-dossiers sélectionnés, même si l'option `Inclure` n'est pas cochée. En résumé, sélectionnez avec attention ce que vous voulez voir figurer dans la liste;
- il y a une troisième option dans la version V0.96: `Ajouter au fichier`. Cette option permet de rajouter la liste actuellement générée dans un fichier déjà existant.

Ensuite, cliquez sur `Aperçu`, ou `Enregistrer sous` pour obtenir un fichier en résultat au format TXT (texte) par défaut.

## CSV

Si vous voulez ouvrir ensuite ce fichier avec un tableur, utilisez plutôt le format de sortie CSV. Voici un exemple de ce qu'on peut obtenir:

liste csv
Figure 39

Dans cet exemple avec le formatage CSV, les données des trois colonnes ont été automatiquement délimitées par des guillemets et séparées par `:`. Si vous mettez plusieurs informations dans une case, les guillemets vont encadrer le contenu de l'ensemble de la case.

Le séparateur de champs, le caractère `:`, sépare les différentes cases que vous avez ajoutées (une case = un champ). Quand j'ai ouvert ce fichier, les guillemets et les deux points ont été interprétés par le tableur (Calc) pour construire le tableau proprement. En dehors de l'utilisation avec un tableur, remettez le format `Texte` normal dans la case de format.

Cet outil peut évidemment être utilisé après un filtrage multicritères (donc pour en conserver le résultat et travailler dessus) ou pour tout autre usage d'une liste de noms de fichiers dont vous auriez besoin. Personnellement, j'utilise cette fonction pour obtenir les listes de dates, lieux et coordonnées GPS des orchidées triées par espèces. C'est un moyen de se constituer des compte-rendus, des historiques, des bibliothèques de données que vous pouvez exploiter avec un tableur.

Mais pour pouvoir être relues par xnViewMp, ces listes doivent respecter une forme précise.

## Ouvrir une liste de fichiers

Si vous créez une liste de fichiers constituée uniquement des emplacements et noms des fichiers, XnViewMP pourra la relire. Sélectionnez plusieurs photos dans l'écran principal, puis passez dans le menu `Créer, Liste de fichiers`.

Ajoutez uniquement `Répertoire` et `Nom de fichier` dans une case, ce qui s'affiche sous la forme: {Directory}{Filename With Ext} sans espace (ces deux champs sont illustrés dans la première ligne du tableau de la figure 38a). Cliquez `Aperçu` pour voir si tout est correct, puis `Enregistrer sous` et vous choisissez un nom pour cette liste.

Par la suite, vous pourrez retrouver l'affichage des mêmes photos simplement via le menu `Fichier, Ouvrir une liste de fichiers`. Notez bien qu'il ne s'agit pas du tout ici d'importer des informations pour les inscrire dans les photos. C'est seulement un "rappel" d'affichage.

Par exemple, vous avez recherché des photos avec des critères très pointus, finement calculés et enregistré le résultat obtenu sous cette forme de "liste de fichiers". Ayant choisi un nom qui représente bien cette sélection d'images, vous retrouverez votre liste de photos affichée simplement en cliquant le nom dans `Ouvrir une liste de fichiers`. Des listes de fichiers de ce type peuvent être facilement archivées, puis réouvertes dans XnViewMP et constituent en quelque sorte des albums thématiques.

## Des listes plus complètes

Si vous souhaitez intégrer d'autres informations, il faut recourir à une astuce pour pouvoir garder la possibilité de l'ouvrir dans XnViewMP. Choisssez le format texte, mettez des guillemets pour "{Directory}{Filename With Ext}" dans la première case. Vous pourrez alors ajouter des champs dans des cases supplémentaires sans que ça gêne XnViewMP pour "réouvrir" la liste.

## Créer des portions de code HTML

Il est possible aussi de préparer une partie de page HTML comme dans cet exemple:

liste html
Figure 39b

Dans cet exemple, vos images sont dans un dossier `/images/`, les vgnettes dans un dossier `/thumb/` et vous créez une page HTML avec des vignettes cliquables, dont la balise `Title` reprend le champ IPTC légende de chaque image. Les lignes de codes ainsi obtenues pourront être intégrées dans votre site web. Notez que ce type de pages HTML peuvent rester dans votre ordinateur et constituer des albums photos locaux, consultables avec un navigateur.

## XML

Outre le format texte et le format CSV, y a un troisième format de sortie possible, le format XML. Je n'ai pas étudié ce format de sortie qui diffère notablement des deux autres, car les noms de champs y sont ajoutés en tant que balises XML pour chaque photo.
