import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import styled from 'styled-components';

const REMOVE_FROM_CART_MUTATION = gql`
	mutation removeFromCart($id: ID!) {
		removeFromCart(id: $id) {
			id
		}
	}
`;
const BigButton = styled.button`
	font-size: 3rem;
	background: none;
	border: 0;
	&:hover {
		color: brown;
		cursor: pointer;
	}
`;
class RemoveFromCart extends Component {
	render() {
		return (
			<Mutation mutation={REMOVE_FROM_CART_MUTATION} variables={{ id: this.props.id }}>
				{(removeFromCart, { loading, error }) => (
					<BigButton
						disabled={loading}
						onClick={() => {
							removeFromCart().catch(err => alert(err.message));
						}}
						title="Delete Item"
					>
						&times;
					</BigButton>
				)}
			</Mutation>
		);
	}
}

export default RemoveFromCart;
