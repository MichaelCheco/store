import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import Error from './ErrorMessage';
import { CURRENT_USER_QUERY } from './User';
import Router from 'next/router';
import Link from 'next/link';
import styled from 'styled-components';
const Fieldset = styled.fieldset`
	display: flex;
	flex-direction: column;
	border: 1px solid lightgray;
	width: 800px;
	margin: 0 auto;
	height: 500px;
	h2 {
		margin-left: 1rem;
	}
	label {
		padding: 0.4rem;
		font-size: 3rem;
		margin: 0.3rem;
		input {
			height: 30px;
			width: 100%;
			font-size: 1.6rem;
			outline: 0;
		}
	}
	button {
		width: 155px;
		height: 50px;
		border-radius: 5px;
		font-size: 1.8rem;

		margin: 0.5rem;
		cursor: pointer;
		padding: 3px;
		color: white;
		background: black;
		margin-left: 1rem;
	}
	@media (max-width: 500px) {
		width: 400px;
		padding: 0.2rem;
	}
`;
const SIGNIN_MUTATION = gql`
	mutation SIGNIN_MUTATION($password: String!, $email: String!) {
		signin(password: $password, email: $email) {
			id
			email
			name
		}
	}
`;

class Signin extends Component {
	state = {
		name: '',
		password: '',
		email: '',
	};
	handleChange = e => {
		const { name, value } = e.target;
		this.setState({ [name]: value });
	};
	render() {
		return (
			<Mutation
				mutation={SIGNIN_MUTATION}
				variables={this.state}
				refetchQueries={[{ query: CURRENT_USER_QUERY }]}>
				{(signin, { loading, error }) => (
					<form
						method="post"
						onSubmit={async e => {
							e.preventDefault();
							const res = await signin();
							Router.push({
								pathname: '/',
							});
							console.log(res);
							this.setState({ name: '', email: '', password: '' });
						}}>
						<Fieldset disabled={loading} aria-busy={loading}>
							<h2>Sign Into Your Account </h2>
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
							<Button>
								<button type="submit">Sign In </button>
								<Link href="/requestreset">
									<button type="submit">Reset Password </button>
								</Link>
							</Button>
						</Fieldset>
					</form>
				)}
			</Mutation>
		);
	}
}
const Button = styled.div`
	display: flex;
`;
export default Signin;
