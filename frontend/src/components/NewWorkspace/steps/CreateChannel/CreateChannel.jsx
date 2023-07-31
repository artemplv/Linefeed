import React from 'react';
import {
  useNavigate,
} from 'react-router-dom';

function CreateChannel(props) {
  const {
    workspaceId,
  } = props;

  const navigate = useNavigate();

  return (
    <>
      <h1>What&apos;s your team working on right now?</h1>
      <p>This could be anything: a project, campaign, event, or the deal you&apos;re trying to close.</p>

      <br />
      <br />

      <button
        className="button primary"
        type="button"
        onClick={() => { navigate(`/workspaces/${workspaceId}`); }}
        style={{ width: 120 }}
      >
        Next
      </button>
    </>
  );
}

export default CreateChannel;
