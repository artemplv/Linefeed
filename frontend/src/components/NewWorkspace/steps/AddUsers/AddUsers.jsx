import React, {
  useState,
} from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { updateWorkspace } from 'store/actions/workspaces';
import { validate } from 'utils';

import Button from 'components/shared/Button';
import TextInput from 'components/shared/TextInput';
import Chip from 'components/shared/Chip';

function AddUsers(props) {
  const {
    workspaceId,
    onNextStep,
  } = props;

  const dispatch = useDispatch();

  const [inputValue, setInputValue] = useState('');
  const [inputError, setInputError] = useState(null);
  const [usersToAdd, setUsersToAdd] = useState([]);

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

  const handleSubmit = (event) => {
    event.preventDefault();

    if (usersToAdd.length > 0) {
      dispatch(updateWorkspace(workspaceId)({
        users: usersToAdd,
      }));
    }

    onNextStep();
  };

  const handleSkip = () => {
    onNextStep();
  };

  return (
    <div className="workspace-create-add-users">
      <h2 className="heading">
        Who else is on the team?
      </h2>

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

      <div className="flex-row gap-1">
        <form
          className="w-auto"
          onSubmit={handleSubmit}
        >
          <Button
            variant="dark"
            type="submit"
            onClick={handleSubmit}
          >
            Next
          </Button>
        </form>
        <Button
          variant="secondary"
          onClick={handleSkip}
          className="add-users-skip-button w-auto"
        >
          Skip
        </Button>
      </div>
    </div>
  );
}

AddUsers.propTypes = {
  workspaceId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onNextStep: PropTypes.func.isRequired,
};

export default AddUsers;
