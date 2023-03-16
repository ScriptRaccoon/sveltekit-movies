<script lang="ts">
	import { page } from "$app/stores";
	import Movie from "$lib/components/Movie.svelte";
	import type { PageData } from "./$types";

	const { name } = $page.params;

	export let data: PageData;

	const { movies } = data;
</script>

<svelte:head>
	<title>Movies - Search results</title>
</svelte:head>

<h1>Search results for: {name}</h1>

<ol>
	{#each movies as movie (movie.id)}
		<li>
			<Movie {movie} />
		</li>
	{/each}
</ol>

<style>
	ol {
		list-style: none;
	}
	li {
		margin-block: 1rem;
	}
</style>
