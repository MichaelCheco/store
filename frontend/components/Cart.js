import React from 'react';
import { Query, Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import User from './User';
import calcTotalPrice from '../lib/calcTotalPrice';
import formatMoney from '../lib/formatMoney';
import CartStyles from './styles/CartStyles';
import Supreme from './styles/Supreme';
import CloseButton from './styles/CloseButton';
import Button from './styles/Button';
import CartItem from './CartItem';

/* client directive tells apollo to not go to the server 
for the data and instead to grab it from the apollo store */
const LOCAL_STATE_QUERY = gql`
	query {
		cartOpen @client
	}
`;

const TOGGLE_CART_MUTATION = gql`
	mutation {
		toggleCart @client
	}
`;

const Cart = () => (
	<User>
		{({ data: { me } }) => {
			if (!me) return null;
			console.log(me);
			return (
				<Mutation mutation={TOGGLE_CART_MUTATION}>
					{toggleCart => (
						<Query query={LOCAL_STATE_QUERY}>
							{({ data }) => (
								<CartStyles open={data.cartOpen}>
									<header>
										<CloseButton onClick={toggleCart} title="close">
											&times;
										</CloseButton>
										<Supreme>{me.name}'s Cart</Supreme>
										<p>
											You Have {me.cart.length} Item{me.cart.length === 1 ? '' : 's'} in your cart
										</p>
									</header>
									<ul>
										{me.cart.map(cartItem => (
											<CartItem key={cartItem.id} cartItem={cartItem} />
										))}
									</ul>
									<footer>
										<p>{formatMoney(calcTotalPrice(me.cart))}</p>
										<Button>Checkout</Button>
									</footer>
								</CartStyles>
							)}
						</Query>
					)}
				</Mutation>
			);
		}}
	</User>
);
export default Cart;
export { LOCAL_STATE_QUERY, TOGGLE_CART_MUTATION };
