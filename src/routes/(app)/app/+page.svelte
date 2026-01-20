<script lang="ts">
	import { marked } from 'marked';
	import { PersistedState } from 'runed';
	const raw_input = new PersistedState('note', '');
	let output = $derived(marked(raw_input.current));
</script>

<section class="container bordered">
	<div class="editor">
		<textarea name="raw_input" bind:value={raw_input.current}></textarea>
		<div class="separator"></div>
		<div class="output">{@html output}</div>
	</div>
</section>

<style>
	.bordered {
		border: 1px solid var(--surface-2);
		border-radius: var(--radius-2);
	}
	.editor {
		display: grid;
		grid-template-columns: 1fr auto 1fr;
		height: 100%;
	}
	.separator {
		height: 100%;
		width: var(--size-1);
		background: var(--gray-10);
	}

	textarea {
		height: 100%;
		resize: none;
		padding: var(--size-3) var(--size-4);
		font-family: var(--font-monospace-code);
		letter-spacing: var(--font-letterspacing-3);
	}
	textarea:focus {
		outline: none;
	}
	.output {
		padding: var(--size-4) var(--size-5);
		font-size: var(--font-size-fluid-1);
		font-family: var(--font-humanist);
		overflow: auto;

		:global {
			hr {
				margin-block: var(--size-fluid-1);
			}
		}
	}
</style>
