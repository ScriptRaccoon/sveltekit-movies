import type { PageServerLoad } from "./$types";
import { json } from "@sveltejs/kit";

const mock_movies: movie[] = [
	{
		id: 1,
		name: "Titanic",
		year: 1997,
		url: "https://someurl.com",
		description: "a movie about a ship",
	},
	{
		id: 2,
		name: "Forest Gump",
		year: 1994,
		url: "https://someotherurl.com",
		description: "a movie about forest, forest gump",
	},
];

export const load: PageServerLoad = async (event) => {
	// const { name } = event.params;
	return { movies: mock_movies };
};
