import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import Router from 'next/router';
import Error from './ErrorMessage'

const CREATE_ITEM_MUTATION = gql`
 mutation CREATE_ITEM_MUTATION(
   $title: String!
   $description: String!
   $price: Int!
   $image: String
   $largeImage: String
   ) {
     createItem(
       title: $title
       description: $description
       price: $price
       image: $image
       largeImage: $largeImage
     ) {
       id
     }
   }
`;

class createItem extends Component {
  state = {
    title: '',
    description: '',
    image: '',
    largeImage: '',
    price: 1000,
  }
  handleChange = e => {
    const { type, name, value } = e.target;
    const val = type === 'number' ? parseFloat(value): value;
    this.setState({ [name]: val })
  }
}