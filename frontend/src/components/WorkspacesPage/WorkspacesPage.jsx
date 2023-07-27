import React from 'react';

import handImage from 'assets/images/waving-hand.gif';

import Header from 'components/shared/Header';
import WorkspacesList from './WorkspacesList';

function WorkspacesPage() {
  return (
    <>
      <Header />

      <main className="workspaces-page-main">
        <section className="hero hero-dark workspaces-hero">
          <div className="content-container">
            <h1 className="heading">
              <img src={handImage} alt="Waving hand" />
              <span>Welcome back</span>
            </h1>

            <WorkspacesList />
          </div>
        </section>
      </main>
    </>
  );
}

export default WorkspacesPage;
