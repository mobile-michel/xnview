---
title: Maintenance du catalogue
description: 
layout: ../../layouts/MainLayout.astro
---

Ce chapitre va donc concerner uniquement les éléments gérés dans le catalogue: mots-clés, notations par étoiles, labels de couleurs. Comme je l'ai déjà précisé, vous êtes censé avoir vérifié l'écriture effective des informations sous forme de métadonnées iptc et xmp incluses dans les fichiers photos.

Abordons tout de suite le cas où justement les métadonnées sont absentes des photos, avant d'attaquer vraiment le sujet. Par exemple, vous avez oublié des options de métadonnées, ou bien vous aviez utilisé d'autres méthodes avant de lire cette page.

Verifiez d'abord que les options d'exportation iptc ou xmp sont bien cochées dans l'écran `Paramètres, Métadonnées`. Sélectionnez une photo où le catalogue contient bien des informations, mais où des métadonnées sont manquantes: cliquez dans le menu `Afficher, Mise à jour des fichiers avec le catalogue`.

Les informations du catalogue sont maintenant inscrites dans les photos (si vous avez bien mis les options de métadonnées correctes). On peut maintenant passer à la suite: les métadonnées des photos sont correctes, mais on a un souci avec le catalogue.

## Anomalies dans le catalogue

Pour éviter d'alourdir l'écriture, je ne parlerai plus des étoiles et couleurs, le comportement de XnViewMP à ce sujet étant le même que pour les catégories et mots-clés. On va s'intéresser aux situations où le catalogue n'est pas cohérent avec les métadonnées des photos. Autre formulation: il y a des différences entre catégories et mots-clés.

On peut parfois aussi rencontrer des situations où le compte de photos dans le filtre de catégories est erroné, ou bien des photos semblent inaccessibles. Vérifiez d'abord que l'option `Importer les mots-clés` est cochée dans l'écran `Paramètres, Métadonnées`.

Si vous constatez des anomalies peu nombreuses dans le catalogue, alors que les photos concernées ont des métadonnées correctes: sélectionnez les photos, et cliquez le menu `Afficher, Mise à jour du catalogue avec les fichiers`. Le catalogue devrait retrouver un bon fonctionnement. Cette manipulation fonctionne bien, même sur un grand nombre de photos, mais il y a d'autres méthodes plus pratiques...

Si les anomalies concernent quelques dossiers de photos:
- allez dans les paramètres, rubrique `Catalogue` . Cet écran montre un tableau contenant la liste des dossiers gérés dans le catalogue;
- supprimez les dossiers incriminés dans ce tableau (sélectionnez-les, et cliquez le bouton Supprimer);
- ensuite cliquez sur le bouton Ajouter `Import Folder` pour les remettre dans le tableau (parcourez les dossiers pour sélectionner ceux que vous avez supprimés) et cliquez OK.

Cette manipulation provoque la lecture des métadonnées des photos des dossiers (y compris leurs sous dossiers) et la mise à jour du catalogue. Ajoutez de la même façon des dossiers dans lesquels des mots-clés ont été ajoutés par d'autres logiciels, afin de les inclure dans le catalogue de XnViewMP.

## Reconstruire le catalogue

Dernier cas, il y a des anomalies ou des bizarreries à plein d'endroits, ou vous ne savez pas vraiment où sont les difficultés. Peut être avez-vous fait des expérimentations, des tests dans des dossiers de copies, ou avec d'autres logiciels. Ou bien vous avez été dans une des situations "à risque" décrites dans le chapitre 2E. La solution consiste à effacer complètement le catalogue, puis le reconstruire.

Première précaution, sauvegarder ce qui peut l'être. Vous vous souvenez que XnViewMP enregistre le catalogue dans le fichier XnView.db. Fermez XnViewMP, copiez le fichier XnView.db, et rangez-le dans un coin de votre ordinateur.

Si les manips suivantes tournaient mal, vous pourrez ramener le fichier XnView.db à sa place initiale.
Une autre méthode de sauvegarde est dans le menu du panneau de catégories: la fonction `Catégories Fichiers, Exporter`. Cette fonction génère un fichier de sauvegarde du catalogue au format XML, c'est rapide et peu volumineux, autant ne pas s'en priver (pour les cas difficiles, il est même possible de corriger ce fichier XML avec un éditeur de texte avant de le réimporter).

Les difficultés les plus gênantes qui peuvent apparaître dans la reconstruction du catalogue sont liées à la hiérarchie des catégories et des mots-clés. Si vos mots clés XMP portent correctement une hiérarchie, la reconstruction du catalogue donnera les catégories hiérarchisées correspondantes. Je n'ai jamais expérimenté le cas des mots clés IPTC hiérarchisés; à priori la fenêtre "Paramètres, Métadonnées" offre les paramètres qui permettent aussi la reconstruction.

Si les mots clés de vos photos sont sans hiérarchie (flat en Anglais), il est peu probable qu'apparaisse une hiérarchie dans les catégories lors de l'opération. Peut-être peut-on espérer qu'une hiérarchie de catégories existantes "accueillerait" des mots clés aux bons emplacements dans la hiérarchie.

Passées ces précautions et les vérifications qui en découlent, l'opération en elle-même est très simple. Allez dans "Paramètres, Métadonnées" et cochez l'option `Importer les mots clés` (et éventuellement dans le cas IPTC, le caractère séparateur de mots clés hiérarchisés).

Nouveau: si vous avez des photos avec des visages identifiés par d'autres logiciels (Picasa, Windows Photo Gallery, TagThatPhoto), cochez l'option `Importer les champs XMP face`. Puis dans `Paramètres, Catalogue`, cliquez le bouton `Supprimer tout`. Dans le même écran, cliquez sur Ajouter `Import Folder` et spécifiez le (ou les) dossiers contenant toutes les photos.

Il s'ensuit une phase de lecture qui peut prendre du temps, je dirais moins d'une minute pour 1000 photos à intégrer (chez moi 40 minutes pour 65000 photos). A l'issue de cette lecture, le catalogue et l'affichage des catégories (dans le filtre des catégories) sera le reflet de ce que les mots-clés des photos ont apporté. Souvent à ce stade vous trouverez quelques petites anomalies dans le filtre des catégories, liées à des erreurs de mots-clés; ce sera facile à corriger.

Accessoirement, si vous parcourez avec XnViewMP des dossiers d'images qui ne sont pas les vôtres, vous pouvez décocher l'option `Importer les mots-clés` afin d'éviter de récupérer des catégories et des mots-clés qui ne vous sont pas utiles. Maintenant, si vous voulez approfondir les détails de fonctionnement de XnViewMP, vous pouvez attaquer la lecture du "Tutoriel XnViewMP".