import * as actionTypes from './actionTypes';

export const changeIconImage = showIcon => {
  return {
    type: actionTypes.CHANGE_ICON_IMAGE,
    showIcon,
  };
};
export const changeIconVideo = showIcon => {
  return {
    type: actionTypes.CHANGE_ICON_VIDEO,
    showIcon,
  };
};
