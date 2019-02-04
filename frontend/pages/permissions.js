import PleaseSignIn from '../components/PleaseSignIn';
import Permissions from '../components/Permissions';

const MyPermissions = props => (
  <div>
    <PleaseSignIn>
      <Permissions />
    </PleaseSignIn>
  </div>
);

export default MyPermissions;
