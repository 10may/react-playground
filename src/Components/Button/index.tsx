import { forwardRef } from 'react';
import styled, { css } from 'styled-components';
import {
	border,
	type BorderProps,
	compose,
	flexbox,
	type FlexboxProps,
	layout,
	type LayoutProps,
	space,
	type SpaceProps,
	typography,
	type TypographyProps,
} from 'styled-system';

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		Partial<StyledButtonProps> {}

type StyledButtonProps = BorderProps &
	FlexboxProps &
	LayoutProps &
	SpaceProps &
	TypographyProps & {
		/**
		 * The size of the button.
		 */
		s: 'regular' | 'small';

		/**
		 * The variant of the button.
		 */
		v: 'danger' | 'ghost' | 'primary' | 'secondary' | 'subtle' | 'text';

		/**
	 * An optional array of paths to images to be used as the button's background.
	 * The first element is the path to the default image,
	 * the second is the path to the on hover image,
	 * and the third is the path to the on disabled image.

	 *
	 * [
	 *
	 *	'path to default image',
	 *
	 *	'path to on hover image',
	 *
	 *  'path to on disabled image'
	 *
	 * ]
	 */
		src?: [(string | null)?, (string | null)?, (string | null)?];

		/**
		 * An optional array of colors to be used as the button's svg fill.
		 * The first element is the default color,
		 * the second is the on hover color,
		 * and the third is the on disabled color.
		 *
		 * [
		 *
		 * 'default color',
		 *
		 * 'on hover color',
		 *
		 * 'on disabled color'
		 *
		 * ]
		 *
		 */
		svgFill?: [(string | null)?, (string | null)?, (string | null)?];
	};

export const Button = forwardRef<
	HTMLButtonElement,
	React.PropsWithChildren<ButtonProps>
>(
	(
		{
			children,
			s = 'regular',
			v = 'primary',
			src,
			type = 'button',
			...rest
		},
		elementRef,
	) => {
		return (
			<StyledButton
				ref={elementRef}
				s={s}
				v={v}
				src={src}
				type={type}
				{...rest}
			>
				{!!src?.[0]?.length && <img />}
				{children}
			</StyledButton>
		);
	},
);

Button.displayName = 'Button';

const sizes = {
	small: css`
		font-size: 12px;
		padding: 6px 12px;
		height: 28px;
	`,
	regular: css`
		font-size: 12px;
		padding: 8px 16px;
		height: 30px;
	`,
} as const;

const variants = {
	primary: css`
		color: ${props => props.theme.colors.white};
		outline: none;
		background-color: ${props => props.theme.colors.primary_blue};

		&:hover {
			background-color: ${props => props.theme.colors.light_primary};
		}

		&:active {
			background-color: ${props => props.theme.colors.dark_primary};
		}

		&:disabled {
			cursor: not-allowed;
			color: ${({ theme }) => theme.colors.gray500};
			outline: none;
			background-color: ${({ theme }) => theme.colors.gray100};
		}
	`,
	secondary: css`
		color: ${props => props.theme.colors.gray900};
		outline: 1px solid ${props => props.theme.colors.gray300};
		background-color: ${props => props.theme.colors.white};

		&:hover {
			background-color: ${props => props.theme.colors.gray100};
		}

		&:active {
			background-color: ${props => props.theme.colors.white};
			outline: 1px solid ${props => props.theme.colors.gray500};
		}

		&:disabled {
			cursor: not-allowed;
			color: ${({ theme }) => theme.colors.gray500};
			outline: none;
			background-color: ${({ theme }) => theme.colors.gray100};
		}
	`,
	subtle: css`
		color: ${props => props.theme.colors.gray900};
		outline: none;
		background-color: ${props => props.theme.colors.subtle_blue};

		&:hover {
			outline: 1px solid ${props => props.theme.colors.primary_blue};
		}

		&:active {
			outline: 2px solid ${props => props.theme.colors.primary_blue};
		}

		&:disabled {
			cursor: not-allowed;
			color: ${({ theme }) => theme.colors.gray500};
			outline: none;
			background-color: ${({ theme }) => theme.colors.gray100};
		}
	`,

	ghost: css`
		color: ${props => props.theme.colors.dark_primary};
		outline: none;
		background-color: transparent;

		&:hover {
			background-color: ${props => props.theme.colors.gray100};
		}

		&:active {
			outline: 1px solid ${props => props.theme.colors.dark_primary};
		}

		&:disabled {
			cursor: not-allowed;
			color: ${({ theme }) => theme.colors.gray500};
			outline: none;
			background-color: ${({ theme }) => theme.colors.gray100};
		}
	`,

	text: css`
		color: ${props => props.theme.colors.dark_primary};
		outline: none;
		background-color: transparent;
		padding: 0;

		&:hover {
			text-decoration: underline;
		}

		&:active {
			outline: 1px solid ${props => props.theme.colors.dark_primary};
		}

		&:disabled {
			cursor: not-allowed;
			color: ${({ theme }) => theme.colors.gray500};
			outline: none;
			/* background-color: ${({ theme }) => theme.colors.gray100}; */
		}
	`,

	danger: css`
		color: ${props => props.theme.colors.secondary_red};
		outline: none;
		background-color: transparent;
		padding: 0;

		&:hover {
			text-decoration: none;
		}

		&:active {
			outline: 1px solid ${props => props.theme.colors.secondary_red};
		}

		&:disabled {
			cursor: not-allowed;
			color: ${({ theme }) => theme.colors.gray500};
			outline: none;
			/* background-color: ${({ theme }) => theme.colors.gray100}; */
		}
	`,
} as const;

export const StyledButton = styled.button<StyledButtonProps>`
	/* all: unset; */
	outline: none;
	border: none;

	/* layout */
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	gap: 4px;

	border-radius: 5px;

	/* typography */
	font-family: 'Lato';
	font-style: normal;
	font-weight: 600;
	font-size: 12px;
	line-height: 16px;
	text-align: center;
	letter-spacing: 0.1px;
	cursor: pointer;
	user-select: none;

	${({ s }) => sizes[s]};
	${({ v }) => variants[v]};

	${({ src }) => {
		return (
			src &&
			css`
				img {
					width: 16px;
					height: 16px;
					display: block;
					vertical-align: middle;
					content: url(${src[0]});
				}

				&:hover img {
					content: url(${src[1] ?? src[0]});
				}

				&:disabled img {
					content: url(${src[2] ?? src[0]});
				}
			`
		);
	}};

	${({ svgFill }) => {
		return (
			svgFill &&
			css`
				svg {
					fill: ${svgFill[0] ?? ''};
				}

				&:hover svg {
					fill: ${svgFill[1] ?? svgFill[0]};
				}

				&:disabled svg {
					fill: ${svgFill[2] ?? svgFill[0]};
				}
			`
		);
	}}

	${compose(space, layout, typography, flexbox, border)}
`;
