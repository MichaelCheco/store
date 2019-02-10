import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import Error from './ErrorMessage';
import styled from 'styled-components';
import Link from 'next/link';
import Head from 'next/head';
import DeleteItem from './DeleteItem';
const SingleItemStyles = styled.div`
	max-width: 1200px;
	margin: 2rem auto;
	box-shadow: ${props => props.theme.bs};
	display: grid;
	grid-auto-columns: 1fr;
	grid-auto-flow: column;
	min-height: 800px;
	img {
		width: 100%;
		height: 100%;
		object-fit: contain;
	}
	.details {
		margin: 3rem;
		margin-top: 13rem;
		font-size: 2rem;
	}
`;

const SINGLE_ITEM_QUERY = gql`
	query SINGLE_ITEM_QUERY($id: ID!) {
		item(where: { id: $id }) {
			id
			title
			description
			largeImage
		}
	}
`;
class SingleItem extends Component {
	render() {
		return (
			<Query
				query={SINGLE_ITEM_QUERY}
				variables={{
					id: this.props.id,
				}}>
				{({ error, loading, data }) => {
					if (error) return <Error error={error} />;
					if (loading) return <p>Loading...</p>;
					if (!data.item) return <p>No Item Found for {this.props.id}</p>;
					const item = data.item;
					return (
						<SingleItemStyles>
							<Head>
								<title>Checo's Cafe | {item.title}</title>
							</Head>
							<img src={item.largeImage} alt={item.title} />
							<div className="details">
								<h2>Viewing {item.title}</h2>
								<p data-test="graphql-error">{item.description}</p>
								<Link
									href={{
										pathname: 'update',
										query: { id: item.id },
									}}>
									<Button>Edit ✏️</Button>
								</Link>
								<DeleteItem id={item.id}>Delete This Item</DeleteItem>
							</div>
						</SingleItemStyles>
					);
				}}
			</Query>
		);
	}
}
const Button = styled.div`
	border: 1px solid lightgray;
	padding: 10px;
	text-align: center;
	display: inline;
	margin-right: 5px;
	border-radius: 4px;
`;
export default SingleItem;
export { SINGLE_ITEM_QUERY };
