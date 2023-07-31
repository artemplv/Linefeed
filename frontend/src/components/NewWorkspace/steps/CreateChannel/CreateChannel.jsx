import React, {
  useState,
} from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import {
  useNavigate,
} from 'react-router-dom';

import { createWorkspaceChannel } from 'store/actions/channels';

import Button from 'components/shared/Button';
import TextInput from 'components/shared/TextInput';

function CreateChannel(props) {
  const {
    workspaceId,
  } = props;

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

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!validateInput()) {
      return;
    }

    await dispatch(createWorkspaceChannel(workspaceId)({
      name: inputValue,
    }));
    navigate(`/workspaces/${workspaceId}`);
  };

  return (
    <>
      <h2 className="heading">
        What&apos;s your team working on right now?
      </h2>
      <p>
        This could be anything: a project, campaign, event, or the deal you&apos;re trying to close.
      </p>

      <form onSubmit={handleSubmit}>
        <TextInput
          value={inputValue}
          onChange={handleChange}
          onBlur={validateInput}
          placeholder="Ex: Q4 budget, autumn campaign"
          error={inputError}
        />

        <Button
          variant="dark"
          type="submit"
          onClick={handleSubmit}
          disabled={!inputValue}
        >
          Next
        </Button>
      </form>
    </>
  );
}

CreateChannel.propTypes = {
  workspaceId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default CreateChannel;
