---
title: Les fichiers sidecar ou compagnons
description: Lorem ipsum dolor sit amet - 3
layout: ../../layouts/MainLayout.astro
---

Les métadonnées EXIF, je le rappelle, contiennent essentiellement des informations crées par l'appareil photo et sont intégrées dans le fichier de la photo. Les constructeur d'appareil photos sont parvenus à inclure ces métadonnées (EXIF) dans tous les formats RAW (formats qui sont pourtant spécifiques à chaque marque).

Les métadonnées IPTC et XMP peuvent aussi être embarquées dans les photos, mais seulement pour certains formats d'image: JPG et quelques autres: PNG, TIFF. Il se trouve que les appareils photo "performants" permettent d'enregistrer des photos au format RAW (c'est un terme générique), format qui a de nombreux avantages. Mais ce format de photo ne supporte pas les métadonnées IPTC et XMP embarquées. Il ne supporte d'ailleurs pas du tout les métadonnées IPTC puisque c'est la norme XMP seule qui propose une solution.

Une autre forme de marquage a été développée, pour la norme XMP, qui consiste à écrire un fichier contenant les métadonnées "à côté" de chaque photo. On nomme ce fichier "sidecar" ou "compagnon". Il porte le même nom que la photo qu'il accompagne, mais avec l'extension XMP dans son nom.

On peut aussi trouver les termes "fichier annexe" ou "fichier XMP externe". J'emploierai ici surtout le mot "sidecar". La méthode est surtout adaptée aux photos au format RAW (NEF, CR2, MRW, ORF, etc), car ces formats ne supportent pas toujours les métadonnées intégrées.

On est donc obligés d'utiliser des fichiers sidecar si on veut avoir des métadonnées personnelles avec ce type de formats d'images (presque obligés, XnViewMP version V0.89 peut écrire des métadonnées XMP dans les photos au format ORF de mon Olympus, je ne sais pas si c'est raisonnable). Pour revenir aux fichiers JPG, en fait on a le choix et on peut parfaitement utiliser aussi les fichiers sidecar.

Certains utilisateurs considèrent d'ailleurs qu'il est moins "risqué" d'y mettre les métadonnées, sans toucher au fichier image original, et que c'est une solution d'avenir. D'autres, comme moi, pensent qu'il est plus simple d'embarquer les métadonnées dans les fichiers image JPG et qu'il y a moins de risque de les égarer.

Autre choix à faire, certains photographes stockent les images JPG et RAW dans le même dossier et souhaitent associer un fichier compagnon aux deux! Pour les distinguer, ils sont donc obligés de nommer ces 4 fichiers sur le modèle suivant:
- Image : DSC00001.JPG et compagnon DSC00001.JPG.XMP;
- Image : DSC00001.RAW et compagnon DSC00001.RAW.XMP.

D'où la présence d'une option de nommage -avec ou -sans extension, dans les paramètres de métadonnées de XnViewMP.

![Paramètres des métadonnées](/tutoriel/xnvmp44.png)

### Comment sont liés un fichier image et son sidecar

Le "lien" entre ces deux fichiers n'existe que si un critère peut être utilisé pour cela: c'est en principe le nom du fichier qui est commun aux deux. On a donc une image, nommée par exemple DSCN00222.MRW, et un fichier sidecar DSCN00222.XMP qui contient des métadonnées XMP de cette image.

Je crois savoir qu'un logiciel de chez Adobe "gère" ces deux fichiers comme un ensemble indissociable; ce n'est pas le cas de XnViewMP, ni de Windows. En fait, rien ne lie ces deux fichiers si ce n'est la méthode utilisée par le logiciel (et la personne qui l'utilise). Mais j'ai lu quelque part que Adobe Bridge serait sensible aux éventuelles différences de dates entre la photo et son sidecar.

Plus généralement, tout logiciel qui exploite ces fichiers fait le lien entre l'image et le sidecar uniquement parce-qu'ils portent le même nom. Ce qui ouvre la possibilité de fabriquer des fichiers sidecar en partant de photos JPG, puis de les déplacer vers un dossier contenant des photos RAW ayant les mêmes noms.

Il y a eu pas mal d'évolutions dans la gestion des fichiers Sidecar depuis la version V0.91 de XnViewMP, et je n'ai pas forcément tout testé. Il y a des réglages à faire dans la partie basse de la fenêtre `Outils, Paramètres, Liste fichiers`, pour lier les fichiers images à leur compagnon, ou l'afficher:

![Paramètres de gestion des fichiers sidecar](/tutoriel/xnvmp43.png)

Par défaut, la case `Montrer les fichiers compagnons` est cochée, ce qui me convient bien. Le fait de lier les deux fichiers consiste seulement à indiquer à XnViewMP si les manipulations faites sur l'un des deux fichiers doivent être faites également sur l'autre. Le lien n'existe donc que dans le fonctionnement de XnViewMP et pas dans le disque dur où sont stockés les fichiers.

### Lecture des fichiers sidecar

Il n'y a pas de paramétrage spécifique pour que XnViewMP lise les fichiers sidecar. Il le fait de la même façon que l'importation des mots clés intégrés aux photos, avec les mêmes options (importer les mots clés XMP ou IPTC dans les catégories DB) et avec le bouton `Import folder` de l'écran `Outils, Paramètres, Catalogue`.

À partir de V0.90 on peut sélectionner le lot de fichiers dans le browser et utiliser la fonction `Mise à jour du catalogue avec les fichiers` du menu Afficher.

### Affichage des métadonnées des fichiers sidecar

Les données XMP contenues dans ce type de fichier sont affichées de la façon suivante:
- en sélectionnant le fichier image, l'affichage des données est dans l'onglet XMP de la zone informations (et vous ne pouvez pas les différencier des données xmp intégrées). S'il y a des mots clés XMP, vous voyez les cases cochées correspondantes dans la zone catégories (selon vos options de métadonnées);
- ou en sélectionnant le fichier XMP lui même, les données XMP sont visibles dans l'aperçu, c'est le plus fiable (pour vérifier avec certitude si des métadonnées existent aussi dans le fichier image, renommez provisoirement le sidecar xmp, et rafraichissez l'affichage);
- pour que l'aperçu du sidecar fonctionne, dans `Outils, Paramètres, Liste fichiers`, dans l'onglet `Filtre personnalisé` ligne `Texte` l'extension XMP doit être présente (allez voir la fig 43 et utilisez la fonction "précédent" de votre navigateur pour revenir ici). Vous pouvez aussi double-cliquer le fichier XMP, en général ce type de fichier est associé à une appli Windows comme Bloc-notes ou Notepad++, qui va s'ouvrir pour afficher le contenu du fichier XMP;
- les mots clés, notations et labels sont dans le catalogue, donc sont exploitables via le filtre des catégories, ce qui permet de s'assurer que les photos concernées sont bien marquées;
- les notations et labels peuvent aussi être visualisés par des petits pictogrammes au-dessus des vignettes (`Outils, Paramètres, explorateur, Vignettes, Superposition des icônes`).

### Paramètres de XnViewMP pour l'écriture des fichiers sidecar

L'option qui permet de paramétrer XnViewMP pour provoquer l'écriture de fichiers sidecar est située dans l'écran `Outils, Paramètres, Métadonnées` (voir plus haut la figure 33) `Mise à jour ou création du sidecar XMP`. Cette option est indépendante des deux situées au-dessus, qui agissent sur les métadonnées intégrées aux photos. Si cette option est cochée, le fait d'affecter une catégorie à une photo va provoquer la création d'un fichier sidecar contenant les mots clés correspondants.

Il y a deux formes possibles pour nommer les fichiers sidecar, l'extension .xmp va remplacer, ou s'ajouter à l'extension de nom du fichier image. Dans ce même écran, deux options supplémentaires permettent d'exporter note et libellé de couleur dans les fichiers sidecar. Lire le chapitre 9 pour plus de détails sur ces métadonnées et leur utilisation.

À ce jour, XnViewMP est capable de lire et écrire les mots clés XMP, les mots clés hiérarchisés Lightroom, les notations et labels.
- mots clés xmp-dc:Subject et xmp-lr:HierarchicalSubject (les deux types de mots clés XMP);
- notation XMP:XMP-xmp:Rating et XMP:XMP-microsoft:RatingPercent (l'ancienne métadonnée exif n'est pas gérée par XnViewMP);
- couleur XMP:XMP-xmp:label (ou plus simplement xmp:label).

Les autres métadonnées (titre, légende, ville, copyright) n'étaient gérées par XnViewMP dans les fichiers sidecar jusqu'en V0.91. Depuis la V0.92, il y a une nouvelle fenêtre `Outils, Métadonnées, Editer XMP` qui, par exception, va utiliser le paramètre Sidecar que vous avez coché ici.

Et donc les métadonnées que vous ajoutez dans la fenêtre `Editer XMP` iront s'ajouter dans le Sidecar. Je n'ai pas testé cette fonctionnalité qui, a mon sens, est une évolution majeure, pour les photographes utilisant essentiellement les fichiers RAW.

### Quand l'écriture se fait-elle effectivement

L'écriture de mots clés dans le sidecar peut se faire en attribuant une catégorie à l'image, si l'option `Exporter les catégories DB` dans `Outils, Paramètres, Métadonnées` est aussi cochée. L'écriture pour les notes ou labels se fait au moment où on affecte ce type de marquage, en ayant activé les deux options correspondantes plus la même option que ci-dessus.

Ou, pour ces deux groupes de métadonnées, avec la fonction `Mise à jour des fichiers avec le catalogue` du menu `Afficher`. Et enfin, pour les autres métadonnées de la fenêtre `Éditer XMP`, c'est l'utilisation du bouton "Ecrire"

Pour information, on peut générer un fichier xmp externe contenant les exif de la photo, ça m'est arrivé par hasard ; voici la méthode :
- Dans la fenêtre Outils, Paramètres, Métadonnées, décochez la deuxième et la troisième options (oui ! décochez la création de xmp Sidecar et "exporter ..." !)
- Sélectionnez une photo, cliquez sur Affichage, Mise à jour des fichiers avec le catalogue... et vous obtenez le xmp.
- Si, au lieu de décocher la deuxième, vous décochez la première option, ça ne fabrique pas le xmp, mais ça efface les mots clés ( ? ! )

### Trucs et astuces

Du fait de la relation très "virtuelle" entre une image et son sidecar xmp, il y a une astuce pour travailler avec les fichiers sidecar, que je vais essayer d'expliquer ici.

Je considère qu'il est plus commode pour moi de travailler avec des métadonnées iptc et xmp embarquées dans mes photos JPG. Mais j'ai un nombre de plus en plus important de photos au format raw, et ce format, par ses qualités, constitue une assurance pour améliorer le rendu des images dans le futur.

Ces photos raw doivent avoir leurs mots clés, au même titre que les jpg, mais sont bien plus lourdes à manoeuvrer, leur volume est important et ralentit pas mal mon ordinateur. J'ai donc décidé d'utilser la version JPG des photos dans XnViewMP, pour permettre tous les tris et diaporamas et d'utiliser une astuce pour archiver les versions raw avec les fichiers sidecar.

J'entre mes mots clés en une seule étape dans les photos JPG, simultanément en IPTC + XMP + XMP Sidecar. Puis je déplace mes fichiers XMP sidecar vers le dossier d'archivage des versions RAW. Résultat, mes photos JPG ont leurs métadonnées intégrées, et mes photos RAW ont leur sidecar XMP à leur côté.

Notez cependant que dans le catalogue de XnViewMP, le lien entre les catégories et les images n'existe que pour les photos JPG. A ce stade, il faut choisir entre les JPG et les RAW si vous ne voulez pas que le catalogue contienne tout en double.

Deuxième astuce, destinée à inscrire dans les sidecar, pour les fichiers JPG, d'autres métadonnées que celles gérées par XnViewMP. Désormais, cette astuce ne servira que pour des mises à jour d'anciens fichiers Sidecar. En Effet, XnViewMP intègre depuis la V0.92 l'écriture de toutes les métadonnées dans les sidecar.

L'astuce consiste à utiliser Exiftool, utilitaire présent dans le dossier AddOn d'installation de XnViewMP.
Il faut tout d'abord paramétrer la fonction "Ouvrir avec ..." dans XnViewMP, pour pouvoir "appeler" Exiftool avec les bons réglages.
Sélectionnez une image, puis avec un clic-droit, choisissez "Ouvrir avec" puis "Configurer les programmes"

![Ouvrir avec...](/tutoriel/xnvmp35.png)

Cliquez "Ajouter", parcourez vos dossiers pour atteindre le dossier "XnViewMP\AddOn" , sélectionnez exiftool et cliquez "ouvrir".
Une nouvelle ligne se crée dans le tableau, double cliquez dans la première colonne pour y mettre un nom, par exemple "Exiftool sidecar"
Double-cliquez dans la deuxième colonne et écrivez -o %d%f.xmp -xmp -k ou bien -o %d%f.xmp -xmp:all -k
Cliquez OK.
Ces manips sont décrites en détail dans le paragraphe 11N du chapitre 11, lisez en particulier l'exemple 3 qui est le même qu'ici, illustré par la figure 53.
Vous pourrez alors créer des fichiers sidecar, en sélectionnant un ou plusieurs fichiers JPG contenant des métadonnées XMP, puis avec un clic-droit, en cliquant dans "Ouvrir avec..." puis "Exiftool sidecar"
L'utilitaire Exiftool va alors recopier toutes les métadonnées XMP présentes dans les photos JPG vers les fichiers sidecar.
Comme pour l'astuce précédente, l'idée est de déplacer après coup vos sidecar vers le dossier contenant les mêmes images au format RAW.
Deux limitations de cette méthode :
- les métadonnées IPTC ne sont pas "recopiables" en sidecar xmp de cette façon. (il y a un autre moyen via ExifTool, mais compliqué)
- Si vos photos n'existent pas en JPG, comme le format RAW ne devrait pas contenir de données XMP, la méthode ne leur est pas applicable directement.
(sauf exceptions, ou pour les données EXIF qu'on peut aussi écrire dans le sidecar, en enlevant le paramètre "-xmp".)

Il y a probablement un tas d'actions possibles qu'on peut faire par ce biais d'utilisation d'exiftool, mais je n'en maitrise pas très bien les paramètres.
Remarquez l'option -xmp de la commande. Cette option sélectionne uniquement les métadonnées xmp pour être écrites dans le sidecar.
Si vous l'enlevez, toutes les métadonnées de l'image iront dans le sidecar, c'est à dire toutes les EXIF incluses.
Autre remarque, le paramètre -o que j'ai utilisé ne permet pas de faire une mise à jour du sidecar, mais seulement sa création.

### Troisième astuce

Si vous avez besoin de réaliser le marquage des photos sur plusieurs ordinateurs, par exemple pour répartir le travail entre plusieurs personnes éloignées.
L'idée est d'envoyer des copies de photos dans un autre PC, faire le travail de marquage là-bas, et enfin ramener les fichiers sidecar XMP sur le PC de départ.
De cette façon, les originaux restent en place sur le PC de départ.
Dans l'état actuel de XnViewMP (V0.94.1), je ne conseille cette manip que pour les mots-clés XMP, les étoiles et labels de couleur.
Je donne quelques idées pour éventuellement les mots clés IPTC et autres métadonnées, mais ce n'est pas pratique du tout.

Vous pouvez procéder de la manière suivante :
Copiez un lot de photos (éventuellement en en réduisant leur taille pour bien alléger le déplacement, avec un traitement par lots) vers un autre PC.
Dans ce nouveau PC, faites un marquage en XMP, ou en fichiers sidecar si vous n'entrez que des catégories, étoiles et couleurs.
Si vous entrez des métadonnées autres que les mots-clés, il faudra utiliser l'astuce 2 décrite précédemment, et donc provoquer la création des fichiers sidecar avec Exiftool.
Quand le travail est fait, copiez vos fichiers sidecar XMP, et ramenez-les dans le PC original.
Posez-les dans le même dossier que les photos jpg correspondantes, et faites une "mise à jour du catalogue avec les fichiers" (avec "importation" en option de métadonnées).
A ce stade le catalogue contient les nouvelles catégories, + étoiles et couleurs.
Dans les options de métadonnées, passez en "exportation" et réglez vos paramètres d'export : mots-clés IPTC et XMP, étoiles et couleurs.

Un bug présent jusqu'en V0.96 empêche l'écriture des mots-clés IPTC avec la fonction "Mise à jour des fichiers avec le catalogue"
Ce bug semble résolu à partir de v0.96.4, je raye donc ci-dessous les phrases devenues inutiles
Si vous souhaitez n'écrire que des métadonnées XMP, procédez simplement avec cette fonction de mise à jour, en ayant sélectionné les photos.
Mais si vous voulez écrire les mots clés IPTC, c'est galère, il va falloir sélectionner des lots de photos ayant une catégorie commune (avec le filtre des catégories),
Puis sélectionner le lot, décocher et recocher (pas trop vite) la catégorie considérée. Répétez pour toutes les catégories ayant été utilisées au marquage.

Et si vous avez mis d'autres métadonnées dans les sidecar, pour les transférer vers les XMP intégrés et les IPTC il faudra encore passer par Exiftool. (doc à faire)

Voilà, les sidecar XMP auront transporté (en partie) les tags vers les photos originales ...
