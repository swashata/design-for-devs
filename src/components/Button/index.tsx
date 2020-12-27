import React, { ReactNode } from 'react';
import styled from 'styled-components';

const StyledButton = styled.button``;

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
