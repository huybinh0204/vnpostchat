import {LoginAcc} from '../../redux/actions/loginAction';
import {connect} from 'react-redux';
import LoginComponent from './LoginComponent';

function mapStateToProps(state, ownProps) {
  console.log('abc', state.LoginReducer.error);
  return {
    err: state.LoginReducer.error,
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    CheckLogin: (phone, password) => {
      dispatch(LoginAcc(phone, password));
    },
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginComponent);
