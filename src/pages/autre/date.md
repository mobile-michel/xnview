---
title: Dates EXIF
description: Lorem ipsum dolor sit amet - 3
layout: ../../layouts/MainLayout.astro
---

On peut modifier quelques métadonnées EXIF avec XnViewMP, les dates et heures en font partie.
Ca peut être utile si votre appareil photo n'était pas réglé à la bonne date ou heure, si vous avez oublié l'heure d'été, ou si vous avez quelques photos récupérées dans lesquelles les métadonnées EXIF sont absentes.
Les dates et heure EXIF sont utilisées par de nombreux photographes, par exemple pour remettre dans l'ordre des photos provenant d'appareils différents.
On peut aussi archiver ses photos dans des dossiers par dates, et les dates EXIF sont les plus fiables comme critère de tri ou de classement.

De quelles dates s'agit-il ?  (27/04/2020)
Il y a un bon nombre de champs "Date" dans les diverses métadonnées, il va falloir être attentif au vocabulaire utilisé.

1) Les dates système
Elles sont gérées par votre système d'exploitation (Windows, Mac OS, Linux, Android)
Leur nom et leur utilisation est très variable selon le système, la langue, les logiciels qui les utilisent.
Il y en a trois : Date de modification, Date d'accès, Date de création (en anglais, File Modification Date/Time, File Access Date/Time, File Creation Date/Time)
Pour Exiftool, la syntaxe est : FileModifyDate, FileAccessDate et FileCreateDate (avec le préfixe, File:FileAccessDate ... et utilisez l'option -P)
Aucune de ces trois dates n'est "robuste" :
- La date d'accès change (en général) lorsqu'on lit le fichier. Je dis "en général" car je n'ai pas observé de règle précise.
- La date de création correspond au moment ou la photo est arrivée à cet emplacement dans votre disque.
- La date de modification est celle où le fichier (la photo) est modifié. En pratique, c'est celle qui subit le moins de modifications "involontaires"
Si vous déplacez une photo, la date de création change, mais en général la date de modification ne change pas.
Ce qui conduit à un paradoxe où la date de création d'un fichier est postérieure à sa date de modification; en fait il aurait fallu dire "Date d'écriture" au lieu de "date de création"

Vous avez le choix dans XnViewMP (et parfois dans d'autres logiciels) de préserver ou non la date de modification de vos photos lorsque vous les modifiez.
Ce sont les trois dernières options de l'écran Options, Général, Opérations fichiers, "Conserver les attributs date/heure" .
Personnellement, je ne coche pas ces trois options : les autres logiciels de gestion des métadonnées que j'utilise détectent ainsi les photos ayant été mises à jour.
De même, les logiciels de sauvegarde (par exemple Sync back free) détectent également les fichiers modifiés pour lesquels une sauvegarde est pertinente.
L'inconvénient, c'est qu'on perd la "date de modification" originale, qui parfois peut servir de date "de secours" si on a perdu les dates Exif.

Le cas Android  (11/12/2020)
Avec Android, quand vous déplacez des photos vers des albums thématiques ou quand elles sont téléchargées, les dates de création ET de modification vont être changées.
Il en est de même pour les photos reçues en messages, FB, Whatsapp etc ... Selon les versions Android, il est quasi impossible de corriger cela.
C'est un vrai problème, car la date de modification sert de critère de tri dans les galeries, et on ne peut pas la rectifier à moins de rooter la tablette ou le téléphone pour avoir les droits.
Et donc dans les albums que vous souhaitez éventuellement créer, vous perdez la chronologie des photos.
Le seul moyen que j'ai trouvé pour y remédier est de sortir la carte micro SD du téléphone (si les photos sont dessus !) et de corriger les dates avec ExifTool sur un PC.
Dans ma configuration matérielle, XnViewMP ne parvient que très lentement à modifier les dates sur une carte SD.
Avec ExifTool, c'est très rapide, la commande est : exiftool -k -m -P -FileModifyDate<Exif:CreateDate  , ce qui remet la date de prise de vue dans la date de modification du fichier.
Il y a aussi le cas où même la date de prise de vue a disparu, lisez le dernier paragraphe de ce chapitre 11J.
Passez les photos des albums que vous avez créés avec cette commande ExifTool, remettez la carte SD dans l'appareil et le tour est joué.

2) Les dates IPTC et XMP
A ma connaissance, elles sont peu utilisées, et n'apparaissent pas dans les menus de tri ou classement de XnViewMP. Je les considère donc "inutiles".
Elles sont modifiables via l'onglet "Date/Heure" de la fenêtre Editer IPTC/XMP, et vous pouvez les lire dans les onglets IPTC ou XMP de la fenêtre Informations.
Il y en a quatre en iptc et deux en xmp, je les ai recensées comme suit (il faudra en vérifier le libellé exact pour ExifTool)
- [ IPTC:Date Created et IPTC:Time Created ] , [ IPTC:Release Date et IPTC:Release Time ]
- [ IPTC-Composite:Date/Time Created ] , [ IPTC-Composite:Date/Time Original ]
- [ XMP-Photoshop:Date created ] , [ XMP-xmpDM:Release Date ]
J'imagine que ces dates peuvent être utilisées pour des documents historiques, car les dates système ne doivent pas être antérieures à 1970.
Personnellement j'ai des scan de photos des années 1950, et apparemment on peut inscrire ces dates dans les champs EXIF décrits ci-dessous, ce qui m'arrange bien.
Et donc, même pour ces cas "historiques", oublions les dates IPTC et XMP, au profit des dates EXIF.

3) Les dates EXIF
En fait, c'est surtout sur les dates EXIF que porte le présent chapitre.
XnViewMP permet de modifier trois dates EXIF : Date de prise, date de digitalisation, Date de modification.
Dans l'onglet EXIF, XnViewMP a son propre vocabulaire pour nommer ces dates : Date:heure d'origine, Date:heure numérisées, Date de modification
Dans l'onglet Exiftool, trois autres dénominations : Create Date, Date/time original, Modify Date
J'ai vu aussi quelque part "date de digitalisation"
Bon courage pour vous y retrouver !

Ces dates sont plus robustes que les dates sytème, puisqu'elles sont en principe modifiées uniquement en agissant volontairement dessus.
Le menu qui permet d'y accéder est le menu "Outils, Modifier l'heure". En ayant sélectionné une ou plusieurs photos, vous obtenez cette fenêtre :

date exif
Figure 48

Modifier les dates
Dans l'illustration ci-dessus, le but est d'ajouter une heure dans les dates EXIF (déjà existantes) d'un lot de photos.
Dans la première moitié de la fenêtre, je choisis la date source, qui est la date exif de prise de vue.
En dessous j'ai précisé + 0 Jours, 1 heure
Remarque importante, ayant sélectionné un lot de photos, chacune va voir son horodatage ajusté individuellement (lecture date exif, ajout 1h, écriture des champs cochés)
Dans la deuxième partie de la fenêtre, on précise quels champs vont recevoir cet hordatage (majoré d'une heure dans mon exemple), en les cochant.
Observez que les deux premiers champs, "date de création", et "date de modification" ne sont pas des données EXIF, mais des infos système gérées par Windows.
Certains utilisateurs utilisent ces deux champs pour surveiller l'avancée de leur travail de classement. Personnellement, je trouve que c'est trop aléatoire, je n'arrive pas toujours à comprendre comment Windows gère ces valeurs.
Comme tout logiciel Windows, XnviewMP peut interférer sur ces deux dates ; allez voir le paramétrage dans Outils, Paramètres, Général, Opérations fichiers, pour conserver ou non ces attributs.


Quelques remarques
1)  (26/03/2021) L'option "Créer les métadonnées EXIF si elles n'existent pas"
Si cette option n'est pas cochée, XnViewMP utilise ses propres ressources pour modifier les dates EXIF.
La rapidité en est nettement augmentée, et la robustesse face aux éventuelles anomalies existant dans les exif est meilleure.
Il y a cependant des cas où cette option est nécessaire, par exemple sur des images générées par des logiciels de dessin dans lesquelles il n'y a pas de données EXIF.
Dans ces cas, on coche l'option, XnViewMP va utiliser ExifTool, ce qui lui permet de construire un bloc EXIF, mais au prix d'une rapidité moindre.

J'ai eu des cas d'erreurs en voulant modifier les dates EXIF de certaines photos prises avec un appareil Olympus.
En décochant l'option, le problème a disparu et j'ai pu modifier les dates.
En fait, c'est ExifTool qui détectait des anomalies dans les EXIF (Warning: MakerNotes tag 0x6000 IFD format not handled)
Et si on souhaite utiliser une commande ExifTool directement, les options -F -m permettront de contourner l'anomalie.
Les paramètres de la commande ExifTool seront par exemple : -k -F -m "-exif:AllDates<FileCreateDate"

2) La "Date de modification" fichier (ou système)
J'ai longtemps souhaité laisser cette date intacte, elle m'a quelquefois servi de "secours" quand la date EXIF de prise de vue était erronée ou perdue.
Or, j'utilise d'autres logiciels (Picasa, FastPhotoTagger) pour leurs performances de tri multicritères en base de données, et ces deux là utilisent la date de modification pour mettre à jour leur base de données.
Il me faut donc décocher la "conservation de la date" si je veux que les autres logiciels prennent en compte les métadonnées modifiées par XnViewMP.
 J'ai maintenant un doute : s'agit-il de la date de modification système, ou de la date de modification EXIF ?

3) Utiliser la "Date de modification" système
Si vous avez bien vérifié les "dates de modification" de vos fichiers images (qui sont souvent plus fiables que "date de création").
Vous pouvez alors utiliser ce critère comme date source dans le troisième choix, pour mettre à jour les dates EXIF de photos qui les auraient perdues.
Cliquez enfin sur "Ecrire" ou "Tout écrire"

4) Des photos n'ayant aucune date utilisable
Prenons un autre exemple : j'ai copié sur internet un lot d'images anciennes, elles n'ont pas de date exif.
Je vais utiliser "Date et heure spécifiques" comme source, et pour éviter qu'elles aient toutes le même horodatage, on peut utiliser la case "Incrémenter à chaque fichier de" et préciser le nombre de secondes à ajouter d'image en image. J'ai fait un test avec 3600 secondes, ça fait bien un décalage d'une heure à chaque image.
Remarquez que dans ce cas, les photos n'ayant pas de date utilisable, l'utilisation de "Date spécifique" est le seul moyen de les dater, même si vous incluez dans le lot une image datée.

5) Les photos anciennes
Précaution, évitez de mettre des dates de fichiers antérieures à 1970, les ordinateurs gèrent très mal les fichiers informatiques créés avant l'invention de l'informatique !
Mais les dates EXIF, elles, acceptent très bien de remonter dans le passé.

6) Encore une difficulté : Habituellement, l'explorateur Windows affiche deux dates: la date de modification, et la date de création (système, donc).
Sauf dans certains cas où il détecte une photo, (ou une date de numérisation, je ne sais pas), et il affiche alors cette dernière date ...
Et j'ai l'impression que ça plante mon logiciel de sauvegarde qui, justement, se base sur les dates système pour déterminer si un fichier a été modifié ...

7) Ajouter plus d'une annnée à la date
Si vous voulez ajouter plus d'un an à vos dates exif (ou plus de 999 jours), il y a une astuce décrite dans le paragraphe 11N, exemple 5.

8) Utiliser le nom de la photo qui contient une date
 (26/12/2020) Voyons le cas où aucune date n'est disponible dans vos photos, mais le nom même de la photo comporte une date.
C'est le cas de photos prises par un smartphone, puis retouchées ou transférées, et qui ont perdu leurs métadonnées.
Souvent ces photos sont nommées avec une forme du type IMG-20200825_091223_Pano.jpg ou bien Resized_20200825_img_0001.jpg
Dans ce cas c'est encore ExifTool qui va être capable de lire la date dans le nom du fichier, et l'inscrire dans les dates Exif ou système.
Inspirez vous aussi du chapitre 11N pour la méthode, mais en utilisant le paramètre "-allDates<filename -overwrite_original"
Je donne quelques détails supplémentaires sur ce sujet à la fin du paragraphe 3A de la page ExifTool, exemple 4 bis.