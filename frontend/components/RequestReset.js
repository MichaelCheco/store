import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import Error from './ErrorMessage';
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
		padding: 5px;
		color: white;
		background: black;
		margin-left: 1rem;
	}
`;
const REQUEST_RESET_MUTATION = gql`
	mutation REQUEST_RESET_MUTATION($email: String!) {
		requestReset(email: $email) {
			message
		}
	}
`;

class RequestReset extends Component {
	state = {
		email: '',
	};
	saveToState = e => {
		this.setState({ [e.target.name]: e.target.value });
	};
	render() {
		return (
			<Mutation mutation={REQUEST_RESET_MUTATION} variables={this.state}>
				{(reset, { error, loading, called }) => (
					<form
						method="post"
						data-test="form"
						onSubmit={async e => {
							e.preventDefault();
							await reset();
							this.setState({ email: '' });
						}}>
						<Fieldset disabled={loading} aria-busy={loading}>
							<h2>Request a password reset</h2>
							<Error error={error} />
							{!error && !loading && called && (
								<p>Success! Check your email for a reset link!</p>
							)}
							<label htmlFor="email">
								Email
								<input
									type="email"
									name="email"
									value={this.state.email}
									onChange={this.saveToState}
								/>
							</label>

							<button type="submit">Request Reset!</button>
						</Fieldset>
					</form>
				)}
			</Mutation>
		);
	}
}

export default RequestReset;
export { REQUEST_RESET_MUTATION };
