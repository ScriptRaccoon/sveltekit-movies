<script lang="ts">
	export let movie: movie;
</script>

<article>
	<h2><a href={movie.url} target="_blank">{movie.name}</a></h2>
	<p>{movie.year}</p>
	<p>{movie.description}</p>
</article>
