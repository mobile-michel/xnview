---
title: La base de données des catégories, le catalogue
description: Lorem ipsum dolor sit amet - 3
layout: ../../layouts/MainLayout.astro
---

XnViewMP enregistre automatiquement quelques fichiers de paramètres:
- il y a les fichiers qui enregistrent vos réglages, essentiellement xnview.ini (et iptc.ini et quelques autres);
- le fichier Thumb.db contenant une copie des vignettes (les miniatures) permettant d'accélérer l'affichage et la navigation dans les dossiers.

Et pour travailler rapidement sur le filtrage des photos, la base de donnée des catégories, "le catalogue", qui se trouve enregistré dans le fichier XnView.db. C'est donc grâce à ce fichier que vous pouvez utiliser le filtre des catégories qui, en fonction d'un critère, affichera instantanément des photos qui peuvent être dispersées dans des centaines de dossiers.

Si vous avez suivi mon conseil d'installation, tous ces fichiers sont rassemblés dans le dossier programme, là où est "installé" XnViewMP. Il vous est donc facile de copier de temps en temps ces fichiers (surtout xnview.ini et xnview.db) pour les sauvegarder ailleurs.

Il y a également une fonction qui permet d'exporter un fichier XML de sauvegarde de la base de données liant les photos avec les mots-clés et catégories hiérachisés. Je rappelle que vous pouvez également exporter vos noms de catégories (votre dictionnaire de mots-clés) dans un fichier texte.

## Qu'y a t-il dans le catalogue

Il y a des informations comme les noms des fichiers et des dossiers, la taille des images, la date de modification, les catégories, les marquages par étoiles ou couleurs. Il y a également les mots-clés, mais je ne sais pas lesquels sont lus en priorité pour être mis en catégories en cas d'importation (IPTC, XMP, XMP:LR hiérarchisés).

En résumé, le catalogue fait le lien entre les images, leur emplacement dans votre ordinateur, les mots-clés et les catégories ou marquages. Vous trouverez quelques infos sur la structure et le contenu du catalogue en annexe.

## Comment fonctionne le catalogue

Pour comprendre le fonctionnement de ce catalogue, un petit exemple:
- pour la photo DC2030.jpg, je coche la case "animal" et "reptile" dans mes catégories;
- d'une part, selon mes réglages, ça écrit ces deux mots-clés dans les métadonnées de la photo elle-même;
- d'autre part, ça ajoute un enregistrement dans le catalogue, qui contiendra le nom de la photo, son emplacement dans l'ordinateur et les catégories concernées.

Cette phase "d'ajout de catégories" (et de mots-clés) enrichit donc automatiquement le catalogue. Il faut citer l'autre cas où le catalogue se met à jour tout seul, c'est lorsque vous visualisez simplement le contenu d'un dossier de photos contenant déjà des mots-clés, avec l'option d'import activée.

Mais si vous ne voulez pas que ça se produise (par exemple si vous utilisez XnViewMP pour fouiner dans le cache du navigateur ou dans les téléchargements) pensez à enlever l'option `Importer les mots clés XMP ou IPTC dans les catégories`. Autre solution, que je n'utilise pas: allez dans `Paramètres, Catalogue, Onglet Exclusion/Inclusion` et ajoutez des dossiers dont vous souhaitez l'exclusion. Je n'ai pas testé le critère `Inclus` (en cliquant dans la colonne de gauche sur le mot `Exclus`), je ne sais pas à quoi ça sert.

Si, en dehors de XnViewMP, vous déplacez une photo, si vous changez son nom, si vous modifiez le nom d'un dossier, il faudra remettre à jour le catalogue. De même, si vous voulez inclure un gros stock de photos contenant déjà des mots-clés dans le catalogue, il faudra aussi "gérer" le catalogue (c'est plus efficace que de visualiser tous les sous-dossiers un par un). Cette gestion se fait dans la fenêtre suivante, en passant par le menu `Outils, Paramètres, Catalogue`.

## Paramètres du catalogue et du cache des vignettes

Cet écran est un peu ambigu dans le sens où il mélange les informations sur le cache des vignettes et la gestion du catalogue.

Outils Options Catalogue
Figure 31

La première partie de la fenêtre concerne la gestion des vignettes et la taille maximale du fichier Thumb.db (le cache vignettes). Tout d'abord, il y a une option à vérifier dans `Outils, Paramètres, Explorateur, Vignette, Divers`: `Utiliser les vignettes intégrées`.

Si vous cochez cette option, vous gagnez un peu en rapidité lors de la première visualisation d'un dossier, surtout pour des images de grande taille ou au format RAW. Par la suite, XnViewMP utilisera les vignettes de son cache et il n'y a plus de gain en rapidité. Si vous trouvez que les vignettes sont de mauvaise qualité, vous pouvez cocher l'option suivante `Créer à partir de l'image originale si la vignette intégré est plus petite` (voyez aussi celle située au-dessus `Créer des vignettes de très bonne qualité`).

Je suppose que cette option provoque la réécriture de la vignette EXIF dans la photo et donc il y a quelques inconvénients (modification du fichier, augmentation de sa taille). Je ne sais pas si cette éventuelle modification se fait lors de la navigation dans les dossiers ou uniquement en cliquant `Afficher, Reconstruire les vignettes`. Dans le doute, j'ai décoché les deux options.

C'est donc une autre voie permettant d'utiliser les réglages de la rubrique `Catalogue` qui va être décrite ici, en décochant `Utiliser les vignettes intégrées`:
- la boite déroulante de la première case `Compression`, il semble que la valeur `Avec perte - haute qualité WebP` soit le meilleur compromis à utiliser. J'ai longtemps utilisé `Avec perte - haute qualité Jpeg`, je n'ai pas perçu de différence;
- les valeurs indiquées dans les cases `Largeur` et `Hauteur` sont les dimensions des vignettes que XnViewMP va enregistrer dans le fichier cache Thumb.db.

Or, en fonction des réglages d'affichage des vignettes que vous avez choisi à l'écran (voir Chapitre 1 Vignettes), XnviewMP peut afficher vos vignettes avec une taille différente. Si ça correspond à un agrandissement, les vignettes affichées auront un léger flou. Si ça les réduit, c'est net, mais vous traitez des volumes de pixels inutilement, il y a donc un compromis à trouver.

En cliquant sur le bouton `Obtenir la taille des vignettes`, vous fixez la taille des vignettes dans le fichier cache à la même valeur que celle qui est actuellement utilisée à l'affichage. Personnellement, j'ai procédé de la façon suivante: j'ai agrandi mes vignettes un poil de plus que nécessaire et cliqué ce bouton.

Ensuite, de retour dans le browser, j'ai légèrement réduit ma taille de vignette. Ainsi les copies dans le cache vignette sont un peu plus grandes que nécessaire. Si vous modifiez rarement ou jamais la taille de vos vignettes, utilisez ce bouton au moins une fois.

## Le bouton reconstruire les vignettes

Puisque nous sommes dans la gestion des vignettes, voyons tout de suite le rôle de ce bouton situé au bas de la fenêtre. Si votre idée était de reconstruire les vignettes EXIF intégrées d'une ou plusieurs photos, ce n'est pas ce bouton qu'il faut utiliser, mais il faut le faire en passant par le menu `Outils, Métadonnées, Vignette EXIF, Reconstruire`.

Le rôle du bouton consiste à remettre des vignettes à jour dans le cache des vignettes (fichier thumbs.db), notamment si vous modifiez la taille des vignettes affichées dans l'écran principal. Si vous voulez faire des vérifications de qualité des vignettes, sélectionnez un dossier dans le tableau et cliquez le bouton `Reconstruire`.

Ce cache est utilisé pour accélérer et améliorer l'affichage des vignettes dans l'écran principal. On n'est pas ici dans la gestion du catalogue, mais les opérations d'affichage ou de filtrage utilisent le catalogue et utilisent en même temps ce cache vignettes pour l'affichage. Allez voir également les réglages de qualité de vignettes dans le menu `Outils, Paramètres, Vignette`, réglages qui interagissent avec ceux décrits ici.

Parenthèse, pour rafraichir l'affichage des vignettes dans l'écran principal, dans les cas où ça ne s'est pas fait automatiquement, utilisez le menu `Afficher, Reconstruire les vignettes`. Cette fonction du menu recalcule les vignettes à afficher en respectant les options choisies.

## Utilisation mémoire

Il y a deux valeurs à préciser: la première concerne les vignettes et la deuxième le catalogue. Et il y a deux indications de taille maintenance cache dans la même fenêtre (la ligne juste au-dessus du tableau). Il semble que soient affichée ici la taille des deux fichiers, xnview.db et thumbs.db.

Pour la taille maximum pour le cache, mon fichier thumbs.db faisant 110 Mo, j'ai mis au pifomètre 200 Mo. L'autre valeur, pour la base de données est décrite au paragraphe suivant.

## Gestion du catalogue

### Mémoire pour la base de données

L'option `Mémoire pour la base de donnée` concerne le catalogue. Je ne ferai qu'une hypothèse pour la gestion de la mémoire. La mémoire des ordinateurs se compte en Gigaoctets et mon fichier xnview.db n'atteint pas (pas encore) 1 Go. J'ai en 2022 65'000 photos dont 40'000 contiennent des mots-clés.

Dans mon illustration, j'avais fixé la taille a 400 Mo pour un xnview.db qui faisait à l'époque 300 Mo. J'ai maintenant fixé le maximum à 1'400 Mo (1.4 Go), et visiblement XnViewMP n'utilise qu'une fraction de cette valeur. Je reviens au sujet et au réglage suivant.

### Le répertoire de base pour les images

Dans le cas le plus courant, laissez cette case vide (ou avec la valeur par défaut qui est une barre oblique). Cette case permet de spécifier un chemin vers vos dossiers de photos et dans le catalogue, tous les emplacements de photos seront notés relativement à ce répertoire de base.

Cette fonctionnalité n'est utilisable que si toutes vos photos sont rattachées à un répertoire commun (et pas sur des répertoires voisins, ou des disques différents). J'imagine deux cas d'utilisation.

#### Premier cas

Vous avez exactement dupliqué l'ensemble de vos photos à deux emplacements dans votre ordinateur. Par exemple, vos photos sont situées dans D:\fichiers\photos\, valeur que vous inscrivez dans la case.

La photo D:\fichiers\photos\2017\2017-01\dsc355.jpg sera repérée dans le catalogue avec le chemin relatif 2017\2017-01\dsc355.jpg. Toutes vos photos sont également présentes dans un disque externe F:\sauvegardes\fichiers\photos et vous voulez de temps en temps faire des recherches dans ce disque.

Modifiez la valeur de la case en inscrivant F:\sauvegardes\fichiers\photos\. Les chemins relatifs dans la base de données restent valables et dorénavant vous recherches avec le catalogue pointeront vers cet autre emplacement. Et je suppose que vous remettrez à la fin le "répertoire de base" D:\fichiers\photos\ pour revenir à l'utilisation ordinaire.

#### Deuxième cas d'utilisation

Vous voulez utiliser le catalogue (xnview.db) dans plusieurs ordinateurs différents, soit parce que les photos sont situées dans un serveur, soit parce que vous avez une copie de toutes les photos (rangées à l'identique) dans un autre ordinateur. Dans le premier ordinateur, les photos sont dans Z:\data\photos\... Vous avez écrit Z:\data\photos\ dans la case `Répertoire de base pour les images`.

Vous avez mis au point votre base de données et vous pouvez copier le fichier xnview.db dans un autre ordinateur, dans lequel le même stock de photos est situé par exemple dans D:\photos. En écrivant D:\photos\ dans la case `répertoire de base pour les images` dans le nouveau PC, les chemins relatifs vers les photos fonctionneront aussi. J'imagine qu'il est possible aussi de laisser le fichier catalogue xnview.db sur un serveur, plutôt que de le copier sur plusieurs ordinateurs.

Attention, si vous modifiez ce paramètre quand la base de données est correcte, vous allez modifier son fonctionnement et elle ne marchera plus. (sauf cas particuliers ci-dessus). Remarque en passant, si vous modifiez des dossiers en-dehors de XnViewMP, le catalogue ne se mettra pas à jour tout seul non plus, il faudra utiliser le bouton `transférer`, on le verra un peu plus bas.

### Les dossiers inclus dans le catalogue

Attaquons maintenant le vif du sujet. Vous voyez dans le tableau de la figure 31 ci-dessus tous les dossiers que XnViewMP a explorés pour construire ses bases de données. Voyons les boutons situés en-dessous.

#### le bouton optimiser

Un clic sur ce bouton dont j'ai déjà parlé au chapitre 2 donne cette fenêtre:

Outils Options Catalogue
Figure 32

Les cases cochées par défaut sont celles de l'illustration. Laissez-les comme ça pour la plupart des cas. Les deux options `Supprimer les dossiers et les fichiers inexistants` fonctionnent bien car les suppressions de photos à l'aide de filtrages laissent parfois des photos "fantômes".

En dehors d'un nettoyage complet, je n'ai pas testé les deux options `Supprimer les vignettes`, et `Supprimer les données de fichiers` ne sachant pas sur quoi portent ces suppressions. La première parait relativement anodine: il efface probablement le cache des vignettes sans perturber le catalogue. Cela équivaut à supprimer (ou renommer) le fichier Thumb.db.

C'est utile si vous avez un fichier Thumb.db trop gros ou si vous avez besoin d'améliorer le rendu des vignettes après avoir refait vos réglages. La deuxième, `Supprimer les données de fichiers` me parait assez dangereuse si le catalogue constitue le seul support de vos catégories (certains utilisateurs refusant d'écrire les mots-clés dans les métadonnées des photos, seul le catalogue contient alors l'information de catégorisation). En effet ce bouton est destiné à effacer le catalogue et donc le contenu du fichier XnView.db, non testé.

La fonction `Optimisation` (la première case) semble destinée à vérifier chaque enregistrement du fichier XnView.db, c'est à dire chaque liaison entre image et catégorie. Pour le moment, cliquez `Annuler` pour refermer cette fenêtre et revenir aux paramètres du catalogue de la figure 31.

Cet écran présente les dossiers qui ont été explorés pour construire le cache des vignettes. Indirectement, il représente aussi les dossiers des photos qui ont été lues pour les relier aux catégories alors que son titre ne le laisse pas supposer `Maintenance cache`. Il y a un article de 2020 du blog de Franz astuces d'optimisation qui précise ces notions à lire absolument.

### Le bouton effacer

Il permet d'effacer les dossiers sélectionnés dans le tableau, c'est à dire que les photos concernées ne seront plus comptées dans les catégories ni trouvées avec le filtre catégories. Si ces photos contiennent des mots-clés, il sera possible de les remettre dans le catalogue en les important avec le bouton `Ajouter`.

Si elles n'ont pas de mots-clés, les photos perdent leur catégories. Le bouton `Effacer tout` va vider le tableau, le catalogue est remis à zéro, les photos n'ont plus de catégories.

Parfois, ces fonctions d'effacement ne prennent effet qu'après avoir cliqué sur le bouton `Optimiser`, laissez les coches par défaut et cliquez sur `OK`. Si vous voulez empêcher des dossiers ou des disques d'apparaitre dans ce tableau, ajoutez-les au tableau de l'onglet suivant `Exclusion/inclusion`.

### L'onglet exclusion/inclusion

Quand un dossier est ajouté au tableau, la case en début de ligne est modifiable, les choix possibles sont `Exclus` ou `Inclus`. Le fait d'ajouter ici un dossier avec `Inclus` semble insuffisant pour que les photos soient lues et liées aux catégories, il faut passer par la fonction `Ajouter dossier` décrite un peu plus bas.

### Le bouton reconstruire les vignettes

L'utilisation est décrite au début de ce chapitre avec les premières informations sur la taille des vignettes. Apparemment, cette fonction ne reconstruit pas les vignettes qui illustrent les dossiers, le fait d'effacer et d'ajouter le dossier contenant renouvelle les vignettes.

### Le bouton transférer

Si vous avez déplacé un dossier de photos en dehors de XnViewMP ou changé son nom, voire même le nom d'un disque entier, vous allez devoir mettre à jour le catalogue. Utilisez le bouton `Transférer` qui permet de tenir compte d'un dossier qui a été déplacé ou renommé, en précisant l'ancien nom et le nouveau nom. Là aussi il semble utile de passer par l'écran `Optimiser` dont vous laissez les coches par défaut et cliquez `OK`.

Passons au dernier bouton, qui permet justement de remettre des dossiers manquants.

### Le bouton import folder

Jusqu'en V0.93, ce bouton était libellé `Ajouter dossier`. Le nouveau libellé (bien que non encore traduit) décrit mieux l'action d'importation réalisée.

### Importer un dossier de photos dans le catalogue

Pour l'utilisation des catégories, le bouton `Import folder` n'est utile que si vous voulez ajouter un dossier de photos déjà marquées avec des mots-clés IPTC ou XMP. Il faut donc d'abord passer dans le menu `Outils, Paramètres, Métadonnées`, et cocher la première case `Importer les mots clés XMP ou IPTC dans les Catégories DB`.

Important: décochez la deuxième case `Exporter les catégories` sinon vous risquez de doublonner des infos dans la base de données. Utilisez éventuellement l'option `Lecture des mots-clés hiérachiques` en précisant le caractère séparateur, généralement on utilise la barre verticale proposée en première case.

Assurez-vous aussi que le panneau des catégories ne soit pas entièrement vide. Créez ou importez au moins une catégorie au préalable. Et même mieux, préparez vos catégories hiérarchisées, ou importez-les, afin que les mots-clés correspondants entrent dans cette hiérarchie.

Ensuite, c'est limpide, cliquez le bouton `Import folder`, et toutes les catégories se construisent et se remplissent. C'est une fonctionnalité importante de XnViewMP, mais je la trouve peu visible au premier abord. Je suppose qu'elle est destinée aussi à garnir le cache des vignettes, mais je n'en vois pas l'intérêt.

### Remarques

Une autre solution consiste à sélectionner un ensemble d'images dans le browser et utiliser la fonction `Mise à jour du catalogue avec les fichiers` du menu `Afficher`. Lisez aussi le paragraphe 5D2 du chapitre 5D, il y a des précautions à prendre.

Sachez qu'avec le bouton `Import folder` la lecture du dossier est récursive, ce qui signifie que tous les sous-dossiers vont être lus et ajoutés. Attention, si vous indiquez un dossier qui contient beaucoup de photos dans de nombreux sous-dossiers (toutes vos photos), ça va prendre un certain temps!

C'est une fonction formidable, qui vous permet de reconstruire toute la structure de catégories en un seul clic sur une nouvelle installation. Notez que cette opération d'importation est capable de gérer les fichiers sidecar, c'est à dire d'inclure dans le catalogue les mots-clés qui y sont inscrits.

Il m'est déjà arrivé que cette opération ne réussisse pas du premier coup. En faisant une deuxième fois `Effacer tout` puis `Import folder`, ça a marché. En fait, j'avais effacé toutes les catégories. Je suppose que j'aurais dû les importer au préalable ou au minimum en préparer une.

J'ai eu dernièrement un bug avec la V0.94.1, mon dossier 2008 ne s'est pas correctement importé (photos et vignettes innaccessibles après filtrages). J'ai donc effacé tous les sous-dossiers de 2008 dans le tableau, puis ajouté à nouveau le dossier 2008 entier et ça a fonctionné.

Après avoir lancé ce genre de reconstruction (après une nouvelle installation ou un nettoyage), vous remarquerez bien souvent quelques anomalies dans le filtre de catégories, signe que quelques mots-clés étaient mal orthographiés ou enregistrés avec des erreurs. Ce sera l'occasion de les corriger.

Dans l'onglet `Outils`, il y a un bouton `Importer la base de données des catégories xnview`. Je n'ai pas testé cette fonction, l'auteur du logiciel indique que cette fonction permet uniquement d'importer une base de données provenant de XnView Classic.

### Mise à jour du catalogue avec les fichiers

Il y a aussi deux fonctions dans le menu `Afficher`: `Mise à jour du catalogue avec les fichiers` et `Mise à jour des fichiers avec le catalogue`. Ces deux fonctions agissent seulement sur un lot de photos que vous avez sélectionnées. S'il y a quelques divergences entre le catalogue et les mots-clés dans les photos, ça va permettre de les éliminer. J'ai utilisé récemment la première, après avoir ajouté un grand nombre de mots-clés dans mes photos avec d'autres logiciels.

Ca fonctionne très bien en utilisant, avec un clic-droit sur un dossier, le choix `Voir tous les fichiers (récursif)` pour sélectionner d'importants lots d'images. C'est donc une bonne méthode alternative à celle décrite au début de ce paragraphe remarques.

Une remarque sur `Mise à jour des fichiers avec le catalogue`. Sélectionnez une photo, cliquez cette fonction, puis allez voir les informations ExifTool de la photo. Trois métadonnées correspondant au marquage par étoiles et couleurs sont ajoutées dans la photo, même si elles sont absentes dans le catalogue (XMP:rating et XMP:label prenant par défaut les valeurs 0 et none, et MicrosoftPhoto:Rating, avec la valeur 0 par défaut). Cette fonction n'écrit pas de métadonnées IPTC, mais seulement XMP. Ce bug est corrigé en V0.96.4, les IPTC sont maintenant écrits.

On peut aussi comprendre ces deux fonctions en relation avec les deux premières options de l'écran `Outils, Options, Métadonnées` du début du Chapitre 4:
- ordinairement, la première option de métadonnée `Importer les mots clés XMP ou IPTC dans les catégories DB` n'est pas cochée. Si ponctuellement vous voulez faire entrer un nouveau lot de photos déjà tagguées, dans le catalogue et dans les catégories, cochez la case et cliquez `Mise à jour du catalogue avec les fichiers`;
- la deuxième option de métadonnées, `Exporter les catégories DB vers le sujet XMP et les mots clés IPTC` sert à écrire les mots-clés dans les photos au moment ou on coche une catégorie.

Dans certains cas, des photos peuvent être présentes dans la base de données avec leurs catégories, mais les mots clés IPTC ou XMP n'ont pas été inscrits, ou mal mis à jour dans les photos, notamment si vous avez édité ces photos dans un logiciel de traitement d'images, ou si vous êtes allé les reprendre dans une ancienne sauvegarde. En cliquant `Mise à jour des fichiers avec le catalogue`, l'écriture des mots-clés va se faire, pour les photos sélectionnées à l'écran. Jusqu'en V0.96, les mots-clés IPTC ne seront pas inscrits dans les photos.

Cette fonction a une utilisation "gadget" que je décris dans le chapitre suivant (paragraphe écriture des fichiers sidecar): elle peut générer un fichier XMP externe avec les exif's de la photo.
