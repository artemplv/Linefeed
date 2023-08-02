import {
  OPEN_MODAL,
  CLOSE_MODAL,
} from 'store/actionTypes/modal';

const defaultState = {
  name: null,
  data: null,
};

const modalReducer = (state = defaultState, action) => {
  switch (action.type) {
    case OPEN_MODAL:
      return {
        name: action.payload.name,
        data: action.payload.data,
      };
    case CLOSE_MODAL:
      return defaultState;
    default:
      return state;
  }
};

export default modalReducer;
