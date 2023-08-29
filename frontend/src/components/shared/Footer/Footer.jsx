import React from 'react';

import { PERSONAL_LINKS_LIST } from 'constants';

import LogoLink from 'components/shared/LogoLink';

function Footer() {
  return (
    <footer className="main-footer">
      <div className="logo-links-row">
        <LogoLink variant="dark" />

        <nav className="nav-list">
          <ul>
            {
              PERSONAL_LINKS_LIST.map((item) => (
                <li key={item.id}>
                  <a
                    className="link"
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
        </nav>
      </div>

      <div className="attribution-row">
        <span>@artemplv</span>
      </div>
    </footer>
  );
}

export default Footer;
