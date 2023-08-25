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

import MessagePane from 'components/shared/MessagePane';
import MessagesContainer from './MessagesContainer';

function Chat() {
  const {
    chatId,
    workspaceId,
  } = useParams();

  const dispatch = useDispatch();

  const msgContainerRef = useRef(null);
  const currentUserId = useSelector((state) => state.session?.user?.id);

  const scrollToBottom = () => {
    msgContainerRef.current.scrollTo(0, msgContainerRef.current.scrollHeight);
  };

  useEffect(() => {
    const subscription = wsConsumer.subscriptions.create(
      { channel: 'ChatsChannel', id: chatId },
      {
        received: ({ type, message, id }) => {
          switch (type) {
            case 'RECEIVE_MESSAGE':
              dispatch(setMessage(message, { chatId }));

              if (message.authorId === currentUserId) {
                setTimeout(() => {
                  scrollToBottom();
                }, 50);
              }
              break;
            case 'DESTROY_MESSAGE':
              dispatch(removeMessage(id, { chatId }));
              break;
            default:
              break;
          }
        },
      },
    );

    const fetchMessages = async () => {
      await dispatch(getMessages({ chatId }));
      scrollToBottom();
    };

    fetchMessages();

    return () => {
      subscription?.unsubscribe();
    };
  }, [
    chatId,
  ]);

  const handleSend = async (text) => {
    messages.createMessage(workspaceId, { chatId })({ body: text });
  };

  return (
    <div className="chat-page">
      <div className="chat-page-content">
        <h1>Hello from chat</h1>

        <MessagesContainer
          chatId={chatId}
          msgContainerRef={msgContainerRef}
        />

        <MessagePane
          placeholder={`Message ${chatId}`}
          onSend={handleSend}
        />
      </div>
    </div>
  );
}

export default Chat;
