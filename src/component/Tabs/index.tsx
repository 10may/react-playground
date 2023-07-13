import {
	Children,
	cloneElement,
	forwardRef,
	isValidElement,
	useState,
} from 'react';
import styled from 'styled-components';

type TabsProps = {
	children: React.ReactNode;

	name?: string;
	defaultActiveTab?: string;
	onClick?: (value: string) => void;
};

const Tabs: React.FC<TabsProps> & { Tab: typeof Tab } = ({
	children,
	name = crypto.randomUUID(),
	onClick,
	defaultActiveTab,
}) => {
	const [activeValue, setActiveValue] = useState<string | null>(
		defaultActiveTab ?? null,
	);
	const handleOnClick = (event: React.MouseEvent<HTMLInputElement>) => {
		setActiveValue(event.currentTarget.value);
		onClick?.(event.currentTarget.value);
	};

	return (
		<Nav role='tablist'>
			{Children.map(children, child => {
				if (isValidElement<TabProps>(child)) {
					return cloneElement(
						child,
						onClick
							? {
									name,
									onClick: handleOnClick,
									checked: activeValue === child.props.value,
							  }
							: { name },
					);
				}
				return child;
			})}
		</Nav>
	);
};

type TabProps = React.InputHTMLAttributes<HTMLInputElement> & {
	children?: React.ReactNode;
};

const Tab = forwardRef<HTMLInputElement, React.PropsWithChildren<TabProps>>(
	({ children, ...rest }, ref) => {
		return (
			<Label role='tab'>
				<input ref={ref} {...rest} type='radio' readOnly hidden />
				{children}
			</Label>
		);
	},
);

Tab.displayName = 'Tab';
Tabs.Tab = Tab;

export { Tabs, Tab };

const Nav = styled.nav`
	height: 100%;
	width: fit-content;
`;

const Label = styled.label`
	height: 100%;

	display: inline-flex;
	justify-content: center;
	align-items: center;
	padding-inline: 32px;

	font-style: normal;
	font-weight: 400;
	font-size: 14px;
	line-height: 16px;
	color: #616161;
	border-bottom: 3px solid white;

	cursor: pointer;

	&:has(input:checked) {
		color: #0295f6;
		font-weight: 700;
		border-bottom: 3px solid #0295f6;
	}

	&:has(input:disabled) {
		cursor: not-allowed;
		background-color: #dae0e9;
	}
`;
