export const base = 'text-sm transition rounded font-medium disabled:cursor-not-allowed'

export const sizes = {
    sm: 'px-3.5 py-2 text-sm',
    md: 'px-4 py-2.5 text-sm',
    lg: 'px-[18px] py-2.5 text-base',
    xl: 'px-5 py-3 text-base',
    '2xl': 'px-7 py-4 text-lg',
}

export const variants = {
    solid: {
        colors: {
            accent: 'text-background bg-accent-700 sm:hover:bg-foreground ring-accent-300 ring-offset-0 ring-0 active:ring-[3px] active:bg-accent-700 sm:active:bg-accent-700 disabled:!bg-accent-400 disabled:!ring-0'
        }
    },
    flat: {
        colors: {
            accent: 'text-accent-600 sm:hover:text-accent-700 sm:hover:bg-accent-200 active:bg-accent-200 sm:active:bg-transparent'
        }
    }
}
