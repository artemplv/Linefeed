import {
  SET_CURRENT_USER,
} from 'store/actionTypes/session';

const setCurrentUser = (user) => ({
  type: SET_CURRENT_USER,
  payload: user,
});

export default setCurrentUser;
