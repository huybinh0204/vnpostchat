import * as actionTypes from './actionTypes';
export const tickBoxCheck = checked => {
  return {
    type: actionTypes.TICK_BOX_CHECK,
    checked,
  };
};
