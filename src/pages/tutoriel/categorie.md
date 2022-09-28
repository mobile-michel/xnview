---
title: 5 - Les Catégories de XnViewMP
description: Lorem ipsum dolor sit amet - 3
layout: ../../layouts/MainLayout.astro
---

Utiliser les catégories pour entrer les mots clés avec XnViewMP apporte un réel confort pour cette tâche fastidieuse mais importante.
De plus, sans autre manipulation, vous pourrez utiliser le "filtre de catégories" et obtenir une sélection de photos avec un seul clic.
Il y a donc deux aspects complètement indépendants : faciliter la saisie, et pouvoir filtrer des lots de photos très facilement.
Pour info, il existe dans d'autres logiciels une notion de "catégories" qui nomme ainsi des ensembles de mots clés; ce n'est pas du tout ce qui est défini dans XnViewMP par le mot "catégories", ne confondons pas.


Chapitre 5A - Utiliser les Catégories de XnViewMP pour mettre des mots clés dans les photos
Chapitre 4 top Chapitre 5B
Nous avons vu dans le chapitre précédent le paramétrage à appliquer (Outils, Paramètres, Métadonnées) pour utiliser les catégories.
Et donc vous allez utiliser les catégories pour entrer vos mots clés, c'est à dire cocher les cases correspondantes dans la zone Catégories.

J'ouvre une parenthèse importante sur la méthode décrite dans le chapitre 3 :
Si vous le souhaitez, vous pouvez commencer à saisir vos premiers mots-clés dans l'écran "Editer les métadonnées" ( Ctrl i ) sans utiliser le panneau de catégories.
Il faut alors cocher la première option de métadonnées (Importer les mots clés XMP ou IPTC dans les catégories) qu'on a vue au chapitre précédent :

Outils Options métadonnées
Figure 14
De cette façon, des catégories vont se créer automatiquement; Mais il est difficile de créer des véritables hiérarchies par cet écran de saisie sans artifices.
Décochez donc cette première option pour passer à la suite, et on n'utilisera plus la fenêtre d'édition iptc/xmp pour les mots clés, mais seulement le panneau "catégories"
Parenthèse refermée.


Si vous partez de zéro, n'oubliez pas les conseils que je donne sur le choix des mots clés vers le bas de cette autre page ,
et vous devez vous préparer une liste de mots dans un tableau ou un fichier texte (fichier que XnViewMP peut générer très facilement à partir des catégories, voir ici)
Il vous suffit de garder ce tableau de mots-clés (imprimé ?) près de vous, pour vous y référer pendant que vous marquez vos photos, et en même temps l'améliorer progressivement.

 (11/12/2020) Les mots-clés hiérarchisés
Les mots clés hiérarchisés ne sont pas parfaitement normalisés, mais vouloir les éviter à tout prix nous priverait d'un vrai confort d'utilisation; autant donc les utiliser.
Dans ce cas, la liste de catégories sera thématique en quelque sorte, comme dans l'exemple suivant à trois niveaux hiérarchiques.
Les mots clés correspondants sont écrits en suivant la norme Adobe Lightroom, en XMP, métadonnée XMP-lr:HierarchicalSubject(n)
Ils offrent un avantage incomparable, c'est de pouvoir faire un travail de marquage progressivement, en commençant par des catégories assez généralistes.
Cela permet de démarrer bien plus vite, en marquant très vite des lots importants de photos.
De plus, les catégories seront présentées dans une liste courte, dans un ordre relativement facile à parcourir du regard.
Je suggère cependant d'éviter de mettre un trop grand nombre de sous-catégories au début, car cela va notablement vous ralentir, voire vous décourager lors du marquage.
Vous pouvez à la place ajouter un mot en légende dans les quelques cas où c'est judicieux, et si il apparaît utile plus tard d'en faire des catégories, ce sera assez simple si iptc est utilisé
En effet, en sélectionnant d'abord la catégorie parent, la "Recherche rapide" permet de filtrer selon le contenu des légendes iptc, afin de catégoriser après coup avec plus de détail.

La zone Catégories
Elle permet d'affecter des catégories aux photos et de construire l'organisation des catégories.
Ces catégories sont visibles également dans l'onglet "Filtre catégories", onglet situé à gauche de l'écran, sous les "Dossiers".
Souvenez-vous que chaque mot présent dans cette liste de catégories est un mot clé, et doit être unique et précis.
Evitez les mots "divers" ou "autres", écrivez par exemple "autre_reptile".
Pas d'inquiétude excessive cependant, il sera toujours possible de remplacer une catégorie ou un mot clé par un autre ultérieurement.

Categories
Figure 15 illustration des principales fonctions accessibles dans le volet des catégories.

Repérez bien la petite flèche pointe en bas qui donne accès au menu des catégories, que je détaillerai plus loin.
Il y a à côté un bouton à trois petits points qui permet de déplier et replier l'ensemble des sous-catégories.
Vous voyez également les petits onglets à droite pour passer à l'affichage "Groupes de catégories"
Sur la figure 15, j'ai illustré aussi le clic-droit sur une catégorie, qui permet les actions classiques (renommer, déplacer, supprimer etc...)
Si vous souhaitez réorganiser vos catégories, il est préférable de le faire ici: faites un clic droit sur une catégorie, et cliquez sur un des choix offerts ...
Mais il y a des précautions à prendre, lisez attentivement le chapitre 5C
Avant de faire d'importants bouleversements, faites un petit essai, puis refermez et réouvrez XnView pour vérifier que vos manips sont bien acceptées.
Mais notez bien que modifier les catégories ne modifie pas les mots-clés correspondants dans les photos. Donc, à ce stade, ne modifiez que des catégories vides.
Un truc bête : vous devez sélectionner au moins une photo pour pouvoir agir dans le volet des catégories. C'est comme ça.
Si XnViewMP refuse de prendre en compte vos réglages ou vos actions, c'est probablement parce-que son dossier d'installation est protégé par Windows
C'est pour cette raison que je proposais au tout début de cette documentation de ne pas l'installer dans le dossier program_files.


Affecter une catégorie
Donc, vous avez sélectionné une ou plusieurs photos.

Et vous cliquez dans la case de la catégorie que vous voulez affecter. Tout est là.

Il y a d'autres façons de faire, qui sont utiles si vous avez des centaines de catégories, mais ce sera précisé dans les paragraphes "Mode de recherche" et suivants, un peu plus bas.
Vous pouvez aussi utiliser le bouton Catégories de la barre d'outils pour affecter des catégories à vos photos, c'est parfois plus commode.

Categories
Figure 16 Les catégories

Si, dans les paramètres (Outils, Paramètres, Métadonnées), vous avez choisi d'affecter les catégories "parent" (6e option) vous verrez que le fait de cocher "moineau" va cocher automatiquement "oiseau" et "animal".
Si, dans les paramètres, vous avez choisi la 2e option "exporter les catégories vers les mots clés (IPTC et XMP)", eh bien votre photo contient
désormais les mots clés IPTC:keywords animal, oiseau, moineau et XMP-dc:subject(1) animal , subject(2) oiseau et subject(3) moineau
Il y aura aussi les mots clés hiérarchiques XMP, qui dans notre exemple auront cette forme :
Lr:HierarchicalSubject[1] animal
Lr:HierarchicalSubject[2] animal|oiseau
Lr:HierarchicalSubject[3] animal|oiseau|moineau
Vous pouvez vérifier tous ces mots clés dans le panneau informations, onglet IPTC, onglet XMP et onglet Exiftool.
Attention, l'écriture des mots clés ne se fait effectivement qu'au moment où vous "relâchez" la sélection de photos (en cliquant une autre photo)
Vous pouvez ajuster la nature et la forme de l'écriture des mots clés avec les diverses options de l'écran Outils, Paramètres, Métadonnées.

Simultanément, XnViewMP inscrit dans sa base de données de catégories les informations correspondantes. Je détaille le rôle de cette base de données dans le chapitre 6.
Et vous allez pouvoir utiliser le filtre de catégories décrit dans le chapitre 5B
Attention, pour que la correspondance entre les catégories affectées et les mots clés XMP reste bonne, si vous faites des modifications de mots-clés utilisez exclusivement les catégories.
Réciproquement, si vous modifiez des catégories, il faut s'assurer que les mots clés correspondants seront mis à jour (donc, au minimum, que les photos qui contiennent ces mots clés soient sélectionnées)

Les trois paragraphes qui suivent décrivent des réglages et options qui concernent l'utilisation des catégories.
On accède à ces choix dans XnViewMP via le menu des catégories, (la petite flèche blanche pointe en bas située à droite de la case de saisie de catégorie)

Categories
Figure 17 Menu des catégories


Menu des catégories : Mode de recherche
On a ici 3 choix:
- correspondance partielle au début : la recherche s'effectue en tapant les premières lettres de la catégorie.
- correspondance partielle partout : la recherche se fait sur un groupe de lettres ou un mot quelconque
- utiliser une expression régulière : "expression régulière" c'est un mode de recherche respectant une syntaxe normalisée (voir chapitre 11R-3 ).
Ces options s'appliquent lorsque vous recherchez une catégorie, en utilisant la case de saisie située juste à côté, au même niveau.
Si vous avez plusieurs centaines de mots-clés, donc plusieurs centaines de catégories, cette fonction de recherche peut vous éviter de parcourir
du regard toute la liste, à la recherche d'une catégorie perdue au fond d'une arborescence. Il ne s'agit pas du tout de recherche dans les photos.


Menu des catégories : Auto-correction
 L'option auto-correction dans le menu "gestion" concerne probablement aussi la saisie des noms de catégories et la correction automatique de certains mots que vous choisissez ...
Les équivalences entre le mot entré au clavier et celui qui sera utilisé se situent dans le menu Outils, Paramètres, auto text correction.
Je suppose que ça permet d'utiliser des abréviations, pour gagner du temps lors de la frappe clavier.
.doc.


Menu des catégories : Action
Il y a deux choix qui s'excluent : Assigner une catégorie ou Ouvrir l'arbre.
- Si vous cochez "Ouvrir l'arbre", il est sous-entendu que vous avez au préalable "replié" toutes les catégories hiérarchiques, en cliquant sur les trois petits points.
Entrez alors quelques lettres d'une catégorie, puis cliquez la suggestion qui correspond à votre recherche, et l'arborescence de cette catégorie va s'ouvrir.
- Si vous cochez "assigner une catégorie" la même manip que ci-dessus va affecter la catégorie à la photo sélectionnée.
 (06/08/2022) L'option Métadonnées "Apply parent keywords" est devenue fonctionnelle depuis les versions V0.9x ou V1
.bug.
Une dernière astuce avant les groupes de catégories, les raccourcis : allez voir dans le chapitre 5C, le paragraphe "Editer"



La zone "Goupe de Catégories"  (06/12/2019) (Categories sets en anglais)
Selon l'agencement d'écran que vous avez choisi, ce panneau, accessible par un onglet, peut se situer sous les catégories, ou sous les dossiers, ou sous le filtre des catégories.
Dans ce paragraphe, pour simplifier l'écriture je parle surtout de "catégories", mais selon vos choix et réglages de métadonnées, les mots-clés IPTC ou XMP correspondants vont évidemment être gérés en même temps.
Le but de ce panneau est donc de vous fournir un accès (encore) plus pratique aux catégories que vous souhaitez ajouter à vos photos.

Vous allez pouvoir créer quelques groupes, par exemple "famille", "nature", "paysage" contenant des catégories que vous utilisez souvent.
Dans ces groupes, vous allez donc ajouter des catégories existantes, qui deviendront accessibles sous forme de boutons.
L'avantage, c'est que vous y accéderez d'un seul clic, que vous n'avez pas à fouiller dans une longue liste, et que les catégories parentes peuvent s'ajouter sans "polluer" votre affichage.

Cliquez sur le bouton "Gestion", puis dans la fenêtre qui apparaît, cliquez sur "Ajouter un groupe", disons "Nature"
Dans la case "Recherche de catégorie", tapez quelques lettres pour obtenir des suggestions de catégories parmi vos catégories existantes.
Par exemple, tapez fle pour pouvoir cliquer "fleurs", puis ois pour oiseau, chat, arbre etc ...

Categories sets
Figure 17b Gestion des groupes de catégories.
.set.categorie-set.categories-set.
Remarquez qu'un onglet s'ajoute dans cette fenêtre pour chaque groupe de catégories que vous créez
A la fin validez avec OK

Voilà, une rubrique "Nature" est disponible dans le panneau "Groupes de catégories".
"Dépliez" ce groupe en cliquant la petite flèche triangulaire, les boutons correspondants aux catégories sont maintenant accessibles.

Categories sets
Figure 17c Groupes de catégories.

Sélectionnez une image, faites un clic sur le bouton "Chat" et si vous gérez les catégories parentes, les catégories Animal, Mammifère, Félidé, Chat sont aussitôt affectés à cette image
Et selon vos réglages de métadonnées, les mots-clés correspondants s'inscrivent dans les photos.

Pour vous donner des idées d'utilisation, sachez qu'une catégorie peut figurer dans plusieurs groupes, par exemple si vous constituez vos groupes selon un contexte pour accélerer le marquage de dossiers de photos (vacances, travail, sport) un même mot clé peut exister dans les divers groupes.
Ces groupes n'ont pas de lien logique ni sémantique avec les hiérarchies de catégories, ils sont la seulement pour gagner du temps pour marquer des sessions de prises de vue.
Par exemple le mot-clé "canoé" peut exister dans le groupe sport et le groupe vacances, mais dans vos catégories, "canoé" n'est présent qu'une fois, par exemple dans "Activités | Canoé"
Autre exemple, le mot clé "voiture" peut être mis dans un groupe "collection", un groupe "voyage", un groupe "travail" parce qu'on rencontre des voitures dans ces trois situations.

Les groupes de catégories préétablis :
Il y a trois groupes de catégories qui sont déjà présents dans cette fenêtre.
- Attribué(s) : Dans ce groupe, vous voyez sous forme de boutons les catégories affectées aux photos sélectionnées.
        En cliquant un bouton, vous supprimez la catégorie et éventuellement le mot-clé de la photo.
- Historique : Dans ce groupe on trouve les catégories récemment utilisées
- Suggéré(s) : catégories suggérées (?)

 (27/02/2021) Sauvegarde de la disposition .set.
En haut à droite du panneau Groupe de catégories, il y a quelques boutons qui permettent de gérer la façon dont les groupes sont affichés.
L'idée est de préparer ces groupes de catégories pour des sessions de marquage "spécialisées"
Par exemple, vous avez un grand nombre de photos de paysage à taguer suite à vos vacances.
Repliez les groupes peu utiles dans ce cas (Famille, Maison, Travail, Champignons ...) et dépliez des groupes sur le thème voyage.
Avec le petit bouton +, nommez cette disposition "Voyage"
Une autre fois, vous avez des centaines de photos de champignons à taguer.
Repliez les autres groupes, et dépliez le groupe "Champignons" avec tous les mots clés fréquemment utilisés. Nommez cette disposition "Myco"
Voilà , en fonction de la tonalité des lots de photos à taguer, vous optimisez l'affichage des groupes avec les dispositions que vous aurez préparées.


Chapitre 5B - Utiliser les Catégories de XnViewMP pour retrouver des photos
Chapitre 5A top Chapitre 5C
Le filtre de catégories

Dans l'onglet "Filtre Catégories" à gauche de l'écran principal près de l'onglet "Dossiers", vous visualisez la hiérarchie des catégories, avec le nombre de photos par catégories.
Categories filtrage
Figure 18 Le filtre de catégories

Et là, en cliquant sur une catégorie, XnView affiche les photos correspondantes dont le nombre est précisé entre parenthèses.
C'est prodigieux...

En utilisant le filtre de catégories, vous allez pouvoir regarder vos photos par thèmes, vous pourrez retrouver une photo parmi des milliers etc ...
Si vous voulez voir vos images sélectionnées en grand, il faut éviter de double-cliquer une photo, ce qui vous amènerait directement dans le dossier d'origine de la photo.
Vous pouvez par exemple utiliser la touche F11 qui affiche l'image en plein écran, ou d'autres méthodes décrites à la fin du dernier paragraphe "Conseils divers" de ce chapitre.

Je détaille maintenant les diverses options et méthodes de filtrage.


Filtrer les photos (écran Filtre de catégories)
Tout en haut de la zone "Filtre de catégories", il y a un menu dont l'intitulé "Correspond" va vous permettre d'ajuster vos critères de recherche.

Options de filtrage
Figure 19 Les options de filtrage

Notez d'abord que vous pouvez sélectionner plusieurs catégories, en les cliquant en combinaison avec la touche Ctrl de votre clavier.
Par défaut, Xnviewmp va afficher l'addition des photos de toutes les catégories sélectionnées, c'est à dire qu'il s'agit d'un "OU"
En effet, dans le menu "Correspond", la valeur "N'importe lequel" est cochée par défaut, c'est donc les photos correspondant à n'importe lequel des critères qui seront affichées.

Si vous voulez réaliser un "ET", c'est donc "Tous" que vous allez cocher dans le menu, pour que tous les critères soient satisfaits.
A mon avis, c'est cette option qui doit être ordinairement utilisée quand on fait des recherches multicritères ...
Cette option va donc s'appliquer sur un ensemble de catégories sélectionnées (uniquement catégories ...)

 (01/10/2019) Pour exclure une catégorie de la recherche, sélectionnez-la en combinaison avec la touche Alt (Alt clic)
Par exemple, pour obtenir tous les insectes qui ne sont ni papillons ni coléopteres , cliquez Insectes, Alt papillons, Alt Coleopteres
(on obtiendrait 365 résultats dans l'exemple de la figure 20 : 518-37-116 = 365)

Il y a une option qui perturbe l'usage du Control-Clic, c'est : Outils, Paramètres, Métadonnées, "Automatically apply parent keywords"
Quand cette option est cochée, le Ctrl-Clic sélectionne toutes les sous-catégories d'une catégorie..bug.
Si on a choisi "tous" dans le menu "correspond", le résultat est presque toujours vide (c'est rare qu'un insecte soit à la fois coléoptère ET papillon).
Soit vous désélectionnez les sous-catégories pour arriver au résultat, soit, et c'est le plus simple, vous décochez l'option en question quand vous utilisez les filtres de catégories.

Options de filtrage
Figure 20

Les trois autres options de la figure 19 définissent sur quel ensemble de photos vous souhaitez réaliser cette recherche.
- Global, c'est sur l'ensemble des photos qui sont présentes dans la base de données.
- Dossier courant, c'est celui qui est affiché dans l'onglet "Dossiers" (et qui peut avoir changé entre temps si vous avez double-cliqué une photo)
- Dossier courant récursif : cette option inclut tous les sous-dossiers du dossier courant. Si vous avez rangé vos photos par années, vous disposez donc aisément du critère année.

 (01/10/2019) En résumé :
Décochez l'option "Automatically apply parent keywords"
Sélectionnez "Corespond, Tous" et "Global"
Sélectionnez une catégorie, ou plusieurs catégories avec la touche Ctrl, ou des catégories à exclure avec la touche Alt.

On est là au coeur de l'utilisation des mots-clés et de XnViewMP : en deux secondes vous retrouvez les photos répondant à plusieurs critères.
Et dire qu'il m'a fallu attendre décembre 2016 pour découvrir cette fonction. Pour être honnête, avant j'utilisais surtout Picasa pour mes filtrages par mots clés.
Voici un exemple : Si vous avez stocké vos photos par années, sélectionnez dans l'explorateur de Xnviewmp l'année 2017 par exemple.
Dans l'onglet "Filtre des catégories",dans le menu "Correspond", sélectionnez "Dossier courant récursif" et cliquez une catégorie, "anniversaire" par exemple.
Vous obtenez aussitôt toutes les photos anniversaire de 2017 !


Les autres filtrages

 (12/02/2019) Personnes
Il s'agit d'une nouveauté de la version V0.98. XnViewMp peut désormais récupérer des métadonnées de noms de personnes qui ont été écrites par d'autres logiciels.
Picasa et Windows Live Photo Gallery , pour ne citer que ces deux logiciels anciens, étaient capables de reconnaître automatiquement les personnes figurant sur les photos, après une phase d'apprentissage.
Les noms des personnes, ainsi que l'emplacement du visage dans l'image sont notés dans des métadonnées XMP.
Il est probable que d'autres logiciels, présents ou futurs, et offrant ces possibilités d'identification automatisée de visages vont se répandre rapidement.
Les métadonnées reconnues en lecture par XnViewMP sont : (doc à faire)
Pour le moment, XnViewMP ne permet pas d'écrire, modifier ni supprimer ces métadonnées.
Le filtre de catégories de personnes est très restreint dans son fonctionnement, puisqu'on ne peut pas le combiner avec les autres catégories.
Pour l'instant, on peut sélectionner une seule personne à la fois, et aucun autre critère en même temps.


Filtrage par notes ou par couleurs
Dans le début de la zone "filtre des catégories" il y a la possibilité de rechercher ou filtrer des photos en utilisant ces deux types de marquages, de la même façon que les autres catégories.
C'est à dire qu'on peut les utiliser séparément ou combinées avec d'autres catégories (avec Ctrl clic), pour affiner votre recherche.
Cette combinaison repose sur un "ET" logique : on recherche des photos d'une catégorie ET marquées par étoiles ou couleurs. (le menu "correspond" ne s'applique qu'aux catégories)

Rechercher
Figure 21. Filtre catégories

Il reste un bug décrit en fin de chapitre 9 si vous combinez des critères (étoiles, couleurs, catégories). .bug.
Vous trouvez plus de précisions sur ces méthodes complémentaires de marquage par notes ou par couleurs dans le chapitre 9


Autres
Toujours dans la même zone de filtre de catégories, on trouve le choix "Autres", qui contient 3 lignes :
- Marque(s) (0) : Des "marques" peuvent être affectées à des photos, et on peut donc filtrer avec ce critère.

Il s'agit d'un marquage géré en interne par XnViewMp, car aucune métadonnée normalisée ne correspond aux marques.
C'est un outil pratique, mais qui s'écarte du thème de cette page où on souhaite décrire des méthodes "normalisées" liées aux métadonnées.
Vous pouvez utiliser ce marquage de manière temporaire, par exemple pour préparer une sélection de photos destinées à un ami, ou à un traitement particulier, surtout en combinaison avec un autre filtre.
Les diverses fonctions pour mettre ou enlever des marquages sont accessibles avec le clic-droit sur une sélection de photos, inutile de détailler ici, c'est assez évident.
Un autre moyen de marquage très efficace consiste à cocher les petites cases situées près de chaque vignette.
Si ces cases ne sont pas affichées, allez valider "marque" dans dans Outils, Paramètres,Vignettes,Superposition...

- Sans catégorie : C'est un filtrage intéressant, qui permet de retrouver des photos auxquelles on a oublié d'attribuer des catégories.
Ces deux premiers critères peuvent se combiner avec les autres catégories ordinaires.
- Tout : Ce critère fonctionne à partir de la version V0.89. Il est à utiliser en combinaison avec le choix "Correspond, Dossier courant récursif" du filtre des catégories.
Ca permet de voir la totalité d'un dossier (et des sous-dossiers) pendant des phases de tâtonnement de filtrages.

Attention, si vous avez sélectionné "Correspond, Global" évitez de cliquer sur "tout" car ça risque de prendre beaucoup de temps pour afficher vos 70 000 photos !

Et pour utiliser tout ça de manière efficace, n'oubliez pas de passer régulièrement dans le menu "correspond" pour bien cibler les dossiers sur lesquels vous travaillez.


Autres moyens de filtrage hors filtre de catégories
Les filtrages et tris utilisant les boutons de la barre d'outils sont décrits au chapitre 11, paragraphes 11C et 11D.
Notez que l'utilisation des boutons de tri ou filtrage de la barre d'outils peut se faire "en plus" d'un filtrage dans le filtre des catégories, ce qui mutilplie les possibilités.

La fonction Rechercher
Celle-ci est accessible de quatre façons : dans le menu Outils-Rechercher, ou avec le bouton représentant des jumelles dans la barre d'outils, ou encore Ctrl F.
Une autre possibilité, dans la zone d'affichage des dossiers, avec un clic-droit sur un nom de dossier, cliquez "Rechercher" , ce qui préselectionne ce dossier pour la recherche.
J'ai déplacé cette section, car elle est extrêmement riche, allez vite voir comment utiliser cette fonction dans le chapitre 11R


Conseils divers
- L'utilisation du catalogue rend la recherche très rapide, mais uniquement pour les mots-clés, marquages, étoiles, couleurs, noms et emplacements (chemins) des images.
Les autres métadonnées ne figurent pas dans le catalogue, et donc les recherches sont bien plus lentes.
Les possibilités de recherches sont quelque peu différentes sur les métadonnées IPTC et sur les métadonnées XMP, ce qui justifie encore que l'on abandonne pas tout de suite les IPTC...
.choix.choisir.iptc-ou-xmp.norme.
- Evitez de modifier les catégories dans la zone de filtrage (ça semblait moins fiable), utilisez de préférence les méthodes décrites précédemment chapitre 5A dans le panneau "catégories".
En fait, j'ai fait récemment beaucoup de suppressions de catégories vides dans cette zone, ça fonctionne parfaitement ...

- Si vous constatez des erreurs dans la façon dont le filtrage répond, vérifiez d'abord dans le browser et dans le menu "Correspond" que vous ciblez les bons dossiers.
Après, il peut arriver que la base de données (le catalogue) contienne des anomalies; ça m'est déjà arrivé.
Pour y remédier, j'ai lancé une reconstruction de la base de données. C'est d'une efficacité radicale, mais il y a aussi des moyens plus simples ou plus rapides...
.reconstruire.
- Ces recherches de fichiers (dans le panneau Filtre de catégories plutôt) vous permettent aussi de mettre vos mots clés en plusieurs passages.
Par exemple, vous aviez rapidement mis vos photos d'oiseaux dans la catégorie Oiseau.
Vous sélectionnez le filtre oiseau à gauche, et dans les photos affichées vous pouvez maintenant ajouter des catégories (= des mots clés) supplémentaires , moineau, mésange etc...
De cette façon, vous pouvez interrompre et reprendre votre travail d'indexation à volonté (mais lisez les précautions, chapitre 5D)

Conserver le résultat du filtrage
- Dans ces phases d'affichage "filtré", si vous double-cliquez une photo, vous allez quitter la sélection filtrée, et vous vous retrouverez dans le dossier d'origine de la photo.
Pour éviter ça, par exemple pour scruter un détail de photo dans une phase de retouche de mots-clés, il y a plusieurs solutions :
Vous pouvez utiliser le zoom dans l'aperçu (si vous avez configuré la molette de la souris ...)
Ou utiliser l'affichage en plein écran (touche F11), c'est alors une sorte de diaporama qui affiche votre sélection;
vous avez des boutons pour passer à la photo précédente ou suivante dans la sélection, et un bandeau de vignettes en approchant le pointeur de souris du haut de l'écran.
Appuyez sur la touche Echap pour quitter le diaporama et revenir à l'affichage ordinaire de la sélection filtrée.

Mais surtout, il y a une option à modifier pour que vous puissiez conserver le résultat de la recherche tout en ayant la possibilité de double cliquer les photos :
Il faut passer dans Outils, Paramètres, Interface, et décocher la case "Synchroniser l'explorateur lorsque la vue est fermée"
Et si, sans remettre cette option, vous avez besoin d'accéder au dossier d'une photo, un clic droit dessus et vous trouvez le choix "ouvrir le dossier contenant" (ou Ctrl O)
Dans Outils, Paramètres, Interface, Raccourcis, on peut modifier ce Ctrl O si il ne fonctionne pas.
Vous pouvez aussi "archiver" le résultat de votre recherche dans un fichier texte, en utilisant l'outil "liste de fichiers" décrit au chapitre 11B fig 39


Chapitre 5C - Gestion et paramétrage des Catégories
Chapitre 5B top Chapitre 5D
Clic-Droit sur une catégorie : 7 options pour gérér vos catégories
Dans la figure ci-dessous, on voit les 7 choix possibles obtenus par un clic-droit sur une catégorie

Categories
Figure 27

- Les deux premiers choix, nouvelle catégorie et nouvelle sous-catégorie ne posent aucun problème; vous pouvez y aller à fond.
Mais pour les autres actions, il faut savoir que les modifications faites ici ne seront pas répercutées automatiquement dans les métadonnées.

- Donc pour utiliser le choix suivant, "renommer", on risque de créer une divergence entre le nom de catégorie et les mots clés des photos.
Pour cette tâche, en attendant de trouver une meilleure méthode, je procède en plusieurs étapes:
1) Affichez les photos contenues dans l'actuel nom de la catégorie (filtre catégories) et sélectionnez-les toutes.
2) Avec un clic-droit, renommez la catégorie.
3) Pour l'ensemble des photos sélectionnées, décochez la catégorie, et cochez-la à nouveau.(Vérifiez si vous souhaitez ou non cocher les catégories parent)
4) Dans filtre des catégories, cliquez sur une autre catégorie quelconque, puis revenez sur celle dont vous venez de changer le nom.
5) Vérifiez dans au moins une des photos (zone informations) que vos mots clés sont corrects et conformes au nouveau nom de la catégorie.


Suppression de catégorie
- Pour "supprimer", je ne supprime que des catégories vides pour éviter de créer des écarts entre des mots clés existants et des catégories supprimées.

Soyez attentifs si vous utilisez le bouton Suppr du clavier, selon qu'une image ou une catégorie est sélectionnée, l'effet sera différent !

J'ai supprimé par erreur une catégorie contenant des centaines d'images; le catalogue a donc perdu ce contenu.
Pour rattraper ça, il faut recréer la catégorie, activer l'option Outils, métadonnées, "importer les mots clés XMP ou IPTC dans les catégories DB", et décocher la suivante.
Il faut ensuite retrouver les images qui avaient ce mot clé, donc utiliser la fonction "Rechercher" décrite dans le chapitre 11R .
Pour cette recherche, décochez l'option "utilisation du catalogue" (justement !), puis lancez la recherche des images contenant le mot clé concerné (IPTC keyword par exemple).
La recherche terminée, cliquez "parcourir", sélectionnez toutes les photos (Ctrl A), et cliquez sur "Mise à jour du catalogue avec les fichiers" du menu Afficher.
Evitez dans cette phase de cocher ou décocher des cases de catégories.
A la fin, déselectionnez les images, remettez les options Outils, Métadonnées comme elles étaient.
Allez voir dans le filtre des catégories si votre catégorie a retrouvé le nombre de photos initial.


"Déplacer vers" et "Mélanger avec",
Pour ces deux fonctions, n'imaginant pas les répercussions possibles, j'ai préféré éviter de les utiliser.
Pour ce type de manipulations, j'affecte une catégorie provisoire aux photos, et je leur enlève la catégorie que je veux modifier.
Quand celle-ci est vide, je la déplace, modifie etc; puis je l'assigne aux photos, ce qui met à jour les mots clés, et enfin j'enlève la catégorie provisoire.
Je me trompe peut-être mais je considère que seul le fait d'assigner ou enlever une catégorie force la mise à jour des mots-clés dans les photos.


Editer
Un clic sur "Editer" ouvre une petite fenêtre contenant divers champs.  (Paragraphe à améliorer) .doc.
Il y a un champ "Libellé", c'est le nom de la catégorie, un champ "Parent" pour son rattachement, un champ "Commentaire" et un champ "Raccourci"
Ces deux premiers champs semblent modifiables, mais je n'ai jamais essayé d'y toucher.
Le commentaire est géré en interne par Xnviewmp (je ne sais pas où il est enregistré) et ce n'est pas une métadonnée. Il permet de commenter une catégorie ... pourquoi pas ?
La petite case "ne pas exporter" concerne je suppose l'exportation au format texte des libellés des catégories. J'ai cru lire dans le forum qu'il y a un bug lié a cette case.
Le champ "Raccourci" permet de lier l'appui d'une touche du clavier à l'affectation d'une catégorie.
Ce raccourci est d'une efficacité impressionnante, mais il faut une certaine rigueur et de l'habitude pour bien s'en servir.


Un cas particulier:
Il m'est arrivé plusieurs fois qu'une catégorie se doublonne. Essayez d'abord de fermer, puis réouvrir XnView, ça suffit généralement à éliminer le problème.
Si le problème persiste, huit étapes pour le résoudre :
1) affichez les photos qu'elle contient (filtre catégories) et sélectionnez tout.
2) créez une nouvelle catégorie provisoire "toto"
3) affectez la catégorie toto, et enlevez l'ancienne.
4) supprimez l'ancienne catégorie doublonnée qui est maintenant vide.
5) affichez la catégorie toto et sélectionnez tout.
6) re-créez la catégorie souhaitée (celle qui avait doublonné).
7) affectez la nouvelle catégorie, et enlevez "toto" à toutes les photos.
8) supprimez toto


Menu des catégories : Gestion des catégories
Ce menu n'est pas évident à trouver : C'est la flèche pointe en bas, sous la barre de titre de la zone catégories.


Gestion des catégories : Exporter
XnViewMP a une fonction d'exportation (et importation) des catégories vers un fichier texte qui est très pratique.
Il s'agit d'exporter uniquement les libellés des catégories, ce qui équivaut au dictionnaire de mots clés (et non pas l'ensemble du contenu des catégories)
Distinguez bien ce type d'importation/exportation de celui qui sera décrit au paragraphe suivant, qui justement gère le "contenu" des catégories.

Gestion categories
Figure 28

Cliquez sur Gestion des catégories, puis Exporter fichier de catégories.
Vous obtiendrez un fichier texte de ce genre

Categories
Figure 29 Fichier texte exporté

Ce fichier va vous aider à choisir vos mots clés, à les repenser, les mémoriser, les réorganiser éventuellement...
Faites de temps en temps un export quand vos catégories ont évolué, et imprimez-ça pour l'avoir sous les yeux.

Gestion des catégories : Importer  (06/12/2019)

 (06/12/2019) Je crois me souvenir que l'importation d'un fichier de catégories détruit le fonctionnement du catalogue.
Il faut donc sauvegarder le catalogue au préalable, puis le réimporter à la fin si les catégories utiles n'ont pas été supprimées.
Donc, vous aurez rarement recours à ce type d'importation, si ce n'est dans le cas où vous débutez dans le marquage, ou pendant une opération de grand nettoyage et reconstruction du catalogue.

Si vous souhaitez créer des dizaines ou des centaines de catégories (en botanique, mycologie, entomologie), vous pouvez le faire dans ce fichier, puis l'importer dans XnviewMP (Importer des catégories).
On trouve ce genre de thesaurus tout prêt à télécharger sur Internet. Il suffit d'y remettre la mise en forme utilisée par XnviewMP avant d'importer.

Attention, dans ce paragraphe je parle d'importer de nombreuses NOUVELLES catégories, il ne s'agit pas de refondre l'organisation de catégories existantes.
L'import va donc simplement ajouter des nouvelles catégories vides à côté de celles existantes, et elles seront mises dans l'ordre alphabétique.
Cet ordre alphabétique peut constituer un problème si vous avez plusieurs grandes familles de mots-clés; il faudra hiérarchiser les mots-clés pour éviter qu'ils ne soient mélangés dans l'affichage.

Vérifiez aussi si des catégories existantes entrent en conflit avec celles que vous souhaitez importer.

Je propose de procéder comme suit :
1) Exportez d'abord le catalogue (voir le paragraphe suivant "catégories fichiers")
2) Exportez vos catégories. Répetez l'export pour conserver une deuxième copie intacte des catégories actuelles.
3) Incorporez les futures catégories dans le fichier que vous venez d'exporter, en utilisant un éditeur de texte comme le Bloc Notes, ou Notepad++
ne modifiez pas la hiérarchie des catégories qui existaient et qui contenaient des photos
4) Supprimez toutes les catégories dans le panneau catégories de XnViewMp
5) Importez le fichier de catégories que vous venez de mettre au point.
6) Importez le catalogue que vous avez sauvegardé en 1)


Menu des catégories : Catégories Fichiers , Exporter
Cette fonction permet, à partir de la base de données, d'exporter un fichier XML contenant un enregistrement pour chaque photo qui a des
catégories affectées, ainsi que l'emplacement précis de chaque photo.
Ca n'a rien à voir avec l'exportation des noms de catégories qu'on vient de voir au paragraphe précédent.
Le choix de l'intitulé "Catégories Fichiers" n'est pas très judicieux, car il faudrait bien distinguer cette forme d'export de celle qui est décrit dans le paragraphe précédent (fig 29)

Categories Categories Export
Figure 30a , 30b Catégories fichiers, Exporter

Il s'agit d'une forme de sauvegarde de la base de données de Xnview ("le catalogue" qui est décrit au chapitre suivant), du moins si vous avez utilisé les catégories pour entrer les mots clefs
Ce fichier exporté comporte de nombreux intérêts :
- il contient les informations qui font le lien entre les catégories et les photos.
- il constitue une sauvegarde de la base de données, mais avec un encombrement 100 fois plus faible.
- Peu volumineux et rapide à générer, ce type de fichier devrait vous inciter à faire un export par semaine !
- En regardant son contenu, vous trouverez probablement quelques anomalies dans vos noms de fichiers ou de dossiers, et vous pourrez aller les vérifier.
Je trouve bizarre que l'auteur du programme ait dissmulé une fonction aussi intéressante dans ce recoin discret ...

Les informations non sauvegardées sont : les "Marques", et les informations "Tag face" d'identification de visages.

Cette exportation propose une fenêtre avec une case pour indiquer le nom du fichier résultant, et deux options :
- Exporter note et libellé , que vous validez;
- Exporter tous les fichiers : cette option est en général inutile.
Elle implique que tous les fichiers et dossiers existants dans le catalogue soient spécifiés dans l'export, même si ils ne sont liés à rien.
Cela peut être utile si vous faites des traitements particuliers sur ce fichier xml, je suppose.

Voici un extrait du contenu d'un fichier exporté dans lequel vous voyez le lien entre les images et leurs mots-clés.

Categories Export

Figure 30c Catégories fichiers , Export
Chaque rubrique <File> dans ce fichier contient les informations correspondant à une image :
- Le nom complet du fichier (avec le chemin complet des dossiers ou sous-dossiers)
- Une ligne pour chaque mot-clé, avec éventuellement la hiérarchie.
- Les étoiles et labels de couleur éventuellement présents sont inscrits à côté du nom de fichier.


Importer
- Le fichier exporté pourra être réimporté tel quel, même si on a importé des catégories entre temps.
- il faut que tous les libellés des catégories qui vont être utilisées soient présents dans xnviewmp avant d'importer.
- Vous pouvez faire des remplacements en nombre dans le fichier xml avec un outil de traitement de texte comme Notepad++ (sur des noms de dossiers modifiés par ex)
- l'importation est bien plus rapide que de forcer la relecture des mots clés des dossiers de photos. (10 à 100 fois plus rapide pour des gros volumes)
Le fichier à importer doit évidemment être au format adéquat, et rester sur le modèle de celui qui est exporté.

Quelle différence y a t-il entre reconstruire la base de données, et importer ce fichier ?
L'importation permet de reconstruire au moins une partie de la base de données de XnViewMP, celle qui concerne les catégories et les mots-clés hiérarchisés.
Je me suis servi de cette fonction après avoir supprimé mon fichier XnView.db, et ça semble suffire pour que tout fonctionne bien, y compris les étoiles et labels de couleur  (07/03/2022).
Une deuxième méthode consiste à copier le fichier XnView.db, mais dans ce cas il ne faut rien modifier d'autre (ni catégories, ni dossiers etc)
Et si le catalogue ne fonctionne toujours pas correctement après une importation, il reste la troisième solution, qui est de reconstruire la base de données en appliquant la méthode décrite à la fin du chapitre 2.


Gestion des catégories : Supprimer tout
J'ai déjà utilisé cette fonction dans le cadre d'un nettoyage complet comme décrit au chapitre 2. C'est radical, ça efface tout instantanément !.
Comme je l'ai écrit un peu plus haut, si on importe des nouvelles catégories après cette suppression, la base de données perd son fonctionnement.
Si il s'agissait juste d'importer des nouveaux libellés de catégories, il fallait au préalable exporter les "catégories fichiers" (le fichier xml), tel que c'est décrit dans le paragraphe précédent.
Puis inclure (ou importer) les nouveaux libellés des catégories; Et enfin, il faut réimporter le fichier xml qui lie les images aux catégories ("catégories fichiers , Importer")
Si l'objectif était d'importer aussi des (nouveaux) dossiers de photos, il faudra ensuite ajouter ces dossiers dans le catalogue. (Bouton Ajouter dossier Import folder du chapitre 6)

Si vous souhaitez créer manuellement des catégories après avoir tout supprimé, petite difficulté, vous n'y arrivez pas dans le panneau catégories... .bug.
Les solutions :
- Faites un clic-droit sur le mot "catégories" dans le filtre des catégories, et crééz en une.
- Ou bien, créez un petit fichier texte de catégories avec un mot par ligne et importez-le. Vous pourrez ensuite avec un clic-droit créer et modifier les catégories.
- Souvenez-vous aussi qu'il faut obligatoirement sélectionner une photo pour pouvoir agir dans le panneau catégories.
- Evitez de faire fonctionner xnviewmp sans aucune catégorie. Créez ou importez des catégories avant de faire des autres manips..impossible.categories-vide.aucune.

Chapitre 5D - Astuces et précautions pour utiliser les catégories
Chapitre 5C top Chapitre 6
Tout n'est pas magique dans le domaine des métadonnées, surtout si vous avez déjà des mots-clés hétéroclites provenant d'autres logiciels.
prenez le temps d'étudier ce domaine, et faites toujours quelques essais avant de passer des heures à rentrer des métadonnées.
 (10/02/2018) Ce chapitre était anciennement numéroté chapitre 7; il a perdu une partie de son contenu qui est maintenant dispersé dans d'autres chapitres.
Les trois premiers paragraphes 5D1, 5D2, 5D3 sont anciens et devraient être réécrits ...



5D1) Importer des photos ayant déjà des mots-clés
 Avertissement. .bug.
Il y a trois méthodes pour réaliser cette manip. Je n'ai pas obtenu de réponse claire de la part du développeur pour savoir laquelle est recommandée.
- La première méthode consiste à utiliser la fonction "Mise à jour du catalogue avec les fichiers", que je trouvais peu pratique jusque là.
- La deuxième méthode consiste à "passer en revue" les dossiers dans l'explorateur (le browser), je ne suis pas certain que ce soit fiable à 100%.
- La troisième méthode décrite ici, est celle que j'utilisais jusqu'en version V0.89 avec le bouton "Ajouter dossier" (bouton dont le nouveau libellé est "Import folder".
Après quelques versions à problèmes, il semble qu'à partir de la V0.94.1, ça fonctionne bien.
En attendant que je réorganise ce chapitre, allez lire attentivement les remarques à la fin du chapitre 6. .doc.

Exemple : vous avez un dossier "photos" contenant plusieurs milliers de photos, dont la plupart contiennent quelques mots clés IPTC.
Vous avez coché la plupart des options dans "Outils, Paramètres, Métadonnées" en particulier la première "Importer les mots clés ..."
Vous allez les importer dans le catalogue (en utilisant le bouton "Import folder" dans Outils, Paramètres, Catalogue)
Vous pouvez laisser les catégories se créer automatiquement, ou bien vous aurez préparé à l'avance des catégories (hiérachisées peut-être, voir paragraphe 5D2)
Attendez-vous d'abord à un temps de traitement de plusieurs minutes, voire dizaines de minutes.
Puis a une augmentation du volume de votre dossier de photos, car Xnview va créer (plus tard) dans chaque photo des mots clés hiérarchisés, et éventuellement des mots clés XMP.
Ne vous attendez pas à ce qu'une hiérarchie de catégories apparaisse toute seule automatiquement; ordinairement les mots clés IPTC, (et XMP) ne sont pas organisés en hiérarchie.
Seuls les xmp:xmp-lr:hierarchicalsubject, si ils sont déjà dans les photos, permettent de construire automatiquement une hiérarchie de catégories.
Il est possible de gérer une forme hiérarchisées des mots clés IPTC, en cochant les options correspondantes (Outils, Paramètres, Métadonnées...) mais je n'ai pas testé l'importation de ce type de mots clés pour déterminer si ça construit ou pas une hiérarchie correspondant de catégories.
Cependant vous pourrez facilement réorganiser vos catégories plus tard en les hiérarchisant petit à petit, mais n'allez pas trop vite, et faites des sauvegardes intermédiaires.



5D2) Ajouter des mots clés hiérarchisés
Si vous aviez préparé des catégories hiérarchisées avant d'importer un dossier de photos, elles vont "accueillir" les photos ayant les mots clés correspondants, mais sans affecter les catégories "parent" ni créer les mots clés hiérarchisés xmp, car XnViewMP ne crée des mots-clés hiérarchisés qu'au moment où on clique sur une catégorie.
Pour effectuer cette tâche, allez d'abord cocher des options, au minimum "Automatically apply parent keywords" et "Créer les données XMP" dans Outils, Paramètres, Métadonnées.
- Sélectionnez une catégorie dans le "Filtre des catégories" : toutes les photos contenant ce mot-clé s'affichent.
- Sélectionnez toutes les photos, puis décochez , attendez un instant, et recochez la case correspondant au mot-clé dans la fenêtre Catégories.
Ca a plusieurs effets:
1) Ca affecte les mots clés parents selon vos réglages, en IPTC, en XMP, voire XMP Sidecar si vous l'avez coché.
2) Ca crée les XMP:xmp-lr:HierarchicalSubject si l'option créer les XMP est cochée.
3) Ca met à jour la base de données interne.
Répétez l'opération pour toutes les catégories en bout de hiérarchie, pour que leurs catégories parent soient incluses.



5D3) Ajouter des mots clés en plusieurs passages
Exemple : Vous avez mis la catégorie "animal" sur des centaines de photos, dans l'idée de les répartir plus tard en oiseaux, reptiles, mamifères.
Vous voulez ensuite ajouter des sous-catégories (des reptiles, des chiens etc ...) aux photos qui n'en ont pas.
Pour trouver les photos contenant uniquement "animal", vous devrez sélectionner aussi les sous-catégories déjà faites en combinaison avec la touche Alt du clavier, afin de les exclure. (Sinon, vous auriez pu dès le début créer une sous-catégorie provisoire "non_trié" pour faciliter la recherche de ce qui reste à faire).
Vous pourrez alors vous concentrer sur les photos de la catégorie "animal" en réduisant progressivement le nombre de photos où il manque des sous-catégories.
Pendant ce type de travail, pensez à modifier de temps en temps l'affichage (menu Afficher, Afficher en, Détails) pour visualiser toutes vos métadonnées (IPTC) dans un tableau.



5D4)  (13/02/2018) Remarques concernant la mise à jour de l'affichage .bug.
Les libellés sous les vignettes, qui reprennent des métadonnées, ne s'affichent pas toujours aussitôt après que celles-ci aient été modifiées.
C'est le cas dans l'écran principal, que ce soit en affichage par vignettes ou en "Détails". Même la touche F5 (menu Afficher, Rafraichir) ne suffit pas toujours.
Il semble qu'à partir des versions V0.99 il y ait un progrès dans la mise à jour des libellés ...
La solution consiste à visualiser un autre dossier d'images, puis à revenir au dossier utilisé, ce qui force une mise à jour complète de l'affichage.
De même pour la zone informations, qui affiche les métadonnées d'une photo sélectionnée. Parfois, il vaut mieux sélectionner une autre photo, puis revenir à la photo souhaitée pour forcer la mise à jour de cet affichage (en particulier si vous modifiez des métadonnées avec un autre logiciel en même temps !)
J'ai précisé aussi dans divers chapitres, que pour provoquer l'écriture dans les photos en ayant utilisé la fenêtre d'édition de métadonnées, il faut "relâcher" la sélection sur laquelle on vient d'agir, et éventuellement revenir dessus pour pouvoir actualiser et vérifier ce qu'on vient de modifier.



5D5)  (26/02/2018) Anomalie dans le catalogue .bug.
Il m'est arrivé que des photos soient visibles dans le browser, dans leur dossier, ou après un filtrage, et que je ne puisse pas les visualiser en les cliquant.
Le double-clic sur l'image ouvre un autre logiciel hors XnViewMP (la visionneuse Windows par exemple), et le mode plein écran ne fonctionne pas.
Il semble que ce bug soit lié à une anomalie dans le catalogue. Pour y remédier, j'ai coché la première option dans "métadonnées" (importer les mots clés XMP ou IPTC dans les catégories DB), et la photo étant sélectionnée, cliqué sur "Affichage, Mise à jour du catalogue avec les fichiers"
... ce qui a pour effet de réécrire correctement les informations de cette photo dans le catalogue.



5D6)  (31/05/2018) Mise à jour des fichiers avec le catalogue.
Cette fonction, accessible dans le menu "Afficher" permet d'écrire des métadonnées dans les photos, à partir des informations du catalogue.
Les informations qui figurent dans le catalogue, outre les nom et emplacement des photos, sont : mots clés, étoiles, labels de couleur.
Laissons de côté ici les manips qui permettent d'entrer ces informations dans le catalogue, qu'on voit au chapitre suivant; supposons qu'elles soient exactes.
(Les mots clés correspondent à des cases cochées dans les catégories, et les étoiles et couleurs sont visibles dans le browser, près des vignettes)

Les paramètres qu'il faut activer sont dans l'écran "Outils, Paramètres, Métadonnées"
Pour provoquer l'écriture de mots clés dans les photos il faut cocher :
"Exporter les catégories DB vers XMP et IPTC", et choisir ensuite "Créer les données XMP" ou "Créer les données IPTC".

 (09/12/2019)  Jusqu'en V0.96, il y a un bug : les données IPTC ne seront pas écrites, seules les XMP le seront. .bug. Le bug semble résolu en V0.96.4
Pour y remédier, je trouve moins compliqué de passer par ExifTool, que d'utiliser "Editer les métadonnées" qui peut créer des mots clés IPTC uniquement hiérarchisés.
Autres remarques :
- Les étoiles et couleurs n'existent pas en IPTC.
- L'exportation des étoiles et couleurs vers XMP se fera sytématiquement, (avec des valeurs zéro si il n'y a pas de marquage)
et ce, quel que soit l'état des deux options "Exporter la note vers XMP", "Exporter le libellé de couleur vers XMP".
- Pour créer des fichiers XMP sidecar, cocher "Mise à jour ou création du sidecar XMP", mais je n'ai pas testé le fonctionnement des deux options Note et Couleur.

Après avoir compris ces limitations, on peut lancer l'opération:

- Sélectionnez un lot de photos, et cliquez "Mise à jour des fichiers avec le catalogue" dans le menu Afficher.
Les informations contenues dans le catalogue vont être transcrites en métadonnées XMP dans les images.
Vous pouvez de la même façon traiter un dossier entier si vous le sélectionnez dans le browser (zone écran principale).

Dans quelle situation utiliser cette fonctionnalité ? Voyons à partir de quelques exemples.

1) Vous avez catalogué des milliers de photos avec XnView classic à l'époque ou vous ignoriez que les mots clés existaient.
Vous avez importé le catalogue de XnView classic dans XnViewMP (Outils, Paramètres, Catalogue, Onglet Outils, "Importer")
Choisissez vos options (par exemple "Créer les données XMP"), sélectionnez des dossiers de photos, et lancez la mise à jour ...
Vos mots clés XMP s'inscrivent dans les photos en fonction des catégories.
(S'il s'agissait de marquage par étoiles ou couleurs, la méthode est la même)

2) Vous avez taggué des milliers de photos avec XnViewMP avec des mots clés IPTC, et vous voulez maintenant les recopier en XMP.
(on est toujours dans le cas où le catalogue contient bien les catégories équivalentes à ces mots clés, hein )
Cochez "Créer les données XMP", sélectionnez les dossiers de photos, lancez la mise à jour.
Voilà vos mots clés IPTC recopiés en XMP.

3) Vous avez des photos avec des catégories affectées. Vous voulez créer les fichiers XMP sidecar correspondants.
Cochez l'option "Mise à jour ou création du sidecar XMP" sélectionnez les dossiers de photos, lancez la mise à jour.
(là aussi, en cochant les autres options, vous pouvez inclure étoiles et labels couleurs dans les sidecar)
Si des noms de fichiers avec le suffixe _original apparaissent, il y a des options (sauvegarde ...) à modifier dans "Outils, Paramètres, Général, Opérations fichiers"