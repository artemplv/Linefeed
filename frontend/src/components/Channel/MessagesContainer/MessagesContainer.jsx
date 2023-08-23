import React from 'react';
import {
  useSelector,
} from 'react-redux';

import {
  channelMessages,
} from 'store/selectors/channels';

import Message from 'components/shared/Message';
import ChannelInfo from '../ChannelInfo';

function MessagesContainer(props) {
  const {
    channelId,
    msgContainerRef,
  } = props;

  const messageIds = useSelector((state) => channelMessages(state, channelId));

  return (
    <div className="messages-container" ref={msgContainerRef}>
      <ChannelInfo
        channelId={channelId}
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
