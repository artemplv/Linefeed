import React from 'react';
import PropTypes from 'prop-types';

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

MessagesContainer.propTypes = {
  channelId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  msgContainerRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]).isRequired,
};

export default MessagesContainer;
