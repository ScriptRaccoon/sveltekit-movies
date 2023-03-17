import { get_actor_id, get_credits } from "$lib/server/actor";
import type { PageServerLoad } from "./$types";

import { error } from "@sveltejs/kit";

export const load: PageServerLoad = async (event) => {
	const { name } = event.params;
	const actor_id = await get_actor_id(name);
	if (!actor_id) throw error(400, "No actor found");
	const credits = await get_credits(actor_id);
	if (!credits) throw error(400, "No movies found");
	return { credits };
};
