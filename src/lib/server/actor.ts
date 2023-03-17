import { SECRET_API_KEY } from "$env/static/private";
import { PUBLIC_BASE_URL } from "$env/static/public";

export async function get_actor_id(
	name: string
): Promise<string | null> {
	const url =
		`${PUBLIC_BASE_URL}/search/person` +
		`?query=${name}&api_key=${SECRET_API_KEY}`;
	const res = await fetch(url);
	if (res.ok) {
		const data = await res.json();
		const { results } = data;
		if (results.length == 0) return null;
		const { id } = results[0];
		return id as string;
	} else {
		return null;
	}
}

export async function get_movies(
	actor_id: string
): Promise<movie[] | null> {
	const url =
		`${PUBLIC_BASE_URL}/person/${actor_id}/movie_credits` +
		`?api_key=${SECRET_API_KEY}`;
	const res = await fetch(url);

	if (res.ok) {
		const data = await res.json();
		const { cast } = data;
		const movies = cast.slice(0, 9) as movie[];
		for (const m of movies) {
			if (m.poster_path)
				m.poster_path =
					`https://image.tmdb.org/t/p/w200` + m.poster_path;
		}
		return movies;
	} else {
		return null;
	}
}
