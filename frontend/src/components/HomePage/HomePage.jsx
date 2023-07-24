import React from 'react';

import Header from './Header';

function HomePage() {
  return (
    <>
      <Header />

      <main className="home-page-main">
        <section className="main-billboard">
          <h1>Homepage</h1>
        </section>
      </main>
    </>
  );
}

export default HomePage;
