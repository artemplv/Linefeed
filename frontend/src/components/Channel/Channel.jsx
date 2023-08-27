import React, {
  useEffect,
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
import {
  channelById,
} from 'store/selectors/channels';

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

  const currentUserId = useSelector((state) => state.session?.user?.id);
  const channel = useSelector((state) => channelById(state, channelId));

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
              dispatch(setMessage(message, { channelId }));

              if (message.authorId === currentUserId) {
                setTimeout(() => {
                  scrollToBottom();
                }, 50);
              }
              break;
            case 'DESTROY_MESSAGE':
              dispatch(removeMessage(id, { channelId }));
              break;
            default:
              break;
          }
        },
      },
    );

    const fetchMessages = async () => {
      await dispatch(getMessages({ channelId }));
      scrollToBottom();
    };

    fetchMessages();

    return () => {
      subscription?.unsubscribe();
    };
  }, [
    channelId,
  ]);

  const handleSend = async (text) => {
    messages.createMessage(workspaceId, { channelId })({ body: text });
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
          channelId={channelId}
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
