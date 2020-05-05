import {connect} from 'react-redux';
import NewMessageComponent from './NewMessageComponent';

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
