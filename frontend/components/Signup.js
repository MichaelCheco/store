import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import Error from './ErrorMessage';
import { CURRENT_USER_QUERY } from './User';
import styled from 'styled-components';
const Fieldset = styled.fieldset`
	display: flex;
	flex-direction: column;
	border: 1px solid lightgray;
	width: 800px;
	margin: 0 auto;
	height: 500px;
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
		width: 105px;
		height: 40px;
		border-radius: 5px;
		font-size: 2rem;
		cursor: pointer;
		padding: 5px;
		color: white;
		background: black;
		margin-left: 1rem;
	}
	@media (max-width: 500px) {
		width: 400px;
		padding: 0.2rem;
	}
`;
const SIGNUP_MUTATION = gql`
	mutation SIGNUP_MUTATION(
		$name: String!
		$password: String!
		$email: String!
	) {
		signup(name: $name, password: $password, email: $email) {
			id
			email
			name
		}
	}
`;

class Signup extends Component {
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
				mutation={SIGNUP_MUTATION}
				variables={this.state}
				refetchQueries={[{ query: CURRENT_USER_QUERY }]}>
				{(signup, { loading, error }) => (
					<form
						method="post"
						onSubmit={async e => {
							e.preventDefault();
							const res = await signup();
							console.log(res);
							this.setState({ name: '', email: '', password: '' });
						}}>
						<Fieldset disabled={loading} aria-busy={loading}>
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
							<button type="submit">Register!</button>
						</Fieldset>
					</form>
				)}
			</Mutation>
		);
	}
}

export default Signup;
export { SIGNUP_MUTATION };
