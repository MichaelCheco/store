import React from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import Head from 'next/head'
import Link from 'next/link'
import { perPage } from '../config'
import styled from 'styled-components';
const Div = styled.div`
  grid-row: 1;
  display: flex;
  justify-content: flex-end;
  grid-column: 1 / -1;
  align-content: flex-end;
  a {
    color: black;
    margin: 0 5px;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
  p {
    margin-left: 5px;
  }
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
      {({ data, loading, error}) => {
        console.log(data,'data')
        if(loading) return <p>loading</p>
        const count = data.itemsConnection.aggregate.count;
        const pages = Math.ceil(count / perPage);
        const page = props.page;
        return (
          <div>
          <Head>
            <title>
              Checo | {page} of {pages}
            </title>
          </Head>
          <Link 
          prefetch
          href={{
            pathname: 'shop',
            query: { page: page -1 }
          }}>
          <a aria-disabled={page <= 1}> ️ Prev</a>
          </Link>
          <Link 
          prefetch
          href={{
            pathname: 'shop',
            query: { page: page + 1 }
          }}
          >
          
          <a aria-disabled={page >= pages}> Next</a>
          </Link>
          <p>Page {page} of {pages}</p>
          {/* <p>{count} Items Total</p> */}
          </div>
        )
      }}
    </Query>
  </Div>
)

export default Pagination;
