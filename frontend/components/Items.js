import React, { Component } from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import ErrorMessage from './ErrorMessage'
import Item from './Item'
import Pagination from './Pagination';
import { perPage } from '../config';
 const ITEMS_QUERY = gql`
 query ITEMS_QUERY($skip: Int = 0, $first: Int = ${perPage}) {
   items(skip: $skip, first: $first, orderBy: createdAt_DESC) {
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
      <Query query={ITEMS_QUERY} variables={{
        skip: this.props.page * perPage - perPage,
      }}>
        {({data, loading, error}) => {
          console.log(data, 'DATA')
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
