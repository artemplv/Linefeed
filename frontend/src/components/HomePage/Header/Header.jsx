import React from 'react';
import { Link } from 'react-router-dom';

import logo from 'assets/images/slack-logo-full-light.svg';

const linksList = [
  {
    id: 'github',
    url: 'https://github.com/artemplv/slack-clone',
    text: 'GitHub',
  },
  {
    id: 'linkedin',
    url: 'https://linkedin.com/in/artemplv/',
    text: 'LinkedIn',
  },
];

function Header() {
  return (
    <header>
      <nav className="main-nav">
        <div className="content-container">
          <div className="logo-container">
            <Link to="/">
              <img src={logo} width={100} alt="logo" />
            </Link>
          </div>

          <nav className="nav-list">
            <ul>
              {
                linksList.map((item) => (
                  <li key={item.id}>
                    <Link
                      className="light"
                      to={{ pathname: item.url }}
                      target="_blank"
                    >
                      {item.text}
                    </Link>
                  </li>
                ))
              }
            </ul>
            <div className="auth-links">
              <Link
                className="light bold nowrap"
                to="/signin"
              >
                Sign In
              </Link>

              <Link
                className="button light uppercase"
                to="/signup"
              >
                Try for free
              </Link>
            </div>
          </nav>
        </div>
      </nav>
    </header>
  );
}

export default Header;
