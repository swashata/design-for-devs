import React, { ReactNode } from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
	border: 1px solid ${props => props.theme.borderColorBase};
	max-width: 400px;
	box-shadow: ${props => props.theme.boxShadowContent};

	.card__heading {
		margin: 0;
		padding: ${props =>
			`${props.theme.gutter * 0.75}px ${props.theme.gutter}px`};
		font-size: ${props => `${props.theme.fz.base}px`};
		color: ${props => props.theme.headingColor};
		font-weight: bold;
	}

	.card__image {
		height: 100px;
		overflow: hidden;
	}

	.card__img {
		object-fit: cover;
		display: block;
		width: 100%;
		height: 100px;
	}

	.card__content {
		font-size: ${props => `${props.theme.fz.base}px`};
		padding: ${props => `${props.theme.gutter}px ${props.theme.gutter}px`};
	}
`;

export default function Card(props: {
	heading: ReactNode;
	image: string;
	children: ReactNode;
}) {
	return (
		<CardContainer className="card">
			<h2 className="card__heading">{props.heading}</h2>
			<div className="card__image">
				<img className="card__img" src={props.image} alt="some stuff here" />
			</div>
			<div className="card__content">{props.children}</div>
		</CardContainer>
	);
}
