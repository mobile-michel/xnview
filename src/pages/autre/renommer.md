---
title: Renommer des fichiers en nombre
description: Lorem ipsum dolor sit amet - 3
layout: ../../layouts/MainLayout.astro
---

Dans certaines situations, on peut avoir besoin de renommer des quantités importantes de photos; je cite trois exemples :
- La pile de sauvegarde de l'appareil photo était vide et le numéro des photos est reparti à zéro; il faut remplacer les DSC00000.JPG par DSC12345.JPG etc
- Vous voulez envoyer des photos dans une galerie en ligne, et vous voulez copier la légende IPTC dans le nom de la photo
- Vous avez plusieurs appareils photos et vous voulez renommer les photos de manière homogène, par dates exif

Dans le menu Outils, Renommer par lots, une fenêtre va vous permettre d'ajuster des règles pour renommer des lots de fichiers (des noms de fichiers considérés ici au sens de noms de photos)
Cette fenêtre peut mémoriser des modèles que vous avez utilisés dans la première partie des options, en cochant la case "créer un nouveau modèle de nom à l'ouverture"
Ces modèles seront ensuite accessibles via la flèche pointe en bas située au bout de la première case.


 En V0.93, j'ai eu quelques anomalies avec cette fenêtre, il semble qu'il faille remplir les divers champs "prudemment", et du haut vers le bas de la fenêtre si vous enchaînez plusieurs traitements. Après avoir testé et mis au point différentes options, réouvrez la fenêtre et inscrivez les dans les cases sans trop bidouiller..bug.

renommer
Figure 45

La figure 45 reprend le troisième exemple cité au début : le but est d'obtenir des fichiers nommés "AAAAMMJJ_hhmm-nom du fichier" ,
la date et l'heure étant prises dans la date EXIF mise par l'appareil photo. L'expression correspondante sera : {EXIF:Date Taken [Ymd_HM]}-{Filename}
(Les formats de date, de noms peuvent être retouchés ... par exemple y minuscule donne l'année sur deux caractères)

Renommer en utilisant une métadonnée
Pour construire ce genre d'expression, utilisez la deuxième flèche triangulaire, celle située à côté du bouton "Supprimer les modèles"
Dans la rubrique "Exif Image" sélectionnez : "Date de prise"
Le résultat attendu de ce renommage est prévisualisé dans le tableau au bas de la fenêtre, ce qui vous évitera de faire des erreurs.

Renommer en numérotant les images
Concernant le premier exemple, pour remplacer une série commençant par DSC00000.JPG par DSC12345.JPG , vous inscrirez DSC##### dans la case du haut, puis 12345 dans la case Début
Les caractères ##### seront remplacés par une séquence de numérotation sur cinq caractères à partir de la valeur indiquée (et avec un pas de numérotation réglable)
Mais il faut être attentif à l'ordre des photos sélectionnées, pour les numéroter ensuite dans le bon ordre.

Pour le deuxième exemple du début du paragraphe, il suffira de cliquer dans IPTC Légende Légende , ce qui inscrira dans la case : {IPTC:Caption}

Je ne détaille pas l'ensemble des fonctions disponibles de cette fenêtre, en tâtonnant un peu, vous arrirverez bien au résultat souhaité.
En effet, il y a un large choix, aussi bien d'infos système que de métadonnées exif iptc et xmp, permettant un grand nombre de combinaisons.
La case extension concerne les trois caractères du nom de fichier habituellement situés après le point (exemple .JPG ou .GIF etc)
Pensez à vérifier la présence et la forme de cette extension de nom dans le résultat, et soyez attentifs aux majuscules/minuscules.
La "casse" s'intéresse justement aux majuscules/minuscules des différents éléments du nom de fichier.
Il est plus prudent de conserver des noms homogènes dans toutes vos photos du point de vue de la "casse", même si Windows n'y est pas très sensible.

Il y a aussi au bas de la fenêtre une zone Remplacer.
Dans son utilisation la plus simple, elle sert à remplacer des caractères par d'autres, sans notion de conditions ou de traitement, si ce n'est la casse.
Ca permet par exemple de remplacer ".jpg" par "Sony.jpg", ce qui ajoute la marque de l'appareil vers la fin du nom des photos.

 (15/10/2019) Une utilisation particulière : Déplacer des fichiers sous condition
Les remplacements de noms vont se faire si les caractères indiqués existent dans le nom de la photo, ce qui constitue une sorte de critère de filtrage.
Donc, seulement certains fichiers de la liste vont être concernés par l'opération.
Ensuite, dans la case "Avec", si vous mettez le caractère \, que Windows considère comme un séparateur de nom de dossier, vous allez pouvoir renommer ves fichiers, "vers" des dossiers cibles, et par voie de conséquence, les déplacer.
Dans l'exemple suivant, les caractères "Esp" sont recherchés, puis remplacés par Espagne\ , ce qui sous-entend que les fichiers seront déplacés vers le sous-dossier 'Espagne\"
Nota : il faut avoir créé le sous-dossier "Espagne" au préalable, sinon on obtient une erreur.

deplacer
Figure 45 b

Cette manipulation permet de répartir des fichiers dans des sous-répertoires, en fonction d'une caractéristique de leur nom.
Rien n'interdit de traiter de cette façon toutes sortes de fichiers, et de spécifier des noms de répertoires complexes.

Si le critère qui vous intéresse n'est pas dans le nom des fichiers, il vous suffit de faire l'opération en deux passages :
- Au premier passage, débrouillez-vous pour inclure votre critère dans le nom de fichier, l'année de prise de vue par exemple (voir : renommer en utilisant une métadonnée)
- Au passage suivant, le critère est remplacé par un dossier cible (exemple: remplacer 2013 par 2013\ pour que les photos dont le nom contient 2013 aillent dans le dossier 2013)

Expression régulière
Cette option "Utiliser une expression régulière", permet des traitements bien plus ciblés, mais la syntaxe à utiliser est plus compliquée.
- Dans l'exemple "Espagne", si on voulait rechercher les lettres Esp uniquement en début de nom, l'expression régulière est : ^Esp
- Dans l'exemple (2013) du paragraphe précédent, il manque dans XnViewMP la gestion des variables d'expressions régulières.
Si ça fonctionnait, ce serait quelque chose comme: remplacer ^([0-9]{4}) par $1\\ pour traiter toutes les années en un seul passage, et pas seulement 2013.
Voyez aussi le chapitre chapitre 11R-3, je mets quelques exemples et liens sur ces "Expressions régulières".

- La casse est gérée avec précision par les expressions régulières elles-mêmes, et dans ce cas l'option "Respecter la casse" est ignorée.