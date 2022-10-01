---
title: Importer et trier
description: Lorem ipsum dolor sit amet - 3
layout: ../../layouts/MainLayout.astro
---

Le terme "importer" désigne ici l'opération de copie des photos présentes sur une carte mémoire d'appareil photo, vers des dossiers désignés par XnViewMP.
Il ne s'agit pas d'une opération qui lirait des métadonnées pour les inclure dans le catalogue de XnViewMP.
Quel est alors l'intérêt d'utiliser cette fonction ?
- Elle permet de sélectionner des images sur une plage de dates sélectionnées, de modifier les noms des images à volonté, de les répartir dans des dossiers datés, et éventuellement d'ajouter un mot clé XMP (par exemple : a-trier)

Le menu "Outils, Importer et trier" propose la fenêtre suivante :

importer
Figure 47

Dans la zone du haut Source on décrit le chemin d'accès aux images de la source (la carte mémoire ...), éventuellement en demandant d'inclure les sous dossiers.

Dans la zone suivante, le dossier Destination.
A droite de la case, trois méthodes sont proposées pour pouvoir inscrire rapidement un chemin (historique des entrées, écran de choix de dossiers, favoris)

Puis dans la zone suivante, Photos, vous pouvez provoquer la création de sous-dossiers par dates pour y ranger les photos par dates.
Les dates utilisées sont les dates EXIF de prise de vue, ce qui explique l'option proposée au-dessus pour les cas ou cette date est absente.

Il y a plus de vingt formats de dates possibles, mais souvenez-vous que sous Windows, le caractère / n'est pas autorisé pour les noms de dossiers, ce qui réduit le choix à 9 possibilités.
Dans ces 9 possibilités, on peut choisir de créer des sous-dossiers par années, par mois ou par jours, avec divers formats de noms de dossiers.
 (25/03/2020) Il me paraît possible de définir aussi d'autres formats "manuellement" dans le fichier xnview.ini, mais je n'ai pas essayé.
Si vous utilisez un format du type yyyy-MM-dd (exemple : 2017-05-25), avec des tirets, vous pourrez utiliser un critère de filtrage de mois du type "-05-" (pour les dates de floraison en Mai !).

La case suivante, Nouveau nom permet de renommer les photos dans le dossier de destination. Les possibilités de renommage sont nombreuses et sont proches de celles décrites dans le chapitre 11F
 En laissant cette case non cochée, je n'ai eu que des erreurs. Laissez la coche et au moins {filename} dans la case pour simplement recopier les fichiers sans changer leur nom.

 (15/12/2020) V0.98 (non illustré) Option #enumerator per folder. L'utilisation des ##... dans les noms de fichiers permet de créer des séquences de numérotation.
Cette nouvelle option permet de redémarrer à 1 la séquence de numéros dans chaque sous-dossier.

Quatrième zone
Une nouvelle zone a été ajoutée en 2019 pour importer et nommer les vidéos de la même façon.

Dans la cinquième zone on a la possibilité d'ajouter des mots-clés XMP. J'ai mis en exemple "A_faire", mais personnellement, je préfère pratiquer autrement.

La sixième zone, Filtre, permet de limiter l'importation de photos à une fourchette de dates. C'est bien pratique, car on n'est pas obligé de copier toute la carte mémoire.
Ce tri par dates est basé sur les dates EXIF de prise de vue ; vous avez vu plus haut l'option pour ranger les images qui n'auraient pas de dates exif dans un dossier à part.
Prenez soin de mettre une date de début ET de fin précises, pour une copie méthodique de vos photos et éviter les oublis.

Lancez l'importation
Cliquez OK, attendez un moment, ça ne démarre pas toujours rapidement, car XnViewMp analyse le dossier source, crée les dossiers de destination et prépare la copie.
Ensuite vient une fenêtre avec des barres de progression pendant la copie ;
Une fois l'import terminé, cliquez la croix, ou "Annuler" pour refermer la fenêtre.
A la prochaine utilisation, vous retrouverez la fourchette de dates que vous venez d'utiliser, ce qui vous permet de savoir où vous en étiez, et de passer à la période suivante.


Un cas particulier d'utilisation pour ceux qui débutent dans le classement (06/10/2019)
Dans les autres pages de ce site, et dans quelques copies d'écran, vous remarquerez que je propose de stocker les photos dans des dossiers annuels.
C'est à mon avis la solution la plus simple et claire, et si on ne confond pas les notions de stockage et de classement, rien ne justifie de chercher plus compliqué.
Dans ces dossiers annuels, j'ai trouvé pratique de faire des sous-dossiers de taille raisonnable, de l'ordre de 20 à 200 photos, par exemple du type 2017-03-27 Bretagne.
Ca me permet de retrouver rapidement certains évènements sans forcément avoir recours à des mots clés ou filtrages savants (filtrer le département parmi 22,29,56 ...)

Si votre stock complet de photos est hyper mal rangé, vous pouvez en quelques instants tout ranger dans des dossiers annuels/mensuels.

Les prérequis sont les suivants :
- Vos disques durs doivent avoir suffisamment d'espace libre pour contenir une copie de l'ensemble des photos, on va donc en doubler le volume, au moins pour quelques jours.
(Avec un clic-droit dans l'explorateur de Windows, vous pouvez estimer la taille de vos actuels dossiers de photos)
- Si vous avez déjà fait un travail important de classement, par exemple en ayant nommé des dossiers ou des photos en fonction de leur contenu, il serait dommage de le perdre. Dans ce cas, ne faites pas cette manip tout de suite et allez voir d'abord le chapitre 11A. Je propose là bas un moyen de récupérer les noms de dossiers pour les mettre dans les mots-clés des photos, c'est à dire de passer d'un rangement thématique à une indexation par mots clés.
- Si vous avez commencé à mettre des catégories dans vos photos (ou des étoiles, des labels, des commentaires) avec XnViewMP, assurez-vous que ça correspond à des métadonnées qui résisteront à ce "déménagement"; ne prenez pas le risque de tout perdre.
- Vos photos doivent dans leur grande majorité contenir des dates EXIF de prise de vue correctes. Faites des sondages pour vérifier.
Si vous n'avez pas bricolé outre mesure vos images, raisonnablement ce sera le cas.
- Vous devez savoir précisément où sont vos photos. Si elles sont dispersées dans des dossiers "mes images" "mes documents" ou des albums exotiques, rassemblez-les au préalable.
Préparez aussi un futur dossier pour les accueillir, on va dire par exemple D:\Photos

On y va
Supposons donc que vous ayez rassemblé toutes vos photos dans un dossier C:\Photos-temp\ , peu importe qu'il y ait dedans une myriade de sous-dossiers.
Lancez la fonction Importer et trier, sélectionnez dans la case source le dossier de départ C:\Photos-temp, et cochez la case "inclure les sous dossiers"

importer
Figure 47b

Sélectionnez le dossier cible D:\Photos et cochez la case pour ranger aussi les photos sans date EXIF vers Autres fichiers
Cochez la case Sous dossiers, et choisissez un modèle de noms de dossiers, par exemple yyyy-MM. Vous obtiendrez au maximum 12 dossiers par an.
Personnellement j'ai choisi le format yyyy-MM-dd avec la date du jour, mais si vous avez 25000 photos, ça va faire beaucoup de dossiers d'un seul coup ...
Cochez la case "nouveau nom" et laissez dedans {filename} c'est indispensable.
Toutes les autres options ou cases, plus bas dans cette fenêtre, doivent rester vides ou grisées.
Cliquez sur OK, et attendez ... Cela peut prendre du temps, je dirais quelques minutes par paquet de 1000 photos...
La fin du traitement ne se manifeste pas très visiblement... quand XnViewMP semble au repos et vous rend le contrôle, fermez la fenêtre avec la croix.

Vous obtenez dans le dossier D:\Photos quelques dizaines ou centaines de sous dossiers nommés année-mois, sur le modèle yyyy-MM
Comparez la taille totale de vos anciens dossiers et des nouveaux. Peut-être aviez-vous des doublons dans les anciens dossiers qui ne se répètent pas dans les nouveaux ...
Patiemment, soit dans l'explorateur de windows, soit dans XnViewMp, et avec une souris qui fonctionne bien, créez des dossiers annuels : 2015, 2016, 2017 etc et déplacez les dossiers mensuels dedans.
N'effacez pas vos photos originales, celles qui étaient dans le dossier source, avant d'avoir sérieusement vérifié que ce nouveau rangement vous convient, et que tout est dedans.
Voyez dans "Autres fichiers" ce qu'il y a comme photos qui n'ont pas de date de prise de vue; il va falloir leur retrouver une place (et une date, ce serait mieux, voir paragraphe suivant)
Si tout se passe bien, avec un peu de chance et d'habileté, en un quart d'heure c'est fait. Au pire, vous abandonnerez pour revenir à la situation de départ.
Si il y a des métadonnées (mots clés, étoiles, labels) dans vos photos, reconstruisez le catalogue de XnViewMP, car évidemment toutes les photos ont été déplacées.
Bonne chance !
Pour les plus habiles, ExifTool permet aussi ce genre de traitement, avec peut-être plus de précision, en utilisant l'option -Directory et -d "%Y/%m/%d" par exemple.