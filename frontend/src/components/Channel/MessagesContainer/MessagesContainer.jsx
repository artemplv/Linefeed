import React from 'react';

import Message from 'components/shared/Message';
import ChannelInfo from '../ChannelInfo';

function MessagesContainer(props) {
  const {
    channel,
    messageIds,
    msgContainerRef,
  } = props;

  return (
    <div className="messages-container" ref={msgContainerRef}>
      <ChannelInfo
        channel={channel}
      />

      {
        messageIds.map((messageId) => (
          <Message
            key={messageId}
            messageId={messageId}
          />
        ))
      }
    </div>
  );
}

export default MessagesContainer;
