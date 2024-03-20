import { cva } from 'class-variance-authority';

export const buttonVariants = cva(
    'ring-offset-background focus-visible:ring-ring inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
    {
        variants: {
            variant: {
                default:
                    'cursor-pointer bg-blue-500 text-xs font-bold text-gray-50 ring-blue-200 transition-all hover:ring-8 focus-visible:ring-4 active:ring-0 disabled:bg-slate-400',
                destructive:
                    'bg-destructive text-destructive-foreground hover:bg-destructive/90',
                outline:
                    'border-input bg-background hover:bg-accent hover:text-accent-foreground border',
                secondary:
                    ' bg-blue-100 font-bold text-gray-950 ring-blue-500 hover:ring-1 active:ring-2',
                ghost: 'hover:bg-accent hover:text-accent-foreground',
                link: 'text-primary underline-offset-4 hover:underline',
            },
            size: {
                sm: 'h-7 rounded-md px-3',
                regular: 'h-8 px-4 py-2',
                lg: 'h-9 rounded-md px-8',
                icon: 'size-10',
            },
        },
        defaultVariants: {
            variant: 'default',
            size: 'regular',
        },
    },
);
