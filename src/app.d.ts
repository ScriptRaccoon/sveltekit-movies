// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
	}

	type movie = {
		id: number;
		name: string;
		year: number;
		url: string;
		description: string;
	};
}

export {};
