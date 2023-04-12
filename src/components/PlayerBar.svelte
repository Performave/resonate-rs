<script lang="ts">
    import PlayFilledAlt from 'carbon-icons-svelte/lib/PlayFilledAlt.svelte'
</script>

<div class="absolute w-full bottom-0">
    <div class='progress-bar-wrapper'>
        <div class="progress-bar-container">
            <div class="bar" />
        </div>
    </div>
    <div class="flex">
        <div class="grow" />
        <div class="shrink-0 pt-3 pb-5">
            <button
                class="p-2.5 bg-blue-600 rounded-full transition-transform hover:scale-[1.10] active:scale-[0.90]"
            >
                <PlayFilledAlt class="text-white" />
            </button>
        </div>
        <div class="grow" />
    </div>
</div>

<style>
    .progress-bar-wrapper {
        @apply h-3;
    }

    .progress-bar-wrapper:hover .bar {
        @apply h-3;
    }

    .progress-bar-container {
        @apply bg-gray-300;
    }

    .progress-bar-container > .bar {
        @apply bg-blue-500 w-1/2 h-1 transition-all;
    }
</style>
