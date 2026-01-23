<script lang="ts">
	import Input from '$lib/components/editor/input.svelte';
	import Output from '$lib/components/editor/output.svelte';
	import { PersistedState } from 'runed';
	const content = new PersistedState('note', '');
</script>

<section class="container bordered">
	<div class="editor">
		<Input input={content} />
		<div class="separator"></div>
		<Output output={content.current} />
	</div>
</section>

<style>
	.toolbar {
		background-color: var(--gray-10);
	}
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
</style>
