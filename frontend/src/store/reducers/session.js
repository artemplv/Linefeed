import {
  SET_CURRENT_USER,
  REMOVE_CURRENT_USER,
  LOGOUT_USER,
} from 'store/actionTypes/session';

const initialState = {
  user: JSON.parse(sessionStorage.getItem('currentUser')),
};

const sessionReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        user: action.payload,
      };
    case REMOVE_CURRENT_USER:
      return {
        ...state,
        user: null,
      };
    case LOGOUT_USER:
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
};

export default sessionReducer;
