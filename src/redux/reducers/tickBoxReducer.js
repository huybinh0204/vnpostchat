import * as actionTypes from '../actions/actionTypes';
const initialState = {
  checked: true,
};
export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.TICK_BOX_CHECK:
      return {checked: !state.checked};
    default:
      return state;
  }
};
