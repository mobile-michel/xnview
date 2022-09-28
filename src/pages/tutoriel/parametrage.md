---
title: 4 - Paramétrage des options de métadonnées pour les catégories
description: Lorem ipsum dolor sit amet - 3
layout: ../../layouts/MainLayout.astro
---

Nous avons vu dans le chapitre 3 une méthode pour écrire ou consulter diverses métadonnées, intitulée "Editer IPTC/XMP". Dans ce nouveau chapitre, une autre méthode va être décrite, qui utilise un paramétrage différent, situé dans "Outils, Paramètres, Métadonnées" et "Outils, Paramètres, Catalogue".

Cette nouvelle méthode consiste à utiliser les catégories, et concerne uniquement les mots clés. Notez bien que ces deux méthodes ont chacune leur propre paramétrage, et si vous utilisez tantôt l'une, tantôt l'autre, vous n'aurez pas des données homogènes.

Dans toute cette documentation, je parle assez peu d'une troisième méthode qui consiste à utiliser les menus et boutons de la barre d'outils. En fait, des différences de fonctionnement peuvent exister entre ces trois méthodes, et je vous incite à bien vérifier ce que vous faites si vous souhaitez changer de méthode.

La caractéristique essentielle de l'utilisation des catégories décrite ici est la gestion d'une base de données de mots clés interne à XnViewMP en parallèle avec les mots clés IPTC ou XMP. Les catégories constituent à la fois un artifice pour faciliter la saisie de mots clés, et une méthode de filtrage pour afficher plus tard des photos triées par mots-clés.

Les catégories n'ont aucun rapport direct avec les métadonnées, mais Xnview utilise simultanément les catégories et les mots clés hiérarchisés (lr:hierarchicalsubject). Pour pouvoir créer des mots clés (hiérarchisés ou non) à partir des catégories, il faudra activer une option d'exportation (l'inverse est également vrai, pour créer des catégories à partir de mots-clés existants, il y a une option d'importation).

Ce qui nous amène à un paramétrage très important : menu Outils, Paramètres, Métadonnées. Vous avez plusieurs options possibles, illustrées dans l'image suivante (fig 13):

Outils Options métadonnées
Figure 13

La première option à cocher (importer) permet la transcription des mots clés (qui seraient déjà présents dans les photos) en catégories (si vous débutez dans l'utilisation de Xnviewmp, revenez lire ce paragraphe plus tard, passez à la deuxième option ci-dessous). Avec cette option, le fait de visualiser les photos d'un dossier les fait "entrer" dans les catégories (et crée les catégories nouvelles), et met à jour la base de données.

Attention à cette phase, si vous avez des mots-clés ambigus, il y aura des mélanges (par exemple "orange" c'est un fruit et une couleur). En utilisation ordinaire de XnViewMP, que ce soit pour visualiser ou marquer vos photos, décochez cette case d'importation. Exception, si vous tenez à mettre des mots clés via la fenêtre "Editer IPTC / XMP" et les enregistrer dans les catégories, cochez la case.

Sinon, je pense qu'il faut cocher cette case uniquement au moment où vous souhaitez que XnviewMP lise des mots clés dans un nouveau dossier de photos, ou quand vous voulez importer un dossier de photos déjà marquées pour mettre à jour la base de données et les catégories. De préférence dans ce cas, décochez la deuxième option décrite ci-dessous, sinon vous allez aléatoirement doublonner des enregistrements dans la base de données.

Une sous-option d'importation est apparue en V0.96 : "Mettre à jour quand le fichier est modifié (date/taille)". Je n'ai pas encore étudié le fonctionnement de cette nouveauté. Il me semble que jusqu'à présent XnViewMp se basait justement sur la modification de date ou de taille des fichiers pour mettre à jour ses données.

Or cette option n'est pas cochée par défaut, j'imagine qu'il faut la cocher pour retrouver l'ancien fonctionnement. Et donc, si elle reste décochée, que va t-il se passer ? La mise à jour sera-t elle systématique ou au contraire jamais faite ?

La deuxième option (exporter) fait l'inverse, elle inscrit des mots clés (XMP et/ou IPTC) dans vos photos en fonction des catégories auxquelles vous les rattachez. C'est avec cette option que la magie de saisie des mots clés va se faire. Donc, Cochez la case (sauf, comme indiqué au paragraphe précédent, pendant les phases d'importation de dossiers).

Il y a deux sous-options : à vous de voir si vous voulez créer les données XMP ou IPTC, ou les deux, en cochant les cases ad-hoc. J'ai mis un paragraphe dans le dernier chapitre (Annexes) sur le choix à privilégier entre IPTC et XMP.

La première option provoquera l'écriture des mots clés (XMP-DC subject) normaux ET des mots clés hiérarchisés (XMP-LR hierarchical subject). La deuxième écrira les mots clés IPTC (IPTC-IIM keywords).

Remarque : ces deux sous-options décident de la création de données IPTC ou XMP dans une photo qui n'en contenait pas. Mais si la photo contient déjà des métadonnées, elles seront mises à jour, même si la case n'est pas cochée.

La troisième option concerne les fichiers XMP externes (ou compagnons, ou sidecar). C'est indispensable pour les fichiers RAW. Cette option, quand elle est cochée, provoque la création d'un fichier sidecar, de type xmp, à côté de chaque photo au moment où elle est marquée d'une catégorie.

J'ai rassemblé les informations au sujet de ces fichiers sidecar, allez lire le chapitre 7 pour plus de détails. Remarque pour les versions après V0.92 : cette option agit aussi sur la fenêtre "Outils, Métadonnées, Editer XMP", ce qui est une exception.

La quatrième option "Lecture des mots clés hiérarchiques", permet de construire une hiérarchie de catégories en lisant des mots clés hiérarchisés préalablement existants dans les photos. Je n'ai pas vérifié si ça lit plutôt l'une ou l'autre forme possible de mots clés hiérarchisés, soit:
- xmp:hierarchicalsubject d'Adobe LightRoom, relativement normalisés;
- iptc:keywords, qui sont parfois utilisés sous forme hiérarchisée, en précisant le caractère séparateur, ordinairement la barre verticale | ).

A priori, ça n'est utile que dans le cas de mots clés déjà en place dans les photos, que XnviewMP va lire pour construire sa base de données (comme dans les cas cité ci-dessus pour l'option 1). Au mieux ça construit vos catégories à la perfection, et au pire ça ne coûte rien, vous pouvez donc la laisser cochée.

La cinquième option "Ecriture de la hiérarchie des mots clés" est nouvelle. Depuis la correction d'un bug des versions avant V0.82 je crois, (perte de mots clés lightroom) le nouveau choix de xnview consistait à écrire des mots clés IPTC hiérarchisés, avec, pour un exemple à trois niveaux, un format de ce type : animal, animal|oiseau, animal|oiseau|moineau. Un intérêt d'utiliser des mots clés iptc hiérarchisés, c'est que ça se prête bien à un tri alphabétique. Voyez le paragraphe C du chapitre 11 pour ce type de tri.

Mais on peut contester la présence de hiérarchie dans les IPTC, ça n'est pas franchement normalisé, même si d'autres logiciels le font. En décochant cette option, xnview permet d'écrire des mots clés IPTC "normaux", comme cet exemple: animal, oiseau, moineau, sans hiérarchie.

Personnellement c'est le choix que je fais. Attention, cette option n'est active que dans l'utilisation des catégories (elle n'agit pas dans la fenêtre "Edition de métadonnées" pour la saisie de mots-clés).

### En résumé, pour les mots clés

Les choix proposés pour l'écriture des mots clés sont donc :
- aucun mot clé inscrit dans les photos (seule la base de donnée de XnViewMP est mise à jour);
- IPTC sans hiérarchie ou IPTC avec hiérarchie;
- XMP avec les deux types, xmp:Subject ET xmp-lr:HierarchicalSubject, et avec la possibilité d'écrire des fichiers XMP compagnons;
- IPTC et XMP en même temps. .sidecar.xmp-sidecar.xmp-compagnon.xmp-externe.externe.

La sixième option permet d'affecter en un seul clic une catégorie avec les catégories parentes. "Automatically apply parent keywords". Pour les mots clés IPTC et XMP, c'est très cool, (donc combinée avec la deuxième option pour exporter) ça permet de saisir un mot clé et tous ses parents en un seul clic.

Dans les mots clés hiérarchisés xmp Adobe Lightroom, ça crée une liste de mots clés hiérarchisés pour chaque niveau hiérarchique de catégories. Cette liste de chaines de mots-clés paraît un peu redondante, mais c'est normal, Adobe l'a pensée comme ça.

Il y a deux précautions à connaitre concernant cette option :
- elle n'est pas active quand vous utilisez la méthode "Action, Assigner une catégorie" de la zone catégories;
- elle modifie le fonctionnement du Ctrl-clic de la souris quand vous voulez sélectionner plusieurs lignes dans le filtre des catégories. .bug.sélection-multiple.multiple.ctrl-clic.control

Les deux options suivantes, Note et Libellé, sont utiles si vous attribuez des notes (les étoiles) ou des libellés (les bulles en couleur) à vos photos dans XnViewMp, et que vous voulez inscrire simultanément la métadonnée XMP correspondante. Ca donne l'assurance de ne pas perdre ces informations en cas de défaillance du logiciel. Le chapitre 9 est consacré à ces deux marquages.

La dernière option permet de récupérer des anciennes métadonnées de commentaires (si vous les avez utilisées) pour les retranscrire dans la norme XMP plus récente (voir le chapitre 11T). Ah, pensez aussi à cocher l'option UTF8 dans l'onglet Encodage IPTC si ça n'y est pas déjà.

Je n'ai pas parlé ici des paramètres du catalogue (= la base de données de xnviewmp), ce sera abordé dans le chapitre 6 consacré au catalogue. Maintenant que les paramètres sont étudiés et compris, intéressons-nous dans le chapitre suivant aux manipulations qui vont faire intervenir ces réglages pour modifier ou créer les métadonnées.
