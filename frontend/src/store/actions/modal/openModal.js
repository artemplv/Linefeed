import {
  OPEN_MODAL,
} from 'store/actionTypes/modal';

const openModal = (modalName, modalData = null) => ({
  type: OPEN_MODAL,
  payload: {
    name: modalName,
    data: modalData,
  },
});

export default openModal;
