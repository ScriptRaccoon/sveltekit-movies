import { SECRET_API_KEY } from "$env/static/private";
import { PUBLIC_BASE_URL } from "$env/static/public";

export async function get_actor(
	search: string
): Promise<actor | null> {
	const url =
		`${PUBLIC_BASE_URL}/search/person` +
		`?query=${search}&api_key=${SECRET_API_KEY}`;
	const res = await fetch(url);
	if (res.ok) {
		const data = await res.json();
		const { results } = data;
		if (results.length == 0) return null;
		return results[0];
	} else {
		return null;
	}
}

export async function get_credits(
	actor: actor
): Promise<credit[] | null> {
	const url =
		`${PUBLIC_BASE_URL}/person/${actor.id}/movie_credits` +
		`?api_key=${SECRET_API_KEY}`;
	const res = await fetch(url);

	if (res.ok) {
		const data = await res.json();
		const { cast } = data;
		const movies = cast.slice(0, 9) as credit[];
		return movies;
	} else {
		return null;
	}
}
