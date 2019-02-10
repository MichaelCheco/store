import React from 'react';
import styled, { keyframes } from 'styled-components';

const Img = styled.img`
	width: 100%;
	object-fit: cover;
	height: 750px;
	opacity: 1;
	@media (max-width: 500px) {
	}
`;
const easeInRight = keyframes`
        from {
            margin-right: 0px;
            opacity: 0;
    
        }
        to {
            margin-right: -16%;
            opacity: 1;
        }
`;
const H2Right = styled.h2`
	animation: 1.5s ${easeInRight} linear;
	animation-fill-mode: forwards;
	height: 45px;
	font-size: 3.4rem;
	color: black;
	position: absolute;
	top: 3%;
	right: 22%;
	@media (max-width: 500px) {
		display: none;
	}
`;
const Wrapper = styled.div`
	border: 2px solid gray;
	position: absolute;
	background: whitesmoke;
	top: 28%;
	left: 25%;
	width: 55%;
	opacity: 0.8;
	height: 400px;
	transform: skew(-4deg);
	padding: 1%;
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
	@media (max-width: 500px) {
		width: 80%;
		height: 350px;
		top: 45%;
		left: 9%;
		transform: none;
		h1 {
			font-size: 2.5rem;
		}
		p {
			font-size: 1.6rem;
		}
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
