<script lang="ts">
    import type { HTMLButtonAttributes } from 'svelte/elements'
    import type {
        ButtonColor,
        ButtonSize,
        ButtonVariant,
    } from '@/lib/elements/button/Button'
    import { base, sizes, variants } from '@/lib/elements/button/Button.classes'

    interface $$Props extends HTMLButtonAttributes {
        variant?: ButtonVariant
        size?: ButtonSize
        color?: ButtonColor
    }

    let _class = ''
    export { _class as class }

    export let variant: ButtonVariant = 'flat'
    export let size: ButtonSize = 'md'
    export let color: ButtonColor = 'accent'
</script>

<button
    class="{base} {sizes[size]} {variants[variant].colors[color]} {_class}"
    {...$$restProps}
>
    <slot />
</button>