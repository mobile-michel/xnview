---
title: ExifTool
description: 
layout: ../../layouts/MainLayout.astro
---

Exiftool est un utilitaire indépendant de XnViewMP, permettant de lire ou écrire des métadonnées, avec des possibilités quasi illimitées. J'ai mis quelques mots sur l'auteur Phil Harvey en annexe dans le (Chapitre 12). J'ai ajouté une page, encore en construction, spécialement pour ExifTool ici.

XnViewMP utilise ExifTool seulement dans quelques cas particuliers, par exemple pour modifier des données EXIF (Date, heure, GPS). C'est le cas aussi je crois pour la manipulation de métadonnées de certains fichiers RAW, mais ça demande vérification. Dans le dossier d'installation de XnViewMP, il y a un dossier AddOn qui contient donc cet utilitaire: exiftool.exe.

## Affichage avec Exiftool

L'utilisation par défaut d'ExifTool par XnViewMP consiste à afficher l'ensemble des métadonnées d'une image, vues par cet utilitaire. Sélectionnez une image, puis dans le volet de visualisation, cliquez l'onglet `ExifTool`:

Affichage Exiftool
Figure 50

Pour cette illustration, j'ai réduit l'affichage de toutes les familles de métadonnées sauf les deux dernières en utilisant les flèches triangulaires. Si vous avez un doute sur la façon dont XnViewMP écrit ou lit des métadonnées, cet affichage vous offre la possibilité de tout vérifier. Une autre utilité est d'afficher la _version officielle en anglais_ des noms des métadonnées, noms qui sont souvent arbitraires pour chaque logiciel.

## Paramètres pour Exiftool, menu Ouvrir avec

XnViewMP offre la possibilité d'utiliser ExifTool, à travers le menu `Outils, Ouvrir avec`. On verra ici seulement quelques exemples d'utilisation, car une documentation complète d'utilisation d'ExifTool, si elle existait, ferait des centaines de pages.

### Exemple 1

Sélectionnez une image, puis avec un clic-droit, choisissez `Ouvrir avec` puis `Configurer les programmes`.

Exiftool Ouvrir avec
Figure 51

Cliquez `Ajouter`, parcourez vos dossiers pour atteindre le dossier _Xnviewmp\AddOn_, sélectionnez `ExifT̀ool` et cliquez `Ouvrir`. Une nouvelle ligne se crée dans le tableau, mais elle semble vide ou bien contient juste l'icône d'ExifTool.

Double cliquez dans la première colonne pour y mettre un nom, par exemple: Exiftool nom legende. Double-cliquez dans la deuxième colonne (paramètres) et écrivez: -IPTC:Caption-Abstract<Filename -L.

Exiftool filename légende 
Figure 52

Cliquez OK.

Pour utiliser cette fonction qui consiste à recopier le nom du fichier dans la légende IPTC, il suffit de sélectionner une ou plusieurs images. Puis avec un clic-droit, choisissez `Ouvrir avec`, `Exiftool nom legende` et le traitement ExifTool va s'effectuer.
 
Cette opération permet d'avoir automatiquement le nom du fichier comme légende, ce qui est utilisé dans certaines galeries de photos en ligne. Pour info, pour mettre le nom de fichier sans extension dans le titre de l'image, le paramètre sera: -IPTC:Headline<${FileName;s/\.[^.]*$//}.

Par défaut, lorsqu'il modifie un fichier, Exiftool laisse une copie du fichier original dans le même dossier. Ainsi, après l'opération sur un fichier DSC000.JPG, vous trouvez aussi un fichier nomméDSC000.JPG_original. Si vous souhaitez éviter de garder ces copies d'originaux, l'option -overwrite_original doit être ajoutée aux paramètres (comme illustré sur la fig 53).

### Exemple 2, recopier des champs EXIF
 
Utilisez de nouveau `Ouvrir avec, Configurer les programmes, Ajouter`, sélectionnez ÈxifTool. Mettez un nom dans la première colonne, par exemple _Exiftool exif iptc_. Double-cliquez dans la deuxième colonne (paramètres) et écrivez: -iptc:caption-abstract<exif:xpcomment -iptc:copyrightnotice<exif:copyright -iptc:by-line<exif:xpauthor -overwrite_original.
 
Cliquez OK. Vous avez un aperçu de cette commande dans la deuxième ligne du tableau de la figure 53.

Cet exemple permet de recopier trois métadonnées EXIF vers les champs IPTC correspondants.
(Ces champs exif sont anciens, voire abandonnés, et on peut les transcrire en IPTC de cette façon)
Pour utiliser cette fonction, sélectionnez une photo (qui contient les métadonnées EXIF légende, copyright, auteur), et, avec un clic-droit choisissez "Ouvrir avec" et "Exiftool exif iptc".
Une fenêtre Exiftool apparait brièvement, et le travail est fait (les métadonnées iptc caption-abstract, copyright, by-line reçoivent respectivement les données exif:xpcomment, exif:copyright, exif:xpauthor)

Le paramètre -k
L'option -k permet de conserver la fenêtre d'exiftool ouverte. C'est utile pour pouvoir lire les éventuels messages d'erreur.
Entre chaque paramètre précédé d'un tiret, il doit y avoir un espace donc pensez à bien séparer les paramètres avec des espaces.
Je propose d'ajouter systématiquement cette option à la fin des paramètres envoyés à exiftool.
Pour info, un autre moyen parfois utilisé pour "passer" le paramètre -k à exiftool consiste à renommer le programme lui même en : exiftool(-k).exe

Exemple 3, écrire un fichier Sidecar :
Utilisez "Ouvrir avec" , "Configurer les programmes" , Ajouter , puis sélectionnez exiftool
En double cliquant dans la première colonne, nommez-le "Exiftool sidecar" . Dans la deuxième colonne, paramètres, écrivez -o %d%f.xmp -xmp -k puis cliquez OK.

Exiftool Sidecar
Figure 53

Utilisation : sélectionnez une image jpg contenant des métadonnées XMP, clic-droit, ouvrir avec, Exiftool sidecar.
Cet appel à Exiftool va avoir pour effet de créer un fichier XMP sidecar contenant les données XMP qui étaient dans l'image.
La fenêtre d'exécution restera ouverte, puisque le paramètre -k est présent. Utilisez la croix pour la refermer.
Remarquez que l'option -overwrite_original n'est pas utile dans ce cas, puisque le fichier original n'est pas modifié, il est seulement lu.
Le but de ce genre d'opération est de permettre l'écriture des champs Légende, ville, région... que XnViewMP ne sait pas (pas encore) écrire dans les sidecar.
Ensuite, je déplace mes fichiers sidecar XMP obtenus dans le dossier où sont stockés mes photos au format RAW.

Le paramètre -r
Ce paramètre introduit la récursivité.
C'est à dire qu'en sélectionnant un nom de dossier, Exiftool va traiter tout le contenu, y compris tous les sous-dossiers.
A manier avec prudence ! j'ai fait très peu de tests avec ça ...
Ajoutez cette option en la séparant avec un espace, par exemple après le -k comme ceci : -k -r  
(si vous voulez effectivement sélectionner un dossier, faites le dans la zone d'affichage principal, et non pas dans le volet des dossiers)

Le fichier .ExifTool_config
Exiftool peut recevoir des paramètres depuis un fichier de configuration, nommé par défaut .ExifTool_config
L'ennui, c'est que ce fichier de configuration est systématiquement lu par Exiftool, même quand on n'en a pas besoin.
L'astuce consiste à créer un nouveau dossier, et y mettre une copie de exiftool.exe, accompagné de son fichier de config.
- Donc, dans le dossier AddOn de XnViewMP, créez un nouveau dossier, par exemple "conf " , dans lequel vous copiez exiftool.exe
Avec le Bloc notes de Windows, (ou un autre éditeur), on va créer dans ce dossier un fichier .ExifTool_config , je détaille ça dans l'exemple 4.
Remarque en passant, Windows ne permet pas qu'on renomme un fichier avec un point en début, mais avec "enregistrer sous" on y arrive..

Exemple 4, utilisation du fichier de config :
Le fichier de configuration que je vais utiliser dans ce nouvel exemple va servir à "découper" des anciens mots clés EXIF, constitués d'une seule chaine de caractères.
Ensuite, les parmètres passés à Exiftool vont ranger les différents mots clés dans les métadonnées IPTC (IPTC:keywords) ou XMP (XMP-dc:subject)
La métadonnée Exif:XpKeywords, en effet, ne pouvait contenir qu'un seul mot. Or, dans le passé, on a voulu y faire entrer plusieurs mots clés, séparés par une virgule et un espace.
On a donc un mot-clé qui est de la forme "paysage, plage, parasol"
.xp.xp-keywords.xpkeyword.exif-xp.
Première étape, comme pour les exemples précédents, "Ajouter" une nouvelle commande, mais cette fois on va sélectioner le exiftool.exe qui est dans le sous-dossier ...\XnViewMP\AddOn\conf
Dans la première colonne, choisissez comme nom "Exiftool XpKeywords IPTC"
Ensuite on met les paramètres dans la deuxième colonne : écrivez -iptc:keywords<mykeywords -overwrite_original -k
Tant qu'on y est, on va tout de suite en préparer une deuxième :
Ajouter à nouveau, exiftool (du dossier conf) , nommez la deuxième commande "Exiftool XpKeywords XMP" et comme paramètres mettez : -xmp-dc:subject<mykeywords -overwrite_original -k

Exiftool XPKeywords
Figure 54

Ne vous étonnez pas de la présence, dans ces deux commandes, d'une métadonnée "mykeywords" : c'est un nom arbitraire utilisé par le fichier de config.

Voici le contenu du fichier de configuration pour cet usage :
%Image::ExifTool::UserDefined = (
'Image::ExifTool::Composite' => {
MyKeywords => {
Require => 'XPKeywords',
ValueConv => 'my @v = split(", ",$val); \@v',
},
}
);
1; #end
Vous allez coller ces 9 lignes dans le fichier .ExifTool_config , et enregistrer. (Merci à Phil Harvey pour ce script !) Tout est prêt.
Sélectionnez des photos contenant des anciens mots clés EXIF:XPKeywords, et avec un clic-droit, "Ouvrir avec...", lancez l'une ou l'autre des commandes qui viennent d'être présentées, pour distribuer les mots clés dans les métadonnées IPTC, ou XMP.

(Pour info, avec le paramètre -config, il est possible de spécifier un nom de fichier de config adapté à chaque traitement particulier, mais ça ne fonctionne pas avec XnViewMP)
 (j'ai peut être omis de mettre le nom complet du fichier : -config C:\Tool\conf\ScriptSepare.txt à retester )

Exemple 5, Décalage de date et heure :
XnViewMP utilise Exiftool pour modifier les dates et heures de manière très pratique (menu Outils, Modifier l'heure... Voir paragraphe 11J).
Mais cette fonction est limitée à 999 jours, et dans mon exemple, je souhaite ajouter 12 ans à la date de mon appareil photo qui était réglée par erreur sur 2006 ...
Toujours dans "ouvrir avec, configurer, ajouter ..." on va spécifier en paramètres les trois champs exif qu'on souhaite modifier, ainsi que le décalage à appliquer :
-ModifyDate+="0012:00:00 00:00:00" -DateTimeOriginal+="0012:00:00 00:00:00" -CreateDate+="0012:00:00 00:00:00"
Remarquez que l'opérateur utilisé pour un décalage positif est +=     . Si on veut soustraire , on utilisera -=
Le format de date et heure à utiliser est AAAA:MM:JJ HH:MM:SS , et il faut utiliser des guillemets, au moins pour Windows (sous la touche 3 du clavier)
Si vous voulez faire juste un décalage de 5 minutes et 8 secondes par exemple, vous pouvez utiliser un format plus court : HH:MM:SS ("00:05:08")
Et enfin, vous pouvez toujours ajouter les paramètres -k et -overwrite_original
Autre avantage de cette méthode, elle est bien plus rapide que le menu Outils si vous avez des centaines d'images à traiter.

 (19/12/2019) Exemple 6, mettre à jour les mots-clés IPTC :
Si, comme moi, vous utilisez simultanément les métadonnées IPTC et XMP, vous serez attentif à ce qu'elles soient toujours synchronisées.
Vous avez peut-être récupéré des images partiellement tagguées, ou bien vous avez eu dans le passé des erreurs de paramétrage qu'il faut corriger...

Il est assez facile de recopier les données IPTC en XMP, avec le menu "Outils, Métadonnées, Transférer", mais cet outil ne permet pas l'opération inverse.
La fenêtre "Editer les métadonnées" le permet, en choisissant le mode "XMP, mise à jour IPTC", mais par ce biais, les mots-clés IPTC auront une forme hiérarchisée.

Pour simplement recopier les mots clés XMP (xmp-dc:subject) vers les IPTC:keywords sans hiérarchie, le plus simple est d'utiliser ExifTool.
De nouveau, ajoutez une ligne dans l'outil "Ouvrir avec", nommez-la Xmp to IPTC par exemple, et entrez la commande ExifTool suivante :
-k "-iptc:keywords<xmp-dc:subject" -overwrite_original
Cette fonction vous sera utile également si vous avez utilisé la fonction "Mise à jour des fichiers avec le catalogue", car jusqu'en V0.96, un bug empêche l'écriture des mots clés IPTC.
(bug résolu en V0.96.4)
Si vous avez de nombreux sous-dossiers à traiter, ajoutez l'option -r pour que ExifTool traite récursivement les photos des sous-dossiers.

 (18/09/2020) Exemple 7, Astuce pour orthographier les noms de métadonnées :
Il n'est pas évident de déterminer l'orthographe exacte ou la syntaxe des métadonnées pour ExifTool.
L'orthographe est en fait ici une convention spécifique à ExifTool, mais celui-ci ne la reproduit exactement que si l'option -s est utilisée.
Crééz donc une nouvelle entrée vers ExifTool nommée "Affiche Ortho" dans la liste "Ouvrir avec" en utilisant seulement les paramètres -k -s -g -n
L'option -s force exifTool à afficher "la bonne orthographe", le -g ajoute les noms de groupe (Fichier, Exif, Iptc, Xmp ... ) et le -n , que vous pouvez enlever, empêche la conversion des valeurs des métadonnées.
Trouvez une photo contenant la métadonnée que vous recherchez, cliquez sur "Ouvrir avec, Affiche Ortho" et vous pourrez visualiser les noms des métadonnées.
C'est utile en particulier pour intervenir sur les métadonnées système telles que "FileAccesDate" ou "ImageWidth" ....


 (30/11/2020) Exemple 8, créer un fichier GPX
Un fichier GPX est un fichier texte constitué d'une série ordonnée de points caractérisés par leur horodatage et des coordonnées géographiques.
Si vos photos prises lors d'une randonnée comportent des données GPS, il peut être sympa de les voir sur une carte, éventuellement avec la trace de la rando.

Cette fois, on va d'abord préparer un fichier batch destiné à lancer ExifTool dans une configuration particulière.
Dans cet exemple, il va falloir être rigoureux sur les chemins précisant les emplacement de différents fichiers.
Supposons que nous choisissions cet emplacement : C:\Xnviewmp\AddOn

Voici les commandes à mettre dans le fichier batch, fichier que nous nommerons par exemple "GPX_Gen2.bat" , et qui sera enregistré dans le dossier AddOn.
C:\Xnviewmp\AddOn\exiftool.exe -m -fileOrder datetimeoriginal -p "C:\Xnviewmp\AddOn\gpx.fmt" %* > ""%1out.gpx""
pause
Ce fichier BAT est celui qui va lancer ExifTool, et vous remarquez qu'il fait appel à un autre fichier : gpx.fmt , qui est un fichier de formatage.
Vous pouvez trouver ce fichier gpx.fmt dans le site de ExifTool, ici et enregistrez-le également dans le dossier AddOn
Il y a aussi une copie de gpx.fmt dans ma page ExifTool, ici, ainsi qu'une description détaillée de la même manip, mais hors XnViewMP.

Maintenant, ajoutons une entrée dans Outils, Ouvrir avec, configurer les programmes ... de XnViewMp
On va dans le dossier AddOn, le programme que nous ajoutons est GPX_Gen2.bat (et non pas ExifTool) et il n'a pas besoin de paramètres.

- Sélectionnez un lot d'images ayant des coordonnées GPS, Ouvrir avec ... et cliquez GPX_Gen
Le fichier batch va lancer ExifTool, qui extrait les heures et coordonnées GPS, les met en forme à l'aide de gpx.fmt, et les envoie dans un fichier GPX résultat.
Ce fichier résultat va apparaître dans le même dossier que les photos, grâce à un artifice; Il va reprendre le nom de la première photo, prolongé du suffixe out.gpx

Si vous voulez avoir un aperçu de son contenu brut dans XnViewMp, allez dans Paramètres, Liste fichiers, Filtre personnalisé .
Dans le tableau, à la ligne "Texte" , dans la dernière colonne intitulée "Extensions", ajoutez gpx aux autres extensions déjà présentes.

Un fichier GPX peut être visualisé sur une carte avec un logiciel (GpxSee par exemple), ou sur un site web comme VisuGpx.com, ou être exploité à d'autres fins.
Un cas d'utilisation de ces fichiers GPX est décrit dans le paragraphe PicaGeotag de ma page de logiciels de marquage et géocodage.
 (14/04/2021) Depuis la version 1.17 de PicaGeotag, celui-ci peut créer commodément la trace GPX correspondant a votre lot de photos.
C'est donc une alternative séduisante à l'usine à gaz qu'est cet exemple 8 ! Et en plus il permet de positionner les points sur une carte etc...
Avec la trace affichée sur une carte, vous pouvez faire une copie d'écran pour agrémenter le dossier de photos de votre rando.

Exiftool en dehors de XnViewMP
Dans cette page, vous trouverez une brève description d'autres logiciels, dont un certain nombre utilisent Exiftool.
On peut aussi utiliser Exiftool tout seul, j'ai commencé à écrire une nouvelle page de doc ici : exiftool.htm
