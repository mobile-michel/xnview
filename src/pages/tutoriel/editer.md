---
title: 3 - Éditer les métadonnées IPTC/XMP
description: Lorem ipsum dolor sit amet - 3
layout: ../../layouts/MainLayout.astro
---

## Introduction

Dans les chapitres 3A, 3B, 3C, je décris une première méthode pour modifier des métadonnées. Cette méthode repose sur la fenêtre "Editer IPTC/XMP" qu'on obtient par le menu "Outils, Métadonnées,Editer IPTC/XMP", ou avec les touches Ctrl+i. En version V0.98 de décembre 2020, le menu est dorénavant nommé "Outils, Métadonnées,Editer IPTC" , la gestion des XMP ayant évolué.

Dans le paragraphe "Pour aller plus vite" vers la fin de ce chapitre, je propose de créer un bouton dans la barre d'outils pour ouvrir cette fenêtre. Cette fenêtre comporte 7 onglets regroupant diverses métadonnées et un important onglet "Options" pour faire le paramétrage. Dans l'onglet Options, vous déciderez notamment si vous mettez en priorité le groupe IPTC ou le groupe XMP pour lire et écrire les métadonnées.

Dans les chapitres 4, 5 et 6, je décrirai une autre méthode pour écrire les mots-clés, et les notations par étoiles ou couleurs. Mais cette fenêtre constitue le seul moyen disponible dans XnViewMP pour modifier toutes les autres métadonnées (Légende, Titre, Copyright, Ville, Pays, etc).

La méthode la plus naturelle pour utiliser intensivement cette fenêtre consiste à :
- sélectionner des importants lots de photos contenant une caractéristique commune;
- saisir la (ou les) métadonnée qui représente cette caractéristique commune (exemple : la ville représentée dans les photos);
- et écrire le tout.

Vous pouvez ainsi en 10 secondes entrer la ville , le pays et la région sur des centaines d'images. Répetez l'opération si quelques dizaines d'images peuvent recevoir la même "légende", etc.

Tout ceci reste valable, mais en décembre 2020 la version V0.98 est apparue en apportant de nouvelles fonctionnalités. Si vous n'utilisez que les quelques métadonnées pratiques pour le grand public, vous pouvez passer directement à la suite, allez au chapitre 3A.

Si vous êtes professionnel et que vous attachez de l'importance aux notions de copyright, propriété intellectuelle, spécifications de l'auteur ou du propriétaire des droits, la version V0.98 gère un grand nombre de champs XMP sur ces sujets. Je ne sais pas encore si je vais développer un nouveau chapitre, ou corriger les chapitres existants. En attendant, voici quelque informations.

Supposons que vous ayez choisi de travailler en priorité sur les métadonnées XMP, et donc sélectionné ce mode dans l'onglet Options. Vous allez avoir une fenêtre d'avertissement vous proposant d'utiliser le nouveau menu, "Outils, Métadonnées, Editer XMP".

Vous ouvrez donc, avec ce nouveau menu, une fenêtre d'édition dans laquelle une part importante des champs nouvellement ajoutés est consacrée à ces notions d'auteur et de droits. Comme pour "l'ancienne" méthode décrite dans les chapitres 3A, 3B, 3C, le dernier onglet, "Options" est à paramétrer.

Si vous êtes en priorité sur IPTC, utilisez le menu "Outils, Métadonnées, Editer IPTC", qui reprend presque exactement l'ancienne méthode. Dans les deux cas, le mode d'utilisation n'a pratiquement pas changé, il suffit donc de continuer la lecture des chapitres qui suivent.

## Le paramétrage de la fenêtre Editer les métadonnées

Sélectionnez au moins deux photos, puis ouvrez la fenêtre "Editer IPTC/XMP" : vous obtenez les 8 onglets, permettant de travailler sur les métadonnées. Vous pouvez agrandir cette fenêtre de manière à avoir un aperçu assez grand, plutôt qu'une vignette.

Sept onglets regroupent l'essentiel des champs IPTC, et le huitième onglet, Options est à étudier :

Editer métadonnées Options
Figure 4

A priori, dans cet onglet Options, pour le premier cadre "Sélection multiple", cochez les trois premières cases, afin de n'effacer aucune métadonnée sur des lots de photos par inadvertance (on a sélectionné au moins deux images justement pour pouvoir agir sur ces réglages de sélection multiple).

Cette fenêtre à huit onglets est une fenêtre de saisie de données, c'est à dire qu'on n'écrit pas directement les métadonnées dans les photos, mais qu'on prépare leur écriture. Pour illustrer cette logique, si vous cliquez le bouton "Effacer les champs" et "Ecrire les fichiers", eh bien ça n'efface rien ! On est bien d'accord que les trois options son cochées.

## "Ne pas charger les champs"

Avant de voir en détail les trois options du haut, cochez la petite option "Ne pas charger les champs" située à droite sous le bouton "Effacer les champs". Je suggère de laisser cette option cochée, (du moins tant que vous laissez aussi la deuxième option cochée qui, vous allez le voir, est une sécurité importante).

Cette option vous met à l'abri d'une erreur classique : tôt ou tard vous allez oublier de cliquer sur le bouton "Effacer les champs" ; et donc ça vous permet de traiter des lots de photos sans devoir cliquer ce bouton, et sans mélanger des métadonnées hétérogènes (notamment les mots-clés).

Plus loin dans cette documentation, il est indiqué à plusieurs reprises de cliquer le bouton "Effacer les champs". Tant que notre option reste cochée, vous pourrez vous en dispenser, mais ça ne coute rien de rappeler que, dans certains cas, les champs ne doivent pas être remplis.

## Sélection multiple

La première option : Conserver et ajouter la nouvelle valeur (Mots clés et catégories supplémentaires). Elle doit rester cochée pour préserver des mots clés existants de tout effacement accidentel, et permettre d'ajouter des mots-clés à ceux existants. Si on la décoche, ... j'étudierai ça plus tard. (doc à faire). Oubliez ici la présence du mot "catégories", métadonnée obsolète.

La deuxième option : Garder la valeur courante du tag si le champ est vide. Si elle est cochée, vous ne pouvez pas effacer une métadonnée. C'est une sécurité importante qui permet d'éviter d'effacer des métadonnées sur lesquelles vous n'intervenez pas.

Elle permet en fait d'entrer une métadonnée sur un lot de photos en ne modifiant aucune autre métadonnée (mais en cliquant d'abord sur le bouton "Effacer les champs"). Si vous voulez effectivement effacer une métadonnée, à priori je conseillerais de le faire photo par photo, en ayant décoché la case, et en ayant aussi décoché la petite option "ne pas charger les champs". N'oubliez pas de remettre ces deux coches aussitôt fini !

La troisième option : Modifier le tag seulement s'il est vide. Elle permet de faire la différence entre saisir des nouvelles valeurs et modifier des valeurs existantes.

Si elle est cochée, vous entrez des nouvelles valeurs uniquement dans des champs vides. Si elle est décochée, les nouvelles valeurs remplacent les anciennes. Par exemple, si vous voulez modifier une légende, vous devrez décocher cette case.

Depuis mai 2018, je laisse cette option décochée, et apparemment je n'ai pas fait de bêtise, je n'ai pas eu de métadonnée effacée accidentellement. Si vous sélectionnez une seule photo, tous les champs vides seront effacés en utilisant le bouton "Ecrire" (mais normalement, aucun champ ne s'est vidé sans raison, sauf si vous avez des différences entre métadonnées xmp et iptc).

## Mode

Une option importante est dans la boite déroulante "Mode" qui dépend de vos choix et de l'histoire de vos photos. J'utilise le mode "IPTC, Mise à jour ou création XMP" car j'avais des photos contenant déjà des tags IPTC, et je veux les dupliquer en XMP. Il y a quatre modes possibles selon que vous voulez écrire seulement IPTC ou seulement XMP, ou copier l'un vers l'autre.

Editer métadonnées Mode
Figure 5

Lorsque vous changez cette option, refermez la fenêtre d'édition (même sans enregistrer) et réouvrez-la. La prise en compte de l'option semble se faire avec retard dans certains cas. Plus généralement, pour toute modification d'options, fermez et réouvrez cette fenêtre, ça ne mange pas de pain.

Précisions: si vous choisissez le mode "SEULEMENT IPTC-IIM" ou "IPTC-IIM, mise à jour ou création XMP", votre fenêtre d'édition va
lire les métadonnées IPTC à l'ouverture et vous ne pourrez pas voir les infos XMP. Si vous mettez le mode "IPTC-IIM, mise à jour ou création XMP", les données IPTC seront recopiées en XMP lors de l'écriture.

Petite parenthèse, un effet surprenant de ce réglage apparaît pour les images au format PNG : celles-ci ne supportant que les métadonnées xmp, l'écriture va échouer en iptc et résssir en xmp. Si vous refermez et réouvrez la fenêtre d'édition, vos données auront disparu puisque seules les iptc sont lues. Premier réflexe dans ce genre de situation, regarder les différents onglets du volet d'informations, notamment l'onglet ExifTool.

Plus classiquement, si vous voulez recopier des ensembles de métadonnées IPTC vers XMP, il faut procéder méthodiquement, (et en essayant d'abord sur un petit lot de photos):
- sélectionner les photos concernées, passer dans cet écran d'édition de métadonnées, avec ce mode, (et vérifier que les trois options au-dessus soient cochées);
- cliquer le bouton "effacer les champs" et cliquer sur le bouton "Ecrire les fichiers"; ce bouton est celui qui déclenche véritablement l'écriture des métadonnées.

Une autre méthode applicable depuis la V0.95, consiste à utiliser la fonction "Outils, Métadonnées, Transférer" pour recopier des métadonnées. Cette autre méthode est surtout utilisable si vous n'avez pas trop de champs à mettre à jour, car chaque cas de recopie doit être explicitement décrit.

Les deux autres modes, de manière symétrique, vont sélectionner les métadonnées XMP en lecture et écriture, et éventuellement recopier les xmp en iptc si le 4e mode est choisi. Si vous voulez lire à la fois les données IPTC et XMP, ce ne sera pas possible dans cette fenêtre, mais seulement dans le volet d'informations de l'écran principal (onglets IPTC, XMP, Exiftool).

Pour effacer toutes vos métadonnées d'un lot de photos, cliquez le bouton "Effacer les champs", décochez la deuxième option et enregistrez tout. C'est utile par exemple quand vous voulez publier ou envoyer des photos sans métadonnées IPTC ni XMP.

N'oubliez surtout pas de remettre la deuxième option une fois la manip faite. Si vous voulez effacer toutes les métadonnées, y compris les EXIF, passez dans le menu Outils, Métadonnées, Nettoyer.

## Réouvrir le dernier onglet

Cette option est apparue en Novembre 2019. Elle permet de réouvrir la fenêtre d'édition de métadonnées (Ctrl i) sur l'onglet précédemment utilisé. Dans mon cas, j'ouvre presque toujours cette fenêtre pour ajouter "Ville" et "Région", donc l'onglet "Source" reste préselectionné : super pratique.

## La saisie des métadonnées , boutons Ecrire ou Ecrire les fichiers

Vous allez entrer les informations de votre choix dans différents champs, dans les onglets de cette fenêtre. Vous pouvez sélectionner un lot de photos. Si vous souhaitez mettre les mêmes informations dans toutes ces photos, cliquez d'abord le bouton "Effacer les champs".

Entrez la ou les métadonnées souhaitées (Auteur, copyright ...) et cliquez le bouton "Ecrire les fichiers". C'est une méthode extrêmement rapide pour entrer une métadonnée dans un lot de photos.

Vous pouvez aussi saisir des métadonnées différenciées dans un lot, en traitant les photos une par une, mais sans utiliser le bouton "Effacer les champs". Entrez une métadonnée, légende par exemple, et cliquez le bouton Ecrire, qui n'agit que sur la photo sélectionnée dans l'aperçu.

Passez à la photo suivante en cliquant le symbole > sous l'aperçu des photos, entrez la légende, Ecrire, etc ... Cette méthode permet d'entrer une légende différente à chaque photo, mais nécéssite de cliquer le bouton "Ecrire" à chaque fois.
Vérifiez soigneusement ce que vous venez de faire, les options du dernier onglet sont difficiles à appréhender, et les résultats sont parfois surprenants car le fonctionnement de ces deux boutons, Ecrire et Ecrire les fichiers, dépend finement des options choisies et du choix "Effacer les champs" (ou ne pas charger les champs).

## Les onglets de métadonnées

Tout d'abord un survol des champs IPTC XMP disponibles. Pour plus de détails sur les traductions ou les équivalences des noms de champs, il faut chercher sur internet (et dans mes autres pages). Il y a aussi les copies d'écran dans le chapitre des annexes, tout en bas de ce document.

- dans le premier onglet, Légende, on trouve les champs : Légende, Auteur, Titre. Le plus utilisé c'est le champ Légende (IPTC:Caption-abstract), ou le titre;
- deuxième onglet : mots clés (IPTC:Keywords) ce champ est important, mais il faut bien en comprendre tous les aspects, on va le voir plus loin;
- troisième onglet : catégories. Ce champ n'est plus utilisé, on l'oublie. Et ça n'a aucun rapport avec les "catégories" de XnView qu'on va utiliser;
- quatrième onglet : crédits. On y trouve les champs consacrés à la propriété (copyright) et au rédacteur des métadonnées;
- cinquième onglet : statut, avec plein de champs... là encore, ça ne m'intéresse pas;
- sixième onglet : date et heure Il s'agit ici de renseigner des champs IPTC ou XMP avec une date.

Ces champs me paraissent peu utilisés, je suppose que l'intérêt de les utiliser concerne les dates historiques, qui sont une donnée à part entière. En fait, les autres dates "sytème" ne devraient pas être antérieures à 1970 sous peine de planter certains logiciels.

Pour info, le premier groupe, date/heure de création peut créer les métadonnées iptc:DateCreated et xmp:DateCreated : soit en fixant une valeur dans la première case, soit en choissant un champ contenant déjà une date dans la deuxième case. Je n'ai pas compris l'utilisation de la troisième case.

Pour le deuxième groupe, les champs qui seront créés sont iptc:ReleaseDate et xmp:ReleaseDate. Je n'en connais pas l'utilisation ... documentaire peut-être. Utilisez plutôt le menu Outils, "Modifier l'heure" pour modifier les dates/heures EXIF c'est bien plus important et universellement utilisé (Voir paragraphe 11J).

- septième onglet : source. Pour moi il est important de renseigner au moins la ville où la photo a été prise. On peut aussi y mettre le pays, ou une info d'emplacement (lieu-dit, dénomination géographique). Le champ "Etat/Province" semble affecté en France aux régions. L'ennui c'est qu'elles sont maintenant immenses et n'apportent plus rien comme précision. Personnellement, j'y ai mis le numéro de département, c'est bien plus significatif pour les fleurs, les animaux, les secteurs touristiques ou les ambigüités de noms de villes.

Le champ "Nom de l'objet" (IPTC:Object Name et XMP:Title) est une métadonnée que je n'utilise pas. Windows7 la gère aussi, mais à sa manière, avec l'explorateur, sous l'intitulé "Titre". (A ne pas confondre avec le "Titre" de XnViewMP qui correspond à la métadonnée Headline).

Pour info, quand Windows 7 écrit un "Titre" , en fait il renseigne les métadonnées suivantes : IPTC:Caption-Abstract et XMP:Description (= Légende pour XnViewMp), XMP:Title et IPTC:Object Name (Nom de l'objet), EXIF:ImageDescription, EXIF:XPTitle, et parfois EXIF:XPSubject.

Je ne sais pas à quoi servent les autres champs (localisation et son code, référence de transmission). Voici un tableau résumé des métadonnées IPTC et XMP classiques qui sont gérées dans ces sept onglets :

tableau

Si vous voulez voir l'ensemble des métadonnées gérées dans ces onglets, allez à la fin du dernier chapitre, annexes.

## Aides à la saisie

Dans ces sept onglets, au bout de chaque champ de saisie, il y a une flèche triangulaire, qui vous donne accès à plusieurs choix. Ce triangle n'est pas très visible, il est un peu à droite de celui qui déploie le contenu de la boite déroulante.

Editer métadonnées Mode
Figure 6

"Insérer" offre la possibilité d'insérer dans le champ métadonnée une "info système" de la photo (nom, dossier, taille, date). "Insérer de" ou "copier en" permettent de récupérer une métadonnée -provenant de- ou -à destination de- une autre métadonnée.

On a ces trois choix pour les champs "Légende" ou "Instructions spéciales" où la saisie est libre, en plusieurs lignes. Il n'est pas possible avec ces fonctions de copier un ensemble hétérogène de métadonnées sur des lots de photos dans cet écran.

C'est à dire que la métadonnée récupérée et visible à ce moment-là sera écrite à l'identique dans toutes les photos sélectionnées en cliquant "écrire les fichiers". Si votre besoin était de transcrire une métadonnée ou une information vers une autre métadonnée dans un ensemble de photos, il faudra utiliser la fonction "Outils, Métadonnées, Transférer" du chapitre 11A. Et si votre besoin est encore plus complexe, je pense que vous devrez utiliser un autre logiciel, Exiftool par exemple. Allez voir le chapitre 11N ou la page consacrée à ExifTool.

Pour tous les autres champs on a deux choix supplémentaires : "Editer l'historique" et "Tri alphabétique" avec lesquels vous avez accès à l'historique de saisie, c'est une forme de "vocabulaire contrôlé". Avec cet "historique de saisie" vous pouvez abréger l'entrée de données en tapant les premières lettres, et avec "Editer l'historique" vous pouvez organiser cet historique, enlever des entrées qui vous sont inutiles, ou repérer des fautes de frappe passées (et aller ensuite les corriger dans les photos !). XnViewMP enregistre ces historiques de saisie dans le fichier iptc.ini, et vous pouvez aussi lire et modifier le contenu de ce fichier avec le bloc notes.

## L'onglet mots clés

Concernant l'onglet des mots clés, il y a plusieurs méthodes de saisie:
- soit vous tapez directement un mot-clé dans la permière case; utilisez alors la touche Entrée pour le valider, ce qui le fait entrer dans la grande case au-dessous. Cette action fait également entrer le mot clé dans l'historique de saisie;
- soit vous choisissez une des trois autres méthodes, dans la boite déroulante au centre: si vous sélectionnez "Catégories (base de données)" (fig 7), sélectionnez les mots à ajouter, mais de préférence les mots clés "racine" cadrés à gauche dans la liste de la case du bas (le cas des mots-clés hiérarchisés qui est compliqué selon que l'on utilise iptc, xmp, ou xmp-lr sera décrit plus bas avec les "mots clés parents").

Remarque 1 : une particularié ici, le double-clic valide aussitôt la "montée" du mot clé dans la grande zone au-dessus.

Remarque 2 : bien que "liée" à l'usage des catégories décrites dans le prochain chapitre, ici la méthode ne doit pas être confondue avec "l'utilisation des catégories" qui est longuement décrite dans le chapitre 5.

Si vous laissez "Historique" (fig 8) la zone de saisie dans la case du haut apprend petit à petit les mots que vous avez tapés, et les reporte dans la case du bas où vous pouvez ensuite les sélectionner à la souris. Ca vous fait davantage utiliser le clavier au début, mais comme indiqué au paragraphe précédent, vous pouvez "Editer" cet historique pour améliorer son contenu, voire le remplir à partir d'un dictionnaire de mots clés déjà existant. Mais en fait, la méthode suivante est prévue pour ça.

.autocompletion.saisie-automatique.semi-automatique. Vous pouvez choisir "Fichier texte" puis"Importer" (fig 9) pour pouvoir sélectionner des mots clés que vous avez préparés dans un fichier texte en forme de liste.

Dans les trois méthodes, il faut ensuite cliquer la flèche pour faire monter le mot clé dans la grande zone sous la case du haut.

Vous pouvez sélectionner plusieurs lignes simultanément pour entrer plusieurs mots clés à la fois. Si votre fichier texte contient des lignes du type : animal,oiseau,mésange , ces trois mots vont pouvoir être entrés en un seul clic (la virgule est utilsée comme séparateur par XnViewMp, pour préparer l'écriture des trois mots clés, aussi bien en IPTC que XMP, sans hiérarchie).

## Editer métadonnées Options

Quel que soit le mode de saisie que vous avez choisi, les mots clés en attente d'enregistrement doivent être dans la grande zone sous la case du haut. Je rappelle que si vous avez tapé "manuellement" un nouveau mot-clé, il faut le valider avec la touche Entrée pour le faire apparaître dans cette zone, et dans les cas ou vous l'avez sélectionné à la souris, c'est la flèche vers le haut située au bout de la case centrale qui valide.

Les mots clés doivent être sous forme de liste (un par ligne) pour respecter les normes IPTC et XMP. Parfois, d'anciens mots clés récupérés d'autres logiciels sont visibles en une seule ligne, avec des virgules de séparation : ça fonctionne plus ou moins, il faudra de préférence y remédier. La croix rouge permet d'effacer un mot clé sélectionné, si vous voulez en ôter un dans cette zone. Ne tentez pas trop de modifications compliquées sur des lots de photos, car le résultat n'est pas toujours celui escompté. Faites plutot des ajouts, ou des suppressions, sur des lots homogènes de photos.

Quand vos mots clés son prêts, cliquez sur "Ecrire" ou "Ecrire les fichiers" (selon que vous travaillez sur une seule photo ou sur un lot). Votre photo contiendra donc les mots clés IPTC, et XMP (xmp-dc:subject) selon le mode d'écriture que vous avez choisi dans le dernier onglet.

## Mots clés parents

Une option est accessible dans cet onglet mots-clés lorsqu'on sélectionne la méthode Catégories : "Use parent keywords" (voir au bas de la figure 7). Si vous ne cochez pas cette option, vous pouvez certes ajouter "manuellement" des mots clés qu'on peut considérer comme "parents", mais qui n'auront en réalité aucune notion de hiérarchie. Les mots clés IPTC et XMP seront donc classiques, non hiérarchisés. Jusque là c'est clair.

Il existe une possibilité de créer une hiérarchie en IPTC en lieu et place des mots clés en liste, qui consiste à lier parents et descendants avec le caractère | d'enchainement. Je n'utilise pas cette méthode, considérant qu'elle n'est pas normalisée, et donc je la connais mal. En XMP, je n'ai pas vu d'exemple où on pratiquerait de cette façon; dans cette norme, la hiérarchie des mots-clés est prise en charge dans un autre champ, popularisé par Adobe Lightroom: c'est le champ xmp-lr:Hierachicalsubject. Il me semble qu'il existe d'autres marques qui prennent aussi en charge une hiérarchie.

Je n'ai pas testé les fonctionnalités suivantes depuis la V0.87. Si vous cochez la case, les mots-clés parents sont automatiquement ajoutés, dans certains cas vous obtenez bien les mots clés xmp:lr hiérarchisés, les xmp sont classiques, mais les IPTC deviennent hiérarchisés eux aussi. (l'option "écriture de la hiérarchie des mots-clés" des options de métadonnées, même si elle est décochée, ne l'empêche pas) ... et ça me gêne, car je souhaite conserver mes mots-clés IPTC non hiérarchisés.

Il reste a étudier les cas suivants:
- saisie de mots-clés à partir d'un fichier texte où ceux-ci seraient chaînés avec le caractère | ou avec la virgule;
- saisie de mots-clés à partir de la liste Catégories (figure 7) si celle-ci est hiérarchisée.

## En résumé pour les mots-clés

Vous pouvez faire quelques essais ponctuels de mots clés ici, mais ce n'est pas le meilleur moyen de mettre les mots clés dans des centaines de photos. En effet on va voir dans les chapitres suivants qu'il y a une méthode bien plus confortable pour entrer les mots clés (avec les catégories).

Cependant, si vous voulez absolument entrer des mots-clés depuis cette fenêtre, sachez qu'il est possible en même temps "d'activer" les catégories correspondantes. C'est à dire que la base de données des catégories (décrite dans les chapitres 4, 5 et 6) sera alimentée et donc vous pourrez bénéficier de la richesse des fonctions du "Filtre de catégories". Pour activer ce mécanisme, allez dans Outils, Paramètres, Métadonnées, et cochez la première case : "Importer les mots clés dans les catégories".

## Quelles métadonnées utiliser

Je considère qu'on va se contenter avec cette fenêtre de renseigner les champs Légende, ou Titre, et Ville pour "une première passe" dans les métadonnées. C'est déjà pas mal. Ne soyez pas trop ambitieux sur le nombre de métadonnées à renseigner, car vous risquez de vous décourager au bout de quelques dizaines de photos.

Si vous voulez savoir si d'autres métadonnées sont utiles, ou pertinentes, parcourez les autres pages de ce site, il y a des exemples et des liens dans ma rubrique logiciels. Il y a aussi un chouette document de Bogdan Hrastnik, traduit en français : Quelles métadonnées utiliser ? Vous trouverez en annexe des tableaux qui récapitulent l'ensemble des métadonnées IPTC et XMP gérées par XnViewMP.

## Ecriture et vérification des métadonnées dans les photos

Donc, vous avez entré des nouvelles valeurs dans certains champs de la fenêtre Editer, il faut maintenant cliquer le bouton "Ecrire" pour effectivement modifier les métadonnées dans la photo. Si vous aviez sélectionné plusieurs photos, c'est le bouton "Ecrire les fichiers" qu'il faut utiliser.

Je précise ce qui aurait dû être mieux détaillé dans mes explications précédentes : le bouton "Ecrire les fichiers" est presque toujours à utiliser avec l'option "ne pas charger les champs" ou en ayant cliqué sur "Effacer les champs" en début de saisie, sinon les métadonnées de toutes les photos prennent les valeurs de celle qui est active à l'écran. Ce n'est pas simple à expliquer, c'est surtout lié à la compréhension de l'option "garder la valeur courante si le champ est vide".

Exemple, vous sélectionnez 10 images, vous cliquez "Effacer les champs", vous entrez une ville (Lyon) , puis "Ecrire les fichiers". Tous les autres champs étant vides, ils ne seront pas modifiés. Seul le champ Ville n'est pas vide, "Lyon" sera écrit dans les 10 photos.

## Vérifier les métadonnées que vous venez d'écrire

Vous avez donc entré quelques métadonnées dans une photo, puis utilisé le bouton "Ecrire". Sélectionnez la vignette correspondante dans l'écran principal, et parcourez les onglets de la fenêtre Informations pour voir les métadonnées que vous avez ajoutées.

J'insiste : avant de marquer des milliers de photos, vérifiez régulièrement ce que vous faites dans les onglets d'informations IPTC, XMP et ExifTool. Vous pouvez vérifier dans cette fenêtre les métadonnées rangées par familles dans les trois onglets EXIF, IPTC, XMP.
Le quatrième onglet EXIFTOOL vous permet d'afficher toutes les métadonnées telles qu'elles sont lues par cet excellent utilitaire (indépendant de Xnview, voir Annexes). Parenthèse, Xnviewmp utilise ses propres procédures pour lire et écrire les métadonnées dans les photos JPG, ce qui le rend plus rapide que d'autres logiciels utilisant Exiftool.

Volet informations
Figure 11

Remarque : si vous avez choisi d'afficher des métadonnées dans les libellés sous les vignettes, vous remarquerez que l'affichage ne se met pas à jour tout de suite. .bug.

Si vous voulez utiliser la fenêtre "Editer les métadonnées IPTC/XMP" pour vérifier ce que vous venez de faire, souvenez-vous que :
- cette fenêtre peut lire uniquement les données IPTC ou uniquement les données XMP, selon le choix "Mode" paramétré dans les options, mais pas les deux ensemble;
- si vous avez coché "ne pas charger les champs", à l'ouverture de la fenêtre les champs sont vides (sauf si une seule image est sélectionnée, là c'est affiché);
- si le format d'image ne supporte pas la norme iptc, le mode "IPTC + mise à jour XMP" écrit les XMP mais ne lit rien..disparu.iptc-disparu.

## Comment sont visualisés les mots clés EXIF IPTC XMP dans la zone Informations

1) EXIF : il s'agit d'une seule chaine de caractères (un seul mot donc), même si il contient des caractères de séparation. Il se nomme EXIF:XpKeywords et a été utilisé par Microsoft; il est obsolète, ce champ n'est plus utilisé par les logiciels récents. .xp.xp-keywords.
2) IPTC : XnViewMp affiche des virgules entre les mots clés, ce qui ne vous permet pas de visualiser si la virgule est dans le mot clé ou entre deux mots clés distincts. Pour être certain, vérifiez en ouvrant la fenêtre d'édition IPTC/XMP, onglet mots-clés, ils doivent apparaitre dans des lignes différentes.
3) XMP : Les mots clés XMP corrects seront affichés par XnViewMP sur des lignes différentes subject(1) subject(2) etc ...
4) XMP LR : Mots clés hiérarchisés Adobe LightRoom XMP:HierarchicalSubject. Ils sont affichés en ligne, séparés par des | , de gauche à droite, parent vers descendant. Il y aura autant de lignes que de niveaux hiérarchiques.

Exemple de mots clés à trois niveaux, avec la notion de hiérarchie seulement pour les XMP:XMP-LR:HierarchicalSubject

- Forme IPTC
IPTC:Keywords : moineau,oiseau,animal

- Forme XMP Dublin Core
XMP-DC:Subject(1) animal
XMP-DC:Subject(2) oiseau
XMP-DC:Subject(3) moineau

- Forme XMP Ligthtroom hiérarchisée
XMP-LR:HierarchicalSubject(1) animal
XMP-LR:HierarchicalSubject(2) animal|oiseau
XMP-LR:HierarchicalSubject(3) animal|oiseau|moineau

- Forme EXIF
Et juste pour info, la forme EXIF ancienne, en un seul mot, avec ou sans virgules, non gérée par Xnview : EXIF:XPKeywords animal,oiseau,moineau. Si vous voulez récupérer et "rénover" ce genre de mot clés utilisés dans le passé, on peut utiliser un script pour ExifTool; allez voir l'exemple 4 du chapitre 11N.

## Pour aller plus vite

- pour ouvrir la fenêtre de métadonnées, plutôt que de passer dans le menu Outils, Métadonnées, Editer IPTC/XMP, faites un Ctrl i
- vous pouvez aussi faire un clic-droit sur vos photos, et cliquer sur Editer IPTC/XMP
- ou créer un bouton dans la barre d'outils : Passez dans Outils, Option, Interface, Barre d'outils.

Dans la liste de gauche, sélectionner l'outil Editer IPTC/XMP, et faites le passer dans la liste de droite en utilisant la fleche triangulaire. Vous obtenez alors un bouton avec un crayon et une étiquette dans la barre d'outils. Pensez aussi à agrandir la fenêtre si vous voulez un aperçu plus grand, notamment en cas de travail sur des lots d'images.

## Modèles

Toujours dans la fenêtre d'édition de métadonnées, dans l'onglet "Options" il y a trois boutons, "Enregistrer le modèle" ou "charger un modèle" ou "charger un modèle V1". Si vous désirez ajouter systématiquement les mêmes métadonnées à vos nouvelles photos (par exemple un nom d'auteur, un copyright), faites-le d'abord sur une photo et créez un "modèle", que vous enregistrez en lui choissant un nom. Par la suite, vous sélectionnerez un lot de photos, et en cliquant sur "Charger le modèle" vous pourrez appliquer le modèle à tout le lot.

Editer métadonnées Options
Figure 10

Je n'ai pas beaucoup testé ces modèles, ( V1 ?) vérifiez que cette manip n'efface pas à tort d'autres métadonnées. .doc.

Une utilisation possible consiste à copier les métadonnées d'une image dans un modèle, pour pouvoir les écrire dans une autre image:
- sélectionnez les deux images et ouvrez la fenêtre "Editer IPTC XMP", sans l'option "ne pas charger les champs".
- dans l'onglet "Options", laissez seulement la première case cochée. (ou même pas, je n'ai pas testé l'effet de cette case !)
- passez alternativement d'une image à l'autre avec les flèches droite ou gauche " < " ou " > " afin de voir apparaître les métadonnées de l'image source.
- cette image qui affiche les bonnes métadonnées étant visible dans l'aperçu, choisissez "Enregistrer le modèle", et choisissez-lui un nom (ModèleTemp)
- passez à l'affichage de l'image cible dans l'aperçu (toujours avec les flèches).
- choisissez "Charger un modèle" puis (ModèleTemp) et cliquez sur le bouton "Ecrire" ...
Notez que d'avoir décoché la deuxième case de l'onglet "Options" permet d'effacer les métadonnées qui étaient dans l'image cible.
- à la fin, remettez les options dans une configuration plus prudente : les quatre cases cochées, y compris "ne pas charger les champs".

Et enfin, voici trois derniers cas d'intervention sur les métadonnées, auxquels on n'a pas accès dans cette fenêtre d'édition.

## GPS

Les coordonnées GPS, qui sont des données EXIF, ne sont pas modifiables ici, mais seulement par le menu Outils, Métadonnées, Edit GPS. Voir Chapitre 11E.

## Supprimer des ensembles de métadonnées

Il y a un moyen commode d'effacer tout ou partie des métadonnées en passant par le menu Outils, Métadonnées, Nettoyer ...
Les choix suivants vous sont proposés :

Editer métadonnées Mode
Figure 12

Il suffit de cocher les cases de votre choix et cliquer OK


## Effacer des métadonnées

Le maniement des trois options du dernier onglet de la fenêtre "Editer les métadonnées", associé à "Effacer les champs" n'est pas évident du tout. Depuis la V0.95, il y a un moyen commode d'effacer des métadonnées, c'est la fonction "Outils, Métadonnées, Transférer".

Sélectionnez votre lot de photos avant de lancer la fonction. Avec le bouton "Ajouter", choisissez la métadonnée que vous voulez effacer (ou modifier). Laissez la case d'à côté vide pour une suppression (ou entrez un texte, ou choisissez dans la liste si vous voulez inscrire autre chose). Si vous voulez traiter en même temps une deuxième métadonnée, cliquez de nouveau sur "Ajouter" etc.

Editer métadonnées Mode
Figure 12B

Dans cette illustration, on va effacer la légende IPTC et la légende XMP. Et cliquez sur "Appliquer".

