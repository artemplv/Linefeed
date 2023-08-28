import React, {
  useState,
} from 'react';
import {
  useDispatch,
} from 'react-redux';

import { useParams } from 'react-router-dom';

import { closeModal } from 'store/actions/modal';
import { updateWorkspace } from 'store/actions/workspaces';

import { validate } from 'utils';

import Button from 'components/shared/Button';
import TextInput from 'components/shared/TextInput';
import Chip from 'components/shared/Chip';

function AddWorkspaceUsers() {
  const {
    workspaceId,
  } = useParams();

  const dispatch = useDispatch();

  const [inputValue, setInputValue] = useState('');
  const [inputError, setInputError] = useState(null);
  const [usersToAdd, setUsersToAdd] = useState([]);

  const onCancel = () => {
    dispatch(closeModal());
  };

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
    if (!validate.email(inputValue)) {
      setInputError('Email is invalid format');
      return false;
    }
    setInputError(null);
    return true;
  };

  const handleAddUser = () => {
    if (!validateInput()) {
      return;
    }

    setUsersToAdd((users) => [...users, inputValue]);
    setInputValue('');
  };

  const handleSubmit = async () => {
    if (usersToAdd.length > 0) {
      await dispatch(updateWorkspace(workspaceId)({
        users: usersToAdd,
      }));
    }

    dispatch(closeModal());
  };

  return (
    <div className="add-users-modal-content">
      <h1 className="modal-heading">
        Add users to the workspace
      </h1>

      <div className="flex-row gap-1">
        <TextInput
          className="no-margin"
          value={inputValue}
          onChange={handleChange}
          onBlur={validateInput}
          placeholder="name@work-email.com"
          error={inputError}
        />
        <Button
          variant="light"
          className="no-margin add-user-button"
          onClick={handleAddUser}
        >
          Add
        </Button>
      </div>

      <ul className="users-to-add-list">
        {
          usersToAdd.map((userEmail) => (
            <li key={userEmail}>
              <Chip>
                {userEmail}
              </Chip>
            </li>
          ))
        }
      </ul>

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
          onClick={handleSubmit}
        >
          Save
        </Button>
      </div>

    </div>
  );
}

export default AddWorkspaceUsers;
