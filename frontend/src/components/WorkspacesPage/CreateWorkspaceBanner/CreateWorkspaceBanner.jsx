import React from 'react';

import imageSrc from 'assets/images/woman-with-laptop.png';

import CreateWorkspaceButton from 'components/shared/CreateWorkspaceButton';

function CreateWorkspaceBanner() {
  return (
    <div className="create-workspace-banner">
      <div className="wrapper">
        <img src={imageSrc} alt="A woman with laptop" width={200} height={121} />
        <p>
          <strong>Want to use Linefeed with a different team?</strong>
        </p>

        <CreateWorkspaceButton />
      </div>
    </div>
  );
}

export default CreateWorkspaceBanner;
