import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import Head from 'next/head';
import Link from 'next/link';
import { perPage } from '../config';
import styled from 'styled-components';
const Div = styled.div`
	grid-row: 1;
	display: flex;
	justify-content: flex-end;
	grid-column: 1 / -1;
	align-content: flex-end;
	a {
		color: black;
		margin: 0 5%;
		text-decoration: none;
		&:hover {
			text-decoration: underline;
		}
	}
	p {
		margin-top: 0;
	}
`;
const Div2 = styled.div``;
const Links = styled.div`
	margin-left: 8px;
`;
const P = styled.p`
	padding: 10px;
`;
const PAGINATION_QUERY = gql`
	query PAGINATION_QUERY {
		itemsConnection {
			aggregate {
				count
			}
		}
	}
`;

const Pagination = props => (
	<Div>
		<Query query={PAGINATION_QUERY}>
			{({ data, loading, error }) => {
				console.log(data, 'data');
				if (loading) return <p>loading</p>;
				const count = data.itemsConnection.aggregate.count;
				const pages = Math.ceil(count / perPage);
				const page = props.page;
				return (
					<Div2>
						<Head>
							<title>
								Checo | {page} of {pages}
							</title>
						</Head>
						<Links>
							<Link
								prefetch
								href={{
									pathname: 'shop',
									query: { page: page - 1 },
								}}
							>
								<a aria-disabled={page <= 1}> ️Prev</a>
							</Link>
							<Link
								prefetch
								href={{
									pathname: 'shop',
									query: { page: page + 1 },
								}}
							>
								<a aria-disabled={page >= pages}> Next</a>
							</Link>
						</Links>
						<P>
							Page {page} of {pages}
						</P>
						{/* <p>{count} Items Total</p> */}
					</Div2>
				);
			}}
		</Query>
	</Div>
);

export default Pagination;
