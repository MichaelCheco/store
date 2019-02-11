import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { ITEMS_QUERY } from './Items';
import styled from 'styled-components';
const Button = styled.div`
	border: 1px solid lightgray;
	padding: 10px;
	text-align: center;
	display: inline;
	margin-left: 5px;
	border-radius: 4px;
	cursor: pointer;
`;
const DELETE_ITEM_MUTATION = gql`
	mutation DELETE_ITEM_MUTATION($id: ID!) {
		deleteItem(id: $id) {
			id
		}
	}
`;

class DeleteItem extends Component {
	update = (cache, payload) => {
		const data = cache.readQuery({ query: ITEMS_QUERY });
		data.items = data.items.filter(
			item => item.id !== payload.data.deleteItem.id
		);
		cache.writeQuery({ query: ITEMS_QUERY, data });
	};
	render() {
		return (
			<Mutation
				mutation={DELETE_ITEM_MUTATION}
				variables={{ id: this.props.id }}
				update={this.update}>
				{(deleteItem, { error }) => (
					<Button
						onClick={() => {
							console.log(this.props.children);
							if (confirm('Are you sure you want to delete this item?')) {
								deleteItem().catch(err => {
									alert(err.message);
								});
							}
						}}>
						{this.props.children}
					</Button>
				)}
			</Mutation>
		);
	}
}

export default DeleteItem;
