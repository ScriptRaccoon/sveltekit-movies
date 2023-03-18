<script>
	import "./app.css";
	import Nav from "$lib/components/Nav.svelte";
</script>

<Nav />

<main>
	<slot />
</main>

<style>
	main {
		max-width: 48rem;
		margin: 0 auto;
		padding: 1.5rem 1rem;
	}
</style>
