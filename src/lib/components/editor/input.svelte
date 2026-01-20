<script lang="ts">
	let { input = $bindable() } = $props();
</script>

<textarea name="raw_input" bind:value={input.current}></textarea>

<style>
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
</style>
