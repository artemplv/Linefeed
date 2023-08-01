import React from 'react';

import Message from 'components/shared/Message';
import ChannelInfo from '../ChannelInfo';

function MessagesContainer(props) {
  const {
    channel,
    messageIds,
  } = props;

  return (
    <div className="messages-container">
      {
        messageIds.toReversed().map((messageId) => (
          <Message
            key={messageId}
            messageId={messageId}
          />
        ))
      }

      <ChannelInfo
        channel={channel}
      />
    </div>
  );
}

export default MessagesContainer;
