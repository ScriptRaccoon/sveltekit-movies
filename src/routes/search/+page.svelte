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
	<label for="name_input"> Actor name </label>

	<input type="text" id="name_input" bind:value={name} required />
	<p>
		<button class="button">Search</button>
	</p>
</form>

<style>
	label {
		display: block;
		color: #666;
	}
	p {
		margin-block: 0.5rem;
	}
</style>
