import { forwardRef } from 'react';
import styled, { css } from 'styled-components';
import { compose, layout, LayoutProps, space, SpaceProps } from 'styled-system';

export type ButtonProps = StyledButtonProps &
	Omit<JSX.IntrinsicElements['button'], 'ref' | 'type'>;

export const Button: React.FC<ButtonProps> = forwardRef<
	HTMLButtonElement,
	React.PropsWithChildren<ButtonProps>
>(({ children, size, variant, ...rest }) => {
	return (
		<StyledButton size={size} variant={variant} {...rest}>
			<div>{children}</div>
		</StyledButton>
	);
});

type StyledButtonProps = {
	size: 'regular' | 'small';
	variant: 'primary' | 'secondary' | 'subtle' | 'ghost';
} & SpaceProps &
	LayoutProps;

export const StyledButton = styled.button<StyledButtonProps>`
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
	font-weight: 700;
	font-size: 14px;
	line-height: 16px;
	text-align: center;

	cursor: pointer;
	user-select: none;

	${({ size }) => {
		switch (size) {
			case 'regular':
				return css`
					font-size: 16px;
					padding: 8px 16px;
				`;
			case 'small':
				return css`
					font-size: 14px;
					padding: 6px 12px;
				`;
			default:
				return css`
					font-size: 14px;
					padding: 6px 12px;
				`;
		}
	}};

	${({ variant, theme: { colors } }) => {
		switch (variant) {
			case 'primary':
				return css`
					color: ${colors.white};
					outline: none;
					background-color: ${colors.primary_blue};

					&:hover {
						color: ${colors.dark_primary};
						outline: 1px solid ${colors.dark_primary};
						background-color: ${colors.white};
					}

					&:active {
						color: ${colors.white};
						background-color: ${colors.dark_primary};
					}
				`;
			case 'secondary':
				return css`
					color: ${colors.gray900};
					outline: 1px solid ${colors.gray300};
					background-color: ${colors.white};

					&:hover {
						background-color: ${colors.gray100};
					}

					&:active {
						outline: 1px solid ${colors.gray500};
					}
				`;
			case 'subtle':
				return css`
					color: ${colors.gray900};
					outline: none;
					background-color: ${colors.subtle_blue};

					&:hover {
						outline: 1px solid ${colors.primary_blue};
					}

					&:active {
						outline: 2px solid ${colors.primary_blue};
					}
				`;
			case 'ghost':
				return css`
					color: ${colors.dark_primary};
					outline: none;
					background-color: transparent;

					&:hover {
						& > div {
							border-bottom: 1px solid ${colors.dark_primary};
							margin-bottom: -1px;
						}
					}
				`;
		}
	}};

	&:disabled {
		cursor: not-allowed;
		color: ${({ theme }) => theme.colors.gray500};
		outline: none;
		background-color: ${({ theme }) => theme.colors.gray100};
		& > div {
			border-bottom: 0;
			margin-bottom: 0;
		}
	}

	${compose(space, layout)}
`;
