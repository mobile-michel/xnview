---
title: Fonction Rechercher
description: Lorem ipsum dolor sit amet - 3
layout: ../../layouts/MainLayout.astro
---

Rechercher et afficher des photos
Cette fonction est accessible dans le menu Outils-Rechercher, ou avec le bouton représentant des jumelles dans la barre d'outils, ou encore Ctrl F.
Les possibilités de recherche multi critères sont ici plus étendues que dans l'écran Filtre des catégories.

Il faut avant tout indiquer dans la case de droite le dossier dans lequel la recherche doit être effectuée.
Vous trouvez au bout de cette case les habituels boutons et choix ( Liste déroulante, Parcourir, Favoris )
Une autre possibilité pour ouvrir une recherche, faites un clic-droit sur un nom de dossier dans le volet "Dossiers", et cliquez "Rechercher" (ce qui préselectionne ce dossier pour la recherche)
Vous obtenez la fenêtre illustrée fig 56, dans laquelle on va préciser les paramètres et éléments de recherche.

Rechercher
Figure 56. Outils, Rechercher


11R-1 Recherche simple par nom de fichier
Première ligne, la case "Nom de fichier" est utilisée si vous recherchez des images par leur nom.
Vous avez précisé dans la grande case le dossier dans lequel il faut effectuer la recherche. Décochez pour le moment la case "utiliser RegExp" située au bout.
Par exemple, vous cherchez les cent images P1120000 à P1120099.jpg ...
Ecrivez simplement P11200, et cliquez sur "Recherche" (Cochez deux des trois options en dessous : Utiliser le catalogue, et Récursif)
Vous obtenez une fenêtre qui liste les fichiers trouvés, dont le nom contient P11200, et vous pourrez cliquer sur "Parcourir" pour les visualiser.

Rechercher
Figure 57. résultat de recherche

11R-2 Recherche par nom de fichier avec * ou ?
Pour être plus précise, la recherche par nom peut aussi utiliser les caractères joker (* et ?) qui sont hérités des années 1980 et de MSDOS.
Le point d'interrogation remplace un seul caractère, et l'étoile remplace un ensemble de caractères.
Dans cet exemple, écrivez P11200??.jpg , où les deux points d'interrogation représentent les deux derniers caractères, de 00 a 99 par exemple.
On pouvait aussi écrire P11200*.jpg , où l'étoile représente n'importe quelle liste de caractères. Dans ce cas on peut trouver en plus un fichier dont le nom serait par exemple P1120062_modif01.jpg
Ou encore P11200??.* Là on peut obtenir en plus les fichiers de type autre que jpg, comme P11200xx.png ou P11200xx.GIF etc ...


11R-3 Expression régulière
Toujours pour une recherche par nom de fichier, voyons l'utilisation de l'option RegExp du bout de la ligne (Expression Régulière)
 Commençons par des exemples : Supposons que vous ayez une centaine de photos numérotées P111001 à P111099.jpg
- Ecrivez 064|065 . Le caractère | étant un OU logique, vous obtenez les fichiers P111064.jpg et P111065.jpg. (nom contenant 0064 ou 0065)

- Autre exemple, pour obtenir les images dont le nom contient P111 et bis, il faut faire deux recherches : P111.*bis puis bis.*P111
Ici, c'est l'opérateur .* (point étoile) qui représente une liste de caractères séparant les deux critères P111 et bis. (l'étoile signifie répétition)
Selon l'ordre des deux critères, c'est l'une ou l'autre des recherches qui va trouver la correspondance...
Et donc, on peut faire plus fort en combinant les deux ! P111.*bis|bis.*P111

- Un dernier, écrivez P1110.. (avec deux points) pour obtenir les cent images P111000 à P111099.jpg Cette fois, c'est le point qui joue le rôle de joker, un peu comme le point d'interrogation "en MSDOS".
Et là aussi, indiquez à côté le dossier principal dans lequel vous voulez effectuer la recherche.
Si vous voulez rechercher dans toutes vos photos, indiquez le dossier racine qui les contient toutes.
.doc.regex.
Voici des tutoriels sur les expressions régulières : ici , ici et ici .
Ici en anglais la documentation spécifique de la version utilisée par xnViewMP : https://doc.qt.io/archives/qt-4.8/qregexp.html
Et un site internet "bac à sable" pour tester en direct vos expressions régulières https://regex101.com/
Autre lien sympa un tuto chez https://www.lucaswillems.com
Un site où on peut s'exercer sur un dictionnaire https://www.dcode.fr/recherche-mot-regexp


Aide mémoire  (26/04/2021)
Les expressions régulières s'appliquent à des chaînes de caractères, et recherchent des correspondances.
Exemple, appliquée à la chaîne "lundi mardi mercredi", l'expression m..di trouvera "mardi"
L'utilisation ordinaire est une substitution, par exemple pour corriger un texte : s/ect/etc/ remplacera tous les "ect" d'un texte par des "etc"
Appliquer une expression à un texte entier se fait dans un contexte spécifique (exemple, la fonction "Rechercher" dans l'éditeur Notepad++)
Dans XnViewMP ou ExifTool, les expressions régulières s'appliquent généralement à une seule ligne (un nom de fichier par exemple) mais l'opération peut concerner un grand nombre de noms de fichiers traités successivement.

Caractère	      Fonction
[ ]	Classe : Les crochets délimitent une liste de caractères recherchés (1)
( )	Les parenthèses définissent un élément composé de l'expression régulière qu'elle contient (2)
{ }	Les accolades lorsqu'elles contiennent un ou plusieurs chiffres séparés par des virgules représentent le nombre de fois que l'élément précédant les accolades peut se reproduire (3)
-	Un moins entre deux caractères dans une liste représente un intervalle (par exemple [a-d] représente [abcd])
.	Le caractère point représente un caractère unique (5)
*	Le caractère astérisque indique la répétition indéterminée de l'élément le précédant(6)
?	Le caractère "point d'interrogation indique la présence éventuelle de l'élément le précédant (7)
|	Occurrence de l'élément situé à gauche de cet opérateur OU de celui situé à droite (noir | blanc) (8)
^	- Placé en début d'expression il signifie "chaîne commençant par .. ". (9)
Mais utilisé à l'intérieur d'une liste il signifie "ne contenant pas les caractères suivants..."
$	Placé en fin d'expression il signifie "chaîne finissant par .. " (10)
\	Ce caractère permet de neutraliser ("échapper") la signification d'un caractère spécial placé après.
Exemple \* représente le caractère *


(1) Dans une classe (entre crochets) on peut spécifier des caractères : aeiou ou des plages : A-F ou 0-6 . Ainsi [A-Z] représente une lettre majuscule.
Souvent, on indique le nombre de caractères recherchés à la suite, si celui-ci est différent de 1. [a-z]{3} représente une chaine de trois lettres minuscules.
Exemples : trouver les nombres de 20 à 49 s'écrit : [2-4][0-9], et une correspondance avec un nombre entre 200 et 399 s'écrit [23][0-9]{2}
Les méta caractères ne sont pas actifs dans une classe, sauf le ^ si il est situé en début et qui indiquera des caractères à exclure, et le tiret qui définit une plage.

(2) Plusieurs expressions entre parenthèses peuvent se succéder (expression 1)(expression 2)(expression 3) ...
La correpondance de chacune est stockée dans une variable, respectivement $1, $2, $3, ... (mais cela ne fonctionne pas dans XnViewMP)
Ex : dans le texte "le mardi matin", l'expression de substitution s/(le )([a-z]{5})( matin)/$2/ donnerait : "mardi"

(3) Entre accolades on peut trouver un nombre {5}, une plage {2,5}, un nombre indéfini {*} (mais l'étoile ne nécessite pas d'accolades)
Exemple z{2,5} correspond à zzzzz, zzzz, zzz ou zz
Plages incomplètes : {,5} représente {0,5} et {2,} représente "de 2 à un nombre quelconque"

(5) le point définit un caractère au sens large. On peut en préciser le nombre avec des accolades.
Exemple .{3} correspond à tout ensemble de trois caractères, comme "oui" ou "5>3" ou "a b"

(6) L'atérisque sert à spécifier une répétition, de 0, 1, 2, .. ou n fois.
Exemple am*i correspond à : ai, ami, ammi, ammmi etc ... (L'évaluation commence en fait par le plus grand nombre possible et redescend vers 0)
Dans certaines applis, on peut utiliser le + pour le même usage, mais celui-ci exclut le cas "zéro fois"
Donc am+i représente ami, ammi, ammmi, ammmmi etc ...

(7) le point d'interrogation a le même type d'utilisation que * ou +, mais spécifie un nombre qui vaut 0 ou 1.
Exemple am?i représente ai ou ami.
- Mais le point d'interrogation peut aussi être utilisé en combinaison avec les autres quantificateurs, pour en modifier le comportement.
Dans ce cas il va provoquer l'évaluation minimale d'abord .
Exemple, appliquer a{2,5}? à la chaîne "taaaable" va concerner seulement les deux premières lettres aa
- Le point d'interrogation à un troisième usage, qui est de permettre l'activation d'options
Exemple : dans le texte "photo2020.jpg" , l'expression : jpg coincide avec les trois dernières lettres du texte, mais ça ne marcherait pas sur "photo2020.JPG"
Pour ignorer la distinction majuscules minuscules, on peut ajouter (?i) . L'expression : (?i)jpg coïncidera alors avec les jpg et les JPG.

(8) Le OU est donc simple à utiliser, avec le caractère | Le ET est plus compliqué :
Exemple, vous cherchez si une chaine contient "bleu" et "vert", pas nécessairement dans cet ordre.
Eh bien il faut chercher bleu.*vert|vert.*bleu

(9) Exemples : ^([0-9]*) est une chaîne commençant par des chiffres. ^[^A-Z] correspond à une chaîne ne commençant pas par une majuscule

(10) Exemple : 20$ trouve les caractères 20 uniquement si ils sont situés en fin de chaîne



 (25/03/2020) 11R-4 Recherche par nom de dossier ou "Chemin"
Ce type de recherche me permet de faire la transition avec le paragraphe qui va suivre, concernant les recherches par contenus, c'est à dire essentiellement sur les métadonnées.
Il est possible de combiner les deux types de recherches, "noms de fichiers" qu'on vient d'étudier, et "conditions" décrites ci-après.

Bien que le chemin qui décrit l'emplacement d'un fichier ne soit pas vraiment un contenu, en fait chaque fichier contient justement une métadonnée décrivant son propre emplacement.
A partir de la V0.96.1, XnViewMP permet de rechercher des photos lorsqu'on connait un critère présent dans le nom d'un dossier.
La "métadonnée" qui "contient" le nom complet du dossier et qui représente l'emplacement des images est : "Chemin"
La forme générale et les paramètres utilisés pour cette recherche sont les mêmes que pour divers autres contenus (métadonnées) et seront décrits au paragraphe suivant.


11R-5 Recherche sur les contenus
On va voir maintenant les recherches sur les autres critères.

Utiliser le catalogue ou non ?
A priori, cette case devrait restée cochée en permanence (si vous pensez que votre catalogue est complet et en bon état), car la rapidité de recherche est impressionnante.
Quand vous avez des doutes et si ce que vous cherchez n'apparaît pas, essayez de décocher cette case, mais vous devez vous attendre à des délais de réponse bien plus longs.
Par ailleurs, quelques versions de XnViewMP ont eu des bugs avec l'utilisation du catalogue : V0.92, V0.96.0
Les recherches qui "gagnent" à l'utilisation du catalogue portent sur : les mots clés, les catégories, les chemins, les taille et noms de fichiers, étoiles, couleurs.
(voir en annexe pour plus de détails)
Tous les autres critères vont nécessiter la lecture des métadonnées de toutes les photos du dossier (spécifié) sur lequel porte la recherche, et c'est beaucoup plus lent.
Je me suis aperçu que la présence de vidéos parmi mes dossiers de photos ralentissait fortement les recherches hors du catalogue.
Depuis, j'ajoute sytématiquement *.jpg dans la case de noms de fichiers, pour ne faire porter les recherches que sur les photos de type jpg.

Utilisation des trois cases à cocher :
- L'option "Respecter la casse" permet de distinguer les lettres majuscules et minuscules. Pour fignoler vos métadonnées, pourquoi pas...
- On va donc le plus souvent utiliser le catalogue, Cochez la case. Si les critères utilisés sont dans le catalogue, la recherche prendra quelques instants, c'est très rapide.
- La case "Récursif" permet la recherche dans tous les sous-dossiers du dossier spécifié en haut; habituellement on la laisse reste cochée.

Bouton radio à deux choix
Cochez le bouton radio selon que vous voulez un ET (toutes les conditions) ou un OU (au moins une condition) dans le cas d'une recherche multi critères.
(Ce choix est illustré sur la figure 57 : "Correspond à toutes les conditions suivantes" ou, "au moins une des conditions suivantes"
Ces "conditions" vont être spécifiées dans la deuxième moitié de la fenêtre, avec le bouton "Ajouter"

Entrer des conditions de recherche.
1) Les champs
Cliquez sur le bouton "Ajouter" pour entrer votre première condition; vous obtenez des listes de choix déroulantes, pour sélectionner un champ dans lequel le critère sera recherché.

Rechercher
Figure 58. Choix du champ sur lequel va porter la condition.

Rechercher
Figure 59. Champ Légende et choix d'opérateur logique.

Dans l'exemple ci-dessus on sélectionne IPTC Caption, ce qui en français s'affichera IPTC:Légende
Vous pourrez modifier l'opérateur logique situé entre le nom du champ et la valeur, simplement en cliquant dessus, comme illustré.
Vous entrerez ensuite dans la case la valeur qui sera votre critère de comparaison.

Vous pouvez ensuite ajouter d'autres conditions avec le bouton "ajouter" en sachant qu'un ET ou un OU sera effectué sur ces conditions selon le bouton radio choisi.
Vous pouvez également supprimer une condition en cliquant sur le tiret rouge à gauche du nom de champ.

Cas particuliers et détails
-  (07/10/2019) L'un des choix possibles, XMP Field a été ajouté récemment et permet d'utiliser n'importe quelle métadonnée XMP.
-  (25/03/2020) V0.96 La métadonnée "Chemin" a été ajoutée en début de liste et permet des recherches catalogue sur les noms de dossiers.
-  (13/04/2020) Le choix "Catégories" (et non "iptc catégories") permet à lui seul beaucoup de combinaisons, on va le voir en détails.

Rechercher
Figure 59b. Champ Catégories
Le champ "Catégories"
Vous avez choisi par exemple l'opérateur "Contient" et on va s'intéresser aux valeurs qui vont être utilisées en tant que critères.
Le champ "Catégories" offre une liste de toutes vos catégories, et vous allez cocher un ou plusieurs cases pour définir les catégories sur lesquelles porte la condition
Cochez par exemple Fleur et Oiseau, pour sélectionner des photos contenant des fleurs ET des oiseaux.
Si vous aviez choisi l'opérateur "ne contient pas", ce seraient les photos ne contenant ni fleur NI oiseau
Quand vous avez fini de cocher vos catégories, validez avec Entrée ou en appuyant à nouveau sur la flèche au bout de la case.

Vous pouvez enfin ajouter d'autres conditions dans la fenêtre avec le bouton "Ajouter" (requête multicritères)

2) Les opérateurs logiques dans les conditions
Selon la nature de la métadonnée (longue, courte, en liste, codée...), vous aurez des possibilités d'opérateurs différents.
Cliquez sur l'opérateur pour pouvoir choisi celui qui vous convient dans une liste.
Par exemple, si vous cherchez le mot Girafe présent dans une légende IPTC d'image, mettez l'opérateur "Contient"
 (25/03/2020) Nouveau en V0.96 Le champ "Catégories" (et non IPTC, Catégories) autorise maintenant les opérateurs : est, contient, ne contient pas
L'opérateur "Est parmi" permet de réaliser un OU logique dans les champs en liste, comme les mots-clés

Criteres
Extrait de la Figure 56
Dans l'exemple de la figure 56, on recherchait les photos contenant les mots-clés : insecte ET orchidée ET ( orchis OU ophrys)
- l'opérateur "est parmi" de la troisième condition permet de réaliser un OU entre les deux critères séparés par un point virgule.

 (17/02/2021) Optimiser les recherches
Les recherches portant sur des données présentes dans le catalogue sont beaucoup plus rapides que celles nécessitant la lecture des fichiers d'images.
Mais si vous mettez dans le bon ordre vos conditions, en mettant d'abord celles qui tirent parti du catalogue, puis les autres, la rapidité sera bien meilleure.
Du moins pour les recherches du type "Correspond à toutes les conditions" et avec l'option "Utilisation du catalogue".
En effet, les conditions sont évaluées dans l'ordre, et les suivantes ne sont traitées que sur les images ayant été filtrées par les conditions précédentes.
Par exemple, je cherche les photos de la ville "Paris". Sachant qu'une majorité ont la catégorie "Monument", en mettant cette catégorie d'abord, j'obtiens rapidement une première approche du résultat souhaité, sans devoir lire la donnée "City" de mes 60 000 photos (même si je ne cherche pas spécialement les monuments).

Mémorisation et exécution de la recherche
Dans les versions qui suivront la V0.96, les diverses informations de cette fenêtre seront mémorisées, vous les retrouverez à la prochaine utilisation.
Sinon, avant de cliquer sur le bouton qui va lancer la recherche, vous pouvez enregistrer cet ensemble de réglages et de critères : cliquez sur le + vert et choisissez un nom pour cette recherche.
Cliquez enfin sur le bouton "Recherche". Vous obtenez un écran qui liste les photos trouvées et leur nombre.

Rechercher
Figure 60. Résultat de la recherche.

Affichage des résultats
Cliquez sur "Parcourir" pour afficher le résultat de votre recherche dans l'écran principal.

Précaution
Si vous double-cliquez sur une photo dans l'écran principal, vous vous retrouvez dans le dossier contenant la photo et vous perdez l'affichage du résultat de la recherche.
Voyez à la fin du paragraphe 5B (conseils divers) le paramétrage qui permet de conserver le résultat de la recherche en cours.