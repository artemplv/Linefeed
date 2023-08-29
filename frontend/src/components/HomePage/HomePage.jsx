import React from 'react';
import { Link } from 'react-router-dom';

import Header from 'components/shared/Header';
import Footer from 'components/shared/Footer';

function HomePage() {
  return (
    <>
      <Header />

      <main className="home-page-main">
        <section className="hero main-hero">
          <div className="hero-content">
            <div className="hero-illustration">
              {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
              <video
                title="Team discussing work in the app"
                loop
                muted
                autoPlay
                // eslint-disable-next-line max-len
                poster="https://a.slack-edge.com/2951054/marketing/img/homepage/e2e-prospects/animations/static/hero-product-ui.jpg"
              >
                <source
                  // eslint-disable-next-line max-len
                  src="https://a.slack-edge.com/9689dea/marketing/img/homepage/e2e-prospects/animations/mp4/hero-product-ui.mp4"
                  type="video/mp4"
                />
              </video>
            </div>

            <div className="hero-header">
              <h1 className="heading">
                Made for people.
                <br />
                <span className="heading-emphasize">Built for productivity.</span>
              </h1>

              <p className="hero-header-text">
                Connect the right people, find anything you need and automate the rest.
                That&apos;s work in Linefeed, your productivity platform.
              </p>

              <Link
                className="button light uppercase signup-button"
                to="/signup"
              >
                Sign up with email
              </Link>
            </div>
          </div>
        </section>

        <section className="pre-footer">
          <div className="home-content-container">
            <h3 className="heading">
              See all you can accomplish with Linefeed
            </h3>

            <div className="flex-row gap-05 justify-center">
              <Link
                className="button light uppercase"
                to="/signup"
              >
                Sign Up
              </Link>

              <Link
                className="button secondary uppercase"
                to="/signin"
              >
                Sign In
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default HomePage;
