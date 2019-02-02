import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import DeleteItem from './DeleteItem'
import styled from 'styled-components';
import FormatMoney from '../lib/formatMoney'
const Inner = styled.div`
    max-width: 350px;
    margin: 0 auto;
    padding: 2rem;
    border: 1px solid lightgray;
    box-shadow: 0 12px 24px 0 rgba(0, 0, 0, 0.09);
    display: flex;
    flex-direction: column;
`;
const Actions = styled.div`
  display: grid;
    width: 100%;
    border-top: 1px solid lightgray;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    grid-gap: 1px;
    margin-top: 10px;
`;
const Button = styled.div`
border: 1px solid lightgray;
padding: 10px;
text-align: center;
 ;
`;
const Img = styled.img`
width: 100%;
    height: 300px;
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
          <h2>{item.title}</h2>
        </Link>
        <p>{FormatMoney(item.price)}</p>
        <Img src={item.image} />
        <Actions>

        <Link
          href={{
            pathname: 'update',
            query: { id: item.id },
          }}>
            <Button>Edit</Button>
          </Link>
          <Button>Add to Cart</Button>
          <DeleteItem id={item.id}>Delete</DeleteItem>
          </Actions>
      </Inner>
    )
  }
}