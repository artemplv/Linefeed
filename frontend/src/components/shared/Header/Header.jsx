import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import logo from 'assets/images/slack-logo-full-light.svg';

import { PERSONAL_LINKS_LIST } from 'constants';

import LogoutButton from 'components/LogoutButton';
import CreateWorkspaceButton from 'components/shared/CreateWorkspaceButton';

function Header() {
  const isAuth = useSelector((state) => !!state.session.user);

  return (
    <header>
      <nav className="main-nav">
        <div className="main-nav-content-container">
          <div className="logo-container">
            <Link to="/">
              <img src={logo} width={100} alt="logo" />
            </Link>
          </div>

          <nav className="nav-list">
            <ul>
              {
                PERSONAL_LINKS_LIST.map((item) => (
                  <li key={item.id}>
                    <a
                      className="link light"
                      href={item.url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {item.text}
                    </a>
                  </li>
                ))
              }
            </ul>
            <div className="auth-links">
              {
                isAuth ? (
                  <>
                    <LogoutButton />
                    <CreateWorkspaceButton />
                  </>
                ) : (
                  <>
                    <Link
                      className="link light bold nowrap"
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
                  </>
                )
              }
            </div>
          </nav>
        </div>
      </nav>
    </header>
  );
}

export default Header;
