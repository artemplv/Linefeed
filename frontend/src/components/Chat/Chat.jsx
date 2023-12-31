import React, {
  useEffect,
  useRef,
} from 'react';

import { useParams } from 'react-router-dom';

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

import { chatById } from 'store/selectors/chats';
import { userById } from 'store/selectors/users';

import MessagePane from 'components/shared/MessagePane';
import MessagesContainer from './MessagesContainer';
import Heading from './Heading';

function Chat() {
  const {
    chatId,
    workspaceId,
  } = useParams();

  const dispatch = useDispatch();

  const msgContainerRef = useRef(null);
  const currentUserId = useSelector((state) => state.session?.user?.id);

  const chat = useSelector((state) => chatById(state, chatId));
  const interlocutor = useSelector((state) => userById(state, chat.interlocutorId));

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

  const placeholder = interlocutor.id === currentUserId
    ? 'Jot something down' : `Message ${interlocutor.fullName}`;

  return (
    <div className="chat-page">
      <div className="chat-page-content">
        <Heading chatId={chatId} />

        <MessagesContainer
          chatId={chatId}
          msgContainerRef={msgContainerRef}
        />

        <MessagePane
          placeholder={placeholder}
          onSend={handleSend}
        />
      </div>
    </div>
  );
}

export default Chat;
