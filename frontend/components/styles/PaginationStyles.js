import styled from 'styled-components';

const PaginationStyles = styled.div`
	text-align: center;
	display: grid;
	grid-template-columns: 1fr auto 1fr;
	align-items: stretch;
	justify-content: space-evenly;
	align-content: center;
	margin: 2rem 0;
	border: 1px solid ${props => props.theme.lightgrey};
	border-radius: 10px;
	a {
		font-size: 2rem;
	}
	p {
		font-size: 2rem;
	}
	& > * {
		margin: 0;
		padding: 15px 30px;
		border-right: 1px solid ${props => props.theme.lightgrey};
		&:last-child {
			border-right: 0;
		}
	}
	a[aria-disabled='true'] {
		color: grey;
		pointer-events: none;
	}
`;

export default PaginationStyles;
