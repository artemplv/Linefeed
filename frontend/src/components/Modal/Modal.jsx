/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import {
  useSelector,
  useDispatch,
} from 'react-redux';

import { closeModal } from 'store/actions/modal';

import EditChannelDescription from 'components/Channel/modals/EditDescription';
import DeleteChannel from 'components/Channel/modals/DeleteChannel';

function Modal() {
  const dispatch = useDispatch();
  const modalName = useSelector((state) => state.ui.modal);

  const handleClose = () => {
    dispatch(closeModal());
  };

  if (!modalName) {
    return null;
  }

  let component;
  switch (modalName) {
    case 'edit-channel-description':
      component = <EditChannelDescription />;
      break;
    case 'delete-channel':
      component = <DeleteChannel />;
      break;
    default:
      return null;
  }

  return (
    <div
      className="modal-background"
      onClick={handleClose}
    >
      <div
        className="modal-child"
        onClick={(e) => e.stopPropagation()}
      >
        { component }
      </div>
    </div>
  );
}

export default Modal;
