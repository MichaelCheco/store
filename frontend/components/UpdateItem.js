import React, { Component } from 'react'
import { Mutation, Query } from 'react-apollo'
import gql from 'graphql-tag'
import Router from 'next/router'
import Error from './ErrorMessage'
import Link from 'next/link'
const SINGLE_ITEM_QUERY = gql`
  query SINGLE_ITEM_QUERY($id: ID!) {
    item(where: { id: $id }) {
      id
      title
      description
      price
    }
  }
`
const UPDATE_ITEM_MUTATION = gql`
  mutation UPDATE_ITEM_MUTATION(
    $id: ID!,
    $title: String,
    $description: String,
    $price: Int,
    ) {
      updateItem(
        id: $id,
        title: $title,
        description: $description,
        price: $price,
      ) {
        id
        title
        description
        price
      }
    }
`


class UpdateItem extends Component {
  state = {};
  handleChange = e => {
    const { name, type, value } = e.target;
    const val = type === 'number' ? parseFloat(value) : value;
    this.setState({ [name]: val });
  };
  updateItem = async (e, updateItemMutation) => {
    e.preventDefault();
    const res = await updateItemMutation({
      variables: {
        id: this.props.id,
        ...this.state
      }
    })
    Router.push({
      pathname: '/item',
      query: { id: this.props.id },
    })
  }
  render() {
    return (
      <Query 
        query={SINGLE_ITEM_QUERY}
        variables={{
          id: this.props.id
        }}
        >
        {({ data, loading }) => {
          if (loading) return <p>Loading..</p>
          if(!data.item) return <p>No Item Found for ID {this.props.id}</p>
          return (
            <Mutation mutation={UPDATE_ITEM_MUTATION} variables={this.state}>
            {( updateItem, { loading, error }) => (
              <form onSubmit={e => this.updateItem(e, updateItem)}>
                <Error error={error} />
                <fieldset disabled={loading} aria-busy={loading}>
                <label htmlFor="title">
                  Title
                  <input 
                    type="text"
                    id="title"
                    name="title"
                    placeholder="Title"
                    onChange={this.handleChange}
                    required
                    defaultValue={data.item.title}
                  />
                </label>
                <label htmlFor="price">
                  price
                  <input 
                    type="number"
                    id="price"
                    name="price"
                    placeholder="price"
                    onChange={this.handleChange}
                    required
                    defaultValue={data.item.price}
                  />
                </label>
                <label htmlFor="description">
                  description
                  <input 
                    type="text"
                    id="description"
                    name="description"
                    placeholder="description"
                    onChange={this.handleChange}
                    required
                    defaultValue={data.item.description}
                  />
                </label>
                <button type="submit">Sav{loading ? 'ing' : 'e'}</button>
                </fieldset>
              </form>
            )}
            </Mutation>
          )
        }}
        </Query>
      )
  }
}

export default UpdateItem
export { UPDATE_ITEM_MUTATION }