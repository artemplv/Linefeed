import {
  SET_MESSAGE,
} from 'store/actionTypes/messages';

const setMessage = (message) => ({
  type: SET_MESSAGE,
  payload: message,
});

export default setMessage;
