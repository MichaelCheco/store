import React, { Component } from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import Error from './ErrorMessage'
import { CURRENT_USER_QUERY } from './User'
import Router from 'next/router'
const SIGNIN_MUTATION = gql`
  mutation SIGNIN_MUTATION(
    $password: String!
    $email: String!
    ) {
      signin(
        password: $password,
        email: $email,
      ) {
        id
        email
        name
      }
    }
`

class Signin extends Component {
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
      <Mutation 
      mutation={SIGNIN_MUTATION} 
      variables={this.state}
      refetchQueries={[
        { query: CURRENT_USER_QUERY }
      ]}
      >
        {( signin ,{loading, error }) => (
            <form method="post" onSubmit={ async e => {
              e.preventDefault();
              const res = await signin();
              Router.push({
                pathname: '/',
              })
              console.log(res)
              this.setState({name: '', email: '', password: ''})
            }}>
            <fieldset disabled={loading} aria-busy={loading}>
            <h2>Sign Into Your Account 🚀</h2>
            <Error error={error} />
              <label htmlFor="email">
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
              <button type="submit">Sign In 💂‍♀️</button>
        </fieldset>
            </form>
        )}
      </Mutation>
    )
  }
}

export default Signin;