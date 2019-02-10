import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { CURRENT_USER_QUERY } from './User';
import styled from 'styled-components';
const Button = styled.div`
	border: 1px solid lightgray;
	padding: 10px;
	text-align: center;
	cursor: pointer;
	&:active {
		color: burlywood;
	}
`;
const ADD_TO_CART_MUTATION = gql`
	mutation addToCart($id: ID!) {
		addToCart(id: $id) {
			id
			quantity
		}
	}
`;
class AddToCart extends Component {
	render() {
		const { id } = this.props;
		return (
			<Mutation
				mutation={ADD_TO_CART_MUTATION}
				variables={{
					id,
				}}
				refetchQueries={[{ query: CURRENT_USER_QUERY }]}>
				{(AddToCart, { loading }) => (
					<Button disabled={loading} onClick={AddToCart}>
						Add{loading && 'ing'} To Cart 🛒
					</Button>
				)}
			</Mutation>
		);
	}
}

export default AddToCart;
