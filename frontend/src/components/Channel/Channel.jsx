import React, { useEffect } from 'react';
import {
  useParams,
} from 'react-router-dom';
import {
  useSelector,
  useDispatch,
} from 'react-redux';

import {
  wsConsumer,
  messages,
} from 'api';
import {
  getMessages,
  setMessage,
} from 'store/actions/messages';

import MessagePane from 'components/shared/MessagePane';
import Heading from './Heading';
import MessagesContainer from './MessagesContainer';

function Channel() {
  const {
    channelId,
    workspaceId,
  } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    const subscription = wsConsumer.subscriptions.create(
      { channel: 'ChannelsChannel', id: channelId },
      {
        received: (data) => {
          dispatch(setMessage(data.message));
        },
      },
    );

    dispatch(getMessages(workspaceId, channelId));

    return () => {
      subscription?.unsubscribe();
    };
  }, [
    channelId,
  ]);

  const handleSend = (text) => {
    messages.createMessage(workspaceId, channelId)({ body: text });
  };

  const channel = useSelector((state) => state.channels.byId[channelId] || {});
  const channelName = channel.name || '';

  return (
    <div className="channel-page">
      <div className="channel-page-content">
        <Heading channel={channel} />

        <MessagesContainer channel={channel} />

        <MessagePane
          placeholder={`Message #${channelName}`}
          onSend={handleSend}
        />
      </div>
    </div>
  );
}

export default Channel;
