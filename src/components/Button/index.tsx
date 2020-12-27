import React, { ReactNode } from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
	background-color: ${props => props.theme.primaryColor};
	border: 0 none;
	padding: ${props => `${props.theme.gutter / 2}px ${props.theme.gutter}px`};
	text-transform: uppercase;
	color: ${props => props.theme.primaryBgText};
	box-shadow: ${props => props.theme.boxShadowBase};
	cursor: pointer;
	transition: box-shadow ${props => props.theme.transitionControl},
		background-color ${props => props.theme.transitionControl};
	will-change: background-color, box-shadow;

	&:hover {
		background-color: ${props => props.theme.primaryLightColor};
		box-shadow: ${props => props.theme.boxShadowHover};
	}

	&:active,
	&:focus {
		transition: box-shadow 0ms,
			background-color ${props => props.theme.transitionControl};
	}

	&:active {
		background-color: ${props => props.theme.primaryDarkColor};
		outline: none;
		box-shadow: ${props => props.theme.boxShadowFocus};
	}
	&:focus {
		outline: none;
		box-shadow: ${props => props.theme.boxShadowFocus};
	}
`;

export type ButtonProps = {
	type: 'primary' | 'secondary';
	children: ReactNode;
	onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};
export default function Button(props: ButtonProps) {
	const { children, onClick } = props;
	return (
		<StyledButton
			onClick={e => {
				e.preventDefault();
				onClick(e);
			}}
		>
			{children}
		</StyledButton>
	);
}
