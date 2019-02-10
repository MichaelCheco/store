import Signup from '../components/Signup';
// import Signin from '../components/Signin';
// import RequestReset from '../components/RequestReset';
import styled from 'styled-components';
const Div = styled.div`
	border: 1px solid lightgray;
	display: flex;
	flex-direction: column;
`;
const SignUp = props => (
	<Div>
		<Signup />
		{/* <RequestReset />
		<Signin /> */}
	</Div>
);

export default SignUp;
