<script lang="ts">
    import type { SvelteComponentTyped } from 'svelte'

    type $$Props = SvelteComponentTyped['div']

    let _class = ''
    export { _class as class }
</script>

<div class="nonplayer-container {_class}" {...$$restProps}>
    <slot />
</div>

<style>
    .nonplayer-container {
        width: 100%;
        height: calc(100% - 4.5rem);
    }
</style>
