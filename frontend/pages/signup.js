import Signup from '../components/Signup';
import Signin from '../components/Signin';
import RequestReset from '../components/RequestReset';

const SignUp = props => (
  <div>
    <Signup />
    <RequestReset />
    <Signin />
  </div>
);

export default SignUp;
