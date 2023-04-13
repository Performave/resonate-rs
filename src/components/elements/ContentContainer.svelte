<script lang="ts">
	import type { SvelteComponentTyped } from 'svelte';

	type $$Props = SvelteComponentTyped['div'];

	let _class = '';
	export { _class as class };
</script>

<div class="pt-6 {_class}" {...$$restProps}>
	<slot />
</div>
