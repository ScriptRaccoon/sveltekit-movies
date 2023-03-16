import { get_actor_id, get_movies } from "$lib/server/actor";
import type { PageServerLoad } from "./$types";

import { error } from "@sveltejs/kit";

export const load: PageServerLoad = async (event) => {
	const { name } = event.params;
	console.log({ name });
	const actor_id = await get_actor_id(name);
	if (!actor_id) throw error(400, "No actor found");
	console.log({ actor_id });
	const movies = await get_movies(actor_id);
	if (!movies) throw error(400, "No movies found");
	console.log({ movies });
	return { movies };
};
