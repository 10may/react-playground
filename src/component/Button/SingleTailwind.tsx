import { clsx } from 'clsx';
import { forwardRef } from 'react';

const baseClasses = [
	'flex',
	'cursor-pointer',
	'select-none',
	'items-center',
	'justify-center',
	'gap-1',
	'rounded',
	'text-center',
	'font-body',
	'text-sm',
	'font-bold',
	'not-italic',
	'disabled:cursor-not-allowed',
	'disabled:bg-gray100',
	'disabled:text-gray500',
	'disabled:outline-0',
];

const sizes = {
	small: ['py-2', 'px-4', 'text-sm'],
	regular: ['py-2', 'px-4', 'text-base'],
};

const variants = {
	primary: [
		'bg-primary_blue',
		'text-white',
		'outline-0',
		'hover:bg-white',
		'hover:text-dark_primary',
		'hover:outline',
		'hover:outline-1',
		'hover:outline-dark_primary',
		'active:bg-dark_primary',
		'active:text-white',
	],
	secondary: [
		'bg-white',
		'text-gray900',
		'outline',
		'outline-1',
		'outline-gray300',
		'hover:bg-gray100',
		'active:outline-gray500',
	],
	subtle: [
		'bg-subtle_blue',
		'text-gray900',
		'outline-0',
		'hover:outline',
		'hover:outline-1',
		'hover:outline-primary_blue',
		'active:outline-2',
	],
	ghost: [
		'bg-transparent',
		'text-dark_primary',
		'outline-0',
		'hover:[&>div]:-mb-px',
		'hover:[&>div]:border-b',
		'hover:[&>div]:border-dark_primary',
		'disabled:[&>div]:mb-0',
		'disabled:[&>div]:border-b-0',
		'disabled:[&>div]:border-transparent',
	],
};

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	size: 'regular' | 'small';
	variant: 'primary' | 'secondary' | 'subtle' | 'ghost';
}

export const Button: React.FC<ButtonProps> = forwardRef<
	HTMLButtonElement,
	React.PropsWithChildren<ButtonProps>
>(({ children, size, variant, ...rest }, ref) => {
	return (
		<button
			ref={ref}
			className={clsx(baseClasses, sizes[size], variants[variant])}
			{...rest}
		>
			<div>{children}</div>
		</button>
	);
});

Button.displayName = 'Button';
