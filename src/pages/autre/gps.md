---
title: Afficher la localisation GPS sur une carte
description: Lorem ipsum dolor sit amet - 3
layout: ../../layouts/MainLayout.astro
---

Si vous avez des photos contenant des coordonnées GPS dans les données EXIF, un onglet "GPS" apparaît dans le volet d'informations.
En effet, certains appareils photos munis de GPS insèrent automatiquement les coordonnées, notamment les smartphones.
En cliquant cet onglet, Xnviewmp vous affiche une carte Google maps et un repère indiquant le lieu précis.

GPS
Figure 44

Il est possible d'obtenir une fenêtre bien plus confortable pour l'affichage Google Maps, en passant en mode Vue (un double clic sur l'image), puis en ouvrant les Propriétés (soit avec un clic-droit, soit avec Alt-Entrée) : l'onglet Google Maps y est plus grand et plus facile à utiliser.

Vous pouvez ajouter manuellement des coordonnées en passant par le menu "Outils, Métadonnées, Editer les données GPS".

GPS
Figure 44b

A partir de la V0.96, deux boutons ont été ajoutés, pour copier ou coller des coordonnées.
Concernant la fonction "Coller", de nombreux formats sont reconnus, tels que les coordonnées décimales, sexagésimales, signées, ou avec les indication N,S,E,O ou W que vous avez pu récupérer dans divers sites de cartographie.
Dans Google maps, par exemple, un clic-droit sur la carte copie les coordonnées ; Un clic sur "Coller" dans XnViewMP , et vous enrgeistrez les coordonnées dans la photo.

La fonction "Copier" fournit une chaine de caractères du type N49°39'39.08" W1°52'57.12", bien reconnue par Google et OpenStreetMap.
Mais pour Géoportail, c'est pas si simple: les lettres N , S, E, O ,W en début de valeurs ne sont pas bien reconnues (vous allez en Afrique).
On peut les déplacer pour les mettre après (49°39'39.08"N 1°52'57.12"W) , ou les supprimer (49°39'39.08" -1°52'57.12") mais en n'oubliant pas le signe moins pour Ouest.
Suggestion au developpeur pour "Copier" : il faudrait utiliser le format Géoportail 49°39'39.08"N 1°52'57.12"W ou décimal 49.660856, -1.882533, ces deux formats passent dans tous les cas.

Jusqu'en V0.95, pour pouvoir coller dans ces cases des coordonnées décimales, provenant de Google ou Géoportail par exemple, les nombres doivent comporter une virgule et non un point décimal. Vous deviez coller ces coordonnées d'abord dans un fichier texte, les corriger, puis les coller ensuite dans XnViewMP.

Petite astuce : vous avez une photo qui contient des coordonnées GPS, et vous voulez mettre ces mêmes coordonnées dans d'autres photos.
Il suffit de sélectionner toutes ces photos, puis, dans la fenêtre "Outils, Métadonnées, Editer les données GPS", faites défiler les vignettes jusqu'à afficher la photo qui contient les coordonnées.
En cliquant sur "Tout écrire", ces coordonnées seront inscrites dans toutes les autres photos.

Parfois des doublons de fichiers apparaissent avec le suffixe _original; c'est un effet secondaire de l'utilisation d'ExifTool par XnViewMP.
Pour éviter leur apparition, allez dans "Outils, Paramètres,Général,Opérations fichiers" et décochez "sauvegarde pour les autres opérations sans perte"
(Sinon, pour retrouver ces "_original" et les effacer dans vos dossiers, utiliser la fonction "Outils, Rechercher", écrivez original dans la case nom de fichier, et précisez le dossier racine).
Une autre situation provoquant l'apparition de ces fichiers avec _original, c'est lorsque vous tentez d'intervenir sur des fichiers en lecture seule.

Une autre fonctionnalité : sélectionnez une photo contenant des données GPS, et cliquez dans le menu "Outils, Ouvrir la position GPS dans GeoHack".
Ca ouvre un onglet dans votre navigateur qui localise la photo dans une carte du site GeoHack. Vous pouvez ensuite changer de cartographie en choisssant dans le tableau proposé.
L'autre choix, "Ouvrir la position GPS dans GoogleEarth", semble nécessiter d'avoir installé le logiciel Google Earth dans votre machine.

 (07/04/2021) Les fichiers GPX
Ces fichiers servent à décrire un itinéraire sur une carte. Ils contiennent une liste de coordonnées géographiques horodatées.
Vous pouvez télécharger ce genre de fichier à partir d'un site internet proposant des randonnées sous cette forme;
Vous pouvez également générer ces fichiers pendant votre randonnée avec une appli sur votre smartphone ou un "gps logger"
Dans ce dernier cas, les dates et heures précises de passage à chaque point sont notées dans le fichier.

L'intérêt de ces fichiers est multiple :
- Il permet d'accompagner un lot de photos prises pendant votre balade, et d'en mémoriser le parcours exact.
J'ai installé dans mon PC le logiciel gratuit GpxSee et il me suffit maintenant de double-cliquer le fichier GPX pour voir instantanément le parcours sur une carte.
Il est possible de faire une copie d'écran de cette carte, et l'ajouter dans la série de photos pour illustrer la balade.
- Avec d'autres logiciels, comme GeoSetter ou PicaGeoTag, on peut automatiquement géoréférencer chaque photo en synchronisant les heures de prise de vue de la photo avec les données du fichier GPX.
A l'inverse, si vos photos contiennent des coordonnées GPS, l'utilitaire ExifTool, ou PicaGeoTag peuvent fabriquer un fichier GPX
Pour ExifTool, allez voir l'exemple 8 du paragraphe 11N où j'explique la manip.