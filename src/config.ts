export const SITE = {
	title: 'XnView MP',
	description: 'Your website description.',
	defaultLanguage: 'fr_CH',
};

export const OPEN_GRAPH = {
	image: {
		src: 'https://github.com/withastro/astro/blob/main/assets/social/banner.jpg?raw=true',
		alt:
			'astro logo on a starry expanse of space,' +
			' with a purple saturn-like planet floating in the right foreground',
	},
	twitter: 'astrodotbuild',
};

// This is the type of the frontmatter you put in the docs markdown files.
export type Frontmatter = {
	title: string;
	description: string;
	layout: string;
	image?: { src: string; alt: string };
	dir?: 'ltr' | 'rtl';
	ogLocale?: string;
	lang?: string;
};

export const KNOWN_LANGUAGES = {
	English: 'en',
} as const;
export const KNOWN_LANGUAGE_CODES = Object.values(KNOWN_LANGUAGES);

export const GITHUB_EDIT_URL = `https://github.com/withastro/astro/tree/main/examples/docs`;

export const COMMUNITY_INVITE_URL = `https://astro.build/chat`;

// See "Algolia" section of the README for more information.
export const ALGOLIA = {
	indexName: 'XXXXXXXXXX',
	appId: 'XXXXXXXXXX',
	apiKey: 'XXXXXXXXXX',
};

export type Sidebar = Record<
	typeof KNOWN_LANGUAGE_CODES[number],
	Record<string, { text: string; link: string }[]>
>;
export const SIDEBAR: Sidebar = {
	en: {
		'Catalogage': [
			{ text: 'Informations générales', link: 'catalogage/infos' },
			{ text: 'Catégories et le catalogue', link: 'catalogage/categorie' },
			{ text: 'Autres métadonnées', link: 'catalogage/autre' },
			{ text: 'Maintenance du catalogue', link: 'catalogage/maintenance' },
		],
		'Tutoriel': [
			{ text: 'Introduction', link: 'tutoriel/' },
			{ text: 'Avant-propos et installation', link: 'tutoriel/avant' },
			{ text: "Configuration de l'affichage", link: 'tutoriel/configuration' },
			{ text: 'Nettoyage des catégories', link: 'tutoriel/nettoyage' },
			{ text: 'Éditer les métadonnées', link: 'tutoriel/editer' },
			{ text: 'Paramétrage des options', link: 'tutoriel/parametrage' },
			{ text: 'Les catégories', link: 'tutoriel/categorie' },
			{ text: 'Base de données', link: 'tutoriel/base' },
			{ text: 'Fichiers sidecar', link: 'tutoriel/sidecar' },
			{ text: 'Résumé', link: 'tutoriel/resume' },
			{ text: 'Étoiles et couleurs', link: 'tutoriel/couleur' },
			{ text: 'Sauvegarde', link: 'tutoriel/sauvegarde' },
		],
		'Autres actions': [
			{ text: 'Transférer les métadonnées', link: 'autre/transferer/' },
			{ text: 'Liste des fichiers', link: 'autre/liste' },
			{ text: 'Tris', link: 'autre/tri' },
			{ text: 'Filtrage', link: 'autre/filtrage' },
			{ text: 'GPS', link: 'autre/gps' },
			{ text: 'Renommer par lot', link: 'autre/renommer' },
			{ text: 'Traitement par lot', link: 'autre/traitement' },
			{ text: 'Importer et trier', link: 'autre/importer' },
			{ text: 'Dates EXIF', link: 'autre/date' },
		],
	},
};
