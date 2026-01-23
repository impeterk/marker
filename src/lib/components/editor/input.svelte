<script lang="ts">
	import { codeToHtml } from 'shiki';
	import { getContext } from 'svelte';
	let { input = $bindable() } = $props();
	const selectedTheme = getContext('theme');
	const html = $derived(
		await codeToHtml(input.current, {
			lang: 'markdown',
			theme: selectedTheme.current
		})
	);
	let coverElement = $state<HTMLDivElement | null>(null);
	let backgroundColor = $derived.by(() => {
		const parser = new DOMParser();
		const document = parser.parseFromString(html, 'text/html');
		return document.querySelector('.shiki')?.style.backgroundColor;
	});
</script>

<div class="input_container">
	<textarea
		name="raw_input"
		class="raw_input"
		style:background-color={backgroundColor}
		bind:value={input.current}
	></textarea>
	<div class="highlight padding" bind:this={coverElement}>
		{@html html}
	</div>
</div>

<style>
	.highlight,
	.raw_input {
		font-family: var(--font-monospace-code);
		letter-spacing: var(--font-letterspacing-3);
		padding: var(--size-3) var(--size-4);
	}
	.input_container {
		position: relative;
		width: 100%;
		:global {
			.highlight {
				position: absolute;
				height: 100%;
				width: 100%;
				top: 0;
				left: 0;
				pointer-events: none;
				overflow: hidden;
				pre {
					height: 100%;
					overflow: auto;
					max-inline-size: unset;
					background-color: transparent !important;
				}
			}
		}
	}
	textarea {
		height: 100%;
		resize: none;
		width: 100%;
		color: transparent;
	}
	textarea:focus {
		outline: none;
	}
</style>
