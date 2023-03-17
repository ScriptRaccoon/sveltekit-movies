<script lang="ts">
	import { fade } from "svelte/transition";
	export let credit: credit;
	const date_string = new Date(
		credit.release_date
	).toLocaleDateString();

	let expanded = false;
	let movie: movie | null = null;

	async function toggle_expand() {
		if (expanded) {
			expanded = false;
			return;
		}
		if (movie) {
			expanded = true;
			return;
		}

		const res = await fetch("/api/details", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ movie_id: credit.id }),
		});
		if (res.ok) {
			movie = await res.json();
			expanded = true;
		} else {
			window.alert("Something went wrong.");
		}
	}

	$: button_text = expanded ? "Collapse" : "Expand";
</script>

<article>
	<div class="content">
		<h2>{credit.title}</h2>
		<p class="date">{date_string}</p>
		<p class="character">{credit.character}</p>
	</div>
	{#if credit.poster_path}
		<img src={credit.poster_path} alt="movie poster" />
	{:else}
		<p class="no-poster">No poster</p>
	{/if}
	<button class="expand_button" on:click={toggle_expand}>
		{button_text}
	</button>
	{#if expanded && movie}
		<div class="more" transition:fade={{ duration: 150 }}>
			<div class="genres">
				{#each movie.genres as genre}
					<span class="genre">{genre.name}</span>
				{/each}
			</div>
			<div class="overview">
				{movie.overview}
			</div>
			<div>
				<a
					target="_blank"
					href="https://www.imdb.com/title/{movie.imdb_id}"
					>IMDB</a
				>
			</div>
		</div>
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
		padding-top: 1rem;
		position: relative;
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
		transition: filter 100ms;
	}
	.date {
		color: #444;
	}

	.character {
		font-style: italic;
		font-weight: bold;
	}

	img:hover {
		filter: brightness(0.8);
	}
	.no-poster {
		text-align: center;
		font-style: italic;
	}

	.expand_button {
		margin-top: auto;
	}

	.more {
		position: absolute;
		top: 100%;
		z-index: 10;
		background-color: white;
		border: 0.1rem solid #777;
		border-top-color: transparent;
		padding: 0.5rem;
		box-shadow: 0rem 0rem 1rem #0005;
	}

	.genres {
		display: flex;
		flex-wrap: wrap;
		gap: 0.25rem;
		font-size: 0.75rem;
	}

	.genre {
		display: inline-block;
		background-color: #555;
		color: white;
		padding: 0.2rem 0.4rem;
		font-size: 0.75rem;
	}
	.overview {
		font-size: 0.75rem;
		padding-block: 0.5rem;
	}
</style>
