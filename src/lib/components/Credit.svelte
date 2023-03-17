<script lang="ts">
	import { fade } from "svelte/transition";
	export let credit: credit;

	const year = new Date(credit.release_date).getFullYear();
	const image_base_url = "https://image.tmdb.org/t/p/w500";
	$: button_text = show_summary ? "Hide summary" : "Show summary";

	let show_summary = false;

	function toggle_summary() {
		show_summary = !show_summary;
	}
</script>

<article>
	<div class="credit_data">
		<h2 aria-label="title">{credit.title}</h2>
		<p aria-label="year" class="year">{year}</p>
		<p aria-label="character" class="character">
			{credit.character}
		</p>
	</div>
	{#if credit.poster_path}
		<menu aria-hidden="true">
			<button on:click={toggle_summary}>
				{button_text}
			</button>
		</menu>
		<div class="container">
			<div
				class="summary"
				class:show={show_summary}
				transition:fade={{ duration: 200 }}
			>
				{credit.overview}
			</div>
			<img
				src={image_base_url + credit.poster_path}
				alt="movie poster for {credit.title}"
			/>
		</div>
	{:else}
		<div class="summary">
			{credit.overview}
		</div>
	{/if}
</article>

<style lang="scss">
	article {
		background-color: #f4f4f4;
		border-radius: 0.5rem;
		height: 100%;
		display: flex;
		flex-direction: column;
	}

	.credit_data {
		padding: 1rem 1rem 0.5rem 1rem;
	}

	img {
		display: block;
		width: 100%;
	}

	.year {
		color: #666;
	}

	.character {
		font-style: italic;
		font-weight: bold;
	}

	.summary {
		padding: 0.5rem 1rem;
		overflow-y: auto;
	}

	.container {
		position: relative;
		overflow: hidden;
		margin-top: auto;

		.summary {
			position: absolute;
			background-color: #f4f4f4c0;
			backdrop-filter: blur(6px);
			inset: 0;
			opacity: 0;
			pointer-events: none;
			transform: translateY(50px);
			transition: opacity 300ms ease-out,
				transform 300ms ease-out;
			&.show {
				pointer-events: unset;
				opacity: 1;
				transform: translateY(0px);
			}
		}
	}

	menu {
		padding-inline: 0.5rem;
		margin-bottom: 0.5rem;

		button {
			font-size: smaller;
			background-color: transparent;
			color: inherit;
			text-decoration: underline;
		}
	}
</style>
