import React, { Component } from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import Error from './ErrorMessage'
import Head from 'next/head'
import Item from '../pages/item';
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
 class SingleItem extends Component {
  render() {
    return (
      <Query query={SINGLE_ITEM_QUERY} variables={{id: this.props.id}}>
        {({ data, loading, error }) => {
          if (error) return <Error error={error} />
          if(loading) return  <p>Loading...</p>
          const item = data.item;
          return (
            <div>
              <Head>
                <title>Checo | {item.title}</title>
              </Head>
              <h2>{item.description}</h2>
            </div>
          )
        }}
      </Query>
    )
  }
}
export default SingleItem