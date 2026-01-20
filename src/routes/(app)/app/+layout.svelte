<script lang="ts">
	const { children } = $props();
</script>

<div class="layout">
	<header class="header rad-shadow">
		<nav class="container">Marker</nav>
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
	footer {
		padding-block: var(--size-4);
		border-top: 0.5px solid var(--surface-2);
		text-align: center;
		font-family: var(--font-monospace-code);
	}
</style>
