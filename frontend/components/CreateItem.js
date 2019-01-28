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
  render() {
    return (
      <Mutation mutation={CREATE_ITEM_MUTATION} variables={this.state}>
      {(createItem, { loading, error }) => (
        <form 
          onSubmit={async e => {
            e.preventDefault();

            const res = await createItem();
            console.log(res)
            Router.push({
              pathname: '/item',
              query: { id: res.data.createItem.id },
            });
          }}>
          <Error error={error} />
          <fieldset disabled={loading} aria-busy={loading}>
            <label htmlFor="file">
              Image
              <input
              type="file"
              id="file"
              name="file"
              placeholder="upload an image"
              required
              onChange={this.uploadFile}
              />
              {this.state.image && (
                <img width="200" src={this.state.image} alt="Upload Preview" />
               )}
            </label>
            <label htmlFor="title">
                Title
                <input
                type="text"
                id="title"
                name="title"
                placeholder="Title"
                required
                value={this.state.title}
                onChange={this.handleChange}
                />
            </label>
            <label htmlFor="price">
                Price
                <input
                type="text"
                id="price"
                name="price"
                placeholder="price"
                required
                value={this.state.price}
                onChange={this.handleChange}
                />
            </label>
            <label htmlFor="description">
                Description
                <input
                type="text"
                id="description"
                name="description"
                placeholder="description"
                required
                value={this.state.description}
                onChange={this.handleChange}
                />
            </label>
            <button type="submit">Submit</button>
          </fieldset>
          
          </form>
      )}
      </Mutation>
    )
  }
}

export default createItem;
export { CREATE_ITEM_MUTATION }