import React from 'react';

import LogoutButton from 'components/LogoutButton';

import Header from './Header';

function HomePage() {
  return (
    <>
      <Header />

      <main className="home-page-main">
        <h1>Homepage</h1>
        <LogoutButton />
      </main>
    </>
  );
}

export default HomePage;
