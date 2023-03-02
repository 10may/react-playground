import { forwardRef } from 'react';
import styled from 'styled-components';

type ToggleProps = {
	id?: string;
	bg?: string;
	width?: number;
	height?: number;
} & Omit<JSX.IntrinsicElements['input'], 'ref' | 'type'>;

export const Toggle = forwardRef<
	HTMLInputElement,
	React.PropsWithChildren<ToggleProps>
>(({ bg = '#0295f6', width = 28, height = 16, ...rest }, forwardedRef) => {
	return (
		<>
			<ToggleButton
				color={bg}
				width={width}
				height={height}
				// tabIndex={0}
				tabIndex={0}
			>
				<input
					ref={forwardedRef}
					color={bg}
					{...rest}
					type='checkbox'
				/>
			</ToggleButton>
		</>
	);
});

Toggle.displayName = 'Toggle';

export default Toggle;

type ToggleButton = {
	width: number;
	height: number;
	color: string;
};

export const ToggleButton = styled.label<ToggleButton>`
	width: ${({ width }) => width}px;
	height: ${({ height }) => height}px;

	display: inline-block;

	outline: 0;
	position: relative;
	border-radius: 45px;

	cursor: pointer;
	/* user-select: none; */

	background: #f1f4f8;
	transition: all 0.4s ease;

	&:focus {
		outline: 1px solid ${({ color }) => color};
	}

	input {
		/* display: none; */
		opacity: 0;
	}

	&:after {
		top: 1.2px;
		left: 1px;
		position: absolute;

		content: '';
		display: block;

		width: ${({ height }) => height - 2.2}px;
		height: ${({ height }) => height - 2.2}px;

		background: #ffffff;
		border-radius: 45px;

		transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275),
			padding 0.3s ease, margin 0.3s ease;

		box-shadow: 0 0 1px 0 rgba(183, 183, 183, 0.5);
	}

	&:has(input:checked) {
		background: ${({ color }) => color};
		&:after {
			/* left: 19.9px; */
			left: ${({ width, height }) => width - height + 1}px;
		}

		&:active {
			box-shadow: none;
		}
	}

	&:has(input:disabled) {
		cursor: auto;
		opacity: 0.7;
		background: #dae0e9;
	}
`;
