import React from 'react';
import PropTypes from 'prop-types';

import {
  useSelector,
} from 'react-redux';

import {
  chatMessages,
} from 'store/selectors/chats';

import Message from 'components/shared/Message';
import ChatInfo from '../ChatInfo';

function MessagesContainer(props) {
  const {
    chatId,
    msgContainerRef,
  } = props;

  const messageIds = useSelector((state) => chatMessages(state, chatId));

  return (
    <div className="messages-container" ref={msgContainerRef}>
      <ChatInfo
        chatId={chatId}
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

MessagesContainer.propTypes = {
  chatId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  msgContainerRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]).isRequired,
};

export default MessagesContainer;
