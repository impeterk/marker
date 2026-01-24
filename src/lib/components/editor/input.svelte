<script lang="ts">
	import { colorParser } from '$lib/utils';
	import { codeToHtml } from 'shiki';
	import { getContext } from 'svelte';
	let { input = $bindable() } = $props();
	const selectedTheme = getContext<{ current: string }>('theme');
	const html = $derived(
		await codeToHtml(input.current, {
			lang: 'markdown',
			theme: selectedTheme.current
		})
	);
	let coverElement = $state<HTMLDivElement | null>(null);
	let backgroundColor = $derived.by(() => {
		return colorParser(html, 'backgroundColor');
	});
	let row_color = $derived.by(() => colorParser(html, 'color'));
	const lines = $derived.by(() => {
		if (!input.current) return [''];
		return input.current.split('\n');
	});
</script>

<div class="input_container" style:background-color={backgroundColor}>
	<div class="gutter">
		{#each lines as _, i}
			<div class="line-number" style:color={row_color}>{i + 1}</div>
		{/each}
	</div>
	<div class="raw_input" bind:innerText={input.current} contenteditable></div>

	<div class="highlight" bind:this={coverElement}>
		{@html html}
	</div>
</div>

<style>
	.highlight,
	.raw_input,
	.gutter {
		font-family: var(--font-monospace-code);
		letter-spacing: var(--font-letterspacing-3);
		padding-block: var(--size-3);
	}
	.gutter {
		padding-inline: var(--size-1) var(--size-2);
		text-align: right;
		width: fit-content;
		height: 100%;
		opacity: 0.5;
		grid-column: 1;
		grid-row: 1;
		user-select: none;
	}
	.input_container {
		padding-right: var(--size-4);
		position: relative;
		width: 100%;
		max-width: 100%;
		display: grid;
		grid-template-columns: auto 1fr;
		height: 100%;
		overflow: hidden;
		overflow-y: auto;
		:global {
			.shiki {
				height: 100%;
				max-inline-size: unset;
				background-color: transparent !important;
				counter-reset: line;
				font-family: inherit;
				code {
					width: 100%;
					min-width: 0; /* crucial */
					white-space: pre-wrap;
					word-break: break-word;
					overflow-wrap: anywhere;
				}
				span {
					font-style: normal !important;
				}
			}
		}
	}

	.highlight,
	.raw_input {
		grid-column: 2;
		grid-row: 1;
		height: 100%;
		width: 100%;
		min-width: 0; /* crucial */
		white-space: pre-wrap;
		word-break: break-word;
		overflow-wrap: anywhere;
	}
	.highlight {
		pointer-events: none;
		user-select: none;
	}
	.raw_input {
		color: transparent;
		overscroll-behavior: none;
	}
	.raw_input:focus {
		outline: none;
	}
</style>
