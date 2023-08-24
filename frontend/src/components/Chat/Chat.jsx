import React, {
  useRef,
} from 'react';
import {
  useParams,
} from 'react-router-dom';

import MessagePane from 'components/shared/MessagePane';
import MessagesContainer from './MessagesContainer';

function Chat(props) {
  const {
  } = props;

  const {
    chatId,
  } = useParams();

  const msgContainerRef = useRef(null);

  // const scrollToBottom = () => {
  //   msgContainerRef.current.scrollTo(0, msgContainerRef.current.scrollHeight);
  // };

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
          onSend={() => {}}
        />
      </div>
    </div>
  );
}

export default Chat;
