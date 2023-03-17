<script lang="ts">
	import Credit from "$lib/components/Credit.svelte";
	import type { PageData } from "./$types";

	export let data: PageData;

	const { credits, actor } = data;
</script>

<svelte:head>
	<title>Movies - Search results</title>
</svelte:head>

<h1>Search results for: {actor.name}</h1>

<ol>
	{#each credits as credit}
		<li>
			<Credit {credit} />
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
