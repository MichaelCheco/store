import React from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import Head from 'next/head'
import Link from 'next/link'
import { perPage } from '../config'
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
  <div>
    <Query query={PAGINATION_QUERY}>
      {({ data, loading, error}) => {
        console.log(data,'data')
        if(loading) return <p>loading</p>
        const count = data.itemsConnection.aggregate.count;
        const pages = Math.ceil(count / perPage);
        const page = props.page;
        console.log(page)
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
          <a aria-disabled={page <= 1}> Prev</a>
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
          <p>{count} Items Total</p>
          </div>
        )
      }}
    </Query>
  </div>
)

export default Pagination;
