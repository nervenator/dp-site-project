import { CLEAR_ERRORS, PROGRESS_CHANGE, IMAGE_ERROR, SET_FILE } from '../types';

const imageReducer = (state, action) => {
  switch (action.type) {
    case SET_FILE:
      return {
        ...state,
        file: action.payload,
      };
    case PROGRESS_CHANGE:
      return {
        ...state,
        progress: action.payload,
      };
    case IMAGE_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};

export default imageReducer;
