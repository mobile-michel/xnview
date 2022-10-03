---
title: Balise EXIF orientation
description: Lorem ipsum dolor sit amet - 3
layout: ../../layouts/MainLayout.astro
---

Les appareils photos anciens ne marquaient pas la position verticale ou horizontale de la prise de vue dans les données EXIF. Plus tard, des constructeurs ont installé un détecteur de position dans les appareils et on trouve alors dans les données EXIF une indication pour orienter la photo.

Cette métadonnée, quand elle existe, se nomme Exif:Orientation et elle peut prendre une valeur numérique de 1 à 8. On doit trouver quelque part des infos en français à ce sujet, je vous mets juste un lien vers une page en anglais et ce tableau:

Dans la documentation Exiftool, on trouve ces valeurs pour le tag:
1 = Horizontal (normal)
2 = Mirror horizontal
3 = Rotate 180
4 = Mirror vertical
5 = Mirror horizontal and rotate 270 CW
6 = Rotate 90 CW
7 = Mirror horizontal and rotate 90 CW
8 = Rotate 270 CW
Rotate 270 CW signifie 270 degrés dans le sens des aiguilles de montre, ce qui équivaut à 90 degrés dans le sens inverse.

Les visualiseurs de photos ont généralement une option qui permet d'afficher automatiquement une photo avec la bonne orientation, si elle contient cette indication exif. Dans XnViewMP, l'option qui le permet est située dans `Outils, Paramètres, Général`, `Rotation basée sur l'orientation exif`.

Donc, certaines photos seront affichées automatiquement dans le bon sens et d'autres non si elles n'ont pas l'information d'orientation. Vous allez donc pivoter manuellement les plus anciennes et les enregistrer. Mais ensuite, pour savoir si les photos sont _enregistrées verticalement_ ou _affichées verticalement_, vous devrez être attentif au petit symbole avec une flèche ronde qui s'affiche sur les vignettes pour lesquelles la rotation automatique est active (voir la toute fin du chapitre 1 Affichage).

Quand vous voulez orienter manuellement les photos (anciennes) n'ayant pas d'EXIF orientation, il y a quelques précautions à prendre: certains logiciels permettent de pivoter une photo sans la décoder/réencoder. Dans XnviewMP c'est dans le menu `Outils, Transformations jpeg sans perte`

Cette modification _sans perte_ doit cependant respecter un multiple de 8 pixels dans les dimensions de la photo, sinon quelques pixels sur les bords sont coupés. Si cette coupure vous inquiète, allez étudier et cocher des options dans `Outils, Paramètres, Général, Opérations fichiers`.

Ensuite, une photo JPG contient aussi une miniature (vignette exif) de la photo qui devrait être tournée en même temps. XnViewMP semble le faire correctement. Puis sachant que XnViewMP a gardé une copie de (l'ancienne) vignette dans son cache, il faudra que l'affichage dans le browser soit mis à jour, ce qui là aussi semble bien se faire. Après cette opération, il faut savoir si la balise exif `orientation` a été mise à jour, créée ou non. Je pense que XnViewMP la crée ou la met à jour.

Le problème, c'est que si l'une ou l'autre de ces étapes a été mal faite, ou faite par un autre logiciel, vous aurez une prévisualisation de la photo qui ne correspondra plus à son orientation réelle. XnViewMp propose plusieurs fonctions pour rétablir les choses: utilisez le menu `Outils, Métadonnées` pour tourner ou reconstruire la vignette. Explorez aussi le menu `Outils, transformations JPEG sans perte`.

En fait, toutes ces manipulations ne sont pas très intuitives et la visualisation du résultat dépend de nombreuses options, aussi bien de traitement de la rotation que d'options d'affichage:
- `outils, Paramètres, Général, rotation de l'image basée sur l'orientation exif`;
- `outils, Paramètres, Explorateur, onglet Divers`.

Et ça dépend aussi des choix d'affichage des vignettes (`Outils, Paramètres, Explorateur, Vignettes`, et `Outils, Paramètres, Catalogue`). Je n'ai pas étudié ce sujet à fond, je me contente de quelques recettes basiques et éprouvées, même si parfois je perds le bénéfice de l'automatisme:
- quand je veux tourner des photos (anciennes ou contenant des anomalies d'orientation), je désactive la rotation automatique, je tourne les photos avec le menu `Rotation sans perte` et éventuellement je relance `Reconstruire la vignette".
- En usage ordinaire, pour des photos plus récentes, j'active la rotation automatique.
Dans le forum XnViewMP, il y a une longue discussion en anglais: lien.
