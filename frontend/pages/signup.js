import Signup from '../components/Signup';

import styled from 'styled-components';
const Div = styled.div`
	border: 1px solid lightgray;
	display: flex;
	flex-direction: column;
`;
const SignUp = props => (
	<Div>
		<Signup />
	</Div>
);

export default SignUp;
