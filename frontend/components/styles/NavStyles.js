import styled from 'styled-components';

const NavStyles = styled.ul`
	margin: 0;
	padding: 0;
	display: flex;
	justify-self: end;
	font-size: 2rem;
	a,
	button {
		padding: 1rem 3rem;
		display: flex;
		align-items: center;
		position: relative;
		text-transform: uppercase;
		font-weight: 900;
		font-size: 1em;
		background: none;
		border: 0;
		cursor: pointer;
		color: ${props => props.theme.black};
		font-weight: 800;
		/* @media (max-width: 700px) {
			font-size: 10px;
			padding: 0 10px;
		} */
		@media (max-width: 500px) {
			font-size: 2rem;
			margin: 5px;
		}
		&:before {
			content: '';
			width: 2px;
			background: lightgray;
			height: 100%;
			left: 0;
			position: absolute;
			transform: skew(-20deg);
			top: 0;
			bottom: 0;
		}
		&:after {
			height: 2px;
			background: burlywood;
			content: '';
			width: 0;
			position: absolute;
			transform: translateX(-50%);
			transition: width 0.4s;
			transition-timing-function: cubic-bezier(1, -0.65, 0, 2.31);
			left: 50%;
			margin-top: 2rem;
		}
		&:hover,
		&:focus {
			outline: none;
			&:after {
				width: calc(100% - 60px);
			}
		}
	}
	@media (max-width: 1300px) {
		border-top: 1px solid lightgray;
		width: 100%;
		justify-content: flex-start;
		font-size: 1.5rem;
	}
	@media (max-width: 880px) {
	}
	@media (max-width: 750px) {
	}
	@media (max-width: 500px) {
		display: flex;
		flex-direction: column;
		button {
			padding: 0;
		}
		a {
			font-size: 2.6rem;
			border: 1px solid grey;
		}
	}
`;

export default NavStyles;
