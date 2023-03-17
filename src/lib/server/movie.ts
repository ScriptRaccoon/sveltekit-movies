import { SECRET_API_KEY } from "$env/static/private";
import { PUBLIC_BASE_URL } from "$env/static/public";

export async function get_movie_details(
	movie_id: string
): Promise<null | movie> {
	const url =
		`${PUBLIC_BASE_URL}/movie/${movie_id}` +
		`?api_key=${SECRET_API_KEY}`;
	const res = await fetch(url);
	if (res.ok) {
		const data = await res.json();
		return data as movie;
	} else {
		return null;
	}
}
