<script lang="ts">
	import OverflowMenuVertical from 'carbon-icons-svelte/lib/OverflowMenuVertical.svelte';
	import { Kbd } from '@svelteuidev/core';
	import { Button, Modal, TextInput } from 'carbon-components-svelte';

	export let name: string;
	let open = false;
</script>

<div class="hover:bg-gray-300 active:bg-gray-200 transition">
	<div class="px-10 w-full">
		<div class="w-full border-t border-solid border-gray-200" />
	</div>
	<div class="flex items-center">
		<button class="text-left text-sm grow pl-10 py-3">{name}</button>
		<div class="-mt-1">
			<Kbd>⌘</Kbd>
		</div>
		<div class="pr-10">
			<button on:click={() => (open = true)} class="p-2.5 grid place-items-center">
				<OverflowMenuVertical />
			</button>
		</div>
	</div>
</div>

<Modal
	bind:open
	modalHeading={name}
	primaryButtonText="Save"
	selectorPrimaryFocus="#db-name"
	on:click:button--secondary={() => (open = false)}
	on:open
	on:close
	on:submit
>
	<br />
	<TextInput id="db-name" labelText="Database name" placeholder="Enter database name..." />
</Modal>
