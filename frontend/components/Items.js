import React, { Component } from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import ErrorMessage from './ErrorMessage'
const ITEMS_QUERY = gql`
 query ITEMS_QUERY {
   items {
     title
   }
 }
`

export default class Items extends Component {
  render() {
    return (
      <Query query={ITEMS_QUERY}>
        {({data, loading, error}) => {
          if (loading) return <h3>Loading</h3>
          if(error) return <ErrorMessage error={error}/>
          console.log(data)
          return (
            data.items.map(item => <h2>{item.title}</h2>)
          )
        }}
      </Query>
    )
  }
}