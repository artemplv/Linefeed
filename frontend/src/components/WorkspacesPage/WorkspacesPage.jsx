import React from 'react';
import { Link } from 'react-router-dom';

import handImage from 'assets/images/waving-hand.gif';

import Header from 'components/shared/Header';
import WorkspacesList from './WorkspacesList';
import CreateWorkspaceBanner from './CreateWorkspaceBanner';

function WorkspacesPage() {
  return (
    <>
      <Header variant="dark" />

      <main className="workspaces-page-main">
        <section className="hero hero-dark workspaces-hero">
          <div className="content-container">
            <h1 className="heading">
              <img src={handImage} alt="Waving hand" />
              <span>Welcome back</span>
            </h1>

            <WorkspacesList />

            <CreateWorkspaceBanner />

            <div className="signin">
              <p>
                Not seeing your workspace?
              </p>
              <Link
                className="link"
                to="/signin"
              >
                Try using a different email
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default WorkspacesPage;
