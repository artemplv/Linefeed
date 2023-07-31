import {
  SET_USER,
} from 'store/actionTypes/users';

const setUser = (user) => ({
  type: SET_USER,
  payload: user,
});

export default setUser;
