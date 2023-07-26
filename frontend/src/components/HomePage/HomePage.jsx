import React from 'react';

import Header from 'components/shared/Header';

function HomePage() {
  return (
    <>
      <Header />

      <main className="home-page-main">
        <section className="hero main-hero">
          <h1>Homepage</h1>
        </section>
      </main>
    </>
  );
}

export default HomePage;
