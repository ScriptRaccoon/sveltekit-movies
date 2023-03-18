<script lang="ts">
	import Credit from "$lib/components/Credit.svelte";
	import { tick } from "svelte";
	import type { PageData } from "./$types";

	export let data: PageData;

	const { credits, actor } = data;

	let show_imdb = false;

	async function add_imdb_links() {
		for (const credit of credits) {
			await add_imdb_link(credit);
		}
		show_imdb = true;
	}

	async function add_imdb_link(credit: credit) {
		const res = await fetch("/api/imdb", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ movie_id: credit.id }),
		});
		if (res.ok) {
			const data = await res.json();
			credit.imdb_id = data.imdb_id;
		}
	}
</script>

<svelte:head>
	<title>Movies - Search results</title>
</svelte:head>

<h1>Search results for: {actor.name}</h1>

{#if !show_imdb}
	<button on:click={add_imdb_links}>Add IMDB links</button>
{/if}

<ol>
	{#each credits as credit}
		<li>
			<Credit {credit} {show_imdb} />
		</li>
	{/each}
</ol>

<style>
	ol {
		list-style: none;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		gap: 1rem;
		margin-top: 2rem;
	}
	button {
		text-decoration: underline;
	}
</style>
