<script lang="ts">
	export let movie: movie;
	const date_string = new Date(
		movie.release_date
	).toLocaleDateString();
</script>

<article>
	<h2>{movie.title}</h2>
	<p>{date_string}</p>
	<p>{movie.character}</p>
	{#if movie.poster_path}
		<div>
			<img src={movie.poster_path} alt="movie poster" />
		</div>
	{/if}
</article>
