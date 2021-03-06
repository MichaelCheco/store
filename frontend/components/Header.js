/* eslint-disable react/jsx-filename-extension */
import NProgress from 'nprogress';
import Router from 'next/router';
import Link from 'next/link';
import { Mutation } from 'react-apollo';
import Cart, { TOGGLE_CART_MUTATION } from './Cart';
import NavStyles from './styles/NavStyles';
import User from './User';
import CartCount from './CartCount';
import Signout from './Signout';
import styled from 'styled-components';
const Blah = styled.div`
	align-self: center;
	@media (max-width: 500px) {
		/* display: none; */
		margin: 15px 0;

		align-self: flex-start;
	}
`;

const Header = () => (
	<User>
		{({ data: { me } }) => (
			<NavStyles data-test="nav">
				<Link href="/shop">
					<a>Shop</a>
				</Link>
				{me && (
					<>
						<Link href="/sell">
							<a>Sell</a>
						</Link>
						<Link href="/orders">
							<a>Orders</a>
						</Link>
						<Signout />
						<Cart />
						<Mutation mutation={TOGGLE_CART_MUTATION}>
							{toggleCart => (
								<>
									<Link>
										<a onClick={toggleCart}>Cart</a>
									</Link>

									<CartCount
										count={me.cart.reduce(
											(tally, cartItem) => tally + cartItem.quantity,
											0
										)}
									/>
								</>
							)}
						</Mutation>
					</>
				)}
				{!me && (
					<Link href="/signup">
						<a />
					</Link>
				)}
			</NavStyles>
		)}
	</User>
);

Router.onRouteChangeStart = () => {
	NProgress.start();
};
Router.onRouteChangeComplete = () => {
	NProgress.done();
};
Router.onRouteChangeError = () => {
	NProgress.done();
};

export default Header;
