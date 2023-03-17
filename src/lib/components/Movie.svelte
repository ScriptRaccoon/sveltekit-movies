<script lang="ts">
	export let movie: movie;
	const date_string = new Date(
		movie.release_date
	).toLocaleDateString();
</script>

<article>
	<div class="content">
		<h2>{movie.title}</h2>
		<p class="date">{date_string}</p>
		<p class="character">{movie.character}</p>
	</div>
	{#if movie.poster_path}
		<img src={movie.poster_path} alt="movie poster" />
	{:else}
		<p class="no-poster">No poster</p>
	{/if}
</article>

<style>
	article {
		background-color: #f4f4f4;
		border-radius: 0.5rem;
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
		height: 100%;
		overflow: hidden;
		padding-top: 1rem;
	}
	.content {
		padding-inline: 1rem;
		padding-bottom: 0.5rem;
	}
	h2 {
		color: maroon;
	}
	img {
		display: block;
		width: 100%;
		transform-origin: top;
		transition: scale 100ms, filter 100ms;
	}
	.date {
		color: #444;
	}

	.character {
		font-style: italic;
		font-weight: bold;
	}

	img:hover {
		scale: 1.05;
		filter: brightness(0.8);
	}
	.no-poster {
		text-align: center;
		font-style: italic;
	}
</style>
