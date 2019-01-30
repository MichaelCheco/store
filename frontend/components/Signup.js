import React, { Component } from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import Error from './ErrorMessage'

const SIGNUP_MUTATION = gql`
  mutation SIGNUP_MUTATION(
    $name: String!
    $password: String!
    $email: String!
    ) {
      signup(
        name: $name,
        password: $password,
        email: $email,
      ) {
        id
        email
        name
      }
    }
`

class Signup extends Component {
  state = {
    name: '',
    password: '',
    email: '',
  }
  handleChange = e => {
    const { name, value } = e.target;
    this.setState({[name]: value})
  }
  render() {
    return (
      <Mutation mutation={SIGNUP_MUTATION} variables={this.state}>
        {( signup ,{loading, error }) => (
            <form method="post" onSubmit={ async e => {
              e.preventDefault();
              const res = await signup();
              console.log(res)
              this.setState({name: '', email: '', password: ''})
            }}>
            <fieldset disabled={loading} aria-busy={loading}>
            <Error error={error} />
              <label htmlFor="name">
              Name
              <input 
              type="text"
              name="name"
              id="name"
              value={this.state.name}
              onChange={this.handleChange}
              placeholder="name"
              required
              />
              </label>
              <label htmlFor="name">
              Email
              <input 
              type="email"
              name="email"
              id="email"
              value={this.state.email}
              onChange={this.handleChange}
              placeholder="email"
              required
              />
              </label>
              <label htmlFor="password">
              Password
              <input 
              type="password"
              name="password"
              value={this.state.password}
              id="password"
              onChange={this.handleChange}
              placeholder="password"
              required
              />
              </label>
              <button type="submit">Register!</button>
        </fieldset>
            </form>
        )}
      </Mutation>
    )
  }
}

export default Signup;