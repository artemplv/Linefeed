import {
  SET_USERS,
} from 'store/actionTypes/users';

const setUsers = (users) => ({
  type: SET_USERS,
  payload: users,
});

export default setUsers;
