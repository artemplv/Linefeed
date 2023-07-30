import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { createWorkspace } from 'store/actions/workspaces';

import Button from 'components/shared/Button';

function CreateWorkspaceButton() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = await dispatch(createWorkspace());
    navigate(`/workspaces/${data.workspace.id}/new`);
  };

  return (
    <form
      className="w-auto"
      onSubmit={handleSubmit}
    >
      <Button
        variant="light"
        type="submit"
        className="uppercase no-margin"
        onClick={handleSubmit}
      >
        Create a new workspace
      </Button>
    </form>
  );
}

export default CreateWorkspaceButton;
