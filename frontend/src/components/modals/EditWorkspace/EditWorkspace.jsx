import React, {
  useState,
} from 'react';
import {
  useDispatch,
  useSelector,
} from 'react-redux';

import { closeModal } from 'store/actions/modal';

import Button from 'components/shared/Button';

function EditWorkspace() {
  const dispatch = useDispatch();

  const workspaceId = useSelector((state) => state.ui.modal.data.workspaceId);

  const [currentTab, setCurrentTab] = useState('main-info');

  const onCancel = () => {
    dispatch(closeModal());
  };

  return (
    <div className="edit-workspace-modal-content">
      <h1 className="modal-heading">
        Edit workspace
      </h1>

      <div className="buttons-row">
        <Button
          variant="secondary-default"
          onClick={onCancel}
        >
          Cancel
        </Button>
        <Button
          variant="success"
          type="submit"
          onClick={onCancel}
        >
          Ok
        </Button>
      </div>

    </div>
  );
}

export default EditWorkspace;
