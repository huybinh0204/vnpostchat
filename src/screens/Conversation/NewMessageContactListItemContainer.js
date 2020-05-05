import {connect} from 'react-redux';
import {tickBoxCheck} from '../../redux/actions/tickBoxCheckAction';
import NewMessageContactListItem from './NewMessageContactListItem';

function mapStateToProps(state) {
  return {
    checked: state.tickBoxReducer.checked,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    tickBoxCheck: checked => {
      dispatch(tickBoxCheck(checked));
    },
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NewMessageContactListItem);
