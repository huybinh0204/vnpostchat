import * as actionTypes from '../actions/actionTypes';
const initialState = {
  showIcon: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_ICON_IMAGE:
      return {showIcon: false};
    case actionTypes.CHANGE_ICON_VIDEO:
      return {showIcon: true};
    default:
      return state;
  }
};
