import {
  changeIconImage,
  changeIconVideo,
} from '../redux/actions/changeiconAction';
import NewStatusComponent from '../components/NewStatusComponent';
import {connect} from 'react-redux';

// lấy state từ store redux
function mapStateToProps(state) {
  return {
    showIcon: state.changeIconReducer.showIcon,
  };
}

// gửi action
function mapDispatchToProps(dispatch) {
  return {
    changeIconImage: showIcon => {
      dispatch(changeIconImage(showIcon));
    },
    changeIconVideo: showIcon => {
      dispatch(changeIconVideo(showIcon));
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NewStatusComponent);
