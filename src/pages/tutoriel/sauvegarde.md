---
title: 10 - Sauvegardes et changement de version
description: Lorem ipsum dolor sit amet - 3
layout: ../../layouts/MainLayout.astro
---

## Sauvegardes

Je regroupe ici diverses informations qui ont été abordées au fil de l'eau dans tout ce qui précède.

### Quels sont les fichiers à sauvegarder

Lors de l'installation, je suggère de télécharger XnViewMP en version portable et de le dézipper dans un dossier autre que les "program files" de Windows. Le but est de pouvoir lire et écrire des fichiers ou des réglages dans un dossier qui n'est pas verrouillé par Windows.

Paramétrez aussi XnViewMP pour qu'il enregistre tous ses réglages au même endroit, ce qui permet de regrouper tous les fichiers de données ou réglages à sauvegarder. A mon avis, le meilleur emplacement est le dossier Programme, c'est celui ou XnViewMP est installé, (à la rigueur, vous pouvez aussi utiliser "Personnalisé").

Si vous n'avez "pas fait les bons choix" au moment de l'installation, vous pouvez modifier ces emplacements. Pour cela, passez dans le menu Outils, Paramètres, Rubrique Integration, onglet Chemins.
Le Fichier XnView.ini peut donc être placé dans le dossier Programme (ou "Utilisateur", mais je déconseille, et le choix "Personnalisé" n'est pas proposé). Concernant ce fichier XnView.ini, observez qu'on peut en "appeler" un autre avec un paramètre de commande. L'info est dans la fenêtre "A propos", onglet "Ligne de commande".

L'autre possibilité pour XnView.ini consiste à stocker les réglages dans la base de registre de Windows, à mon avis c'est encore pire. Pour les autres fichiers, dans chaque menu déroulant sélectionnez l'emplacement "Programme (Xnview)" ou "Personnalisé".

Les fichiers à sauvegarder seront donc dans le dossier d'installation de xnviewmp, ou dans un dossier personnalisé que vous aurez choisi. Sinon, par défaut XnviewMp enregistre la plupart de ses fichiers de paramètres dans le dossier C:\Users\(nom d'utilisateur)\AppData\Roaming\XnViewMP.

Les fichiers concernés sont: default.bar, default.keys, iptc.ini, style_sheet.qss, sylesheet_win.qss, xnview.ini, Thumb.db et XnView.db. Je suppose que autocorrect.txt et bookmark.ini font aussi partie du lot. Il y a également les personnalisations de barres d'outils, mais je ne sais plus comment ils sont sauvegardés et gérés (perso_explo.bar et perso_image.bar chez moi).

### Les métadonnées

Si vous avez bien suivi, les métadonnées doivent être inscrites dans les photos jpg (ou à côté dans le cas des photos raw). Donc c'est en sauvegardant des copies de vos photos que les métadonnées sont sauvegardées. Je n'aborde pas ce sujet dans cette page, qui est une documentation de XnViewMP; mais notez qu'il est très important de conserver deux exemplaires de vos photos, sur deux supports physiques séparés, dont l'un n'est pas accessible aux virus et autres catastrophes.

### Le fichier xnview.db, et le cache des vignettes thumbs.db

Le fichier xnview.db contient le catalogue, c'est la base de données de XnViewMP. On peut le copier pour sauvegarde après chaque séance d'indexation de photos. Le fichier thumbs.db me parait moins important, il se reconstruit tout seul pendant l'utilisation de XnView.

Pour les utilisateurs ayant de gros volumes de photos, il peut être intéressant de s'en occuper aussi (le sauvegarder). De même si vous construisez tout l'environnement et les données dans un ordinateur, et que vous "distribuez" ensuite les fichiers dans plusieurs postes utilisateurs, il peut être pertinent d'inclure thumbs.db.

### Les autres fichiers contenant réglages et paramètres

Tous les fichiers dont je viens de parler ci-dessus sont donc à sauvegarder, ils contiennent données et réglages, notamment:
- Les dispositions dans l'écran principal, les favoris;
- les modèles, les aides et historiques de saisie;
- Les réglages généraux de XnViewMP (Outils, Paramètres);
- Les barres d'outils personnalisées.

### Exporter le fichier des catégories

Il s'agit d'exporter un fichier texte qui représente la liste des noms de catégories, c'est à dire votre dictionnaire de mots-clés. Vous pouvez donc considérer ce fichier comme une sauvegarde de votre dictionnaire, que vous pourrez réimporter dans Xnviewmp (voire aussi dans d'autres logiciels).

### "Catégories fichiers", "Exporter"

Derrière ce titre maladroit se cache une fonction très efficace: le fichier exporté, qui est formaté en xml, est une façon de sauvegarder le lien entre les photos et les catégories (et étoiles et labels de couleur). Quand ce lien est rompu (après une erreur ou un plantage, une réinstallation, un changement de chemin des photos, une manip sur les catégories) le filtre des catégories ne fonctionne plus.

L'importation de ce fichier permet souvent de redémarrer en quelques instants la base de données de xnview si vous l'avez endommagée avec une fausse manip. C'est un fichier à exporter et à archiver régulièrement quand vous modifiez vos métadonnées ou catégories (voir ce paragraphe).

## Les changements de versions de Xnviewmp en version portable

Commencez par faire sauvegardes et exportations comme indiqué ci-dessus, puis:
1. Téléchargez une nouvelle version au format zip
2. Renommez le dossier où était installé le précédent xnviewmp (par exemple en xnviewmp.old)
3. Dézippez la nouvelle version dans un nouveau dossier. Vous pouvez conserver le même nom de dossier qu'avant, par exemple xnviewmp, mais si vous utilisez des anciens raccourcis vers xnviemp, vérifiez que windows ne les a pas mis à jour (vers l'ancienne version par exemple!).
4. En général, au premier démarrage, XnViewMP vous demande de préciser les emplacements des fichers de paramètres (INI, catalogue, vignettes) mais si vous avez utilisé dans le passé les valeurs par défaut, il va les réutiliser. C'est pratique, mais personnellement je préfère éviter, et régler ça moi-même (les valeurs par défaut s'inscrivent dans le dossier utilisateur C:\Users\--utilisateur--\AppData\Roaming\XnViewMP , et c'est là que j'ai effacé les données). Donc, commme indiqué dans les premiers paragraphes de ce chapitre, passez dans le menu Outils, Paramètres, Rubrique Intégration, onglet Chemins, et remettez vos réglages (programmes (xnview) ou personnalisé).
5. Copiez les anciens default.bar, default.keys, iptc.ini, style_sheet.qss, sylesheet_win.qss, xnview.ini, Thumb.db dans le nouveau dossier, mais pas encore xnview.db (en faisant un tri par dates, voyez s'il y a d'autres fichiers récents qui doivent être copiés aussi.
6. Redémarrez XnviewMP, supprimez les catégories par défaut, et importez vos noms de catégories (export du paragraphe 5 des sauvegardes un peu plus haut). Cette première manip prépare XnviewMP de manière propre pour les trois cas suivants.

Vous pouvez décider à ce stade:
- soit de reconstruire la base de données;
- soit de récupérer l'anciennne: recopiez simplement le précédent fichier xnview.db, et mettez-le au même endroit que les autres fichiers copiés;
- soit de réimporter le fichier XMP des catégories que vous venez d'exporter (comme indiqué dans le paragraphe 6 ci-dessus).

Cette importation est beaucoup plus rapide que de reconstruire le catalogue à partir des photos, mais ça ne suffit pas à le reconstruire entièrement, car les étoiles, marques et labels de couleurs ne sont pas inclus dans cette opération. J'espère n'avoir rien oublié. En cas de gros pépin, le xnviewmp qui est resté dans l'ancien dossier xnviewmp.old est toujours fonctionnel.
