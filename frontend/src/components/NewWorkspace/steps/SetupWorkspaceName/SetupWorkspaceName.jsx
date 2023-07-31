import React, {
  useState,
} from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { updateWorkspace } from 'store/actions/workspaces';

import Button from 'components/shared/Button';
import TextInput from 'components/shared/TextInput';

function SetupWorkspaceName(props) {
  const {
    workspaceId,
    onNextStep,
  } = props;

  const dispatch = useDispatch();

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

    await dispatch(updateWorkspace(workspaceId)({
      name: inputValue,
    }));
    onNextStep();
  };

  return (
    <>
      <h2 className="heading">
        What&apos;s the name of your company or team?
      </h2>
      <p className="subheading">
        This will be the name of your workspace — choose something that your team will recognize.
      </p>

      <form onSubmit={handleSubmit}>
        <TextInput
          value={inputValue}
          onChange={handleChange}
          onBlur={validateInput}
          placeholder="Ex: Acme Marketing or Acme Co"
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

SetupWorkspaceName.propTypes = {
  workspaceId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onNextStep: PropTypes.func.isRequired,
};

export default SetupWorkspaceName;
