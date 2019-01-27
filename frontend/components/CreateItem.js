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
  uploadFile = async e => {
    const files = e.target.files;
    const data = new FormData();
    data.append('file', files[0]);
    data.append('upload_preset', 'sickfits');
    const res = await fetch('https://api.cloudinary.com/v1_1/dpjplili1/image/upload',
    {
        method: 'POST',
        body: data
    })
    const file = await res.json()
    console.log(file, 'FILE')
    this.setState({
        image: file.secure_url,
        largeImage: file.eager[0].secure_url
    })  }
  render()
}