import React, {
  useEffect,
  useState,
  useRef,
} from 'react';
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
  removeMessage,
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
  const msgContainerRef = useRef(null);

  let channel = useSelector((state) => state.channels.byId[channelId]);
  channel = channel || {};

  const [messageIds, setMessageIds] = useState([]);

  const scrollToBottom = () => {
    msgContainerRef.current.scrollTo(0, msgContainerRef.current.scrollHeight);
  };

  useEffect(() => {
    const subscription = wsConsumer.subscriptions.create(
      { channel: 'ChannelsChannel', id: channelId },
      {
        received: ({ type, message, id }) => {
          switch (type) {
            case 'RECEIVE_MESSAGE':
              dispatch(setMessage(message));
              setMessageIds((ids) => [...ids, message.id]);
              break;
            case 'DESTROY_MESSAGE':
              dispatch(removeMessage(id));
              setMessageIds((ids) => ids.filter((messageId) => messageId !== id));
              break;
            default:
              break;
          }
        },
      },
    );

    const fetchMessages = async () => {
      await dispatch(getMessages(workspaceId, channelId));
      scrollToBottom();
    };

    fetchMessages();

    return () => {
      subscription?.unsubscribe();
    };
  }, [
    channelId,
  ]);

  useEffect(() => {
    if (channel.id) {
      setMessageIds(channel.messages);
    } else {
      setMessageIds([]);
    }
  }, [
    channel.id,
  ]);

  // useEffect(() => {
  //   msgContainerRef.current.scrollTo({ top: 0 });
  // });

  const handleSend = async (text) => {
    await messages.createMessage(workspaceId, channelId)({ body: text });
    scrollToBottom();
  };

  const channelName = channel.name || '';

  return (
    <div className="channel-page">
      <div className="channel-page-content">
        <Heading
          channel={channel}
          workspaceId={workspaceId}
        />

        <MessagesContainer
          channel={channel}
          messageIds={messageIds || []}
          msgContainerRef={msgContainerRef}
        />

        <MessagePane
          placeholder={`Message #${channelName}`}
          onSend={handleSend}
        />
      </div>
    </div>
  );
}

export default Channel;
