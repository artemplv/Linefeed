import React from 'react';
import {
  useSelector,
} from 'react-redux';

// import {
//   channelMessages,
// } from 'store/selectors/channels';

import Message from 'components/shared/Message';
// import ChatInfo from '../ChatInfo';

function MessagesContainer(props) {
  const {
    chatId,
    msgContainerRef,
  } = props;

  // const messageIds = useSelector((state) => channelMessages(state, channelId));
  const messageIds = [];

  return (
    <div className="messages-container" ref={msgContainerRef}>
      {/* {<ChatInfo
        channelId={channelId}
      />} */}

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
