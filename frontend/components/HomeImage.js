import React from 'react';
import styled, { keyframes } from 'styled-components';

const Img = styled.img`
	width: 100%;
	object-fit: cover;
	height: 750px;
	opacity: 1;
`;
const easeInRight = keyframes`
        from {
            margin-right: 0px;
            opacity: 0;
    
        }
        to {
            margin-right: -260px;
            opacity: 1;
        }
`;
const H2Right = styled.h2`
	animation: 1.5s ${easeInRight} linear;
	animation-fill-mode: forwards;
	height: 45px;
	font-size: 34px;
	color: black;
	position: absolute;
	top: 19px;
	right: 370px;
	/* font-family: "Thasadith", sans-serif; */
	white-space: nowrap;
`;
const Wrapper = styled.div`
	border: 2px solid gray;
	position: absolute;
	background: whitesmoke;
	top: 240px;
	left: 400px;
	width: 55%;
	opacity: 0.8;
	height: 400px;
	transform: skew(-4deg);
	padding: 15px;
	z-index: 2;
	h1 {
		text-align: center;
		font-size: 5.4rem;
	}
	p {
		font-weight: 600;
		line-height: 2;
		font-size: 2rem;
	}
`;
const Image = () => (
	<>
		<Wrapper>
			<h1>Your Neighborhood Cafe</h1>
			<p>
				Born from the desire to deliver unequaled quality, Checo's Coffee was
				started with one thing and one thing in mind: Presenting nothing but the
				finest ingredients, processes, and technology to our customers. There
				are more cafes around than we care to count, but none do what we do.
			</p>
		</Wrapper>
		<Img src="static/ad.jpg" />
		<H2Right>Checo's Coffee</H2Right>{' '}
	</>
);

export default Image;
