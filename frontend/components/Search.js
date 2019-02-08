import React, { Component } from 'react';
import Downshift from 'downshift';
import Router from 'next/router';
import { ApolloConsumer } from 'react-apollo';
import gql from 'graphql-tag';
import debounce from 'lodash.debounce'; // batch events
import { DropDown, DropDownItem, SearchStyles } from './styles/DropDown';

const SEARCH_ITEMS_QUERY = gql`
	query SEARCH_ITEMS_QUERY($searchTerm: String!) {
		items(where: { OR: [{ title_contains: $searchTerm }, { description_contains: $searchTerm }] }) {
			id
			image
			title
		}
	}
`;
class AutoComplete extends Component {
	state = {
		items: [],
		loading: false,
	};
	onChange = debounce(async (e, client) => {
		//turn loading on
		this.setState({ loading: true });
		// manually query apollo client
		const res = await client.query({
			query: SEARCH_ITEMS_QUERY,
			variables: { searchTerm: e.target.value },
		});
		this.setState({
			items: res.data.items,
			loading: false,
		});
	}, 350);
	render() {
		return (
			<SearchStyles>
				<div>
					<ApolloConsumer>
						{client => (
							<input
								type="search"
								placeholder="..."
								onChange={e => {
									e.persist();
									this.onChange(e, client);
								}}
							/>
						)}
					</ApolloConsumer>
					<DropDown>
						{this.state.items.map(item => (
							<DropDownItem>
								<img width="50" height="50" src={item.image} alt={`image for ${item.title}`} />
								{item.title}
							</DropDownItem>
						))}
					</DropDown>
				</div>
			</SearchStyles>
		);
	}
}

export default AutoComplete;
