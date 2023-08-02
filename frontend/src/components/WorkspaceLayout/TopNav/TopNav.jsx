import React from 'react';

import { PERSONAL_LINKS_LIST } from 'constants';

import User from './User';

function TopNav() {
  return (
    <div role="toolbar" className="workspace-top-nav">
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
      </nav>

      <User />
    </div>
  );
}

export default TopNav;
