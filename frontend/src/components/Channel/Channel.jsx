import React from 'react';
import {
  useParams,
} from 'react-router-dom';
import {
  useSelector,
} from 'react-redux';

import MessagePane from 'components/shared/MessagePane';
import Heading from './Heading';
import MessagesContainer from './MessagesContainer';

function Channel() {
  const {
    channelId,
  } = useParams();

  const channel = useSelector((state) => state.channels.byId[channelId] || {});
  const channelName = channel.name || '';

  return (
    <div className="channel-page">
      <div className="channel-page-content">
        <Heading channel={channel} />

        <MessagesContainer channel={channel} />

        <MessagePane
          placeholder={`Message #${channelName}`}
          onSend={() => {}}
        />
      </div>
    </div>
  );
}

export default Channel;
