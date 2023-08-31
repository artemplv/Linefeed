import React, {
  useState,
  useEffect,
} from 'react';
import {
  useDispatch,
  useSelector,
} from 'react-redux';

import { updateWorkspace } from 'store/actions/workspaces';
import { closeModal } from 'store/actions/modal';

import { workspaceById } from 'store/selectors/workspaces';

import Button from 'components/shared/Button';
import TextInput from 'components/shared/TextInput';

function EditWorkspace() {
  const dispatch = useDispatch();

  const workspaceId = useSelector((state) => state.ui.modal.data.workspaceId);
  const workspace = useSelector((state) => workspaceById(state, workspaceId));

  const [inputValue, setInputValue] = useState(workspace.name || '');
  const [inputError, setInputError] = useState(null);

  useEffect(() => {
    if (workspace.name) {
      setInputValue(workspace.name);
    }
  }, [workspace.name]);

  const handleChange = (event) => {
    if (inputError) {
      setInputError(null);
    }
    setInputValue(event.target.value);
  };

  const validateInput = () => {
    if (!inputValue.trim()) {
      setInputError('This field is required');
      return false;
    }
    setInputError(null);
    return true;
  };

  const onCancel = () => {
    dispatch(closeModal());
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!validateInput()) {
      return;
    }

    dispatch(updateWorkspace(workspaceId)({
      name: inputValue,
    }));
    dispatch(closeModal());
  };

  return (
    <div className="edit-workspace-modal-content">
      <h1 className="modal-heading">
        Edit workspace name
      </h1>

      <form onSubmit={handleSubmit}>
        <TextInput
          value={inputValue}
          onChange={handleChange}
          onBlur={validateInput}
          placeholder="Ex: Acme Marketing or Acme Co"
          error={inputError}
        />

        <span className="modal-description">
          This is the name of your workspace.
        </span>

        <div className="buttons-row">
          <Button
            variant="secondary-default"
            onClick={onCancel}
          >
            Cancel
          </Button>
          <Button
            variant="success"
            onClick={handleSubmit}
          >
            Save
          </Button>
        </div>
      </form>
    </div>
  );
}

export default EditWorkspace;
