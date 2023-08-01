import React, {
  useState,
} from 'react';
import {
  useParams,
  useNavigate,
} from 'react-router-dom';
import {
  useDispatch,
} from 'react-redux';

import { closeModal } from 'store/actions/modal';
import { createWorkspaceChannel } from 'store/actions/channels';

import Button from 'components/shared/Button';
import TextInput from 'components/shared/TextInput';

function EditDescription() {
  const {
    workspaceId,
  } = useParams();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [inputValue, setInputValue] = useState('');
  const [inputError, setInputError] = useState(null);

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

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!validateInput()) {
      return;
    }

    const { channel } = await dispatch(createWorkspaceChannel(workspaceId)({
      name: inputValue,
    }));
    dispatch(closeModal());
    navigate(`/workspaces/${workspaceId}/channels/${channel?.id}`);
  };

  return (
    <div className="create-channel-modal-content">
      <h1 className="modal-heading">
        Create channel
      </h1>

      <form onSubmit={handleSubmit}>
        <TextInput
          value={inputValue}
          onChange={handleChange}
          onBlur={validateInput}
          placeholder="Ex: Q4 budget, autumn campaign"
          error={inputError}
        />

        <span className="modal-description">
          This could be anything: a project, campaign, event, or the deal you&apos;re trying to close.
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

export default EditDescription;
