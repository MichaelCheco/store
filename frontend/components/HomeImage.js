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

const Wrapper = styled.div`
	border: 2px solid gray;
	position: absolute;
	background: whitesmoke;
	top: 28%;
	left: 25%;
	width: 55%;
	opacity: 0.8;
	height: auto;
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
	@media (max-width: 1200px) {
		h1 {
			font-size: 4.3rem;
		}
	}
	@media (max-width: 1100px) {
		h1 {
			font-size: 4.1rem;
		}
	}
	@media (max-width: 1000px) {
		h1 {
			font-size: 4rem;
		}
	}
	@media (max-width: 900px) {
		h1 {
			font-size: 3.7rem;
		}
	}
	@media (max-width: 850px) {
		h1 {
			font-size: 3.5rem;
		}
	}

	@media (max-width: 800px) {
		p {
			font-size: 1.8rem;
		}
		h1 {
			font-size: 3rem;
		}
	}
	@media (max-width: 680px) {
		h1 {
			font-size: 2.7rem;
		}
	}
	@media (max-width: 600px) {
		h1 {
			font-size: 2.2rem;
		}
		p {
			font-size: 1.7rem;
		}
	}
	@media (max-width: 500px) {
		width: 80%;
		height: 350px;
		top: 88%;
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
	</>
);

export default Image;
