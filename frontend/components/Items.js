import React, { Component } from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import ErrorMessage from './ErrorMessage'
import Item from './Item'
import Pagination from './Pagination';
 const ITEMS_QUERY = gql`
 query ITEMS_QUERY {
   items {
     id
     title
     description
     price
     image
     largeImage
   }
 }
`

export default class Items extends Component {
  render() {
    return (
      <div>
        <Pagination page={this.props.page} />
      <Query query={ITEMS_QUERY}>
        {({data, loading, error}) => {
          if (loading) return <h3>Loading</h3>
          if(error) return <ErrorMessage error={error}/>
          return (
            data.items.map(item => <Item item={item} key={item.id} />)
          )
        }}
      </Query>
      <Pagination page={this.props.page}/>
      </div>
    )
  }
}
export { ITEMS_QUERY }
