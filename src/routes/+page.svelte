<script lang="ts">
	import { goto } from "$app/navigation";

	let name = "";

	function handle_submit() {
		goto(`/search/${name}`);
	}
</script>

<svelte:head>
	<title>Movies</title>
</svelte:head>

<h1>Movies</h1>

<p>Find movies of your favorite actor</p>

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
	form {
		margin-block: 1rem;
	}
	form p {
		margin-bottom: 0.5rem;
	}
</style>
