<script>
	import "./app.css";
	import Nav from "../lib/components/Nav.svelte";
</script>

<Nav />

<main>
	<slot />
</main>

<style>
	main {
		max-width: 52rem;
		margin: 0 auto;
		padding-inline: 1rem;
	}
</style>
