import React from 'react';

import { useNavigate } from 'react-router-dom';

import {
  useDispatch,
  useSelector,
} from 'react-redux';

import { closeModal } from 'store/actions/modal';
import { deleteWorkspace } from 'store/actions/workspaces';

import Button from 'components/shared/Button';

function DeleteWorkspace() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const modalData = useSelector((state) => state.ui.modal.data);

  const onCancel = () => {
    dispatch(closeModal());
  };

  const handleSubmit = async () => {
    await dispatch(deleteWorkspace(modalData.workspaceId));
    dispatch(closeModal());
    navigate('/workspaces');
  };

  return (
    <div className="delete-workspace-modal-content">
      <h1 className="modal-heading">
        Delete workspace
      </h1>

      <p>
        {`Delete ${modalData.workspaceName} workspace?`}
      </p>

      <div className="buttons-row">
        <Button
          variant="secondary-default"
          onClick={onCancel}
        >
          Cancel
        </Button>
        <Button
          variant="error"
          onClick={handleSubmit}
        >
          Delete
        </Button>
      </div>

    </div>
  );
}

export default DeleteWorkspace;
