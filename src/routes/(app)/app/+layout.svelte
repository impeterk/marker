<script lang="ts">
	import { PersistedState } from 'runed';
	import { setContext } from 'svelte';

	const { children } = $props();
	const themes = [
		'ayu-dark',
		'tokyo-night',
		'catppuccin-mocha',
		'github-dark',
		'night-owl',
		'nord'
	];
	const theme = new PersistedState('theme', 'tokyo-night');
	setContext('theme', theme);
</script>

<div class="layout">
	<header class="header rad-shadow">
		<nav class="container">
			<select bind:value={theme.current}>
				{#each themes as theme}
					<option value={theme}>
						{theme}
					</option>
				{/each}
			</select>
			<h4>Marker</h4>
			<div class="end"></div>
		</nav>
	</header>
	{@render children()}
	<footer class="container">
		<span>created by svelte for funzies</span>
	</footer>
</div>

<style>
	.layout {
		display: grid;
		grid-template-rows: auto 1fr auto;
		row-gap: var(--size-7);
		height: 100%;
	}
	.header {
		background-color: var(--gray-9);
		padding-block: var(--size-4);
	}
	nav {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		align-items: center;
		/* theme selector */

		select {
			width: var(--size-content-1);
		}
		h4 {
			margin-inline: auto;
		}
	}
	footer {
		padding-block: var(--size-4);
		border-top: 0.5px solid var(--surface-2);
		text-align: center;
		font-family: var(--font-monospace-code);
	}
</style>
