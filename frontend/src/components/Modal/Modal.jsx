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
import CreateChannel from 'components/Channel/modals/CreateChannel';
import DeleteMessage from 'components/modals/DeleteMessage';
import DeleteChat from 'components/modals/DeleteChat';

function Modal() {
  const dispatch = useDispatch();
  const modalName = useSelector((state) => state.ui.modal.name);

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
    case 'create-channel':
      component = <CreateChannel />;
      break;
    case 'delete-message':
      component = <DeleteMessage />;
      break;
    case 'delete-chat':
      component = <DeleteChat />;
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
