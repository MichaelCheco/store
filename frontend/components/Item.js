import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import DeleteItem from './DeleteItem'
import styled from 'styled-components';

const Inner = styled.div`
    max-width: 400px;
    margin: 0 auto;
    padding: 2rem;
    border: 3px solid blue;
`;
const Img = styled.img`
width: 100%;
    height: 400px;
    object-fit: cover;
  
`;

export default class Item extends Component {
  render() {
    const { item } = this.props
    return (
      <Inner>
      <Link
        href={{
          pathname: '/item',
          query: { id: item.id },
        }}
        >
          <a>{item.title}</a>
        </Link>
        <p>{item.price}</p>
        <Img src={item.image} />
        <p>{item.description}</p>
        <Link
          href={{
            pathname: 'update',
            query: { id: item.id },
          }}>
            <a>Edit</a>
          </Link>
          <button>add to cart</button>
          <DeleteItem id={item.id}>Delete</DeleteItem>
      </Inner>
    )
  }
}