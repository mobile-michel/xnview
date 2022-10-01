---
title: Annexes
description: Lorem ipsum dolor sit amet - 3
layout: ../../layouts/MainLayout.astro
---

Doc officielle
La documentation "officielle" de XnViewMP est assez modeste, et en anglais, mais elle complète remarquablement les lacunes de ma propre page.
Je ne pratique pas assez l'anglais pour étudier convenablement cette doc.
lien : http://www.xnview.com/wiki/index.php/XnViewMP_User_Guide . Dans cette page il y a pour le moment deux liens dans la rubrique Topics.
La première page précise bien des éléments sur les catégories, et la deuxième apporte des infos sur la gestion de la base de données et son optimisation.

Autres documents
Un document PDF en français : Workflow photo XnViewMp sur le flux de traitement.
Du même auteur, un blog créé en 2020 qui devrait rapidement devenir une source de documentation de premier plan pour XnViewMp: http://www.monworkflow.com/
Et une doc en anglais de Roger Carter: http://www.xnview.com/download/XnViewMP%20for%20Beginners.pdf.

Liens XNVIEWMP
Site officiel : https://www.xnview.com/fr/
Téléchargements : https://www.xnview.com/fr/xnviewmp/#downloads
Forum : newsgroup.xnview.com

Auteurs
L'auteur de Xnview, XnViewMP, Xnconvert est Pierre Emmanuel Gougelet.
Un grand merci à P.E. Gougelet pour ces logiciels formidables ...

Phil Harvey est l'auteur d'un logiciel utilitaire extraordinaire : Exiftool.
son site (en englais) est une référence formidable sur les métadonnées : https://www.sno.phy.queensu.ca/~phil/exiftool/
Il intervient régulièrement sur son forum, pour prendre en compte les demandes d'évolution et les questions des internautes.
Exiftool est fourni dans le dossier AddOn de XnviewMP, qui l'utilise seulement dans certains cas particuliers, ou pour afficher les métadonnées dans l'onglet Exiftool du volet d'informations.
* Bogdan Hrastnik est l'auteur d'un autre logiciel, ExiftoolGUI. On trouve sur internet quelques textes ou commentaires toujours pertinents de cet auteur.

IPTC une norme ancienne ?
Oui, IPTC est une norme ancienne. Pas autant que EXIF, et elle est remplacée peu à peu par la norme XMP plus récente.
Donc il me paraît évident de privilégier l'écriture de métadonnées XMP, cette norme devenant incontournable, surtout pour les nouveaux formats d'image.
Mais de nombreux logiciels sont restés avant tout orientés vers IPTC, et il me semble qu'en 2019 il est encore prématuré d'abandonner totalement les métadonnées IPTC (on parle de photos JPG, hein ?).
Même XnViewMP fait un peu de favoritisme pour les IPTC : il y a de nombreuses fonctions (affichage de libellés, tris, renommages, conversions) où seules les métadonnées IPTC sont proposées dans les listes de choix ou les menus.
La base de données (le catalogue) semble également privilégier les métadonnées IPTC.
Certaines galeries de photos en ligne permettent d'utiliser automatiquement des titres, commentaires ou mots clés , plus souvent IPTC que XMP.
Et, si vous abandonnez progressivement tel ou tel logiciel qui gérait uniquement les iptc, continuez à les tenir à jour en parallèle avec les XMP.
Je conseille donc d'utiliser simultanément les deux normes, IPTC + XMP, d'autant que ça ne coute rien.

 (15/12/2020) Vous pouvez copier cette image (clic droit, Copier) et la coller dans XnViewMP, puis allez voir l'ensemble des métadonnées IPTC et XMP qu'elle contient. Cette image contient les métadonnées gérées par la version V0.96 de XnViewMP		Chat V0.96 iptc xmp
Les voici telles qu'elles sont affichées dans les onglets IPTC, XMP et ExifTool, et que XnViewMP V0.96 peut lire ou écrire.
J'ai laissé en anglais la colonne des noms de métadonnées, et à côté il y a les contenus dans lesquels j'ai ajouté le mot Iptc ou XMP pour m'y retrouver.

Chat iptc xmp


La gestion des métadonnées a notablement évolué en V0.98 De nouvelles métadonnées XMP sont gérées. Voici une autre image de chat dans laquelle toutes les nouvelles métadonnées XMP ont été ajoutées		Chat V0.98 iptc xmp
Nouvelle liste des métadonnées XMP gérées par la version V0.98 , j'ai laissé cette fois la version française des IPTC qui n'ont pas changé.

Chat iptc xmp

On remarque que les noms des métadonnées XMP se rapprochent de la terminologie utilisée par ExifTool, avec les noms de groupes (lr, Iptc4xmpCore, Iptc4xmpExt ..., bien que les noms de groupes ne soient pas affichés dans l'onglet ExifTool)
A ce propos, les champs commençant par "Ci" dans le groupe Iptc4xmpCore sont des champs "Contact Information", c'est à dire relatifs aux personnes à contacter au sujet de l'image.

Apparemment, XnViewMP a une représentation interne des noms de métadonnées, du type tag_22. J'ai pu visualiser les numéros entre tag_5 et tag_122.
Pour les visualiser, utilisez "Enregistrer le modèle" dans "Edition IPTC", puis ouvrez le fichier obtenu avec extension .iptc , dans un éditeur qui affiche bien le format xml.
La même fonction (Enregistrer le modèle) existe dans "Editer XMP" mais cette fois la forme des métadonnées est plus traditionnelle vu la proximité entre XMP et l'écriture au format xml.


 (01/10/2018) Base de données
Si vous avez quelques notions de base de données, vous pouvez télécharger et installer DB Browser for SQLite.
Avec ce logiciel, si vous savez ce que vous faites, vous pouvez visualiser (et modifier ?) le contenu du catalogue, c'est à dire le fichier xnview.db
Mes premiers essais montrent qu'on y trouve 13 tables dont
- "Folders" qui contient en clair les noms des dossiers où il y a des images
- "ImagesInfo" avec les dimensions (en pixels), l'orientation exif et le format (jpeg)
- "Tags" la table des catégories et le lien avec la catégorie parent
- "TagsTree" qui relie chaque image aux catégories auxquelles elle est rattachée (intéressant)
- "TagsSet" et "TagsSetTree" , les groupes de catégories (que je n'ai pas encore vérifiés ici)
- "Images" qui relie chaque image (Image ID) à son dossier (FolderID) avec le nom de fichier (Filename), la taille (Size), la date de modif, les étoiles (Rating), Couleurs (Label), et un champ "Meta" au format binaire que je n'ai pas compris. ("les données binaires ne peuvent être affichées ...")
En parcourant ces différentes tables, j'ai pu voir quelques anomalies dans mes dossiers, et donc les corriger dans XnViewMP (supprimer et remettre ces dossiers dans le catalogue)
Les dossiers provoquant ces anomalies contenaient des caractères spéciaux dans leur nom ...
Il est dommage que certains champs qu'un utilisateur considèrerait indispensables n'y figurent pas. (exemple : le champ titre, ou ville, ou légende...)
En attendant des évolutions, vous pouvez utiliser FastPhotoTagger, logiciel gratuit aussi, qui autorise toute les requêtes que vous pouvez souhaiter.


Imprimer cette page
Avec Mozilla pour imprimer, paramètres de mise en page :
Orientation : portrait, Echelle : Adapter à la taille de la page Décocher l'option "Imprimer le fond de page"
Marges gauche et droite Haut et bas : tout à zéro. En-tête et Pied de page : Vide
L'aperçu avant impression fait 73 pages, mais la taille de texte est petite.
(je peux augmenter la taille de police, mais on part alors sur 100 pages, et la pagination est moins bonne : utilisation de xnvpics/impr4.css avec p {font-size: 12pt; width : 600pt;} )
Vous pouvez utiliser aussi une "imprimante pdf" comme Pdf creator.