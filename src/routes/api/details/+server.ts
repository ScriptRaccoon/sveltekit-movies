import { get_movie_details } from "$lib/server/movie";
import { error, json, type RequestHandler } from "@sveltejs/kit";

export const POST: RequestHandler = async (event) => {
	const data = await event.request.json();
	const movie_id = data.movie_id as string;
	if (!movie_id) {
		throw error(400, "No movie provided");
	}
	const movie = await get_movie_details(movie_id);
	if (!movie) {
		throw error(500, "Something went wrong");
	}
	return json(movie);
};
