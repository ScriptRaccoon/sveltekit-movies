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
	{#each movies as movie}
		<li>
			<Movie {movie} />
		</li>
	{/each}
</ol>

<style>
	ol {
		list-style: none;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		gap: 1rem;
	}
</style>
