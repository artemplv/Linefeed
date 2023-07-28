import React from 'react';

function SetupWorkspaceName(props) {
  const {
    onNextStep,
  } = props;

  return (
    <>
      <h1>What&apos;s the name of your company or team?</h1>
      <p>This will be the name of your workspace — choose something that your team will recognize.</p>

      <br />
      <br />

      <button
        className="button primary"
        type="button"
        onClick={onNextStep}
        style={{ width: 120 }}
      >
        Next
      </button>
    </>
  );
}

export default SetupWorkspaceName;
