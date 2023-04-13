<script lang="ts">
	import NonplayerContent from '@/components/elements/NonplayerContent.svelte';
	import ContentContainer from '@/components/elements/ContentContainer.svelte';
	import PlayerBar from '@/components/PlayerBar.svelte';
</script>

<NonplayerContent class="bg-gray-50">
	<ContentContainer>
		<slot />
	</ContentContainer>
</NonplayerContent>

<PlayerBar />
