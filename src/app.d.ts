// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
	}

	type credit = {
		title: string;
		character: string;
		release_date: string;
		poster_path: string | null;
		id: number;
	};

	type movie = {
		genres: { name: string }[];
		id: number;
		imdb_id: string | null;
		overview: string;
	};
}

export {};
