/* eslint-disable react/jsx-filename-extension */

import Link from 'next/link';
import { Mutation } from 'react-apollo';
import { TOGGLE_CART_MUTATION } from './Cart';
import gql from 'graphql-tag';
import Cart from './Cart';
import Router from 'next/router';
import NProgress from 'nprogress';
import Wrapper from './styles/NavStyles';
import User from './User';
import styled from 'styled-components';
import CartCount from './CartCount';
const Div = styled.div`
	display: grid;
	width: 100%;
	border: 1px solid black;
	grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
	grid-template-rows: 75px;
	a {
		font-size: 15px;
		font-weight: bold;
	}
	@media (max-width: 500px) {
		grid-template-columns: 100%;
		grid-template-rows: repeat(5, 50px);
		border: 1px solid black;
		a {
			display: block;
			border: 1px solid black;
			width: 100%;
			text-align: center;
			height: 50px;
			text-decoration: none;
		}
	}
`;
const H1 = styled.h1`
	display: flex;
	height: 65px;
	margin-left: 50px;
	margin-top: 0;
	color: white;
`;
Router.onRouteChangeStart = () => {
	NProgress.start();
};
Router.onRouteChangeComplete = () => {
	NProgress.done();
};
Router.onRouteChangeError = () => {
	NProgress.done();
};

const Header = props => (
	<User>
		{({ data: { me } }) => (
			<Div>
				<H1>.</H1>
				<Wrapper>
					<Link href="/shop">
						<a>SHOP</a>
					</Link>
					{me && (
						<>
							<Link href="/sell">
								<a>SELL</a>
							</Link>
							<Link href="/">
								<a>ACCOUNT</a>
							</Link>
							<Link href="/signout">
								<a>SIGN OUT</a>
							</Link>
							<Mutation mutation={TOGGLE_CART_MUTATION}>
								{toggleCart => (
									<button onClick={toggleCart}>
										My Cart
										<CartCount
											count={me.cart.reduce((tally, cartItem) => tally + cartItem.quantity, 0)}
										/>
									</button>
								)}
							</Mutation>
							<Cart />
						</>
					)}
				</Wrapper>
			</Div>
		)}
	</User>
);

export default Header;
