// import React, { Component } from 'react';
// import { Query } from 'react-apollo';
// import gql from 'graphql-tag';
// import ErrorMessage from './ErrorMessage';
// import Search from './Search';
// import Item from './Item';
// import Pagination from './Pagination';
// import { perPage } from '../config';
// import styled from 'styled-components';
// import HomeImage from './HomeImage';
// const Div = styled.div`
// 	border: 1px solid black;
// 	@media (max-width: 500px) {
// 		border: none;
// 	}
// `;
// const ItemWrapper = styled.div`
// 	max-width: ${props => props.theme.maxWidth};
// 	margin: 0 auto;
// 	padding: 2rem;
// 	display: grid;
// 	grid-template-columns: 1fr 1fr 1fr 1fr;
// 	grid-template-rows: 80px 50px 1fr;
// 	grid-gap: 10px;
// 	z-index: 1;
// 	border: 3px solid palevioletred;
// 	background: white;
// 	@media (max-width: 500px) {
// 		display: flex;
// 		flex-direction: column;
// 		margin-top: 0px;
// 	}
// `;

// const ITEMS_QUERY = gql`
//  query ITEMS_QUERY($skip: Int = 0, $first: Int = ${perPage}) {
//    items(skip: $skip, first: $first, orderBy: createdAt_DESC) {
//      id
//      title
//      description
//      price
//      image
//      largeImage
//    }
//  }
// `;

// export default class Items extends Component {
// 	render() {
// 		return (
// 			<Div>
// 				<ItemWrapper>
// 					<Search />
// 					<Pagination page={this.props.page} />
// 					<Query
// 						query={ITEMS_QUERY}
// 						variables={{
// 							skip: this.props.page * perPage - perPage,
// 						}}
// 					>
// 						{({ data, loading, error }) => {
// 							console.log(data, 'DATA');
// 							if (loading) return <h3>Loading</h3>;
// 							if (error) return <ErrorMessage error={error} />;
// 							return data.items.map(item => <Item item={item} key={item.id} />);
// 						}}
// 					</Query>
// 					{/* <Pagination page={this.props.page}/> */}
// 				</ItemWrapper>
// 			</Div>
// 		);
// 	}
// }
// export { ITEMS_QUERY };
import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import styled from 'styled-components';
import Item from './Item';
import Pagination from './Pagination';
import { perPage } from '../config';

const ITEMS_QUERY = gql`
  query ITEMS_QUERY($skip: Int = 0, $first: Int = ${perPage}) {
    items(first: $first, skip: $skip, orderBy: createdAt_DESC) {
      id
      title
      price
      description
      image
      largeImage
    }
  }
`;

const Center = styled.div`
	text-align: center;
`;

const ItemsList = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	grid-gap: 10px;
	max-width: ${props => props.theme.maxWidth};
	margin: 0 auto;
	@media (max-width: 500px) {
		grid-template-columns: 1fr;
	}
`;

class Items extends Component {
	render() {
		return (
			<Center>
				<Pagination page={this.props.page} />
				<Query
					query={ITEMS_QUERY}
					// fetchPolicy="network-only"
					variables={{
						skip: this.props.page * perPage - perPage,
					}}>
					{({ data, error, loading }) => {
						if (loading) return <p>Loading...</p>;
						if (error) return <p>Error: {error.message}</p>;
						return (
							<ItemsList>
								{data.items.map(item => (
									<Item item={item} key={item.id} />
								))}
							</ItemsList>
						);
					}}
				</Query>
				<Pagination page={this.props.page} />
			</Center>
		);
	}
}

export default Items;
export { ITEMS_QUERY };
