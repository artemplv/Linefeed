import {
  REMOVE_CURRENT_USER,
} from 'store/actionTypes/session';

const removeCurrentUser = () => ({
  type: REMOVE_CURRENT_USER,
});

export default removeCurrentUser;
