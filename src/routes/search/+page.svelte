<script lang="ts">
	import { goto } from "$app/navigation";

	let name = "";

	function handle_submit() {
		goto(`/search/${name}`);
	}
</script>

<svelte:head>
	<title>Movies - Search</title>
</svelte:head>

<h1>Search</h1>

<form on:submit|preventDefault={handle_submit}>
	<p>
		<label
			>Actor name
			<input type="text" bind:value={name} />
		</label>
	</p>
	<p>
		<button>Search</button>
	</p>
</form>

<style>
	p {
		margin-bottom: 0.5rem;
	}
</style>
