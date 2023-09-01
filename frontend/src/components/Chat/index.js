import React from 'react';

import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { chatById } from 'store/selectors/chats';

import Chat from './Chat';
import NotFound from './NotFound';

import './styles.scss';

function ChatWrapper() {
  const {
    chatId,
  } = useParams();

  const chat = useSelector((state) => chatById(state, chatId));

  if (!chat.id) {
    return (
      // eslint-disable-next-line react/jsx-filename-extension
      <NotFound />
    );
  }

  return (
    <Chat />
  );
}

export default ChatWrapper;
