import React from 'react';

import ChannelInfo from '../ChannelInfo';

function MessagesContainer(props) {
  const {
    channel,
  } = props;

  return (
    <div className="messages-container">
      <ChannelInfo
        channel={channel}
      />
    </div>
  );
}

export default MessagesContainer;
