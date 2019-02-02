import Reset from '../components/Reset';

const ResetPass = props => (
  <div>
    <h1>New stuff {props.query.resetToken}</h1>
    <Reset resetToken={props.query.resetToken} />
  </div>
);

export default ResetPass;
