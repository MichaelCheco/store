import React, { Component } from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import ErrorMessage from './ErrorMessage'
import Item from './Item'
import Pagination from './Pagination';
import { perPage } from '../config';
import styled from 'styled-components';

const ItemWrapper = styled.div`
  border: 3px solid red;
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  padding: 2rem;
`;

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
      <ItemWrapper>
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
      </ItemWrapper>
    )
  }
}
export { ITEMS_QUERY }
