import {
  OPEN_MODAL,
} from 'store/actionTypes/modal';

const openModal = (modal) => ({
  type: OPEN_MODAL,
  payload: modal,
});

export default openModal;
