import React from 'react';
import { Link } from 'react-router-dom';

import imageSrc from 'assets/images/woman-with-laptop.png';

function CreateWorkspaceBanner() {
  return (
    <div className="create-workspace-banner">
      <div className="wrapper">
        <img src={imageSrc} alt="A woman with laptop" width={200} height={121} />
        <p>
          <strong>Want to use Slack with a different team?</strong>
        </p>
        <Link
          className="button light uppercase"
          to="/workspaces/new"
        >
          Create a new workspace
        </Link>
      </div>
    </div>
  );
}

export default CreateWorkspaceBanner;
