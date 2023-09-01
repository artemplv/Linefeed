import React from 'react';
import { Link } from 'react-router-dom';

import Header from 'components/shared/Header';
import Footer from 'components/shared/Footer';

function NotFoundPage() {
  return (
    <>
      <Header variant="dark" />

      <main className="not-found-page-main">
        <section className="hero hero-dark">
          <h1 className="heading">
            404
          </h1>
          <p className="subheading">
            Not Found
          </p>
          <Link
            to="/workspaces"
            replace
          >
            Back
          </Link>
        </section>

        <section className="pre-footer" />
      </main>

      <Footer />
    </>
  );
}

export default NotFoundPage;
