import { forwardRef } from 'react';
import styled, { css } from 'styled-components';
import { compose, layout, LayoutProps, space, SpaceProps } from 'styled-system';

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		Partial<StyledButtonProps> {}

type StyledButtonProps = {
	/**
	 * The size of the button.
	 */
	s: 'regular' | 'small';

	/**
	 * The variant of the button.
	 */
	v: 'primary' | 'secondary' | 'subtle' | 'ghost';

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
	src?: [string, string?, string?];
} & SpaceProps &
	LayoutProps;

export const Button: React.FC<ButtonProps> = forwardRef<
	HTMLButtonElement,
	React.PropsWithChildren<ButtonProps>
>(({ children, s = 'regular', v = 'primary', src, ...rest }, ref) => {
	return (
		<StyledButton ref={ref} s={s} v={v} src={src} {...rest}>
			{src && <img />}
			{children}
		</StyledButton>
	);
});

Button.displayName = 'Button';

const sizes = {
	small: css`
		font-size: 14px;
		padding: 6px 12px;
	`,
	regular: css`
		font-size: 16px;
		padding: 8px 16px;
	`,
} as const;

const variants = {
	primary: css`
		color: ${props => props.theme.colors.white};
		outline: none;
		background-color: ${props => props.theme.colors.primary_blue};

		&:hover {
			color: ${props => props.theme.colors.dark_primary};
			outline: 1px solid ${props => props.theme.colors.dark_primary};
			background-color: ${props => props.theme.colors.white};
		}

		&:active {
			color: ${props => props.theme.colors.white};
			background-color: ${props => props.theme.colors.dark_primary};
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
			outline: 1px solid ${props => props.theme.colors.gray500};
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
					content: url(${src[1] || src[0]});
				}

				&:disabled img {
					content: url(${src[2] || src[0]});
				}
			`
		);
	}};

	&:disabled {
		cursor: not-allowed;
		color: ${({ theme }) => theme.colors.gray500};
		outline: none;
		background-color: ${({ theme }) => theme.colors.gray100};
	}

	${compose(space, layout)}
`;
