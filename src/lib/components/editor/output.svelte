<script lang="ts">
	import { marked } from 'marked';

	let { output: content } = $props();

	if (typeof window !== 'undefined') {
		// stash the value...
		// svelte-ignore state_referenced_locally
		const initial = content;
		// unset it...
		content = '';

		$effect(() => {
			// ...and reset after we've mounted
			content = initial;
		});
	}
</script>

<!-- svelte-ignore hydration_html_changed -->
<div class="output">{@html marked(content)}</div>

<style>
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
