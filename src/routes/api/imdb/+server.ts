import { SECRET_API_KEY } from "$env/static/private";
import { PUBLIC_BASE_URL } from "$env/static/public";
import type { RequestHandler } from "./$types";

import { error, json } from "@sveltejs/kit";
export const POST: RequestHandler = async (event) => {
	const { movie_id } = await event.request.json();
	if (!movie_id) {
		throw error(400, "No movie ID provided");
	}
	const url =
		`${PUBLIC_BASE_URL}/movie/${movie_id}/external_ids` +
		`?api_key=${SECRET_API_KEY}`;

	const res = await fetch(url);

	if (res.ok) {
		const data = await res.json();
		const { imdb_id } = data;
		return json({ imdb_id });
	} else {
		throw error(500, "Server error");
	}
};
