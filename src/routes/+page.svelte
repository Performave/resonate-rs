<script lang="ts">
	import PlayerBar from '@/components/PlayerBar.svelte';
	import NonplayerContent from '@/components/elements/NonplayerContent.svelte';
	import Soundtrack from '@/components/elements/Soundtrack.svelte';
</script>

<NonplayerContent class="bg-gray-50 pt-6">
	<h1 class="text-3xl font-bold px-10">Soundtracks</h1>
	<div class="flex flex-col mt-6">
		<Soundtrack name="gaming.mp3" />
		<Soundtrack name="joe.mp3" />
	</div>
</NonplayerContent>
<PlayerBar />
