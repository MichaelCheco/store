import styled from 'styled-components';
import React from 'react';
import Link from 'next/link';
import User from './User';
const Name = styled.div`
	width: 25%;
	display: flex;
	color: white;
	font-size: 1.8rem;
	margin-left: 4%;
	margin-top: 0.3%;
	@media (max-width: 500px) {
		align-self: center;
		width: 33%;
		white-space: nowrap;
		margin-left: 8px;
	}
`;
// 50px
const Div = styled.div`
	display: flex;
	background: black;
	justify-content: flex-end;
	height: 45px;
	@media (max-width: 500px) {
		display: flex;
		width: 100%;

		justify-content: space-between;
	}
`;
const Signout = styled.div`
	display: none;
	@media (max-width: 500px) {
		align-self: center;
		a {
			color: white;
			font-size: 1.8rem;
			margin-right: 10px;
		}
	}
`;
const Wrapper = styled.div`
	display: flex;
	align-items: center;
	width: 30%;
	a {
		margin: 0 2%;
		width: 25%;
		color: whitesmoke;
		font-weight: bold;
		font-size: 1.4rem;
		white-space: nowrap;
		text-decoration: none;
		&:hover {
			text-decoration: underline;
		}
	}
`;

const AuthHeader = props => (
	<Div>
		<User>
			{({ data: { me } }) =>
				me ? (
					<>
						<Name>WELCOME {me.name.toUpperCase()}</Name>
						<Signout>
							<Link href="/signout">
								<a>SIGN OUT</a>
							</Link>
						</Signout>
					</>
				) : (
					<Wrapper>
						<Link href="/signup">
							<a>LOG IN</a>
						</Link>
						<Link href="/signup">
							<a>CREATE AN ACCOUNT</a>
						</Link>
					</Wrapper>
				)
			// <Name>Welcome {me.name}</Name>
			}
		</User>
	</Div>
);

export default AuthHeader;
