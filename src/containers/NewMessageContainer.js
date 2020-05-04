import {connect} from 'react-redux';
import NewMessageComponent from '../components/NewMessageComponent';

function mapStateToProps(state) {
  return {};
}

// gửi action
function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NewMessageComponent);
