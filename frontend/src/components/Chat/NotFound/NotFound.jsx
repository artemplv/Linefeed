import React from 'react';

import MessagePane from 'components/shared/MessagePane';
import Heading from '../Heading';

const noop = () => {};

function NotFound() {
  return (
    <div className="chat-not-found">
      <div className="chat-not-found-content">
        <Heading />

        <div>
          <h1 className="heading">
            404
          </h1>
          <p className="subheading">
            Not Found
          </p>
        </div>

        <MessagePane
          onSend={noop}
        />
      </div>
    </div>
  );
}

export default NotFound;
