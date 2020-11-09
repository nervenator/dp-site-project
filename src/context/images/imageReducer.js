import { CLEAR_ERRORS, PROGRESS_CHANGE, IMAGE_ERROR, SET_URL } from '../types';

const imageReducer = (state, action) => {
  switch (action.type) {
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
    case SET_URL:
      return {
        ...state,
        url: action.payload,
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
