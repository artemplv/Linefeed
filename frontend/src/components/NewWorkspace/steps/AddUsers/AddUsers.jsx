import React from 'react';

function AddUsers(props) {
  const {
    onNextStep,
  } = props;

  return (
    <>
      <h1>Who else is on the team?</h1>

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

export default AddUsers;
